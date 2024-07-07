import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { AppleIcon, FacebookIcon, GoogleIcon, MainLogo } from "../assets/svg"
import "../assets/css/login.css"



const Signup = () => {
  return ( 
    <div className="signup-page login-main">
      <div className="login-bg d-flex justify-content-center">
        <div className="login-page d-flex justify-content-center align-items-center m-5">
          <div className="login-intro col-lg-6">
            <MainLogo />
            <h2 className="intro-h">Frame your social space in the hubfile</h2>
            <p className="intro-p">Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="all-cards d-flex justify-content-center col-lg-6">
            <Form className="form-card signup-card col-lg-9">
              <div className="card-head">Sign Up</div>

              <FormGroup className="input-box">
                <Label for="exampleEmail" hidden>Username</Label>
                <Input className="form-input" id="exampleEmail" name="email" placeholder="Username" type="email" />
              </FormGroup>
              {' '}
              <FormGroup className="input-box">
                <Label for="examplePassword" hidden>Email</Label>
                <Input className="form-input" id="examplePassword" name="password" placeholder="Email" type="password" />
              </FormGroup>
              {' '}
              <FormGroup className="input-box">
                <Label for="examplePassword" hidden>Phone Number</Label>
                <Input className="form-input" id="examplePassword" name="password" placeholder="Phone Number" type="password" />
              </FormGroup>
              {' '}
              <FormGroup className="input-box">
                <Label for="examplePassword" hidden>Password</Label>
                <Input className="form-input" id="examplePassword" name="password" placeholder="Password" type="password" />
              </FormGroup>
              {' '}
              <Button className="login-btn col-12">
                Sign Up
              </Button>
              <div className="third-party d-flex">
                <hr /><p>Third Party</p>
              </div>
              <div className="card-icons d-flex justify-content-evenly">
                <a href="/" className="fb"><FacebookIcon /></a>
                <a href="/" className="google"><GoogleIcon /></a>
                <a href="/" className="apple"><AppleIcon /></a>
              </div>
              <p className="not-member text-center">Not a member<span><a href="/">Sign Up?</a></span></p>
            </Form>
          </div>
        </div>
      </div>
    </div>

   );
}
 
export default Signup;