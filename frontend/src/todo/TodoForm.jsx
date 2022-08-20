import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

import {
    changeDescription,
    search,
    adicionar,
    limparInput,
} from '../main/actions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.search();
    }

    render() {
        return (
            <div role={'form'} className="todoForm">
                <Grid cols="12 9 10">
                    <input
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                    />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={() =>
                            this.props.adicionar(this.props.description)
                        }
                    />
                    <IconButton
                        style="info"
                        icon="search"
                        onClick={() =>
                            this.props.search(this.props.description)
                        }
                    />
                    <IconButton
                        style="default"
                        icon="close"
                        onClick={() => this.props.limparInput()}
                    />
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        description: state.tarefa.description,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { changeDescription, search, adicionar, limparInput },
        dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
