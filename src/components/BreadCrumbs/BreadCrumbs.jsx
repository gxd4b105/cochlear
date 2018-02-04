import React from 'react';
// import Breadcrumbs from 'react-breadcrumbs';

class BreadCrumbs extends React.Component {

    render() {
        let jsonObj = this.props.jsonData || null;
        //Formatter
        // if (this.props.jsonData) {
        //     let string = this.props.jsonData.breadcrumbs;
        //     let removeNewLines=string.split('\n').join('');
        //     let objects=removeNewLines.split('}{');
        //     objects=objects.join('};{');
        //     let arrayOfStringObjs = objs.split(';');
        //     let arrayOfStringObjects=[];
        //     let objString = '{"breadcrumbs": ['; 
        //     for(let stringObj in arrayOfStringObjs ){
        //         if (stringObj<arrayOfStringObjs.length-1){ 
        //           objString+=JSON.stringify(JSON.parse(arrayOfStringObjs[stringObj]))+',';
        //         } else {
        //           objString+=JSON.stringify(JSON.parse(arrayOfStringObjs[stringObj]))+']';
        //         }
        //      }
        //     objString+='}'; 
        //     jsonObj=JSON.parse(objString);
        // }


        
        let json= jsonObj || {
            "breadcrumbs": [
                { title : "Home", link: "#home" },
                { title : "FirstLevel", link: "#first" },
                { title : "SecondLevel", link: "#second" },
                { title : "ThirdLevel", link: "#third" },
                { title : "Leaf", link: "#fourth" }
            ]
        };
        
        const length = json['breadcrumbs'].length;
        const itemsList = json["breadcrumbs"].map ( (obj, index) => {  
            
            let title='';
            if (index === 0 ) {
                title='Home';
            } else {
                if (index === json["breadcrumbs"].length-1) {
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
            content=(<div className="breadcrumbs l-padding">
                        <a href={json["breadcrumbs"][0].link} className="back-to-parent">Back to {json["breadcrumbs"][0].title}}</a>
                        <ul itemProp="breadcrumb">
                            {itemsList}
                        </ul>
                    </div>);
        } else {
            content=(<div className="breadcrumbs l-padding">
                        <a href={json["breadcrumbs"][length-2].link} className="back-to-parent">Back to {json["breadcrumbs"][length-2].title}</a>
                        <ul itemProp="breadcrumb">
                            {itemsList}
                        </ul>
            </div>);
        }

        return content;

    }
}

export default BreadCrumbs;
