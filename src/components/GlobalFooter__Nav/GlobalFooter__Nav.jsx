import React from 'react';
import GlobalFooter__Nav__Item from '../GlobalFooter__Nav__Item/GlobalFooter__Nav__Item.jsx';

class GlobalFooter__Nav extends React.Component {
    render() {

        let properties = this.props.propObj;
        let itemsArray = properties.links;  
        const itemsList = itemsArray.map( (item, index) => { 
            return (<GlobalFooter__Nav__Item propObj={item} key={index} />);
        });

        return (
            <li>
                <h2>{properties.title}</h2>

                <ul className='nav-footer-item'>
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
