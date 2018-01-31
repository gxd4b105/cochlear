import React from 'react';


class HeaderLandingBanner extends React.Component {
    render () {

        return (

            <header className={`landing-banner ${this.props.additionalClass}`}>
                <div className="l-padding">
                    <div className="content">
                        <span className="content-grouper">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </span>
                    </div>

                    {/*<% if !vars[:image].nil? %>*/}
                    <div className="image">
                        <img className="img" src={`${this.props.image}`} alt={this.props.imageAlt} />
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
    additionalClass: ""
};

export default HeaderLandingBanner;