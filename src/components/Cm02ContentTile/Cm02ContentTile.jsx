import React from 'react';

class Cm02ContentTile extends React.Component {


    render() {

        let copyReturn = ()=> {
            if (this.props.image.includes('youtube')) {
                return (<div className="video-embed"><iframe width="560" height="315" src={`${this.props.image}`} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe></div>);
            } else {
                return (<a href={`${this.props.path}`} className="image">
                    <img className="img" src={`${this.props.image}`} alt={this.props.imageAlt} />
                </a>);
            }
        }

        return (
            <section className={`cm cm-content-tile ${this.props.additionalClass}`}>
                <div className="cm-image-block-link">
                    {/*  <% end %> */}
                    {copyReturn()}
                    {/*  <% if vars[:image] != false %> */}

                    {/*  <% end %> */}

                    <div className="content">
                        {/*  <% if vars[:title] %>*/}<h1> <a href={`${this.props.path}`} >{this.props.title}</a> </h1> {/*  <% end %> */}
                        {/*
                        <% if vars[:subheading] %>
                        <%= partial(vars[:subheading][:path], :locals => vars[:subheading][:locals]) %>
                        <% end %>
                        */}
                        <p>{this.props.description}</p>

                        <a href={`${this.props.path}`} className="cta">Read more</a>

                    </div>
                </div>
            </section>
        );
    }
}

Cm02ContentTile.defaultProps = {
    title: "CM02 Content Tile",
    path: "#",
    description:"This is a description",
    image: "http://fed.donlineclients.com/assets/img/placeholder/landing-hero.jpg",
    imageAlt: "Content tile image alt text",
    additionalClass: ""
};

export default Cm02ContentTile;
