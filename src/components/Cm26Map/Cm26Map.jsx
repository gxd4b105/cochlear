import React from 'react';

class Cm26Map extends React.Component {
    render(){
        return (
            <section className='cm cm-map' data-map-api-key='' data-initial-zoom='1'>
                <div classNAme='map-container' style='overflow: hidden'></div>
            </section>
        );
    }
}

export default Cm26Map;