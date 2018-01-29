import React from 'react';
import axios from 'axios';

if (process.env.BROWSER) {
    require("./BrochureDownload.scss");
}


class BrochureDownload extends React.Component {


    constructor(props) {
        super(props);

        this.state =   {
            selectDeliveryOption: '----',
            downloadDisplay: 'none'
        };

        this.handleDeliveryOption = this.handleDeliveryOption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    

    handleDeliveryOption(event) {
        this.setState({selectDeliveryOption: event.target.value});

        let deliveryOptions = document.getElementById("delivery-common");
        let deliveryAddress = document.getElementById("delivery-address");

        if (event.target.value === "mail") {
            deliveryOptions.style.display = "block";
            deliveryAddress.style.display = "block";
        } else if (event.target.value === "email") {
            deliveryOptions.style.display = "block";
            deliveryAddress.style.display = "none";

        } else if (event.target.value === "direct") {
            deliveryOptions.style.display = "block";
            deliveryAddress.style.display = "none";

        } else {
            deliveryOptions.style.display = "none";
        }
        //alert(this.state.selectDeliveryOption);
    }

    validation(){
        console.log('test');
        console.log(document.getElementById('txt-firstname').value);

        let errorState = false;
        let firstName = document.getElementById('txt-firstname');
        let lastName = document.getElementById('txt-lastname');
        let email = document.getElementById('txt-email');
        let street = document.getElementById('txt-street');
        let suburb = document.getElementById('txt-suburb');
        let postcode = document.getElementById('txt-postcode'); 

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


    }
    return errorState;

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectDeliveryOption);
        if(!this.validation()){
            console.log('this is valid');


            const url = 'https://api.myjson.com/bins/govgt';
            
                    
                    axios.get(url)
                    .then(res => {
                        console.log('RES is ', res);
                        if(res.data.response === 'success'){
                            console.log('SUCCESS');
                            //document.getElementById('download').display='block';
                            //this.state.downloadDisplay="block";

                            this.setState({downloadDisplay: 'block'});
                        }
                    });






        } else {
            console.log('this is NOT valid');
        }
        
        

        
    }



    render() {

        return (

            <section className={`cm cm-subscription-banner ${this.props.additionalClass}`}>
                <div className="l-padding">
                    <form onSubmit={this.handleSubmit} className="fn_validate" action="/">
                        <div className="fn_validate_summary"></div>
                        <fieldset>
                            <div className="title-text-container">
                                <legend>{this.props.title}</legend>
                                <p>{this.props.description}</p>
                            </div>
                            <div className="input-container">
                                <div className="ctrl-holder width-l">
                                    <label htmlFor="txt-delivery">How do you want to receive the brochure?<em>*<span className="vh">Required field</span></em></label>
                                    <div className="ctrl">
                                        <select value={this.state.selectDeliveryOption}  onChange={this.handleDeliveryOption} ref="selectRegion" name="txt-delivery" id="txt-delivery" className="select" data-rule-required="true">
                                            <option value="----">----</option>
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
                                        <label htmlFor="txt-firstname">First Name<em>*<span className="vh">Required field</span></em></label>
                                        <div className="ctrl">
                                            <input name="txt-firstname" id="txt-firstname" className="text" data-rule-required="true" />
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ctrl-holder width-l">
                                        <label htmlFor="txt-lastname">Last Name<em>*<span className="vh">Required field</span></em></label>
                                        <div className="ctrl">
                                            <input name="txt-lastname" id="txt-lastname" className="text" data-rule-required="true" />
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ctrl-holder width-l">
                                        <label htmlFor="txt-email">Email address<em>*<span className="vh">Required field</span></em></label>
                                        <div className="ctrl">
                                            <input name="txt-email" id="txt-email" className="text" type="email" data-rule-required="true" />
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>

                                    <div id="delivery-address" className="delivery-address">
                                        <div className="ctrl-holder width-l">
                                            <label htmlFor="txt-street">Street Number and Name<em>*<span className="vh">Required field</span></em></label>
                                            <div className="ctrl">
                                                <input name="txt-street" id="txt-street" className="text" type="text" data-rule-required="true" />
                                                <div className="status-msg">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctrl-holder width-l">
                                            <label htmlFor="txt-suburb">Suburb / City<em>*<span className="vh">Required field</span></em></label>
                                            <div className="ctrl">
                                                <input name="txt-suburb" id="txt-suburb" className="text" type="text" data-rule-required="true" />
                                                <div className="status-msg">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctrl-holder width-l">
                                            <label htmlFor="txt-postcode">Postcode<em>*<span className="vh">Required field</span></em></label>
                                            <div className="ctrl">
                                                <input name="txt-postcode" id="txt-postcode" className="text" type="text" data-rule-required="true" />
                                                <div className="status-msg">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ctrl-holder width-l">
                                        <p>Have you recently experienced a drop/ decline in hearing?</p>
                                        <div className="ctrl">
                                            <label htmlFor="txt-question-yes">
                                                Yes &nbsp;
                                                <input name="txt-question" id="txt-question-yes" className="radio" type="radio" />
                                            </label>
                                            <label htmlFor="txt-question-no">
                                                No &nbsp;
                                                <input name="txt-question" id="txt-question-no" className="radio" type="radio" />
                                            </label>
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ctrl-holder width-l">
                                        <div className="ctrl">
                                            <label htmlFor="txt-mandatory-check">
                                                Consent for capturing details &nbsp;
                                                <input name="txt-mandatory-check" id="txt-mandatory-check" className="checkbox" type="checkbox" />
                                            </label>
                                            <div className="status-msg">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-holder">
                                        <button role="button" type="submit" className="fn_validate_submit cta">Send to me</button>
                                    </div>
                                </div>

                            </div>
                        </fieldset>
                    </form>
                    <div id="download" style={{display: this.state.downloadDisplay}}>
                    <p>Your form was successfully sent! Please click the link below to download your brochure.</p>
                    <p><a href='#'>Brochure Link</a></p>
                </div>
                </div>
            </section>


        );
    }
}

export default BrochureDownload;
