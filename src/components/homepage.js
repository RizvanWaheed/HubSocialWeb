import { Button, Input } from "reactstrap";
import { BellIcon, BurgerIcon, CollabsIcon, FilterIcon, HomepageLogo, HubIcon, ImgBtn, LikesIcon, LocationBtn, Plus, SearchIcon, SidebarBookmark, SidebarHome, SidebarHub, SidebarShare, VideoBtn } from "../assets/svg";
import ForgotUser from "../assets/images/forgotImg.png"
import Post from "../assets/images/post.png"
import User1 from "../assets/images/user1.png"
import User2 from "../assets/images/user2.png"
import User3 from "../assets/images/user3.png"
import User4 from "../assets/images/user4.png"
import MapLocation from "../assets/images/location-img.png"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home-navbar col-md-12 d-flex">
        <div className="burger-icon col-1"><BurgerIcon /></div>
        <div className="homeNav-logo col-1"><HomepageLogo /></div>
        <div className="home-search col-md-12 col-lg-6">
          <Input className="search-bar" id="exampleSearch" name="search" placeholder="" type="search" />
        </div>
        <span><Button className="search-icon"><SearchIcon /></Button></span>
        <div className="bell-icon col-2"><BellIcon /></div>
        <div className="navbar-profile"><img className="col-2" src={ForgotUser} alt="forgotUserImg" /></div>
      </div>
      <div className="main-content col-md-12 row d-flex">
        <div className="left-sidebar col-1">
          <div className="sidebar-icon hs-mt-40"><span><SidebarHome /></span></div>
          <div className="sidebar-icon hs-mt-40"><span><SidebarHub /></span></div>
          <div className="sidebar-icon hs-mt-40"><span><SidebarBookmark /></span></div>
          <div className="sidebar-icon hs-mt-40"><span><SidebarShare /></span></div>
        </div>
        <div className="content-bg d-flex col-10">
          <div className="content row col-8">
            <div className="new-post col-md-12 col-12 d-flex row">
              <div className="col-2 new-post-img"><img src={ForgotUser} alt="" /></div>
              <span className="col-10"><Input className="post-input" id="exampleSearch" name="Write" placeholder="Write Something" type="text" /></span>
              <div className="new-post-btns">
                <Button className="new-post-btn col-2"><ImgBtn /><span>Image</span></Button>
                <Button className="new-post-btn col-2"><VideoBtn /><span>Video</span></Button>
                <Button className="new-post-btn col-2"><LocationBtn /><span>Location</span></Button>
                <Plus />
              </div>
            </div>
            <div className="post-header d-flex">
              <div className="col-6 hs-theme-26">People Activities</div>
              <div className="filter-icon col-6 text-end"><FilterIcon /><span className="hs-theme-chat">Filters</span></div>
            </div>
            <div className="posts row col-md-12 col-12">
              <img className="fill" src={Post} alt="post" />
              <div className="post-footer d-flex">
                <div className="post-likes col-6 d-flex">
                  <div className="likes col-4"><LikesIcon /><span>(12.1k)</span></div>
                  <div className="collabs col-4"><div className="likes"><CollabsIcon /><span>(100)</span></div></div>
                  <div className="hub col-4"><HubIcon /></div>
                </div>
                <div className="tags col-6 text-end">
                  <a href="/">#hiphop </a>
                  <a href="/">#music </a>
                  <a href="/">#lifestyle</a>
                </div>
              </div>
            </div>
          </div>
          <div className="activities col-4">
            <div className="activities-card col-12">
              <h4 className="act-head hs-theme-26">Activities</h4>
              <div className="requests row d-flex">
                <div className="col-2">
                  <div className="counter"><span>1</span></div>
                  <div className="req-img"><img className="req-img " src={User4} alt="" /> </div>
                </div>
                <div className="req-info col-5">Request to add you in brainstrom</div>
                <div className="act-btns d-flex col-5">
                  <Button>Accept</Button>
                  <Button>Remove</Button>
                </div>
              </div>
              <div className="requests row d-flex">
                <div className="col-2">
                  <div className="counter">1</div>
                  <div className="req-img"><img className="req-img " src={User4} alt="" /> </div>
                </div>
                <div className="req-info col-5">Request to add you in brainstrom</div>
                <div className="act-btns d-flex col-5">
                  <Button>Accept</Button>
                  <Button>Remove</Button>
                </div>
              </div>
            </div>
            <div className="location-card">
              <div className="location-img">
                <img src={MapLocation} alt="" />
              </div>
              <div className="location-footer d-flex">
                <div className="card-footer col-10">
                  <div className="address"><LocationBtn /><span>123 Street, ABC New York</span></div>
                  <h3 className="footer-h">Need Electrician For</h3>
                </div>
                <div className="location-user col-2">
                  <div className="counter"><span>1</span></div>
                  <img src={User3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar text-center col-1">
          <div className="users hs-mt-15">
            <div className="sidebar-users hs-mt-40">
              <img src={User1} alt="" />
              <div className="online-icon"></div>
            </div>
            <div className="sidebar-users hs-mt-40"><img src={User2} alt="" /><div className="online-icon"></div></div>
            <div className="sidebar-users hs-mt-40"><img src={User3} alt="" /><div className="online-icon"></div></div>
            <div className="sidebar-users hs-mt-40"><img src={User4} alt="" /><div className="online-icon"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;