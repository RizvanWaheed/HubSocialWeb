import React from 'react'
import { Button } from 'reactstrap'
import User4 from "../assets/images/user4.png"
export default function AddRequestComponent() {
    return (
        <div className="requests row d-flex">
            <div className="col-2 col-2 req-image-div">
                <div className="counter"><span>1</span></div>
                <div className="req-img"><img className="req-img " src={User4} alt="" /> </div>
            </div>
            <div className="req-info col-5 ">Request to add you in brainstrom</div>
            <div className="act-btns d-flex col-5 ">
                <Button>Accept</Button>
                <Button>Remove</Button>
            </div>
        </div>
    )
}
