
import { LocationBtn, } from "../assets/svg";

import User3 from "../assets/images/user3.png"

import MapLocation from "../assets/images/location-img.png"

export default function AdsComponent() {
    return (
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
    )
}
