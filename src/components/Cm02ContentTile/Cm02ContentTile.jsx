import React from 'react';

class Cm02ContentTile extends React.Component {


    render() {

        let wrapLink = (child) => {
          return (!!this.props.embed || !this.props.path) ? child : <a href={`${this.props.path}`}> {child} </a>;
        }

        return (
            <div className={`cm cm-content-tile ${this.props.additionalClass}`}>
                {
                  wrapLink(
                    <span>

                        <span className="cm-image-block-link">
                          {!!this.props.embed ?
                              <div className="video-embed">
                                  <iframe width="560" height="315" src={`${this.props.embed}`} frameBorder="0"  allow="encrypted-media" allowFullScreen></iframe>
                              </div> :
                              <img className="img" src={`${this.props.image}`} alt={this.props.imageAlt}/>
                          }
                        </span>


                        <span className="content">
                            <h3>{this.props.title}</h3>
                            {/*
                            <% if vars[:subheading] %>
                            <%= partial(vars[:subheading][:path], :locals => vars[:subheading][:locals]) %>
                            <% end %>
                            */}
                            <p>{this.props.description}</p>

                            {!!this.props.path && <span className="cta">Read more</span>}

                        </span>
                    </span>
                  )
                }
            </div>
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
