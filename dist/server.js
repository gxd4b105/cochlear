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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
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
exports.getHome = getHome;
exports.getHomesecond = getHomesecond;
exports.getHomethird = getHomethird;
exports.getFooter = getFooter;
exports.getFooterUS = getFooterUS;

var _userTypes = __webpack_require__(15);

var _axios = __webpack_require__(44);

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
        var _ref2 = await _axios2.default.get('https://api.myjson.com/bins/192vif'),
            data = _ref2.data;

        dispatch({ type: _userTypes.Types.UPDATE_HEADER, payload: data });
    };
}

function getHeaderUS() {
    return async function (dispatch, getState) {
        var _ref3 = await _axios2.default.get('https://api.myjson.com/bins/g6ndd'),
            data = _ref3.data;

        dispatch({ type: _userTypes.Types.UPDATE_HEADER, payload: data });
    };
}

function setHeaderCountry(data) {
    return function (dispatch, getState) {
        dispatch({ type: _userTypes.Types.UPDATE_HEADER_COUNTRY, payload: data });
    };
}

function getHome() {
    return async function (dispatch, getState) {
        var _ref4 = await _axios2.default.get('https://api.myjson.com/bins/8rflz'),
            data = _ref4.data;

        dispatch({ type: _userTypes.Types.UPDATE_HOME, payload: data });
    };
}

function getHomesecond() {
    return async function (dispatch, getState) {
        var _ref5 = await _axios2.default.get('https://api.myjson.com/bins/17qxib'),
            data = _ref5.data;

        dispatch({ type: _userTypes.Types.UPDATE_HOMESECOND, payload: data });
    };
}

function getHomethird() {
    return async function (dispatch, getState) {
        var _ref6 = await _axios2.default.get('https://api.myjson.com/bins/nv52p'),
            data = _ref6.data;

        dispatch({ type: _userTypes.Types.UPDATE_HOMETHIRD, payload: data });
    };
}

function getFooter() {
    return async function (dispatch, getState) {
        var _ref7 = await _axios2.default.get('https://api.myjson.com/bins/xrn0n'),
            data = _ref7.data;

        dispatch({ type: _userTypes.Types.UPDATE_FOOTER, payload: data });
    };
}

function getFooterUS() {
    return async function (dispatch, getState) {
        var _ref8 = await _axios2.default.get('https://api.myjson.com/bins/jr901'),
            data = _ref8.data;

        dispatch({ type: _userTypes.Types.UPDATE_FOOTER, payload: data });
    };
}

/***/ }),
/* 5 */
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

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _GlobalFooter__Nav = __webpack_require__(26);

var _GlobalFooter__Nav2 = _interopRequireDefault(_GlobalFooter__Nav);

var _GlobalFooter__Nav__Item = __webpack_require__(27);

var _GlobalFooter__Nav__Item2 = _interopRequireDefault(_GlobalFooter__Nav__Item);

var _GlobalFooter__Nav__Social = __webpack_require__(28);

var _GlobalFooter__Nav__Social2 = _interopRequireDefault(_GlobalFooter__Nav__Social);

var _GlobalFooter__Nav__Social__Item = __webpack_require__(29);

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
            if (this.props.countryUpdate === 'true' || this.props.countryUpdate === true) {
                console.log('it is true ', this.props.countryParams);
                this.props.setHeaderCountry({ 'country': this.props.countryParams });
                if (this.props.countryParams === 'intl') {
                    console.log('getting intl');
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

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _OnScreeNav = __webpack_require__(30);

var _OnScreeNav2 = _interopRequireDefault(_OnScreeNav);

var _OnScreenNav__Item = __webpack_require__(31);

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
            if (this.props.countryUpdate === 'true' || this.props.countryUpdate === true) {
                this.props.setHeaderCountry({ 'country': this.props.countryParams });
                if (this.props.countryParams === 'intl') {
                    console.log('getting intl');
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
                                path: '/intl/home' }),
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
/* 7 */
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
    description: "",
    image: "http://fed.donlineclients.com/assets/img/placeholder/landing-hero.jpg",
    imageAlt: "Landing page banner alt text",
    additionalClass: ""
};

exports.default = HeaderLandingBanner;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
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

// import Breadcrumbs from 'react-breadcrumbs';

var BreadCrumbs = function (_React$Component) {
    _inherits(BreadCrumbs, _React$Component);

    function BreadCrumbs() {
        _classCallCheck(this, BreadCrumbs);

        return _possibleConstructorReturn(this, (BreadCrumbs.__proto__ || Object.getPrototypeOf(BreadCrumbs)).apply(this, arguments));
    }

    _createClass(BreadCrumbs, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "breadcrumbs" },
                _react2.default.createElement("div", { className: "l-padding" })
            );
        }
    }]);

    return BreadCrumbs;
}(_react2.default.Component);

