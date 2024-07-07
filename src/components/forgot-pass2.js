import { AngleCard, AngleNav, NavLogo } from "../assets/svg";
import ForgotUser from "../assets/images/forgotImg.png"
import {  Form } from "reactstrap";
import Button from "./Button";

const ForgotPass2 = () => {
  return (
    <div className="forgotPass2-page login-main">
      <div className="d-flex bg-white align-items-center forgotPass-navbar">
        <div className="col-6 forgot-logo">
          <NavLogo />
        </div>
        <div className="text-end col-6 forgot-back">
          <a href="/"><AngleNav /><span>Back to Login</span></a>
        </div>
      </div>
      <div className="all-cards bg-light d-flex justify-content-center">
        <Form className="form-card  forgot2-card col-lg-9">
          <div className="card-head">
            <a href="/"><span className="btn-bg"><AngleCard /></span></a><span>Forgot Password</span>
          </div>
          <div className="forgotUser col-12 d-flex">
            <div className="forgotUser-img col-4">
              <div className="img-counter">
              <span>10</span>
              </div>
              <img src={ ForgotUser } alt="forgotUserImg" />
            </div>
            <div className="forgotUser-info col-8">
              <h3>Julie Clary</h3>
              <p>#Usamalover #traveler #businessman</p>
              <div className="counter-block">
                <div className="row">
                  <div className="likes col-4 text-center">
                    <h4>10</h4>
                    <p>Posts</p> 
                  </div>
                  <div className="likes col-4 text-center">
                    <h4>231</h4>
                    <p>Followers</p>
                  </div>
                  <div className="col-4 text-center">
                    <h4>100</h4>
                    <p>Collabs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
          text="Via Email"
          isLarge
          onClick={()=>{
            alert("hi")
          }}
          />
           <Button
          text="Via Password"
          
          />
        </Form>
      </div>
    </div>
  );
}

export default ForgotPass2;