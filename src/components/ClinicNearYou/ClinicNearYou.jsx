import React from 'react';

class ClinicNearYou extends React.Component {
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
                            <label htmlFor="txt-postcode">Postcode<em>*<span className="vh">Required field</span></em></label>
                            <div className="ctrl">
                                <input name="txt-postcode" id="txt-postcode" className="text" data-rule-required="true" />
                                    <div className="status-msg">
                                    </div>
                            </div>
                        </div>
                        <div className="btn-holder">
                            <button role="button" type="submit" className="fn_validate_submit cta">Search</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </section>


        );
    }
}

export default ClinicNearYou;
