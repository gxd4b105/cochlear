import React from 'react';
// import Breadcrumbs from 'react-breadcrumbs';

class BreadCrumbs extends React.Component {

    render() {

        let json= this.props.jsonData || {
            "nav-breadcrumb": [
                { title : "Home", link: "#home" },
                { title : "FirstLevel", link: "#first" },
                { title : "SecondLevel", link: "#second" },
                { title : "ThirdLevel", link: "#third" },
                { title : "Leaf", link: "#fourth" }
            ]
        };
        
        const length = json['nav-breadcrumb'].length;
        const itemsList = json["nav-breadcrumb"].map ( (obj, index) => {  
            
            let title='';
            if (index === 0 ) {
                title='Home';
            } else {
                if (index === json["nav-breadcrumb"].length-1) {
                    title='is-active';
                }
            }  
            let item  = (index===length-1) ? (<li className={title}><p>{obj.title} </p></li>) : (<li className={title}><a href={obj.link} alt="breadcrumb link">{obj.title}</a></li>);
            return (item); 
            
        });

        let content;
        if (length===0){
        content=(<div className='vh'></div>);
        } else if (length===1) {
            content=(<div className="breadcrumbs">
                        <a href={json["nav-breadcrumb"][0].link} className="back-to-parent">Back to {json["nav-breadcrumb"][0].title}}</a>
                        <ul itemProp="breadcrumb">
                            {itemsList}
                        </ul>
                    </div>);
        } else {
            content=(<div className="breadcrumbs">
                        <a href={json["nav-breadcrumb"][length-2].link} className="back-to-parent">Back to {json["nav-breadcrumb"][length-2].title}</a>
                        <ul itemProp="breadcrumb">
                            {itemsList}
                        </ul>
            </div>);
        }

        return content;

    }
}

export default BreadCrumbs;
