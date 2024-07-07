
import User1 from "../assets/images/user1.png"
import User2 from "../assets/images/user2.png"
import User3 from "../assets/images/user3.png"
import User4 from "../assets/images/user4.png"



export default function RightSidebar() {
    return (
        <div className="right-sidebar text-center col-1 col-sm-2">
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
    )
}
