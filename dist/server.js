/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getName = getName;
exports.getHeader = getHeader;
exports.getHeaderUS = getHeaderUS;
exports.setHeaderCountry = setHeaderCountry;
exports.setFooterCountry = setFooterCountry;
exports.getBody = getBody;
exports.getHome = getHome;
exports.getHomesecond = getHomesecond;
exports.getHomethird = getHomethird;
exports.getFooter = getFooter;
exports.getFooterUS = getFooterUS;

var _userTypes = __webpack_require__(10);

var _axios = __webpack_require__(34);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getName(id) {
    return async function (dispatch, getState) {
        var _ref = await getUserFromAPI(id),
            data = _ref.data;

        dispatch({ type: _userTypes.Types.UPDATE_NAME, payload: data });
    };
}

function getHeader() {
    return async function (dispatch, getState) {
        var _ref2 = await getHeaderFromAPI(),
            data = _ref2.data;

        dispatch({ type: _userTypes.Types.UPDATE_HEADER, payload: data });
    };
}

function getHeaderUS() {
    return async function (dispatch, getState) {
        var _ref3 = await getHeaderUSFromAPI(),
            data = _ref3.data;

        dispatch({ type: _userTypes.Types.UPDATE_HEADER, payload: data });
    };
}

function setHeaderCountry(data) {
    return function (dispatch, getState) {
        dispatch({ type: _userTypes.Types.UPDATE_HEADER_COUNTRY, payload: data });
    };
}

function setFooterCountry(data) {
    return function (dispatch, getState) {
        dispatch({ type: _userTypes.Types.UPDATE_FOOTER_COUNTRY, payload: data });
    };
}

function getBody() {
    return async function (dispatch, getState) {
        var _ref4 = await getBodyFromAPI(),
            data = _ref4.data;

        dispatch({ type: _userTypes.Types.UPDATE_BODY, payload: data });
    };
}

function getHome() {
    return async function (dispatch, getState) {
        var _ref5 = await getHomeFromAPI(),
            data = _ref5.data;

        dispatch({ type: _userTypes.Types.UPDATE_HOME, payload: data });
    };
}

function getHomesecond() {
    return async function (dispatch, getState) {
        var _ref6 = await getHomesecondFromAPI(),
            data = _ref6.data;

        dispatch({ type: _userTypes.Types.UPDATE_HOMESECOND, payload: data });
    };
}

function getHomethird() {
    return async function (dispatch, getState) {
        var _ref7 = await getHomethirdFromAPI(),
            data = _ref7.data;

        dispatch({ type: _userTypes.Types.UPDATE_HOMETHIRD, payload: data });
    };
}

function getFooter() {
    return async function (dispatch, getState) {
        var _ref8 = await getFooterFromAPI(),
            data = _ref8.data;

        dispatch({ type: _userTypes.Types.UPDATE_FOOTER, payload: data });
    };
}

function getFooterUS() {
    return async function (dispatch, getState) {
        var _ref9 = await getFooterUSFromAPI(),
            data = _ref9.data;

        dispatch({ type: _userTypes.Types.UPDATE_FOOTER, payload: data });
    };
}

function getUserFromAPI(id) {
    return _axios2.default.get('https://jsonplaceholder.typicode.com/users/' + id);
}

function getHeaderFromAPI() {
    return _axios2.default.get('https://api.myjson.com/bins/192vif');
}

function getBodyFromAPI() {
    return _axios2.default.get('https://api.myjson.com/bins/8rflz');
}

function getHomeFromAPI() {
    return _axios2.default.get('https://api.myjson.com/bins/8rflz');
}

function getHomesecondFromAPI() {
    return _axios2.default.get('https://api.myjson.com/bins/17qxib');
}

function getHomethirdFromAPI() {
    return _axios2.default.get('https://api.myjson.com/bins/nv52p');
}

function getFooterFromAPI() {
    return _axios2.default.get('https://api.myjson.com/bins/xrn0n');
}

function getFooterUSFromAPI() {
    return _axios2.default.get('https://api.myjson.com/bins/jr901');
}

