import React from 'react';

class Cm02ContentTile extends React.Component {


    render() {

        let copyReturn = ()=> {
            if (this.props.embed !== '') {
                return (<div className="video-embed"><iframe width="560" height="315" src={`${this.props.embed}`} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe></div>);
            } else {
                return (<a href={`${this.props.path}`} className="image">
                    <img className="img" src={`${this.props.image}`} alt={this.props.imageAlt} />
                </a>);
            }
        }

        let showReadMore = () => {
            if (this.props.path !== '') {
                return (<a href={`${this.props.path}`} className="cta">Read more</a>)
            }
        }

        let showTitle = () => {
            if (this.props.path !== '') {
                return (<h3><a href={`${this.props.path}`}>{this.props.title}</a></h3>)
            } else {
                return (<h3>{this.props.title}</h3>)
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
                        {showTitle()}
                        {/*
                        <% if vars[:subheading] %>
                        <%= partial(vars[:subheading][:path], :locals => vars[:subheading][:locals]) %>
                        <% end %>
                        */}
                        <p>{this.props.description}</p>

                        {showReadMore()}

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
