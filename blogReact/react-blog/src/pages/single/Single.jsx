import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Singlepost from "../../components/singlePost/SinglePost.jsx";


export default function Single() {
  return (
    <div className="single">
        <Singlepost />
        <Sidebar />
    </div>
  )
}
