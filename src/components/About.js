import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
      <div className="about grid grid-cols-1 md:grid-cols-2 gap-6">
        <User name={"Rajnish Kumar"} add={"Bihar"} />
        <UserClass name={"Rahul Kumar"} add={"Bihar"} />
      </div>
    </div>
  );
};

export default About;
