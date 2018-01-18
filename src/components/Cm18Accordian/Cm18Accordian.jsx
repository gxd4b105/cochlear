import React from 'react';

if (process.env.BROWSER) {
    require("./Cm18Accordian.scss");
}

class Cm18Accordian extends React.Component {
    render() {

        const children = this.props.children;

        return (
            <section className="cm cm-accordion">
                <h1>{this.props.title}</h1>
                <ul className="accordion-list">
                    {React.Children.map(children, (child) => {
                        return  child
                    })}
                </ul>
            </section>
        );
    }
}

export default Cm18Accordian;
