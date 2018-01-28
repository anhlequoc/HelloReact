var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>Welcome Message </p>
      </div>
    )
  }
});

var GreeterForm = React.createClass({
  setName: function(event) {
    event.preventDefault();
    
    this.setState({
      name: this.refs.name.value
    });
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.setName}>
          <input type="text" ref="name" />
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
  onButtonClick: function(event) {
    event.preventDefault();

    this.setState({
      name: this.refs.name.value
    });
    this.refs.name.value = "";
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name=""/>

        <GreeterForm />
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);