import React from 'react';

class SlListLanding extends React.Component {
    render () {

        const children = this.props.children;

        return (
            <div className='sl'>
                <ul className='sl-list sl-list-landing has-2-items' data-heights-type="sl-list-landing">
                    {React.Children.map(children, (child, i) => {
                        return  <li key={i} className='sl-item'>{child}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default SlListLanding;