function getHeaderUSFromAPI() {
    return _axios2.default.get('https://api.myjson.com/bins/g6ndd');
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

var _GlobalFooter__Nav = __webpack_require__(21);

var _GlobalFooter__Nav2 = _interopRequireDefault(_GlobalFooter__Nav);

var _GlobalFooter__Nav__Item = __webpack_require__(22);

var _GlobalFooter__Nav__Item2 = _interopRequireDefault(_GlobalFooter__Nav__Item);

var _GlobalFooter__Nav__Social = __webpack_require__(23);

var _GlobalFooter__Nav__Social2 = _interopRequireDefault(_GlobalFooter__Nav__Social);

var _GlobalFooter__Nav__Social__Item = __webpack_require__(24);

var _GlobalFooter__Nav__Social__Item2 = _interopRequireDefault(_GlobalFooter__Nav__Social__Item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.countryUpdate === 'true') {
                if (this.props.countryParams === 'intl') {
                    this.props.getFooter();
                } else {
                    this.props.getFooterUS();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var children = this.props.children;

            var today = new Date(),
                Year = today.getFullYear();

            return _react2.default.createElement(
                'footer',
                { className: 'global-footer', role: 'contentinfo' },
                _react2.default.createElement(
                    'div',
                    { className: 'l-padding' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'title: ',
                        this.props.footerTitle,
                        ' '
                    ),
                    _react2.default.createElement(
                        'nav',
                        null,
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav-footer has-5-items' },
                            _react2.default.createElement(
                                _GlobalFooter__Nav2.default,
                                null,
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null)
                            ),
                            _react2.default.createElement(
                                _GlobalFooter__Nav2.default,
                                null,
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null)
                            ),
                            _react2.default.createElement(
                                _GlobalFooter__Nav2.default,
                                null,
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null)
                            ),
                            _react2.default.createElement(
                                _GlobalFooter__Nav2.default,
                                null,
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Item2.default, null)
                            ),
                            _react2.default.createElement(
                                _GlobalFooter__Nav__Social2.default,
                                null,
                                _react2.default.createElement(_GlobalFooter__Nav__Social__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Social__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Social__Item2.default, null),
                                _react2.default.createElement(_GlobalFooter__Nav__Social__Item2.default, null)
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\xA9 ',
                        Year,
                        ' Deloitte Digital Australia'
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            if (store.getState().user.footerCountry != params.country || store.getState().user.footerCountry === null) {
                store.dispatch(actions.setHeaderCountry(params));
                if (params.country === 'intl') {
                    return store.dispatch(actions.getFooter());
                }
                return store.dispatch(actions.getFooterUS());
            }
            return;
        }
    }]);

    return Footer;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Footer);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

var _OnScreeNav = __webpack_require__(25);

var _OnScreeNav2 = _interopRequireDefault(_OnScreeNav);

var _OnScreenNav__Item = __webpack_require__(26);

var _OnScreenNav__Item2 = _interopRequireDefault(_OnScreenNav__Item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.countryUpdate === 'true') {
                this.props.setHeaderCountry({ 'country': this.props.countryParams });
                if (this.props.countryParams === 'intl') {
                    this.props.getHeader();
                } else {
                    this.props.getHeaderUS();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'The title'
                    )
                ),
                _react2.default.createElement(
                    'header',
                    { className: 'global-header ' + this.props.additionalClass },
                    _react2.default.createElement(
                        'div',
                        { className: 'l-padding' },
                        _react2.default.createElement(
                            'div',
                            { className: 'logo' },
                            _react2.default.createElement(
                                'a',
                                { href: this.props.logoURL },
                                _react2.default.createElement('img', { src: this.props.logoPath, alt: this.props.title })
                            )
                        ),
                        _react2.default.createElement(
                            'h1',
                            null,
                            this.props.headerTitle
                        ),
                        _react2.default.createElement(
                            _OnScreeNav2.default,
                            { additionalClass: 'nav-onscreen__global-header' },
                            _react2.default.createElement(_OnScreenNav__Item2.default, { title: 'Home Intl',
                                subtitle: 'This links to the first page',
                                path: '/intl/firstpage' }),
                            _react2.default.createElement(_OnScreenNav__Item2.default, { title: 'Second Intl',
                                subtitle: 'This links to the second page',
                                path: '/intl/secondpage' }),
                            _react2.default.createElement(_OnScreenNav__Item2.default, { title: 'Third USA',
                                subtitle: 'This links to the third page',
                                path: '/usa/thirdpage' })
                        )
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            if (store.getState().user.headerCountry != params.country || store.getState().user.headerCountry === null) {
                store.dispatch(actions.setHeaderCountry(params));
                if (params.country === 'intl') {
                    return store.dispatch(actions.getHeader());
                }
                return store.dispatch(actions.getHeaderUS());
            }

            return;
        }
    }]);

    return Header;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

