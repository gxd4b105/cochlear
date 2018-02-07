import React from 'react';


class MediaContainer extends React.Component {
    render() {
        return (
            <div className="cm cm-media-container">
                <figure>
                  { !!this.props.embedVideo ?
                    (<div className="video-embed">
                      <iframe width="560" height="315" src={`${this.props.embedVideo}`} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
                    </div>) : (!!this.props.imageLink &&
                    <div className="image-embed">
                      <img src={this.props.imageLink}/>
                    </div>)
                  }
                  <figcaption>{this.props.captionText}</figcaption>
                </figure>
                { /*!!this.props.imageLink &&
                  <figure>
                    <div className="image-embed">
                      <img src={this.props.imageLink}/>
                    </div>
                    <figcaption>{this.props.captionText}</figcaption>
                  </figure>*/
                }
            </div>
        );
    }
}

export default MediaContainer;