exports.default = BreadCrumbs;

/***/ }),
/* 10 */
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

var Cm01RichText = function (_React$Component) {
    _inherits(Cm01RichText, _React$Component);

    function Cm01RichText() {
        _classCallCheck(this, Cm01RichText);

        return _possibleConstructorReturn(this, (Cm01RichText.__proto__ || Object.getPrototypeOf(Cm01RichText)).apply(this, arguments));
    }

    _createClass(Cm01RichText, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "cm cm-rich-text" },
                _react2.default.createElement(
                    "p",
                    { className: "intro" },
                    "Intro paragraph. Lorem ipsum consequat enim incididunt ea aliqua ut minim anim occaecat cupidatat id eiusmod culpa in velit ut fugiat laboris commodo anim. Esse ut proident ea Ut dolore proident enim"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Lorem ipsum consequat enim incididunt ea aliqua ut minim anim occaecat cupidatat id eiusmod culpa in velit ut fugiat laboris commodo anim. Esse ut proident ea Ut dolore proident enim Duis et exercitation in incididunt nisi in elit culpa deserunt quis ex officia nostrud sint enim anim ullamco labore Excepteur eiusmod cupidatat sint labore consequat in Excepteur est officia cillum nostrud id id proident dolor voluptate ut Duis labore veniam."
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Ut dolore proident"
                ),
                _react2.default.createElement(
                    "figure",
                    { className: "is-full" },
                    _react2.default.createElement("img", { src: "http://fed.donlineclients.com/assets/img/placeholder/landing-hero.jpg", alt: "Placeholder image" }),
                    _react2.default.createElement(
                        "figcaption",
                        null,
                        _react2.default.createElement(
                            "strong",
                            null,
                            "Image caption"
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            "Lorem ipsum - dolor sit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        )
                    )
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Lorem ipsum consequat enim incididunt ea aliqua ut minim anim occaecat cupidatat id eiusmod culpa in velit ut fugiat laboris commodo anim commodo mollit adipisicing sit occaecat eu amet labore qui pariatur sunt sit in est ea in sed dolore pariatur consequat proident esse deserunt nostrud in cillum sunt quis ut id nostrud officia id enim labore esse ut proident."
                ),
                _react2.default.createElement(
                    "blockquote",
                    null,
                    "\u201CLorem ipsum Ea aliqua consectetur laboris adipisicing voluptate elit cupidatat proident nostrud consequat sit sunt.\u201D",
                    _react2.default.createElement(
                        "footer",
                        null,
                        "John Pullquote from ",
                        _react2.default.createElement(
                            "cite",
                            null,
                            "Publication"
                        )
                    )
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Vivamus posuere facilisis purus a pulvinar. Mauris vel dolor sagittis, posuere tellus sit amet, tempor nisl. Duis bibendum consequat ex, in vehicula nibh. Aenean finibus hendrerit turpis, id porttitor risus ultricies non. Vestibulum condimentum rhoncus mi, sit amet congue sem fermentum pellentesque. "
                )
            );
        }
    }]);

    return Cm01RichText;
}(_react2.default.Component);

exports.default = Cm01RichText;

/***/ }),
/* 11 */
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

var Cm02ContentTile = function (_React$Component) {
    _inherits(Cm02ContentTile, _React$Component);

    function Cm02ContentTile() {
        _classCallCheck(this, Cm02ContentTile);

        return _possibleConstructorReturn(this, (Cm02ContentTile.__proto__ || Object.getPrototypeOf(Cm02ContentTile)).apply(this, arguments));
    }

    _createClass(Cm02ContentTile, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "section",
                { className: "cm cm-content-tile " + this.props.additionalClass },
                _react2.default.createElement(
                    "div",
                    { className: "cm-image-block-link" },
                    _react2.default.createElement(
                        "a",
                        { href: "" + this.props.path, className: "image" },
                        _react2.default.createElement("img", { className: "img", src: "" + this.props.image, alt: this.props.imageAlt })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "content" },
                        _react2.default.createElement(
                            "h1",
                            null,
                            " ",
                            _react2.default.createElement(
                                "a",
                                { href: "" + this.props.path },
                                this.props.title
                            ),
                            " "
                        ),
                        " ",
                        _react2.default.createElement(
                            "p",
                            null,
                            this.props.description
                        ),
                        _react2.default.createElement(
                            "a",
                            { href: "" + this.props.path, className: "cta" },
                            "Read more"
                        )
                    )
                )
            );
        }
    }]);

    return Cm02ContentTile;
}(_react2.default.Component);

