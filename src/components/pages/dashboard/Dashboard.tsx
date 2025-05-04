import Todo from "@/components/shared/Dashboard/Todo";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col ">
      <Navbar />
      <Todo />
    </div>
  );
};

export default Dashboard;
