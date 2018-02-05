import React from 'react';
import GlobalFooter__Nav_Social__Item from '../GlobalFooter__Nav__Social__Item/GlobalFooter__Nav__Social__Item.jsx';

class GlobalFooter__Nav__Social extends React.Component {
    render() {

        const children = this.props.children;
        let mockUpData = [{

        }]
        let itemsArray = this.props.socialItemsObj || [1,2,3,4];

        const itemsList = itemsArray.map( (item, index) =>{
        console.log('item:', item);
            return ( <GlobalFooter__Nav_Social__Item  socialObj={item} key={index} /> );
        });

        return (
            <li className="nav-footer-social nav-footer-item link-icons-disabled">
                <h2>Find us</h2>

                <ul>
                    { itemsList }
                </ul>

            </li>
        );
    }
}

export default GlobalFooter__Nav__Social;
