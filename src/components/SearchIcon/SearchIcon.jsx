import React, { Component } from 'react';

class SearchIcon extends Component {

    constructor(props){
        super(props);
        this.state = {
            isActive: false,
            classNames: 'link-icon search-toggle popover-toggle'
        }
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
        let classNamesStr='link-icon search-toggle popover-toggle' ;
        if (this.state.isActive==false){
            classNamesStr+=' is-active';
        }
        else {
            classNamesStr='link-icon search-toggle popover-toggle';
        }
        this.setState(prevState => ({classNames: classNamesStr}));
    }

    componentDidMount(){
        
    }   

    render(){
        return (
            <button
                onClick={this.handleClick} 
                className={this.state.classNames} 
                type="button" 
                role="button" 
                aria-label="Toggle search" 
                data-popover-id="global-search">
                <span className="icon svg-search-black" data-grunticon-embed></span>
                <span className="icon svg-close-grey" data-grunticon-embed></span>
                <span className="vh">Toggle search</span>
            </button>
        );
    }

    componentWillUnmount(){
        this.setState({isActive: false, classNames: 'link-icon search-toggle popover-toggle'});
    }
}

export default SearchIcon;