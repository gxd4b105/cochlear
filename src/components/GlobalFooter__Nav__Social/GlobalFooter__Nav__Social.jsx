import React from 'react';
import GlobalFooter__Nav_Social__Item from '../GlobalFooter__Nav__Social__Item/GlobalFooter__Nav__Social__Item.jsx';

class GlobalFooter__Nav__Social extends React.Component {
    render() {

        const children = this.props.children;
        let mockUpData = [{

        }]
        let itemsArray = this.props.items || [1,2,3,4,5];

        const itemsList = itemsArray.map( (item, index) =>{
            return ( <GlobalFooter__Nav_Social__Item key={index} /> );
        });

        return (
            <li className="nav-footer-social link-icons-disabled">
                <h2>Connect with us</h2>

                <ul>
                    { itemsList }
                </ul>

            </li>
        );
    }
}

export default GlobalFooter__Nav__Social;
