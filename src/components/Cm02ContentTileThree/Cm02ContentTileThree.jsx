import React from 'react';
import Cm02ContentTile from "../../components/Cm02ContentTile/Cm02ContentTile.jsx";

if (process.env.BROWSER) {
    require("./Cm02ContentTileThree.scss");
}


class Cm02ContentTileThree extends React.Component {
    render() {

        return (
            <div className={`sl ${this.props.additionalClass}`}>
                <div className="sl-list has-3-items">
                    <div className="sl-item">
                        <Cm02ContentTile    title={this.props.title01}
                                            description={this.props.description01}
                                            path={this.props.path01}
                                            image={this.props.image01}
                                            additionalClass={this.props.additionalClass01} />
                    </div>
                    <div className="sl-item">
                        <Cm02ContentTile    title={this.props.title02}
                                            description={this.props.description02}
                                            path={this.props.path02}
                                            image={this.props.image02}
                                            additionalClass={this.props.additionalClass02} />
                    </div>
                    <div className="sl-item">
                        <Cm02ContentTile    title={this.props.title03}
                                            description={this.props.description03}
                                            path={this.props.path03}
                                            image={this.props.image03}
                                            additionalClass={this.props.additionalClass03} />
                    </div>
                    <a href={this.props.ctaLink} className={`cta ${this.props.ctaClass}`}>{this.props.ctaText}</a>
                </div>
            </div>
        );
    }
}

export default Cm02ContentTileThree;
