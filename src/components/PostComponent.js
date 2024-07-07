import { Input } from "reactstrap";
import { CollabsIcon, FileClipIcon, HubIcon, LikesIcon, SendCommentsIcon, UploadPictureIcon, } from "../assets/svg";

import Post from "../assets/images/post.png"


export default function PostComponent() {
    return (
        <div className="posts col-md-12 col-12">
            <div className="post-box">
                <img className="fill w-100 post-image" src={Post} alt="post" />
                <div className="post-footer d-flex  justify-content-between align-items-center">
                    <div className="post-likes  d-flex gap-3 align-items-end ">
                        <div className="likes  d-flex  align-items-end "><LikesIcon /><span>(12.1k)</span></div>
                        <div className="collabs  d-flex  align-items-end  "><CollabsIcon /><span>(100)</span></div>
                        <div className="hub   d-flex  align-items-end "><HubIcon /></div>
                    </div>
                    <div className="tags text-end">
                        <a href="/">#hiphop </a>
                        <a href="/">#music </a>
                        <a href="/">#lifestyle</a>
                    </div>
                </div>
                <div className="post-text">
                    <span className="post-username" >Julie212 :</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    <span className="post-readmore">Read More</span>

                </div>

            </div>
            <div className="post-comments">
                <div className="comments-head ">Comments  <span className="comments-number">(100)</span></div>
                <div className=" comments-inputbox d-flex justify-content-between gap-2">
                    <div className="comments-input ps-3 d-flex justify-content-center align-items-center w-100 gap-2">

                        <span className="input-icon" > <UploadPictureIcon /></span>
                        <span className="input-icon" ><FileClipIcon /></span>
                        <Input type="text" className="comments-input" >

                        </Input>


                    </div>
                    <span className="input-right-icon " >
                        <SendCommentsIcon />
                    </span>

                </div>
            </div>
        </div>
    )
}