Cm02ContentTile.defaultProps = {
    title: "CM02 Content Tile",
    path: "#",
    description: "This is a description",
    image: "http://fed.donlineclients.com/assets/img/placeholder/landing-hero.jpg",
    imageAlt: "Content tile image alt text",
    additionalClass: ""
};

exports.default = Cm02ContentTile;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(34);

var _Home2 = _interopRequireDefault(_Home);

var _Homesecond = __webpack_require__(36);

var _Homesecond2 = _interopRequireDefault(_Homesecond);

var _Homethird = __webpack_require__(37);

var _Homethird2 = _interopRequireDefault(_Homethird);

var _user = __webpack_require__(43);

var _user2 = _interopRequireDefault(_user);

var _HomePage = __webpack_require__(35);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _HearingAidVsCochlearImplant = __webpack_require__(33);

var _HearingAidVsCochlearImplant2 = _interopRequireDefault(_HearingAidVsCochlearImplant);

var _TreatingHearingLoss = __webpack_require__(39);

var _TreatingHearingLoss2 = _interopRequireDefault(_TreatingHearingLoss);

var _ClinicFinder = __webpack_require__(32);

var _ClinicFinder2 = _interopRequireDefault(_ClinicFinder);

var _StatsAndProofs = __webpack_require__(38);

var _StatsAndProofs2 = _interopRequireDefault(_StatsAndProofs);

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
    }, {
        path: '/:country/home',
        component: _HomePage2.default,
        exact: true
    }, {
        path: '/:country/hearing-aid-vs-cochlear-implant',
        component: _HearingAidVsCochlearImplant2.default,
        exact: true
    }, {
        path: '/:country/treating-hearing-loss',
        component: _TreatingHearingLoss2.default,
        exact: true
    }, {
        path: '/:country/stats-and-proofs',
        component: _StatsAndProofs2.default,
        exact: true
    }, {
        path: '/:country/clinic-finder',
        component: _ClinicFinder2.default,
        exact: true
    }],
    redirects: [{
        from: '/people',
        to: '/user',
        status: 301
    }]
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
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

