import React from 'react';
import IconButton from '../template/IconButton';
import Todo from './Todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markAsDone, markAsPending, apagarTarefa } from '../main/actions';

function TodoList(props) {
    const tarefas = props.list || [];
    function renderRows() {
        return tarefas.map((tarefa) => (
            <tr key={tarefa._id}>
                <td className={tarefa.done == true ? 'markedAsDone' : ''}>
                    {tarefa.description}
                </td>
                <td>
                    <IconButton
                        style="success"
                        icon="check"
                        onClick={() => props.markAsDone(tarefa)}
                        hide={tarefa.done}
                    />
                    <IconButton
                        style="warning"
                        icon="undo"
                        onClick={() => props.markAsPending(tarefa)}
                        hide={!tarefa.done}
                    />
                    <IconButton
                        style="danger"
                        icon={'trash-o'}
                        onClick={() => props.apagarTarefa(tarefa)}
                    />
                </td>
            </tr>
        ));
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
        </table>
    );
}

function mapStateToProps(state) {
    return { list: state.tarefa.list };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { markAsDone, markAsPending, apagarTarefa },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
