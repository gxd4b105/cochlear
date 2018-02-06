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

require('../images/Icon_Facebook.svg');
require('../images/Icon_Google_.svg');
require('../images/Icon_Twitter.svg');

require('../images/Social_White_Facebook.svg');
require('../images/Social_White_Google.svg');
require('../images/Social_White_Twitter.svg');

require('../images/Icon_White_Chevron.svg');
require('../images/Icon_Yellow_Chevron.svg');
require('../images/Icon_Purple_Chevron.svg');
require('../images/Icon_Grey_Chevron.svg');

require('../images/Icon_White_Search.svg');
require('../images/Icon_Yellow_Search.svg');
require('../images/Icon_Purple_Search.svg');
require('../images/Icon_Grey_Search.svg');

require('../images/Icon_White_Arrow.svg');
require('../images/Icon_Yellow_Arrow.svg');
require('../images/Icon_Purple_Arrow.svg');
require('../images/Icon_Grey_Arrow.svg');

require('../images/Icon_White_Download.svg');
require('../images/Icon_Purple_Download.svg');
require('../images/Icon_Grey_Download.svg');

require('../images/Icon_White_Close.svg');
require('../images/Icon_Yellow_Close.svg');
require('../images/Icon_Purple_Close.svg');
require('../images/Icon_Grey_Close.svg');

require('../images/Icon_White_PDF.svg');
require('../images/Icon_Yellow_PDF.svg');
require('../images/Icon_Purple_PDF.svg');
require('../images/Icon_Grey_PDF.svg');

require('../images/Icon_White_Phone.svg');
require('../images/Icon_Yellow_Phone.svg');
require('../images/Icon_Purple_Phone.svg');

require('../images/Icon_Yellow_Mail.svg');
require('../images/Icon_Yellow_Location.svg');
require('../images/Icon_Yellow_Time.svg');
require('../images/Icon_Youtube.svg');

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
