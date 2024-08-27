import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    const { name, add } = this.props;
    const { count } = this.state;
    return (
      <div className="user">
        <h3>{name} (class)</h3>
        <h3>Add- {add}</h3>
        <h3>Fullstack Developer</h3>
        <h3>Skills-Html, Css, Javascript, React</h3>
        <h3>Open To Work</h3>
        <span>Count : {count} </span>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
