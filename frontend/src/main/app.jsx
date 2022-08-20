import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import '../template/custom.css';

import React from 'react';
import About from '../about/About';
import Menu from '../template/Menu';
import Todo from '../todo/Todo';
import Routes from './Routes';

export default function App() {
    return (
        <div>
            <Menu />
            <Routes />
        </div>
    );
}
