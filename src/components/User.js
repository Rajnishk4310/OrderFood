import { useState } from "react";

const User = ({ name, add }) => {
  const [count, setcount] = useState(0);
  return (
    <div className="user">
      <h3>{name} (function)</h3>
      <h3>Add- {add}</h3>
      <h3>Fullstack Developer</h3>
      <h3>Skills-Html, Css, Javascript, React</h3>
      <h3>Open To Work</h3>
      <span>Count : {count} </span>
      <button onClick={() => setcount(count + 1)}> Count Increase</button>
    </div>
  );
};

export default User;