Header.defaultProps = {
    title: "FED Framework 4.2",
    logoURL: "#",
    logoPath: "http://www.cochlear.com/wps/wcm/connect/f3088c94-a515-45e6-b59f-a6f79299d16b/logo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f3088c94-a515-45e6-b59f-a6f79299d16b-kSekuTE",
    additionalClass: "is-dark"
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Header);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderLandingBanner = function (_React$Component) {
    _inherits(HeaderLandingBanner, _React$Component);

    function HeaderLandingBanner() {
        _classCallCheck(this, HeaderLandingBanner);

        return _possibleConstructorReturn(this, (HeaderLandingBanner.__proto__ || Object.getPrototypeOf(HeaderLandingBanner)).apply(this, arguments));
    }

    _createClass(HeaderLandingBanner, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'header',
                { className: 'landing-banner ' + this.props.additionalClass },
                _react2.default.createElement(
                    'div',
                    { className: 'l-padding' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            this.props.title
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.description
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'image', style: { backgroundImage: 'url(' + this.props.image + ')' } },
                        _react2.default.createElement(
                            'span',
                            { className: 'vh' },
                            'Image: ',
                            this.props.imageAlt
                        )
                    )
                )
            );
        }
    }]);

    return HeaderLandingBanner;
}(_react2.default.Component);

HeaderLandingBanner.defaultProps = {
    title: "Landing page title",
    description: "Aliquam eget ornare nisl. Pellentesque varius magna eu sodales fringilla. Nam feugiat tincidunt orci fringilla pharetra. Aenean a turpis in nunc commodo posuere. Nullam molestie velit leo.",
    image: "http://fed.donlineclients.com/assets/img/placeholder/landing-hero.jpg",
    imageAlt: "Landing page banner alt text",
    additionalClass: "is-dark"
};

exports.default = HeaderLandingBanner;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(27);

var _Home2 = _interopRequireDefault(_Home);

var _Homesecond = __webpack_require__(28);

var _Homesecond2 = _interopRequireDefault(_Homesecond);

var _Homethird = __webpack_require__(29);

var _Homethird2 = _interopRequireDefault(_Homethird);

