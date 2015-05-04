ECMAScript 6 (ES6) is the upcoming version of the ECMAScript standard, so it would make a lot 
of sense to start using it today. In this post I show how ES6 can be used in combination with React and Gulp.

#### Gulpfile.js ####
The task runner needs to convert Reacts JSX to valid javascript and also convert ES6 to ES5 at the same time:

    gulp.task("default", function () {
        browserify({ debug: true })
            .transform(to5Browserify)
            .require('main.jsx', { entry: true })
            .bundle()
            .pipe(source('all.js'))
            .pipe(gulp.dest('./dist'));

This will create a file called `all.js` which should be included the html

#### index.html ####
The main html file loads the compiled javascript and provides the entry point/element for React (id = ‘content’).

    <!doctype html>

    <html>
        <head></head>
    
        <body>
            <main id="content"></main>
            <script src="all.js"></script>        
        </body>
    </html>

#### main.jsx ####
In this file the React component Foo is loaded and rendered

    var React = require('react');
    var Foo = require('./Foo');

    React.render(<Foo />, document.getElementById('content'));

#### Foo.jsx ####
This is the React component using ES6

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
                message: 'Click me!'
            };
        }
    
        componentWillMount() {}
    
        render() {        
            return <div onClick={this.onClick}>{this.state.message}</div>
        }
    
        onClick() {
            this.setState({message: 'You clicked me'});
        }
    }

    module.exports = React.createClass(Foo.prototype)
