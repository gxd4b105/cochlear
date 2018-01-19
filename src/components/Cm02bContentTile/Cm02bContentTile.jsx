import React from 'react';

class Cm02bContentTile extends React.Component {
    render() {

        return (
            <section className={`cm cm-content-tile ${this.props.additionalClass}`}>
                <div>
                    <h1>{this.props.title}</h1>
                    <div className="cm cm-rich-text" dangerouslySetInnerHTML={{ __html: this.props.body }}>

                    </div>
                    {/*  <% end %> */}
                    {/*  <% if vars[:image] != false %> */}

                    <img className="img" src={`${this.props.image}`} alt={this.props.imageAlt} />

                    {/*  <% end %> */}
                </div>
            </section>
        );
    }
}

Cm02bContentTile.defaultProps = {
    title: "CM02b Content Tile",
    body:"This is a description",
    image: "http://fed.donlineclients.com/assets/img/placeholder/landing-hero.jpg",
    imageAlt: "Content tile image alt text",
    additionalClass: ""
};

export default Cm02bContentTile;
