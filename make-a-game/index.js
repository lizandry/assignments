import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';

import './index.css';


class Root extends React.Component {
    render() {
        return ( < App / > );
    }
}

ReactDOM.render( <
    Root / > ,
    document.getElementById('root')
);