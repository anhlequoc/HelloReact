var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "your_name",
      message: "your_message"
    };
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hellooo {name}!!!!</h1>
        <p>{message + '!!!'}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="react" message="welcome"/>,
  document.getElementById('app')
);