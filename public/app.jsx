var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>Welcome Message: {message}</p>
      </div>
    )
  }
});

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

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);