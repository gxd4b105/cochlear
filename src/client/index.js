import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../shared/app/redux/store';
import App from '../shared/app/app.jsx';

function importAll (r) {
    r.keys().forEach(r);
  }

importAll(require.context('../images/', true, /\.(png|svg|jpg)$/));

/* Styles */
require('../styles/global.scss');
require('../fonts/fonts.scss');


hydrate((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
