import React from 'react';
// import Breadcrumbs from 'react-breadcrumbs';

class BreadCrumbs extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            breadcrumbs:[],
            content: ''
        };
    }

    componentDidMount(){

        let jsonObj = this.props.jsonData || null;

               
        //Formatter
        // if (this.props.jsonData) {
        //     let breadcrumbsString = this.props.jsonData.breadcrumbs;
        //     let removeNewLines=breadcrumbsString.split('\n').join('');
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
            breadcrumbs: [
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

        let contentContainer;
        if (length===0){
        contentContainer=(<div className='vh'></div>);
        } else if (length===1) {
            contentContainer=(<div className="breadcrumbs l-padding">
                        <a href={json["breadcrumbs"][0].link} className="back-to-parent">Back to {json["breadcrumbs"][0].title}}</a>
                        <ul className="breadcrumb">
                            {itemsList}
                        </ul>
                    </div>);
        } else {
            contentContainer=(<div className="breadcrumbs l-padding">
                        <a href={json["breadcrumbs"][length-2].link} className="back-to-parent">Back to {json["breadcrumbs"][length-2].title}</a>
                        <ul className="breadcrumb">
                            {itemsList}
                        </ul>
            </div>);
        }
        this.setState({
            breadcrumbs: json,
            content: contentContainer
        });


        let array=json.breadcrumbs;
        var listArray=array.map((item, index ) => {
            return (item.title);
        });
          
        var string='';
        var stringArray=[];
        for (var i = 0; i< listArray.length; i++){
          string=listArray[i].toString().toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');        
            stringArray.push(string);
        }
        
        let categoriesObject={};
        for (var i=0; i<stringArray.length;i++){
           var key='subCategory'+(i+1);
           categoriesObject[key]=stringArray[i];         
        }
        dataLayerPushCategories(categoriesObject);
    }

    render() {
        return this.state.content;
    }
}

export default BreadCrumbs;