var ClinicNearYou = function (_React$Component) {
    _inherits(ClinicNearYou, _React$Component);

    function ClinicNearYou() {
        _classCallCheck(this, ClinicNearYou);

        return _possibleConstructorReturn(this, (ClinicNearYou.__proto__ || Object.getPrototypeOf(ClinicNearYou)).apply(this, arguments));
    }

    _createClass(ClinicNearYou, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "section",
                { className: "cm cm-subscription-banner " + this.props.additionalClass },
                _react2.default.createElement(
                    "div",
                    { className: "l-padding" },
                    _react2.default.createElement(
                        "form",
                        { className: "fn_validate", action: "/intl/clinic-finder" },
                        _react2.default.createElement("div", { className: "fn_validate_summary" }),
                        _react2.default.createElement(
                            "fieldset",
                            null,
                            _react2.default.createElement(
                                "div",
                                { className: "title-text-container" },
                                _react2.default.createElement(
                                    "legend",
                                    null,
                                    this.props.title
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    this.props.description
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "input-container" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "ctrl-holder width-l" },
                                    _react2.default.createElement(
                                        "label",
                                        { htmlFor: "txt-postcode" },
                                        "Postcode",
                                        _react2.default.createElement(
                                            "em",
                                            null,
                                            "*",
                                            _react2.default.createElement(
                                                "span",
                                                { className: "vh" },
                                                "Required field"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "ctrl" },
                                        _react2.default.createElement("input", { name: "txt-postcode", id: "txt-postcode", className: "text", "data-rule-required": "true" }),
                                        _react2.default.createElement("div", { className: "status-msg" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "btn-holder" },
                                    _react2.default.createElement(
                                        "button",
                                        { role: "button", type: "submit", className: "fn_validate_submit cta" },
                                        "Search"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ClinicNearYou;
}(_react2.default.Component);

exports.default = ClinicNearYou;

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _redirectWStatus = __webpack_require__(41);

var _redirectWStatus2 = _interopRequireDefault(_redirectWStatus);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(42);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    user: _reducer2.default
});

exports.default = reducers;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _reactRedux = __webpack_require__(2);

var _HeaderLandingBanner = __webpack_require__(7);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _reactRedux = __webpack_require__(2);

var _HeaderLandingBanner = __webpack_require__(7);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _reactRedux = __webpack_require__(2);

var _HeaderLandingBanner = __webpack_require__(7);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

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

var ContentHeader = function (_React$Component) {
    _inherits(ContentHeader, _React$Component);

    function ContentHeader() {
        _classCallCheck(this, ContentHeader);

        return _possibleConstructorReturn(this, (ContentHeader.__proto__ || Object.getPrototypeOf(ContentHeader)).apply(this, arguments));
    }

    _createClass(ContentHeader, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "header",
                { className: "content-header" },
                _react2.default.createElement(
                    "header",
                    { className: "content-header" },
                    _react2.default.createElement(
                        "h1",
                        null,
                        this.props.title
                    )
                )
            );
        }
    }]);

    return ContentHeader;
}(_react2.default.Component);

ContentHeader.defaultProps = {
    title: "Content Header"
};

exports.default = ContentHeader;

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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

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
/* 32 */
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

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _BreadCrumbs = __webpack_require__(9);

var _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);

var _ClinicNearYou = __webpack_require__(14);

var _ClinicNearYou2 = _interopRequireDefault(_ClinicNearYou);

var _ContentHeader = __webpack_require__(25);

var _ContentHeader2 = _interopRequireDefault(_ContentHeader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClinicFinder = function (_Component) {
    _inherits(ClinicFinder, _Component);

    function ClinicFinder() {
        _classCallCheck(this, ClinicFinder);

        return _possibleConstructorReturn(this, (ClinicFinder.__proto__ || Object.getPrototypeOf(ClinicFinder)).apply(this, arguments));
    }

    _createClass(ClinicFinder, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'l-layout l-two-column cf' },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'Heading Aid vs Cochlear Implant'
                    )
                ),
                _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' }),
                _react2.default.createElement(_BreadCrumbs2.default, null),
                _react2.default.createElement(
                    'article',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'l-content-container cf l-padding' },
                        _react2.default.createElement(
                            'div',
                            { className: 'l-content-column' },
                            _react2.default.createElement(_ContentHeader2.default, { title: 'Find a Clinic',
                                description: '' }),
                            _react2.default.createElement(_ClinicNearYou2.default, { title: 'Find your nearest clinic',
                                description: 'Type in your postcode to find a Cochlear Clinic that is nearest to you.',
                                additionalClass: 'is-shaded is-medium' })
                        )
                    )
                ),
                _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' })
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            return store.dispatch(actions.getHome());
        }
    }]);

    return ClinicFinder;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(ClinicFinder);

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

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Cm02ContentTile = __webpack_require__(11);

var _Cm02ContentTile2 = _interopRequireDefault(_Cm02ContentTile);

var _Cm01RichText = __webpack_require__(10);

var _Cm01RichText2 = _interopRequireDefault(_Cm01RichText);

var _HeaderLandingBanner = __webpack_require__(7);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

var _BreadCrumbs = __webpack_require__(9);

var _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);

var _ClinicNearYou = __webpack_require__(14);

var _ClinicNearYou2 = _interopRequireDefault(_ClinicNearYou);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDOM = __webpack_require__(13);
var Carousel = __webpack_require__(45).Carousel;

