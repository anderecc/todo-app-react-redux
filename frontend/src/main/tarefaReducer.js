const INITIAL_STATE = {
    description: '',
    list: [],
};

export default function tarefaReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGED_DESCRIPTION':
            return { ...state, description: action.payload };
        case 'LIST_TAREFAS':
            return { ...state, list: action.payload };
        case 'LIMPAR_INPUT':
            return { ...state, description: action.payload };

        default:
            return state;
    }
}
