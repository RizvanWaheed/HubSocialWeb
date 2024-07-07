import { AngleCard, AngleNav, NavLogo } from "../assets/svg";
import ForgotUser from "../assets/images/forgotImg.png"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const ResetPassword = () => {
  return (
    <div className="resetPass-main login-main">
      <div className="d-flex bg-white align-items-center forgotPass-navbar">
        <div className="col-6 forgot-logo">
          <NavLogo />
        </div>
        <div className="text-end col-6 forgot-back">
          <a href="/"><AngleNav /><span>Back to Login</span></a>
        </div>
      </div>
      <div className="all-cards bg-light d-flex justify-content-center">
        <Form className="form-card reset-card forgot2-card col-lg-9">
          <div className="card-head">
            <a href="/"><span className="btn-bg"><AngleCard /></span></a><span>Reset Password</span>
          </div>
          <div className="forgotUser col-12 d-flex">
            <div className="forgotUser-img col-4">
              <img src={ ForgotUser } alt="forgotUserImg" />
              <p className="forgotUser-counter">10</p>
            </div>
            <div className="forgotUser-info  col-8">
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
          <FormGroup className="input-box">
            <Label for="exampleEmail" hidden>Email</Label>
            <Input className="form-input" id="exampleEmail" name="email" placeholder="New Password" type="email" />
          </FormGroup>
          <FormGroup className="input-box">
            <Label for="exampleEmail" hidden>Email</Label>
            <Input className="form-input" id="exampleEmail" name="email" placeholder="Confirm New Password" type="email" />
          </FormGroup>
          <Button className="login-btn col-12">
            Reset Password
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ResetPassword;