var HearingAidVsCochlearImplant = function (_Component) {
    _inherits(HearingAidVsCochlearImplant, _Component);

    function HearingAidVsCochlearImplant() {
        _classCallCheck(this, HearingAidVsCochlearImplant);

        return _possibleConstructorReturn(this, (HearingAidVsCochlearImplant.__proto__ || Object.getPrototypeOf(HearingAidVsCochlearImplant)).apply(this, arguments));
    }

    _createClass(HearingAidVsCochlearImplant, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'l-layout l-two-column cf' },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'Heading Aid vs Cochlear Implant'
                    )
                ),
                _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' }),
                _react2.default.createElement(_BreadCrumbs2.default, null),
                _react2.default.createElement(
                    'article',
                    null,
                    _react2.default.createElement(_HeaderLandingBanner2.default, { title: 'Hearing Aid vs Cochlear Implant',
                        description: 'A cochlear implant is an electronic medical device that does the work of damaged parts of the inner ear (cochlea) to provide sound signals to the brain.',
                        additionalClass: 'is-dark' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'l-content-container cf l-padding' },
                        _react2.default.createElement(
                            'div',
                            { className: 'l-content-column' },
                            _react2.default.createElement(_Cm01RichText2.default, null),
                            _react2.default.createElement(
                                'div',
                                { className: 'sl' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sl-list has-2-items' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'sl-item' },
                                        _react2.default.createElement(_Cm02ContentTile2.default, { title: 'Stats and Proofs',
                                            description: 'Read on Statistics and Proofs of implanrs',
                                            path: '/intl/stats-and-proofs',
                                            additionalClass: 'is-shaded is-small' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'sl-item' },
                                        _react2.default.createElement(_Cm02ContentTile2.default, { title: 'Download Brochures',
                                            description: 'Download a brochures od Cochlear\'s products',
                                            path: '/intl/download-brochures',
                                            additionalClass: 'is-shaded is-small' })
                                    )
                                )
                            ),
                            _react2.default.createElement(_ClinicNearYou2.default, { title: 'Find your nearest clinic',
                                description: 'Type in your postcode to find a Cochlear Clinic that is nearest to you.',
                                additionalClass: 'is-shaded is-medium' })
                        )
                    )
                ),
                _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' })
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            return store.dispatch(actions.getHome());
        }
    }]);

    return HearingAidVsCochlearImplant;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HearingAidVsCochlearImplant);

/***/ }),
/* 34 */
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

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Body = __webpack_require__(22);

var _Body2 = _interopRequireDefault(_Body);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

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
        key: 'render',
        value: function render() {
            var countryChange = this.props.match.params.country !== this.props.headerCountry;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle,
                    country: this.props.headerCountry,
                    countryParams: this.props.match.params.country,
                    countryUpdate: countryChange }),
                _react2.default.createElement(_Body2.default, null),
                _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle,
                    country: this.props.footerCountry,
                    countryParams: this.props.match.params.country,
                    countryUpdate: countryChange })
            );
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
/* 35 */
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

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Cm02ContentTile = __webpack_require__(11);

var _Cm02ContentTile2 = _interopRequireDefault(_Cm02ContentTile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
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
                        'Home Page'
                    )
                ),
                _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' }),
                _react2.default.createElement(
                    'div',
                    { className: 'l-content-container cf l-padding' },
                    _react2.default.createElement(_Cm02ContentTile2.default, { title: 'Treating Hearing Loss',
                        description: 'Act early and discuss all your options with a health professional.',
                        path: '/intl/treating-hearing-loss',
                        additionalClass: 'is-shaded is-large' })
                ),
                _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' })
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            return store.dispatch(actions.getHome());
        }
    }]);

    return HomePage;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HomePage);

/***/ }),
/* 36 */
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

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Bodysecond = __webpack_require__(23);

var _Bodysecond2 = _interopRequireDefault(_Bodysecond);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

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
        key: 'render',
        value: function render() {
            var countryChange = this.props.match.params.country !== this.props.headerCountry;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle,
                    country: this.props.headerCountry,
                    countryParams: this.props.match.params.country,
                    countryUpdate: countryChange }),
                _react2.default.createElement(_Bodysecond2.default, null),
                _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle,
                    country: this.props.footerCountry,
                    countryParams: this.props.match.params.country,
                    countryUpdate: countryChange })
            );
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
/* 37 */
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

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Bodythird = __webpack_require__(24);

var _Bodythird2 = _interopRequireDefault(_Bodythird);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

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
        key: 'render',
        value: function render() {
            var countryChange = this.props.match.params.country !== this.props.headerCountry;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle,
                    country: this.props.headerCountry,
                    countryParams: this.props.match.params.country,
                    countryUpdate: countryChange }),
                _react2.default.createElement(_Bodythird2.default, null),
                _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle,
                    country: this.props.footerCountry,
                    countryParams: this.props.match.params.country,
                    countryUpdate: countryChange })
            );
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
/* 38 */
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

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Cm01RichText = __webpack_require__(10);

