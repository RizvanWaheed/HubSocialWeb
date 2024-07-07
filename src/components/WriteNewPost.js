import { Button, Input } from "reactstrap";
import { ImgBtn, LocationIcon, Plus, VideoBtn } from "../assets/svg";
import ForgotUser from "../assets/images/forgotImg.png"


export default function WriteNewPost() {
    return (
        <div className="new-post col-md-12 col-12 d-flex row">

            <div className="col-2 new-post-img"><img src={ForgotUser} alt="" /></div>
            <span className="col-10 new-post-input"><Input className="post-input" id="exampleSearch" name="Write" placeholder="Write Something" type="text" /></span>
            <div className="new-post-btns">
                <Button className="new-post-btn col-md-2"><ImgBtn /><span>Image</span></Button>
                <Button className="new-post-btn col-md-2"><VideoBtn /><span>Video</span></Button>
                <Button className="new-post-btn col-md-2"><LocationIcon /><span>Location</span></Button>
                <Plus />
            </div>
        </div>
    )
}
