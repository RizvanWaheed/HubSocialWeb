import { Button, Input } from "reactstrap";
import { BellIcon, BurgerIcon, HomepageLogo, SearchIcon, } from "../assets/svg";
import ForgotUser from "../assets/images/forgotImg.png"


export default function NavBar() {
    return (
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
    )
}