var _Cm01RichText2 = _interopRequireDefault(_Cm01RichText);

var _BreadCrumbs = __webpack_require__(9);

var _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);

var _HeaderLandingBanner = __webpack_require__(7);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatsAndProofs = function (_Component) {
    _inherits(StatsAndProofs, _Component);

    function StatsAndProofs() {
        _classCallCheck(this, StatsAndProofs);

        return _possibleConstructorReturn(this, (StatsAndProofs.__proto__ || Object.getPrototypeOf(StatsAndProofs)).apply(this, arguments));
    }

    _createClass(StatsAndProofs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'l-layout l-one-column cf' },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'Stats and Proofs'
                    )
                ),
                _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' }),
                _react2.default.createElement(_BreadCrumbs2.default, null),
                _react2.default.createElement(
                    'article',
                    null,
                    _react2.default.createElement(_HeaderLandingBanner2.default, { title: 'Statistics and Proofs',
                        description: 'There is a range of accessories for the Cochlear\u2122 Baha\xAE 3 Sound Processor (BP100) that allow you to customise your sound processor to fit your lifestyle.',
                        additionalClass: 'is-dark' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'l-content-container cf l-padding' },
                        _react2.default.createElement(
                            'div',
                            { className: 'l-content-column' },
                            _react2.default.createElement(
                                'main',
                                { id: 'main', tabIndex: '-1', role: 'main', className: 'l-main' },
                                _react2.default.createElement(_Cm01RichText2.default, null)
                            )
                        )
                    )
                ),
                _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' })
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            return store.dispatch(actions.getHome());
        }
    }]);

    return StatsAndProofs;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(StatsAndProofs);

/***/ }),
/* 39 */
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

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _GlobalHeader = __webpack_require__(6);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = __webpack_require__(5);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _Cm02ContentTile = __webpack_require__(11);

var _Cm02ContentTile2 = _interopRequireDefault(_Cm02ContentTile);

var _Cm01RichText = __webpack_require__(10);

var _Cm01RichText2 = _interopRequireDefault(_Cm01RichText);

var _BreadCrumbs = __webpack_require__(9);

var _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);

var _HeaderLandingBanner = __webpack_require__(7);

