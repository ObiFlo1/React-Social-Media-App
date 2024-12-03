import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default Home;
