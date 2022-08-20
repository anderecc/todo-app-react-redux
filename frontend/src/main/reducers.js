import { combineReducers } from 'redux';
import tarefaReducer from './tarefaReducer';

const rootReducer = combineReducers({
    tarefa: tarefaReducer,
});

export default rootReducer;
