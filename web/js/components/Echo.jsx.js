var React = require('react');
var ReactRouter = require('react-router');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');

var Link = ReactRouter.Link;

var Panel = ReactBootstrap.Panel;
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

var EchoStore = require('../store/EchoStore');

module.exports = React.createClass({
    mixins: [
        ReactRouter.History,
        Reflux.connect(EchoStore, "echoStatus")],

    getInitialState: function () {
        return {
            message: "",
            echoStatus: {
                message: ""
            }
        }
    },

    onEchoClick: function (e) {
        e.stopPropagation();
        e.preventDefault();
        EchoStore.actions.echo(this.state.message);
    },

    onMessageChange: function (e) {
        this.setState({message: e.target.value});
    },

    render: function () {
        return (
            <div className="container">
            
            <div className="panel panel-default">
            <div className="panel-heading"><h3 className="text-primary">Main</h3></div>
            <div className="panel-body">
            
            <div className="row">
            
            <div className="col-md-6">
               <div className="panel panel-danger">
               <div className="panel-heading">Greetings</div>
               <div className="panel-body">
                        <h1>Clojure React PostGreSQL</h1>
               </div>
              
               </div>
            </div>
            
            <div className="col-md-6">
               
                <Panel className="bs-component panel-success" header={<h2>Echo Message</h2>}>
                    <form className='form-vertical' role="form">
                        <div className="form-group">
                            <label className="text-success">Message</label>
                            <input type='text'
                                   className="form-control"
                                   value={this.state.message}
                                   onChange={this.onMessageChange}/>
                            <label className="text-info">Echo</label>
                            <input type='text'
                                   className="form-control"
                                   value={this.state.echoStatus.message}
                                   disabled/>
                        </div>
                        <div className="form-group">
                            <ButtonToolbar className="col-sm-12">
                                <Button type='submit'
                                        bsStyle='danger'
                                        className="pull-right"
                                        onClick={this.onEchoClick}>
                                    Echo
                                </Button>
                            </ButtonToolbar>
                        </div>
                    </form>
                </Panel>
                </div> 
                </div> 
                </div>
                <div className="panel-footer">
                <h5 className="text-center text-warning">iQmSoft Inc</h5>
                </div>
                </div>
            </div>
        )
    }
});

