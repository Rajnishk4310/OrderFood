import React from "react";
import UserContext from "../utils/UserContext";

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
      <div className="user bg-white shadow-md rounded-lg p-6 text-gray-800">
        <h3 className="text-2xl font-semibold mb-2">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <span>{loggedInUser ? loggedInUser : "Guest"}</span>
            )}
          </UserContext.Consumer>
          (Class)
        </h3>
        <h3 className="text-lg">Address: {add}</h3>
        <h3 className="text-lg">Fullstack Developer</h3>
        <h3 className="text-lg">Skills: HTML, CSS, JavaScript, React</h3>
        <h3 className="text-lg text-green-500">Open To Work</h3>
        <span className="block mt-4 mb-2 text-xl font-bold">
          Count: {count}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => this.setState({ count: count + 1 })}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
