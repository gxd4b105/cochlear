import React from 'react';



class HeaderLandingBanner extends React.Component {
    render () {

        return (

            <header className={`landing-banner ${this.props.additionalClass}`}>
                <div className='l-padding'>
                    <div className='content'>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>

                    {/*<% if !vars[:image].nil? %>*/}
                    <div className='image' style={{backgroundImage:'url('+this.props.image+')'}}>
                        <span className='vh'>Image: {this.props.imageAlt}</span>
                    </div>
                    {/*<% end %>*/}
                </div>
            </header>

        );
    }
}

HeaderLandingBanner.defaultProps = {
    title: "Landing page title",
    description:"",
    image: "http://fed.donlineclients.com/assets/img/placeholder/landing-hero.jpg",
    imageAlt: "Landing page banner alt text",
    additionalClass: "is-dark"
};

export default HeaderLandingBanner;