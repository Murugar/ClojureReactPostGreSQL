var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
var debug = require('debug')('NavBar');

var History = Router.History;
var Link = Router.Link;

module.exports = React.createClass({
    mixins: [History],

    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Clojure React PostGreSQL</a>
                            
                        </div>
                        <div>
                            <ul className="nav navbar-nav">
                                <li className="active">
                                     <a className="nav-item nav-link" href="#">Home</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
});
