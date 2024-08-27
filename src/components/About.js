import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="about">
        <User name={"Rajnish Kumar"} add={"Bihar"} />
        <UserClass name={"Rahul Kumar"} add={"Bihar"} />
      </div>
    </div>
  );
};

export default About;