var _user = __webpack_require__(33);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    routes: [{
        path: '/',
        component: _Home2.default,
        exact: true
    }, {
        path: '/:country/firstpage',
        component: _Home2.default,
        exact: true
    }, {
        path: '/:country/secondpage',
        component: _Homesecond2.default,
        exact: true
    }, {
        path: '/:country/thirdpage',
        component: _Homethird2.default,
        exact: true
    }],
    redirects: [{
        from: '/people',
        to: '/user',
        status: 301
    }]
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Types = exports.Types = {
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_HEADER: 'UPDATE_HEADER',
    UPDATE_BODY: 'UPDATE_BODY',
    UPDATE_HOME: 'UPDATE_HOME',
    UPDATE_HOMESECOND: 'UPDATE_HOMESECOND',
    UPDATE_HOMETHIRD: 'UPDATE_HOMETHIRD',
    UPDATE_FOOTER: 'UPDATE_FOOTER',
    UPDATE_HEADER_COUNTRY: 'UPDATE_HEADER_COUNTRY',
    UPDATE_FOOTER_COUNTRY: 'UPDATE_FOOTER_COUNTRY'
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _redirectWStatus = __webpack_require__(31);

var _redirectWStatus2 = _interopRequireDefault(_redirectWStatus);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

var _GlobalHeader = __webpack_require__(7);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(6);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var routes = _routes2.default.routes.map(function (_ref, i) {
                var path = _ref.path,
                    component = _ref.component,
                    exact = _ref.exact;
                return _react2.default.createElement(_reactRouterDom.Route, { key: Math.random() + 'ROUTE_', exact: exact, path: path, component: component });
            });
            var redirects = _routes2.default.redirects.map(function (_ref2, i) {
                var from = _ref2.from,
                    to = _ref2.to,
                    status = _ref2.status;
                return _react2.default.createElement(_redirectWStatus2.default, { key: Math.random() + 'REDIRECT_', from: from, to: to, status: status });
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    routes,
                    redirects
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref3) {
            var store = _ref3.store,
                params = _ref3.params;

            if (!params.country) {
                return Promise.all([], []);
            }
            return Promise.all([_GlobalHeader2.default.fetchData({ store: store, params: params }), _GlobalFooter2.default.fetchData({ store: store, params: params })]);
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;


function mapStateToProps(state) {
    return _extends({}, state.home);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
//export default connect(mapStateToProps, mapDispatchToProps)(App);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var customMiddleware = function customMiddleware(store) {
    return function (next) {
        return function (action) {
            return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
        };
    };
};
var isFunction = function isFunction(action) {
    return typeof action === 'function';
};
exports.default = customMiddleware;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(1);

var _userReducer = __webpack_require__(32);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    user: _userReducer2.default
});

exports.default = reducers;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _HeaderLandingBanner = __webpack_require__(8);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_Component) {
    _inherits(Body, _Component);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getHome();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_HeaderLandingBanner2.default, { title: this.props.bodyTitle })
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData() {
            console.log('test fetch. This does nothing at the moment');
        }
    }]);

    return Body;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Body);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _HeaderLandingBanner = __webpack_require__(8);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bodysecond = function (_Component) {
    _inherits(Bodysecond, _Component);

    function Bodysecond() {
        _classCallCheck(this, Bodysecond);

        return _possibleConstructorReturn(this, (Bodysecond.__proto__ || Object.getPrototypeOf(Bodysecond)).apply(this, arguments));
    }

    _createClass(Bodysecond, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getHomesecond();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_HeaderLandingBanner2.default, { title: this.props.bodysecondTitle });
        }
    }], [{
        key: 'fetchData',
        value: function fetchData() {
            console.log('test fetch. This does nothing at the moment');
        }
    }]);

    return Bodysecond;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Bodysecond);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _HeaderLandingBanner = __webpack_require__(8);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bodythird = function (_Component) {
    _inherits(Bodythird, _Component);

    function Bodythird() {
        _classCallCheck(this, Bodythird);

        return _possibleConstructorReturn(this, (Bodythird.__proto__ || Object.getPrototypeOf(Bodythird)).apply(this, arguments));
    }

    _createClass(Bodythird, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getHomethird();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_HeaderLandingBanner2.default, { title: this.props.bodythirdTitle });
        }
    }], [{
        key: 'fetchData',
        value: function fetchData() {
            console.log('test fetch. This does nothing at the moment');
        }
    }]);

    return Bodythird;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Bodythird);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalFooter__Nav = function (_React$Component) {
    _inherits(GlobalFooter__Nav, _React$Component);

    function GlobalFooter__Nav() {
        _classCallCheck(this, GlobalFooter__Nav);

        return _possibleConstructorReturn(this, (GlobalFooter__Nav.__proto__ || Object.getPrototypeOf(GlobalFooter__Nav)).apply(this, arguments));
    }

    _createClass(GlobalFooter__Nav, [{
        key: "render",
        value: function render() {

            var children = this.props.children;

            return _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "h2" },
                    _react2.default.createElement(
                        "a",
                        { href: this.props.path },
                        this.props.title
                    )
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.Children.map(children, function (child) {
                        return child;
                    })
                )
            );
        }
    }]);

    return GlobalFooter__Nav;
}(_react2.default.Component);

GlobalFooter__Nav.defaultProps = {
    title: "Footer Title",
    path: "#"
};

exports.default = GlobalFooter__Nav;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalFooter__Nav__Item = function (_React$Component) {
    _inherits(GlobalFooter__Nav__Item, _React$Component);

    function GlobalFooter__Nav__Item() {
        _classCallCheck(this, GlobalFooter__Nav__Item);

        return _possibleConstructorReturn(this, (GlobalFooter__Nav__Item.__proto__ || Object.getPrototypeOf(GlobalFooter__Nav__Item)).apply(this, arguments));
    }

    _createClass(GlobalFooter__Nav__Item, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "a",
                    { href: this.props.path },
                    this.props.title
                )
            );
        }
    }]);

    return GlobalFooter__Nav__Item;
}(_react2.default.Component);

