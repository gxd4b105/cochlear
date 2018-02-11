import React, { Component } from 'react';

class BackgroundShade extends Component {


    constructor(props){
        super(props);
        this.state={
            classNames:'shade-bg'
        }
    }

    componentDidMount(){
        //check redux state.
        if (redux.globalSearch === true){
            this.setState({classNames: `${classNames} is-behind-header is-active`});
        } else {
            this.setState({classNames:`shade-bg`});S
        }
    }

    render(){
        return (<div className={this.state.classNames}>&nbsp</div>);
    }

    componentWillUnmount(){
        this.setState({classNames: `shade-bg`});
        
    }
}

export default