var _HeaderLandingBanner2 = _interopRequireDefault(_HeaderLandingBanner);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreatingHearingLoss = function (_Component) {
    _inherits(TreatingHearingLoss, _Component);

    function TreatingHearingLoss() {
        _classCallCheck(this, TreatingHearingLoss);

        return _possibleConstructorReturn(this, (TreatingHearingLoss.__proto__ || Object.getPrototypeOf(TreatingHearingLoss)).apply(this, arguments));
    }

    _createClass(TreatingHearingLoss, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'l-layout l-one-column cf' },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'Treating Hearing Loss'
                    )
                ),
                _react2.default.createElement(_GlobalHeader2.default, { title: this.props.headerTitle, country: this.props.headerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' }),
                _react2.default.createElement(_BreadCrumbs2.default, null),
                _react2.default.createElement(
                    'article',
                    null,
                    _react2.default.createElement(_HeaderLandingBanner2.default, { title: 'Treating Hearing Loss',
                        description: 'Act early and discuss all your options with a health professional.',
                        additionalClass: 'is-dark' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'l-content-container cf l-padding' },
                        _react2.default.createElement(
                            'div',
                            { className: 'l-content-column' },
                            _react2.default.createElement(
                                'main',
                                { id: 'main', tabIndex: '-1', role: 'main', className: 'l-main' },
                                _react2.default.createElement(_Cm01RichText2.default, null),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sl' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'sl-list has-4-items' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sl-item' },
                                            _react2.default.createElement(_Cm02ContentTile2.default, { title: 'Arnold\'s Story',
                                                description: 'Sudden single-sided deafness left musician Arnold feeling lonely and disconnected from his passions. Discover how a Baha\xAE implant restored his love of life',
                                                path: 'http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/arnolds-story',
                                                image: 'http://www.cochlear.com/wps/wcm/connect/74da8ac9-735b-4fb8-a41e-1bff9726f7dc/EN-Testimonial-Baha-Arnold-and-wife-210x140.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-74da8ac9-735b-4fb8-a41e-1bff9726f7dc-l5rBD5G',
                                                additionalClass: 'is-shaded is-small' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sl-item' },
                                            _react2.default.createElement(_Cm02ContentTile2.default, { title: 'Bronwyn\'s story',
                                                description: 'Bronwyn suffered from high-frequency hearing loss. Discover how the unique Hybrid\u2122 electro-acoustic system improved her speech understanding and appreciation of music.',
                                                image: 'http://www.cochlear.com/wps/wcm/connect/67fc39c5-b064-421a-aa5d-8f623558b756/testimonial_electroacoustic_hybrid_bronwynleggate_240x140.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-67fc39c5-b064-421a-aa5d-8f623558b756-jB186lj',
                                                path: 'http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/bronwyns-story',
                                                additionalClass: 'is-shaded is-small' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sl-item' },
                                            _react2.default.createElement(_Cm02ContentTile2.default, { title: 'Jude\'s story',
                                                description: 'Jude was struck with sudden deafness in both ears just before his 50th birthday. Learn how a cochlear implant restored his ability to communicate with his friends, family and colleagues.',
                                                path: 'http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/judes-story',
                                                image: 'http://www.cochlear.com/wps/wcm/connect/b25adb27-f84e-46a3-b684-b80d24122120/testimonial_cochlearimplant_judedemello_210x140.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b25adb27-f84e-46a3-b684-b80d24122120-l5rFEoh',
                                                additionalClass: 'is-shaded is-small' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sl-item' },
                                            _react2.default.createElement(_Cm02ContentTile2.default, { title: 'Bob\'s story',
                                                description: 'Bob said he didn\u2019t know how good life would be after a cochlear implant. Read about the changes he\u2019s noticed since treating his hearing loss.',
                                                image: 'http://www.cochlear.com/wps/wcm/connect/0023d13c-be36-439c-ba68-8834b0f8b0ef/testimonial_bobmillar_210x140.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0023d13c-be36-439c-ba68-8834b0f8b0ef-l3RwDzL',
                                                path: 'http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/bobs-story',
                                                additionalClass: 'is-shaded is-small' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(_Cm02ContentTile2.default, { title: 'Hearing Aid vs Cochlear Implant',
                                    description: 'A cochlear implant is an electronic medical device that does the work of damaged parts of the inner ear (cochlea) to provide sound signals to the brain.',
                                    path: '/intl/hearing-aid-vs-cochlear-implant',
                                    image: 'http://www.cochlear.com/wps/wcm/connect/ce8cb1a1-4fc8-47a8-a84e-8f59b646aa1e/lifestyle_cochlearimplant_motherandyounggirl_300x300.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ce8cb1a1-4fc8-47a8-a84e-8f59b646aa1e-jB18lfj',
                                    additionalClass: 'is-shaded is-large' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(_GlobalFooter2.default, { title: this.props.footerTitle, country: this.props.footerCountry, countryParams: this.props.match.params.country, countryUpdate: 'false' })
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                params = _ref.params;

            return store.dispatch(actions.getHome());
        }
    }]);

    return TreatingHearingLoss;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(TreatingHearingLoss);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(19);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _app = __webpack_require__(16);

var _app2 = _interopRequireDefault(_app);

var _reactDom = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _combine = __webpack_require__(18);

var _combine2 = _interopRequireDefault(_combine);

var _reactRouter = __webpack_require__(21);

var _thunk = __webpack_require__(17);

var _thunk2 = _interopRequireDefault(_thunk);

var _routes = __webpack_require__(12);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = userReducer;

var _userTypes = __webpack_require__(15);

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
            return _extends({}, state, { headerTitle: action.payload['title'] });
        case _userTypes.Types.UPDATE_HEADER_COUNTRY:
            return _extends({}, state, { headerCountry: action.payload.country });
        case _userTypes.Types.UPDATE_FOOTER_COUNTRY:
            return _extends({}, state, { footerCountry: action.payload.country });
        case _userTypes.Types.UPDATE_FOOTER:
            return _extends({}, state, { footerTitle: action.payload['title'] });
        case _userTypes.Types.UPDATE_HOME:
            return _extends({}, state, { bodyTitle: action.payload['title'] });
        case _userTypes.Types.UPDATE_HOMESECOND:
            return _extends({}, state, { bodysecondTitle: action.payload['title'] });
        case _userTypes.Types.UPDATE_HOMETHIRD:
            return _extends({}, state, { bodythirdTitle: action.payload['title'] });
        default:
            return state;
    }
}

/***/ }),
/* 43 */
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

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

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
/* 44 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map