import React from 'react';
import axios from 'axios';

// if (process.env.BROWSER) {
//     require("./BrochureDownload.scss");
// }


class BrochureDownload extends React.Component {


    constructor(props) {
        super(props);

        this.state =   {
            selectDeliveryOption: '----',
            hasSubmitted: false,
            buttonText: 'Submit',
            title: this.props.title,
            description: this.props.description,
            isError: false,
        };

        this.handleDeliveryOption = this.handleDeliveryOption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);

    }



    handleDeliveryOption(event) {
        this.setState({selectDeliveryOption: event.target.value});

        let deliveryOptions = document.getElementById("delivery-common");
        let deliveryAddress = document.getElementById("delivery-address");

        if (event.target.value === "mail") {
            deliveryOptions.style.display = "block";
            deliveryAddress.style.display = "block";
            this.setState({buttonText: 'Submit'});
        } else if (event.target.value === "email") {
            deliveryOptions.style.display = "block";
            deliveryAddress.style.display = "none";
            this.setState({buttonText: 'Submit'});

        } else if (event.target.value === "direct") {
            deliveryOptions.style.display = "block";
            deliveryAddress.style.display = "none";
            this.setState({buttonText: 'Submit'});

        } else {
            deliveryOptions.style.display = "none";
        }
        //alert(this.state.selectDeliveryOption);
    }

    validation(){

        let errorState = false;
        let firstName = document.getElementById('FirstName');
        let lastName = document.getElementById('LastName');
        let email = document.getElementById('Email');
        let street = document.getElementById('address');
        let street2 = document.getElementById('secondStreetAddress');
        let suburb = document.getElementById('city');
        let state = document.getElementById('state');
        let postcode = document.getElementById('postalCode');
        let country = document.getElementById('Country');

        if (firstName.value === '' || firstName.value.length > 255 || !/^[a-zA-Z]*$/g.test(firstName.value)) {
            let errorMessage = '';
            errorMessage = firstName.value === '' ? errorMessage += '<p style="color:red;">This field is required</p>' : errorMessage;
            errorMessage = firstName.value.length > 255 ? errorMessage += '<p style="color:red;">You must have no more than 255 characters</p>' : errorMessage;
            errorMessage = !/^[a-zA-Z]*$/g.test(firstName.value) ? errorMessage += '<p style="color:red;">You must only use A to Z characters</p>' : errorMessage;

            if (errorMessage !== '') {
                errorState = true;
                firstName.nextSibling.innerHTML = errorMessage;
                firstName.nextSibling.style.display = 'block';
                firstName.style.border = '1px solid red';
            };
        } else {
            firstName.nextSibling.innerHTML = '';
            firstName.nextSibling.style.display = 'none';
            firstName.style.border = '0';
        }

        if (lastName.value === '' || lastName.value.length > 255 || !/^[a-zA-Z]*$/g.test(lastName.value)) {
            let errorMessage = '';
            errorMessage = lastName.value === '' ? errorMessage += '<p style="color:red;">This field is required</p>' : errorMessage;
            errorMessage = lastName.value.length > 255 ? errorMessage += '<p style="color:red;">You must have no more than 255 characters</p>' : errorMessage;
            errorMessage = !/^[a-zA-Z]*$/g.test(lastName.value) ? errorMessage += '<p style="color:red;">You must only use A to Z characters</p>' : errorMessage;

            if (errorMessage !== '') {
                errorState = true;
                lastName.nextSibling.innerHTML = errorMessage;
                lastName.nextSibling.style.display = 'block';
                lastName.style.border = '1px solid red';
            };
        } else {
            lastName.nextSibling.innerHTML = '';
            lastName.nextSibling.style.display = 'none';
            lastName.style.border = '0';
        }

        if (email.value === '' || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email.value)) {
            let errorMessage = '';
            errorMessage = email.value === '' ? errorMessage += '<p style="color:red;">This field is required</p>' : errorMessage;
            errorMessage = !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(lastName.value) ? errorMessage += '<p style="color:red;">You must enter a valid email</p>' : errorMessage;

            if (errorMessage !== '') {
                errorState = true;
                email.nextSibling.innerHTML = errorMessage;
                email.nextSibling.style.display = 'block';
                email.style.border = '1px solid red';
            };
        } else {
            email.nextSibling.innerHTML = '';
            email.nextSibling.style.display = 'none';
            email.style.border = '0';
        }



        // postal ADDRESS validation

        if(this.state.selectDeliveryOption === 'mail'){



        if (street.value === '' || street.value.length > 255) {
            let errorMessage = '';
            errorMessage = street.value === '' ? errorMessage += '<p style="color:red;">This field is required</p>' : errorMessage;
            errorMessage = street.value.length > 255 ? errorMessage += '<p style="color:red;">You must have no more than 255 characters</p>' : errorMessage;

            if (errorMessage !== '') {
                errorState = true;
                street.nextSibling.innerHTML = errorMessage;
                street.nextSibling.style.display = 'block';
                street.style.border = '1px solid red';
            };
        } else {
            street.nextSibling.innerHTML = '';
            street.nextSibling.style.display = 'none';
            street.style.border = '0';
        }

        if (suburb.value === '' || suburb.value.length > 255) {
            let errorMessage = '';
            errorMessage = suburb.value === '' ? errorMessage += '<p style="color:red;">This field is required</p>' : errorMessage;
            errorMessage = suburb.value.length > 255 ? errorMessage += '<p style="color:red;">You must have no more than 255 characters</p>' : errorMessage;

            if (errorMessage !== '') {
                errorState = true;
                suburb.nextSibling.innerHTML = errorMessage;
                suburb.nextSibling.style.display = 'block';
                suburb.style.border = '1px solid red';
            };
        } else {
            suburb.nextSibling.innerHTML = '';
            suburb.nextSibling.style.display = 'none';
            suburb.style.border = '0';
        }

        if (state.value === '' || state.value.length > 255) {
            let errorMessage = '';
            errorMessage = state.value === '' ? errorMessage += '<p style="color:red;">This field is required</p>' : errorMessage;
            errorMessage = state.value.length > 255 ? errorMessage += '<p style="color:red;">You must have no more than 255 characters</p>' : errorMessage;

            if (errorMessage !== '') {
                errorState = true;
                state.nextSibling.innerHTML = errorMessage;
                state.nextSibling.style.display = 'block';
                state.style.border = '1px solid red';
            };
        } else {
            state.nextSibling.innerHTML = '';
            state.nextSibling.style.display = 'none';
            state.style.border = '0';
        }


        if (postcode.value === '' || postcode.value.length > 255) {
            let errorMessage = '';
            errorMessage = postcode.value === '' ? errorMessage += '<p style="color:red;">This field is required</p>' : errorMessage;
            errorMessage = postcode.value.length > 255 ? errorMessage += '<p style="color:red;">You must have no more than 255 characters</p>' : errorMessage;

            if (errorMessage !== '') {
                errorState = true;
                postcode.nextSibling.innerHTML = errorMessage;
                postcode.nextSibling.style.display = 'block';
                postcode.style.border = '1px solid red';
            };
        } else {
            postcode.nextSibling.innerHTML = '';
            postcode.nextSibling.style.display = 'none';
            postcode.style.border = '0';
        }

        console.log('QQQQQQQ ', country);
        console.log(country.options[country.selectedIndex].text);

        if (country.options[country.selectedIndex].text === 'Select Country' || country.options[country.selectedIndex].text.length > 255) {
            console.log('PPPPPPPPPPPPP');
            let errorMessage = '';
            errorMessage = country.options[country.selectedIndex].text === 'Select Country' ? errorMessage += '<p style="color:red;">This field is required</p>' : errorMessage;
            errorMessage = country.value.length > 255 ? errorMessage += '<p style="color:red;">You must have no more than 255 characters</p>' : errorMessage;

            if (errorMessage !== '') {
                errorState = true;
                country.nextSibling.innerHTML = errorMessage;
                country.nextSibling.style.display = 'block';
                country.style.border = '1px solid red';
            };
        } else {
            country.nextSibling.innerHTML = '';
            country.nextSibling.style.display = 'none';
            country.style.border = '0';
        }


    }
    return errorState;

    }

    serializeArray(form) {
        var field, l, s = [];
        if (typeof form == 'object' && form.nodeName == "FORM") {
            var len = form.elements.length;
            for (var i=0; i<len; i++) {
                field = form.elements[i];
                if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                    if (field.type == 'select-multiple') {
                        l = form.elements[i].options.length;
                        for (j=0; j<l; j++) {
                            if(field.options[j].selected)
                                s[s.length] = { name: field.name, value: field.options[j].value };
                        }
                    } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                        s[s.length] = { name: field.name, value: field.value };
                    }
                }
            }
        }
        return s;
      }  

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectDeliveryOption);
        if(!this.validation()){
            console.log('this is valid');


 // form is valid, so lets go ahead and prepare it for submission into marketoFormEl
 let marketoFormEl = document.getElementById('brochure-download');
 // ref: http://developers.marketo.com/javascript-api/forms/api-reference/
 MktoForms2.loadForm("//app-lon05.marketo.com", "278-UJG-550", 9524);

 //document.getElementById('download').display='block';
 //this.state.hasSubmitted="block";

 // serialize form values into an array
 let obj = this.serializeArray(marketoFormEl);

 // convert array to an object with key/value pairs as thats the format the marketo method requires
 let len = obj.length;
 let values = {};
 for (let i = 0; i < len; i++) {
     values[obj[i].name] = obj[i].value;
 }

 //Set the Marketo Form field values for submission
 MktoForms2.whenReady(function (form) {
   form.addHiddenFields(values);

   form
   // Triggers the form’s submit event. This will start the from submit flow, performing validation,
   // firing any onSubmit events, submitting the form, and firing any onSuccess events if form submission was successful.
   .submit()
   // Adds a callback that will be called when the form has been successfully submitted but before the lead is forwarded to the follow up page.
   // Can be used to prevent the lead from being forwarded to the follow up page after successful submission.
   .onSuccess(function(formObj) {
       console.log(formObj);
   });
 });

 this.setState({hasSubmitted: true});

 if(this.state.selectDeliveryOption === 'direct'){
     // this.setState({hasSubmitted: true});
     this.setState({
       title: 'Thank you!',
       description: ["Your download should automatically begin in a few seconds, but if not, click ", <a href="#">here.</a>],
     });
 } else {
     this.setState({
       title: 'Thank you!',
       description: 'We’ve recieved your information, and will delivered to your address shortly.',
     });

 }







        } else {
            console.log('this is NOT valid');
        }
    }

    resetForm() {
      this.setState({
        hasSubmitted: false,
        title: 'Request additional information',
        description: 'Fill in your details below if you\'d like us to send you more information about implantable solutions.',
      });
    }



    render() {

        return (

            <section className={`cm cm-subscription-banner ${this.props.additionalClass}`}>
                <div className="l-padding">
                    <form id="brochure-download" onSubmit={this.handleSubmit} className="fn_validate" action="/">
                        <div className="fn_validate_summary"></div>
                        <fieldset>
                            <div className="title-text-container">
                                <legend>{this.state.title}</legend>
                                <p>{this.state.description}</p>
                            </div>
                            <div className="downloadBox">
                              <p className='title'>When hearing aids are not enough</p>
                              <p className='details'>2.5MB | PDF</p>
                            </div>
                            {!this.state.hasSubmitted &&
                            <div className="input-container">
                                <div className="ctrl-holder width-l">
                                    <label htmlFor="txt-delivery">How do you want to receive the brochure?<em>*<span className="vh">Required field</span></em></label>
                                    <div className="ctrl select">
                                        <select value={this.state.selectDeliveryOption}  onChange={this.handleDeliveryOption} ref="selectRegion" name="txt-delivery" id="txt-delivery" className="select" data-rule-required="true">
                                            <option value="----">Select</option>
                                            <option value="mail">Mail</option>
                                            <option value="email">Email</option>
                                            <option value="direct">Direct Download</option>
                                        </select>
                                        <div className="status-msg">
                                        </div>
                                    </div>
                                </div>
                                <div id="delivery-common" className="delivery-common">
                                    <div className="ctrl-holder width-l">
                                        <label htmlFor="FirstName">First Name<em>*<span className="vh">Required field</span></em></label>
                                        <div className="ctrl">
                                            <input name="FirstName" id="FirstName" className="text" data-rule-required="true" onBlur="this.validation()" />
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ctrl-holder width-l">
                                        <label htmlFor="LastName">Last Name<em>*<span className="vh">Required field</span></em></label>
                                        <div className="ctrl">
                                            <input name="LastName" id="LastName" className="text" data-rule-required="true" />
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ctrl-holder width-l">
                                        <label htmlFor="Email">Email address<em>*<span className="vh">Required field</span></em></label>
                                        <div className="ctrl">
                                            <input name="Email" id="Email" className="text" type="email" data-rule-required="true" />
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>

                                    <div id="delivery-address" className="delivery-address">
                                        <div className="ctrl-holder width-l">
                                            <label htmlFor="address">Street Address 1<em>*<span className="vh">Required field</span></em></label>
                                            <div className="ctrl">
                                                <input name="address" id="address" className="text" type="text" data-rule-required="true" />
                                                <div className="status-msg">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctrl-holder width-l">
                                            <label htmlFor="secondStreetAddress">Street Address 2<em><span className="vh">Required field</span></em></label>
                                            <div className="ctrl">
                                                <input name="secondStreetAddress" id="secondStreetAddress" className="text" type="text" data-rule-required="true" />
                                                <div className="status-msg">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctrl-holder width-l">
                                            <label htmlFor="city">Suburb / City<em>*<span className="vh">Required field</span></em></label>
                                            <div className="ctrl">
                                                <input name="city" id="city" className="text" type="text" data-rule-required="true" />
                                                <div className="status-msg">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctrl-holder width-l half-width">
                                            <label htmlFor="state">State<em>*<span className="vh">Required field</span></em></label>
                                            <div className="ctrl">
                                                <input name="state" id="state" className="text" type="text" data-rule-required="true" />
                                                <div className="status-msg">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctrl-holder width-l half-width">
                                            <label htmlFor="postalCode">Postcode<em>*<span className="vh">Required field</span></em></label>
                                            <div className="ctrl">
                                                <input name="postalCode" id="postalCode" className="text" type="text" data-rule-required="true" />
                                                <div className="status-msg">
                                                </div>
                                            </div>
                                        </div>
                                <div className="ctrl-holder width-l">
                                    <label htmlFor="Country">Country<em>*<span className="vh">Required field</span></em></label>
                                    <div className="ctrl select">
                                        <select ref="selectRegion" name="Country" id="Country" className="select" data-rule-required="true">
                                        <option value="-1">Select Country</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antartica">Antartica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Island">Ashmore and Cartier Island</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option><option value="Congo, Republic of the">Congo, Republic of the</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czeck Republic">Czeck Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gambia, The">Gambia, The</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Howland Island">Howland Island</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Ireland, Northern">Ireland, Northern</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jarvis Island">Jarvis Island</option><option value="Jersey">Jersey</option><option value="Johnston Atoll">Johnston Atoll</option><option value="Jordan">Jordan</option><option value="Juan de Nova Island">Juan de Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea, North">Korea, North</option><option value="Korea, South">Korea, South</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia, Former Yugoslav Republic of">Macedonia, Former Yugoslav Republic of</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Man, Isle of">Man, Isle of</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia, Federated States of">Micronesia, Federated States of</option><option value="Midway Islands">Midway Islands</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcaim Islands">Pitcaim Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romainia">Romainia</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Scotland">Scotland</option><option value="Senegal">Senegal</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and South Sandwich Islands">South Georgia and South Sandwich Islands</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Tobago">Tobago</option><option value="Toga">Toga</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad">Trinidad</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="Uruguay">Uruguay</option><option value="USA">USA</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wales">Wales</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Yugoslavia">Yugoslavia</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                        <div className="status-msg">
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                    <div className="ctrl-holder width-l">
                                        <p>Have you recently experienced a drop/ decline in hearing?</p>
                                        <div className="ctrl">
                                            <label className="radio-container" htmlFor="txt-question-yes">
                                              Yes &nbsp;
                                              <input name="txt-question" id="txt-question-yes" className="radio" type="radio" />
                                              <span className="radiopoint"></span>
                                            </label>
                                            <label className="radio-container" htmlFor="txt-question-no">
                                              No &nbsp;
                                              <input name="txt-question" id="txt-question-no" className="radio" type="radio" />
                                              <span className="radiopoint"></span>
                                            </label>
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ctrl-holder width-l">
                                        <div className="ctrl">
                                            <label className="check-container" htmlFor="Privacy_Consent__c">
                                              Yes, I acknowledge receipt of <a href="#">Cochlear’s Notice of Privacy Practices</a>
                                              <input name="Privacy_Consent__c" id="Privacy_Consent__c" className="checkbox" type="checkbox" />
                                              <span className="checkmark"></span>
                                            </label>
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-holder">
                                        <button role="button" type="submit" className="fn_validate_submit cta">{this.state.buttonText}</button>
                                    </div>

                                </div>

                            </div>
                          }
                          {(this.state.hasSubmitted && this.state.isError) &&
                          <div className="btn-holder">
                              <button role="button" className="cta" onClick={this.resetForm}>Try again</button>
                          </div>}
                        </fieldset>
                    </form>
                </div>
            </section>


        );
    }
}

export default BrochureDownload;
