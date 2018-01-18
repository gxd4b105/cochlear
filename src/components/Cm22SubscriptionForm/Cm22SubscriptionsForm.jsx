import React from 'react';

class Cm22SubscriptionsForm extends React.Component {
    render() {

        return (

    <section className={`cm cm-subscription-banner ${this.props.additionalClass}`}>
        <div className="l-padding">
            <form className="fn_validate" action="/intl/clinic-finder">
                <div className="fn_validate_summary"></div>
                <fieldset>
                    <div className="title-text-container">
                        <legend>{this.props.title}</legend>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="input-container">
                        <div className="ctrl-holder width-l">
                            <label htmlFor="txt-firstname">First Name<em>*<span className="vh">Required field</span></em></label>
                            <div className="ctrl">
                                <input name="txt-firstname" id="txt-firstname" className="text" data-rule-required="true" />
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
                        <div className="btn-holder">
                            <button role="button" type="submit" className="fn_validate_submit cta">Subscribe</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </section>


        );
    }
}

export default Cm22SubscriptionsForm;
