import React from 'react';
import GlobalFooter__Nav__Item from '../GlobalFooter__Nav__Item/GlobalFooter__Nav__Item.jsx';

class GlobalFooter__Nav extends React.Component {
    render() {

        let properties = this.props.propObj;
        let itemsArray = properties.links;  
        let classNames=this.props.classNames;
        const itemsList = itemsArray.map( (item, index) => { 
            return (<GlobalFooter__Nav__Item propObj={item} key={index} />);
        });

        return (
            <li className={classNames}>
                <h2>{properties.title}</h2>

                <ul >
                    { itemsList }
                </ul>
            </li>
        );
    }
}

GlobalFooter__Nav.defaultProps = {
    title: "Footer Title",
    path: "#"
}

export default GlobalFooter__Nav;