GlobalFooter__Nav__Item.defaultProps = {
    title: "Footer Nav Item",
    path: "#"
};

exports.default = GlobalFooter__Nav__Item;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalFooter__Nav__Social = function (_React$Component) {
    _inherits(GlobalFooter__Nav__Social, _React$Component);

    function GlobalFooter__Nav__Social() {
        _classCallCheck(this, GlobalFooter__Nav__Social);

        return _possibleConstructorReturn(this, (GlobalFooter__Nav__Social.__proto__ || Object.getPrototypeOf(GlobalFooter__Nav__Social)).apply(this, arguments));
    }

    _createClass(GlobalFooter__Nav__Social, [{
        key: "render",
        value: function render() {

            var children = this.props.children;

            return _react2.default.createElement(
                "li",
                { className: "nav-footer-social link-icons-disabled" },
                _react2.default.createElement(
                    "h2",
                    null,
                    "Connect with us"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.Children.map(children, function (child) {
                        return child;
                    })
                )
            );
        }
    }]);

    return GlobalFooter__Nav__Social;
}(_react2.default.Component);

exports.default = GlobalFooter__Nav__Social;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalFooter__Nav__Social__Item = function (_React$Component) {
    _inherits(GlobalFooter__Nav__Social__Item, _React$Component);

    function GlobalFooter__Nav__Social__Item() {
        _classCallCheck(this, GlobalFooter__Nav__Social__Item);

        return _possibleConstructorReturn(this, (GlobalFooter__Nav__Social__Item.__proto__ || Object.getPrototypeOf(GlobalFooter__Nav__Social__Item)).apply(this, arguments));
    }

    _createClass(GlobalFooter__Nav__Social__Item, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "a",
                    { href: this.props.path, title: this.props.socialVerb + " us on " + this.props.socialTitle },
                    _react2.default.createElement("span", { className: "icon " + this.props.socialIcon, "data-grunticon-embed": true })
                )
            );
        }
    }]);

    return GlobalFooter__Nav__Social__Item;
}(_react2.default.Component);

GlobalFooter__Nav__Social__Item.defaultProps = {
    socialVerb: "Talk to",
    socialTitle: "Socials",
    socialIcon: "facebook",
    path: "#"
};

exports.default = GlobalFooter__Nav__Social__Item;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OnScreeNav = function (_React$Component) {
    _inherits(OnScreeNav, _React$Component);

    function OnScreeNav() {
        _classCallCheck(this, OnScreeNav);

        return _possibleConstructorReturn(this, (OnScreeNav.__proto__ || Object.getPrototypeOf(OnScreeNav)).apply(this, arguments));
    }

    _createClass(OnScreeNav, [{
        key: "render",
        value: function render() {

            var children = this.props.children;

            {/*
                       <%
                       vars = {
                       :currentPagePath => '/' + current_page.path,
                       :hasLogin => false
                   }.deep_merge!(locals)
                        def get_menu_classes(lvl, path, checkChildren=false)
                       classes = []
                        if lvl.path == path
                           classes.push('is-active')
                end
                if !lvl.pages.nil?
                if checkChildren
                classes.push('has-children')
                end
                if dd_nav_isChildActive(path, lvl.pages)
                classes.push('is-active-parent')
                end
                end
                return classes
                end
                %> */}

            return _react2.default.createElement(
                "nav",
                { className: "nav-onscreen js-onscreen " + this.props.additionalClass },
                _react2.default.createElement(
                    "ul",
                    { className: "nav cf" },
                    _react2.default.Children.map(children, function (child) {
                        return child;
                    })
                ),
                _react2.default.createElement(
                    "a",
                    { href: "#", className: "icon-button login" },
                    "Login"
                )
            );
        }
    }]);

    return OnScreeNav;
}(_react2.default.Component);

