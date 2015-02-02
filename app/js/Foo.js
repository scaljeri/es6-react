'use strict';

var React = require('react');

class Foo {
    getDefaultProps() {
        return {
             message: 'No message'   
        }
    }
    
    getInitialState() {
        return {
            message: 'Hello!'
        };
    }
    
    componentWillMount() {}
    
    render() {        
        return <div onClick={this.onClick}>{this.state.message}</div>
    }
    
    onClick() {
        console.log('clicking...');
        this.setState({message: 'oh hai'});
    }
}

var component = React.createClass(Foo.prototype);
component.prototype.constructor.name = Foo.prototype.constructor.name;

module.exports = component; //React.createClass(DemoClass.prototype)