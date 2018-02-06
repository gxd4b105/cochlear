import React from 'react';


class MediaContainer extends React.Component {
    render() {
        const children = this.props.children;
        return (
            <div className="cm cm-media-container">
                { !!this.props.embedVideo &&
                  <div className="video-embed">
                    <iframe width="560" height="315" src={`${this.props.embedVideo}`} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
                  </div>
                }
                <p>{this.props.quoteText}</p>
            </div>
        );
    }
}

export default MediaContainer;