exports.default = OnScreeNav;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OnScreenNav__Item = function (_React$Component) {
    _inherits(OnScreenNav__Item, _React$Component);

    function OnScreenNav__Item() {
        _classCallCheck(this, OnScreenNav__Item);

        return _possibleConstructorReturn(this, (OnScreenNav__Item.__proto__ || Object.getPrototypeOf(OnScreenNav__Item)).apply(this, arguments));
    }

    _createClass(OnScreenNav__Item, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'li',
                { className: 'nav-item ' + this.props.additionalClass },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { className: 'nav-item-title', to: '' + this.props.path },
                    this.props.title,
                    '  ',
                    _react2.default.createElement(
                        'span',
                        { className: 'sub-text' },
                        this.props.subtitle
                    )
                )
            );
        }
    }]);

    return OnScreenNav__Item;
}(_react2.default.Component);

OnScreenNav__Item.defaultProps = {
    title: "On Screen Nav",
    subtitle: '',
    path: "#",
    additionalClass: ''
};

exports.default = OnScreenNav__Item;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _GlobalHeader = __webpack_require__(7);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(6);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Body = __webpack_require__(18);

var _Body2 = _interopRequireDefault(_Body);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            if (this.props.match.params.country === this.props.headerCountry) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' }),
                    _react2.default.createElement(_Body2.default, null),
                    _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' })
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'true' }),
                    _react2.default.createElement(_Body2.default, null),
                    _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'true' })
                );
            }
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            return store.dispatch(actions.getHome());
        }
    }]);

    return Home;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Home);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _GlobalHeader = __webpack_require__(7);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(6);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Bodysecond = __webpack_require__(19);

var _Bodysecond2 = _interopRequireDefault(_Bodysecond);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homesecond = function (_Component) {
    _inherits(Homesecond, _Component);

    function Homesecond() {
        _classCallCheck(this, Homesecond);

        return _possibleConstructorReturn(this, (Homesecond.__proto__ || Object.getPrototypeOf(Homesecond)).apply(this, arguments));
    }

    _createClass(Homesecond, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            if (this.props.match.params.country === this.props.headerCountry) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' }),
                    _react2.default.createElement(_Bodysecond2.default, null),
                    _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' })
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'true' }),
                    _react2.default.createElement(_Bodysecond2.default, null),
                    _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'true' })
                );
            }
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            return store.dispatch(actions.getHomesecond());
        }
    }]);

    return Homesecond;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Homesecond);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _GlobalHeader = __webpack_require__(7);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(6);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Bodythird = __webpack_require__(20);

var _Bodythird2 = _interopRequireDefault(_Bodythird);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homethird = function (_Component) {
    _inherits(Homethird, _Component);

    function Homethird() {
        _classCallCheck(this, Homethird);

        return _possibleConstructorReturn(this, (Homethird.__proto__ || Object.getPrototypeOf(Homethird)).apply(this, arguments));
    }

    _createClass(Homethird, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            if (this.props.match.params.country === this.props.headerCountry) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' }),
                    _react2.default.createElement(_Bodythird2.default, null),
                    _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' })
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'true' }),
                    _react2.default.createElement(_Bodythird2.default, null),
                    _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'true' })
                );
            }
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            return store.dispatch(actions.getHomethird());
        }
    }]);

    return Homethird;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Homethird);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(16);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _app = __webpack_require__(11);

var _app2 = _interopRequireDefault(_app);

var _reactDom = __webpack_require__(15);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _combine = __webpack_require__(13);

var _combine2 = _interopRequireDefault(_combine);

var _reactRouter = __webpack_require__(17);

var _thunk = __webpack_require__(12);

var _thunk2 = _interopRequireDefault(_thunk);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


app.use('/dist', _express2.default.static('./dist'));

