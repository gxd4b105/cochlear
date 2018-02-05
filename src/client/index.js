import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../shared/app/redux/store';
import App from '../shared/app/app.jsx';

/* Logos */
require('../images/logo_desktop.png');
require('../images/logo_mobile.png');
require('../images/logo_white.png');

/* Icons */
require('../images/Icon_Facebook@2x.png');
require('../images/Icon_Google_@2x.png');
require('../images/Icon_Twitter@2x.png');

require('../images/Social_White_Facebook@2x.png');
require('../images/Social_White_Google@2x.png');
require('../images/Social_White_Twitter@2x.png');
require('../images/Social_White_Youtube@2x.png');

require('../images/Icon_White_Chevron@2x.png');
require('../images/Icon_Yellow_Chevron@2x.png');
require('../images/Icon_Purple_Chevron@2x.png');
require('../images/Icon_Purple_Search@2x.png');
require('../images/Icon_Purple_Arrow@2x.png');


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
