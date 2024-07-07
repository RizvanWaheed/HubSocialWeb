import { Button, Input } from "reactstrap";
import { BellIcon, BurgerIcon, ChatBackIcon, ChatMenuIcon, ChatSearchIcon, HomepageLogo, SearchIcon, SeenTick, SendFile, SendIcon, SendPic, SidebarBookmark, SidebarHome, SidebarHub, SidebarShare } from "../assets/svg";
import ForgotUser from "../assets/images/forgotImg.png"
import User1 from "../assets/images/user1.png"
import User2 from "../assets/images/user2.png"
import User3 from "../assets/images/user3.png"
import User4 from "../assets/images/user4.png"

const CollabPeople = () => {
  return (
    <div className="collab-people homepage">
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
          <div className="content d-flex col-12">
            <div className="collab col-4">
              <div className="collab-header hs-theme-32">Collab</div>
              <div className="collab-search col-12">
                <Input className="search-bar" id="exampleSearch" name="search" placeholder="Search" type="search" />
              </div>
              {/* <span><Button className="search-icon"><SearchIcon /></Button></span> */}
              <div className="collab-tabs d-flex col-12">
                <a className="col-6" href="/">Peoples</a>
                <a className="col-6" href="/">Projects</a>
              </div>
              <div className="collab-newchat col-12"><p className="hs-mt-15">Start New Chat</p></div>
              <div className="collab-users col-12">
                <div className="collab-users-info d-flex">
                  <div className="collab-user-img">
                    <div className="counter"><span>1</span></div>
                    <div className="collab-user-image"><img src={User3} alt="" /></div>
                  </div>
                  <div className="collab-user-name">
                    <p className="collab-username">David Jhon</p>
                    <p className="collab-userinfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                  <p className="collab-user-online">online</p>

                </div>
                <div className="collab-users-info d-flex">
                  <div className="collab-user-img">
                    <div className="counter"><span>1</span></div>
                    <div className="collab-user-image"><img src={User4} alt="" /></div>
                  </div>
                  <div className="collab-user-name">
                    <p className="collab-username">David Jhon</p>
                    <p className="collab-userinfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                  <p className="collab-user-offline">Seen 1h ago</p>

                </div>
                <div className="collab-users-info d-flex">
                  <div className="collab-user-img">
                    <div className="counter"><span>1</span></div>
                    <div className="collab-user-image"><img src={User1} alt="" /></div>
                  </div>
                  <div className="collab-user-name">
                    <p className="collab-username">David Jhon</p>
                    <p className="collab-userinfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                  <p className="collab-user-offline">Active 5d ago</p>

                </div>
              </div>
            </div>
            <div className="collab-chat col-8">
              <div className="chat-header d-flex">
                <div className="header-user-info col-6 d-flex">
                  <div className="back-icon"><ChatBackIcon /></div>
                  <div className="header-img"> <img src={User3} alt="user" /></div>
                  <div className="header-name">David Jhon</div>
                </div>
                <div className="header-icons col-6 d-flex">
                  <div className="search-icon icon"><ChatSearchIcon /></div>
                  <span className="menu-icon icon"><ChatMenuIcon /></span>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-messages d-flex">
                  <div className="collab-chat-pic">
                    <div className="counter"><span>1</span></div>
                    <div className="collab-user-image"><img src={User3} alt="" /></div>
                  </div>
                  <div className="collab-chat-popup">
                    <p className="chat-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p className="time-stamp">4:50 PM</p>
                  </div>
                </div>
                <div className="chat-messages d-flex flex-row-reverse">
                  <div className="collab-chat-pic">
                    <div className="counter"><span>1</span></div>
                    <div className="collab-user-image"><img src={User4} alt="" /></div>
                  </div>
                  <div className="my-message-popup">
                    <p className="my-chat-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className="my-time-stamp d-flex">
                      <div className="time-stamp col-6">4:50 PM</div>
                      <div className="text-end message-seen col-6"><SeenTick /><span>Seen</span></div>
                    </div>
                  </div>
                </div>
                <div className="chat-messages d-flex">
                  <div className="collab-chat-pic">
                    <div className="counter"><span>1</span></div>
                    <div className="collab-user-image"><img src={User3} alt="" /></div>
                  </div>
                  <div className="collab-chat-popup">
                    <p className="chat-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p className="time-stamp">4:50 PM</p>
                  </div>
                </div>
              </div>
              <div className="chat-footer d-flex">
                <div className="footer-input col-10">
                  <div className="send-pic"><SendPic /><span className="send-file"><SendFile /></span></div>
                  <Input className="search-bar" id="exampleSearch" name="search" placeholder="" type="search" />
                </div>
                <div className="footer-send col-2"><span><SendIcon /></span></div>
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
            <div className="sidebar-users hs-mt-40">
              <img src={User2} alt="" />
              <div className="online-icon"></div>
            </div>
            <div className="sidebar-users hs-mt-40">
              <img src={User3} alt="" />
              <div className="online-icon"></div>
            </div>
            <div className="sidebar-users hs-mt-40">
              <img src={User4} alt="" />
              <div className="online-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollabPeople;