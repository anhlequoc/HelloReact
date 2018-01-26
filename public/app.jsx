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
    console.log(this.state);
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <h1>Hellooo {name}!!!!</h1>
        <p>{message + '!!!'}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <input type="submit" />
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);