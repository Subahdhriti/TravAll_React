//import './utils.js'
import React from 'react';
import ReactDOM from 'react-dom';


import './firebase/firebase';


import AppRouter from './routers/AppRouter';


import './styles/styles.scss';
import 'normalize.css/normalize.css';


ReactDOM.render(<AppRouter/>, document.getElementById('app'));
