import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from '../shared/app/app.jsx';
const app = express();
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../shared/app/redux/reducers/combine';
import { StaticRouter as Router, matchPath } from 'react-router';
import thunk from '../shared/app/redux/middleware/thunk';
import routeBank from '../shared/routes/routes';

app.use('/', express.static('./dist'));

app.use('/', (req, res) => {
	try {
		//create new redux store on each request

		const store = createStore(reducers, {}, applyMiddleware(thunk));
		let foundPath = null;
		// match request url to our React Router paths and grab component
		let { path, component } = routeBank.routes.find(
			({ path, exact }) => {
				foundPath = matchPath(req.url,
					{
						path,
						exact,
						strict: false
					}
				)
				return foundPath;
			}) || {};
		// safety check for valid component, if no component we initialize an empty shell.
		if (!component)
			component = {};
		// safety check for fetchData function, if no function we give it an empty promise
		if (!component.fetchData)
			component.fetchData = () => new Promise(resolve => resolve());
		// meat and bones of our isomorphic application: grabbing async data

		let p1 = component.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
		let p2 = App.fetchData({ store, params: (foundPath ? foundPath.params : {}) });

		Promise.all([p1, p2]).then(values => { 
			//await component.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
			//await App.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
			//get store state (js object of entire store)
			console.log('store is ', store.getState());
			let preloadedState = store.getState();
			//context is used by react router, empty by default
			let context = {};
			const html = ReactDOM.renderToString(
				<Provider store={store}>
					<Router context={context} location={req.url}>
						<App />
					</Router>
				</Provider>
			)
			//render helmet data aka meta data in <head></head>
			const helmetData = helmet.renderStatic();
			//check context for url, if url exists then react router has ran into a redirect
			if (context.url) {
				//process redirect through express by redirecting
				res.redirect(context.status, 'http://' + req.headers.host + context.url);
			} else if (foundPath && foundPath.path == '/404') {
				//if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
				res.status(404).send(renderFullPage(html, preloadedState, helmetData))
			} else {
				//else send down page with initial state and meta data
				res.send(renderFullPage(html, preloadedState, helmetData))
			}
		});
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured.', {}, {}));
	}
});

const port = process.env.PORT || 9000;
app.listen(port, function () {
	console.log('app running on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet) {
	return `
    <!doctype html>
    <html>
      <head>
        <link rel="icon" href="/dist/favicon.ico" type="image/ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        
		<script type="text/javascript">
			let gtm4wp_datalayer_name = "dataLayer";
			if ( "undefined" == typeof dataLayer ) {
				dataLayer = new Array();
			}
		</script>	
        
	   <script type="text/javascript">
	    function getSubDomain() {
			let hostname = document.domain; 
			var topLevel = new RegExp('\.(com.au|co.uk|me|com|us|es|fr|it)');
			var tmpDomain = hostname.replace(topLevel, '');
			var mainDomain = tmpDomain.split('.').pop();
			var subDomain = tmpDomain.split(mainDomain)[0];
			return subDomain;
		}

		function getCountryAndLanguage(){
			return document.getElementById('nav-region-dropdown__cta').innerHTML;
		}

		function getDevice(){
			if( navigator.userAgent.match(/Android/i)
				|| navigator.userAgent.match(/webOS/i)
				|| navigator.userAgent.match(/iPhone/i)
				|| navigator.userAgent.match(/iPod/i)
				|| navigator.userAgent.match(/BlackBerry/i)
				|| navigator.userAgent.match(/Windows Phone/i)
			){
	    		return 'mobile';
			} else if (
				navigator.userAgent.match(/Mac/i)
				|| navigator.userAgent.match(/Linux/i)
				|| navigator.userAgent.match(/Win/i)
				|| navigator.userAgent.match(/Unix/i)
			){
				return 'desktop';
			} else {
				return 'tablet';
			}
				  
		}

		function dataLayerPush(){
			
			let subDomain=getSubDomain();

			dataLayer.push({
				page:{
					pageInfo:{			
						pageID: "",
						pageTitle: window.document.title,
						pageURL: window.document.location.href,
						publicationDate: "",
						updatedDate: document.lastModified,
						domain:document.domain,
						subDomain: subDomain
					},
					category: {
						pageType: ""                       // "Home Page", "Product Page", "Campaign Page"				
					}
				},
				user: {
					profileInfo: {
						visitorType: "",                    //”New”, “Returning”
						segment: ""                         // Definitions TBC
					},
				}
			}); 
		}

		function dataLayerPushCountry(country, language){
			dataLayer.push({
				page: {
					pageInfo:{ 
						country: country,                     // ISO 3166 recommended
						language: language						// ISO 3166 recommended
					}
				}
			});
		}

		function dataLayerPushCategories(categoriesObj){
			dataLayer.push({
				page:{
					category: categoriesObj
				}
			});
		}

		function dataLayerPushDevice(){
			let device=getDevice();
			dataLayer.push({
				page:{
					pageInfo: { 
						sysEnv: device
					} 
				}
			});
		}

		window.addEventListener("load", function(event) {
			console.log('Loaded');
			dataLayerPushDevice();
			dataLayerPush(); 
		});

	</script>	
        
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
		${helmet.link.toString()}
		
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </head>
      <body>
		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVM6MWV"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->      
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
		<script src="/app.bundle.js"></script>
		<link rel="stylesheet" href="/style.css"></link>
        
		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-PVM6MWV');</script>
		<!-- End Google Tag Manager -->        
      </body>
    </html>
    `
}
