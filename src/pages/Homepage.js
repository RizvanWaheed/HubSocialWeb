import { FilterIcon } from "../assets/svg";
import AddRequestComponent from "../components/AddRequestComponent";
import AdsComponent from "../components/AdsComponent";
import LeftSidebar from "../components/LeftSidebar";
import NavBar from "../components/NavBar";
import PostComponent from "../components/PostComponent";
import RightSidebar from "../components/RightSidebar";
import WriteNewPost from "../components/WriteNewPost";


const HomePage = () => {
    return (
        <div className="homepage">
            <NavBar />
            <div className="main-content col-md-12 row d-flex">
                <LeftSidebar />
                <div className="content-bg d-flex col-10 col-sm-8">
                    <div className="content row col-lg-8 col-md-12 ">
                        <WriteNewPost />
                        <div className="post-header d-flex">
                            <div className="col-md-6 hs-theme-26">People Activities</div>
                            <div className="filter-icon col-md-6 text-end"><FilterIcon /><span className="hs-theme-chat">Filters</span></div>
                        </div>
                        <PostComponent />

                    </div>
                    <div className="activities col-lg-4 col-md-12">
                        <div className="activities-card col-12">
                            <h4 className="act-head hs-theme-26">Activities</h4>

                            <AddRequestComponent />
                            <AddRequestComponent />

                        </div>
                        <AdsComponent />
                    </div>
                </div>
                <RightSidebar />
            </div>
        </div >
    );
}

export default HomePage;