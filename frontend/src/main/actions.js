import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export function changeDescription(event) {
    return {
        type: 'CHANGED_DESCRIPTION',
        payload: event.target.value,
    };
}

export function search() {
    return (dispatch, getState) => {
        const description = getState().tarefa.description;
        const busca = description ? `&description__regex=/${description}/` : '';
        axios
            .get(`${URL}?sort=-createdAt${busca}`)
            .then((resp) =>
                dispatch({ type: 'LIST_TAREFAS', payload: resp.data })
            );
    };
}

export function adicionar(description) {
    return (dispatch) => {
        axios
            .post(URL, { description })
            .then((resp) => dispatch(limparInput()))
            .then((resp) => dispatch(search()));
    };
}

export function markAsDone(tarefa) {
    return (dispatch) => {
        axios
            .put(`${URL}/${tarefa._id}`, { ...tarefa, done: true })
            .then((resp) => dispatch(search()));
    };
}
export function markAsPending(tarefa) {
    return (dispatch) => {
        axios
            .put(`${URL}/${tarefa._id}`, { ...tarefa, done: false })
            .then((resp) => dispatch(search()));
    };
}
export function apagarTarefa(tarefa) {
    return (dispatch) => {
        axios
            .delete(`${URL}/${tarefa._id}`)
            .then((resp) =>
                dispatch({ type: 'TAREFA_APAGADA', payload: resp.data })
            )
            .then((resp) => dispatch(search()));
    };
}

export function limparInput() {
    return [{ type: 'LIMPAR_INPUT', payload: '' }, search()];
}
