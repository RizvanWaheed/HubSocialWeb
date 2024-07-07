import { AngleNav, NavLogo } from "../assets/svg";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

const ForgotPass = () => {
  return (
    <div className="forgotPass-page login-main">
      <div className="d-flex bg-white align-items-center forgotPass-navbar">
        <div className="col-6 forgot-logo">
          <NavLogo />
        </div>        
        <div className="text-end col-6 forgot-back">
          <a href="/">< AngleNav /><span>Back to Login</span></a>
        </div>
      </div>
      <div className="all-cards bg-light d-flex justify-content-center">
        <Form className="form-card  forgot-card col-lg-9">
          <div className="card-head">Forgot Password</div>
          <FormText className="text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </FormText>
          <FormGroup className="input-box">
            <Label for="exampleEmail" hidden>Email</Label>
            <Input className="form-input" id="exampleEmail" name="email" placeholder="Email / Phone Number" type="email" />
          </FormGroup>
          {' '}
          <Button className="login-btn col-12">
            Reset Password
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ForgotPass;