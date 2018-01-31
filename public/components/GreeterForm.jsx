var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();
    
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    if (name.length > 0 & message.length > 0) {
      this.props.onNewNameAndMessage(name, message);
      // this.props.onNewMessage(message);
      this.refs.name.value = "";
      this.refs.message.value = "";
    }
    
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" />
          <br />
          <textarea ref="message" />
          <input type="submit" />
        </form> 
      </div>
    )
  }
});

module.exports = GreeterForm;