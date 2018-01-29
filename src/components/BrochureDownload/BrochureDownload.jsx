import React from 'react';

if (process.env.BROWSER) {
    require("./BrochureDownload.scss");
}


class BrochureDownload extends React.Component {


    constructor(props) {
        super(props);

        this.state =   {
            selectDeliveryOption: '----'
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

    handleSubmit(event) {
        alert(this.state.selectDeliveryOption);
        event.preventDefault();
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
                                            <label htmlFor="txt-suburb">Suburb<em>*<span className="vh">Required field</span></em></label>
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
                </div>
            </section>


        );
    }
}

export default BrochureDownload;
