var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "John",
      message: "Welcome to React course"
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewNameAndMessage: function(name, message) {
    this.setState({
      name: name,
      message: message
    })
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>

        <GreeterForm onNewNameAndMessage={this.handleNewNameAndMessage} />
      </div>
    );
  }
});

module.exports = Greeter;