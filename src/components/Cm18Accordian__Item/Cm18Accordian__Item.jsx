import React from 'react';

class Cm18Accordian__Item extends React.Component {
    render() {

        return (
            <li>
                <button className="js-ec-link accordion-item accordion">{this.props.title}</button>
                <div className="js-ec expandcollapse-content">
                    <p>{this.props.description}</p>
                </div>
             </li>
        );
    }
}

export default Cm18Accordian__Item;