app.use('/', function (req, res) {
	try {
		//create new redux store on each request

		var store = (0, _redux.createStore)(_combine2.default, {}, (0, _redux.applyMiddleware)(_thunk2.default));
		var foundPath = null;
		// match request url to our React Router paths and grab component

		var _ref = _routes2.default.routes.find(function (_ref2) {
			var path = _ref2.path,
			    exact = _ref2.exact;

			foundPath = (0, _reactRouter.matchPath)(req.url, {
				path: path,
				exact: exact,
				strict: false
			});
			return foundPath;
		}) || {},
		    path = _ref.path,
		    component = _ref.component;
		// safety check for valid component, if no component we initialize an empty shell.


		if (!component) component = {};
		// safety check for fetchData function, if no function we give it an empty promise
		if (!component.fetchData) component.fetchData = function () {
			return new Promise(function (resolve) {
				return resolve();
			});
		};
		// meat and bones of our isomorphic application: grabbing async data

		var p1 = component.fetchData({ store: store, params: foundPath ? foundPath.params : {} });
		var p2 = _app2.default.fetchData({ store: store, params: foundPath ? foundPath.params : {} });

		Promise.all([p1, p2]).then(function (values) {
			//await component.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
			//await App.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
			//get store state (js object of entire store)
			console.log('store is ', store.getState());
			var preloadedState = store.getState();
			//context is used by react router, empty by default
			var context = {};
			var html = _server2.default.renderToString(_react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(
					_reactRouter.StaticRouter,
					{ context: context, location: req.url },
					_react2.default.createElement(_app2.default, null)
				)
			));
			//render helmet data aka meta data in <head></head>
			var helmetData = _reactHelmet2.default.renderStatic();
			//check context for url, if url exists then react router has ran into a redirect
			if (context.url) {
				//process redirect through express by redirecting
				res.redirect(context.status, 'http://' + req.headers.host + context.url);
			} else if (foundPath && foundPath.path == '/404') {
				//if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
				res.status(404).send(renderFullPage(html, preloadedState, helmetData));
			} else {
				//else send down page with initial state and meta data
				res.send(renderFullPage(html, preloadedState, helmetData));
			}
		});
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured.', {}, {}));
	}
});

var port = process.env.PORT || 9000;
app.listen(port, function () {
	console.log('app running on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet) {
	return '\n    <!doctype html>\n    <html>\n      <head>\n        <link rel="icon" href="/dist/favicon.ico" type="image/ico" />\n        <link rel="stylesheet" href="/dist/assets/fed-global.css" type="text/css" />\n        <link rel="stylesheet" href="/dist/assets/overwrites.css" type="text/css" />\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        ' + helmet.link.toString() + '\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/dist/assets/app.bundle.js"></script>\n      </body>\n    </html>\n    ';
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedirectWithStatus = function RedirectWithStatus(_ref) {
    var key = _ref.key,
        from = _ref.from,
        to = _ref.to,
        status = _ref.status;
    return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
            var staticContext = _ref2.staticContext;

            // there is no `staticContext` on the client, so
            // we need to guard against that here
            if (staticContext) staticContext.status = status;
            return _react2.default.createElement(_reactRouterDom.Redirect, { key: key, from: from, to: to });
        } });
};
exports.default = RedirectWithStatus;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = userReducer;

var _userTypes = __webpack_require__(10);

var initialState = {
    name: null,
    email: null,
    title: null,
    headerTitle: null,
    headerCountry: null,
    footerCountry: null,
    footerTitle: null,
    bodyTitle: null,
    bodysecondTitle: null,
    bodythirdTitle: null
};
function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _userTypes.Types.UPDATE_NAME:
            return _extends({}, state, { name: action.payload.name, email: action.payload.email });
        case _userTypes.Types.UPDATE_HEADER:
            return _extends({}, state, { headerTitle: action.payload.title });
        case _userTypes.Types.UPDATE_HEADER_COUNTRY:
            return _extends({}, state, { headerCountry: action.payload.country });
        case _userTypes.Types.UPDATE_FOOTER_COUNTRY:
            return _extends({}, state, { footerCountry: action.payload.country });
        case _userTypes.Types.UPDATE_FOOTER:
            return _extends({}, state, { footerTitle: action.payload.title });
        case _userTypes.Types.UPDATE_HOME:
            return _extends({}, state, { bodyTitle: action.payload.title });
        case _userTypes.Types.UPDATE_HOMESECOND:
            return _extends({}, state, { bodysecondTitle: action.payload.title });
        case _userTypes.Types.UPDATE_HOMETHIRD:
            return _extends({}, state, { bodythirdTitle: action.payload.title });
        default:
            return state;
    }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _userActions = __webpack_require__(4);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
    _inherits(User, _Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getName(1);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'User'
                    )
                ),
                _react2.default.createElement(
                    'strong',
                    null,
                    'User page '
                ),
                'name: ',
                this.props.name,
                'email: ',
                this.props.email
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;

            return store.dispatch(actions.getName(1));
        }
    }]);

    return User;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(User);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map