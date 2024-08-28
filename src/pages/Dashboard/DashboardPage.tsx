import { NavBar } from "../../components";
import SideBar from "../../components/SideBar/SideBar";

const DashboardPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
       <SideBar /> 
       <div className="content">
          <h1>Dashboard</h1>
       </div>
      </div>
    </div>
  );
};

export default DashboardPage;

