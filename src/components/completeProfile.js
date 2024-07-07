import { AngleNav, NavLogo } from "../assets/svg";
import UploadImg from "../assets/images/UploadImg.svg"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";



const CompleteProfile = () => {
  return ( 
    <div className="CompleteProfile-main login-main">
      <div className="d-flex bg-white align-items-center forgotPass-navbar">
        <div className="col-6 forgot-logo">
          <NavLogo />
        </div>        
        <div className="text-end col-6 forgot-back">
          <a href="/">< AngleNav /><span>Back to Login</span></a>
        </div>
      </div>
      <div className="all-cards bg-light d-flex justify-content-center">
        <Form className="form-card  completeProf-card col-lg-9">
          <div className="card-head">Complete Profile</div>
          <div className="tab-btns row">
          <Button className="tab-btn col-4">
            Reset Password
          </Button>
          <Button className="tab-btn col-4">
            Reset Password
          </Button>
          <Button className="tab-btn col-4">
            Reset Password
          </Button>
          </div>  
          <div className="tab-content">
          <div className="completeProf-img text-center mt-4">
            <img src={ UploadImg } alt="Profile-img" />
            <p className="mt-2">Upload Picture</p>
          </div>
          <div className="completeProf-form row">
          <FormGroup className="input-box col-6">
            <Label for="exampleEmail" hidden>Email</Label>
            <Input className="cpform-input" id="exampleEmail" name="email" placeholder="Email / Phone Number" type="email" />
          </FormGroup>
          <FormGroup className="input-box col-6">
            <Label for="exampleEmail" hidden>Email</Label>
            <Input className="cpform-input" id="exampleEmail" name="email" placeholder="Email / Phone Number" type="email" />
          </FormGroup>
          <FormGroup className="input-box col-6">
            <Label for="exampleSelect" hidden>Select</Label>
            <Input className="cpform-input" id="exampleSelect" name="select" type="select">
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup className="input-box col-6">
            <Label for="exampleSelect" hidden>Select</Label>
            <Input className="cpform-input" id="exampleSelect" name="select" type="select">
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup className="input-box col-12">
            <Label for="exampleEmail" hidden>Email</Label>
            <Input className="cpform-input" id="exampleEmail" name="email" placeholder="Email / Phone Number" type="email" />
          </FormGroup>
          </div>
          {' '}
          <Button className="login-btn col-12">
            Reset Password
          </Button>
          </div>
        </Form>
      </div>
    </div>
   );
}
 
export default CompleteProfile;