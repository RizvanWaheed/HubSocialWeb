import "../assets/css/login.css"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { AppleIcon, FacebookIcon, GoogleIcon, MainLogo } from "../assets/svg"
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="login-main">
            <div className="login-bg">
                <div className="login-page d-flex row justify-content-center align-items-center">
                    <div className="login-intro col-md-12 col-lg-6">
                        <div className="pb-1">
                            <MainLogo />
                        </div>
                        <h2 className="intro-h pb-1">Frame your social space in the hubfile</h2>
                        <p className="intro-p">Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="all-cards d-flex justify-content-end col-sm-12 col-lg-6">
                        <Form className="form-card login-card col-lg-9">
                            <div className="card-head">Login</div>

                            <FormGroup className="input-box">
                                <Label for="exampleEmail" hidden>Email</Label>
                                <Input className="form-input" id="exampleEmail" name="email" placeholder="Email" type="email" />
                            </FormGroup>
                            {' '}
                            <FormGroup className="input-box">
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input className="form-input" id="examplePassword" name="password" placeholder="Password" type="password" />
                            </FormGroup>
                            {' '}
                            <FormGroup className="check-box d-flex col-12" check inline>
                                <Input className="input-checkbox" type="checkbox" />
                                <Label className="rem-me col-8" check> Remember Me</Label>
                                <a href="./" className="col-4 text-end forgotPass">Forgot Passowrd?</a>
                            </FormGroup>
                            <Button className="login-btn col-12">
                                Login
                            </Button>
                            <div className="third-party d-flex">
                                <hr />
                                <p>Third Party</p>
                            </div>
                            <div className="card-icons d-flex justify-content-evenly">
                                <a href="/" className="fb"><FacebookIcon /></a>
                                <a href="/" className="google"><GoogleIcon /></a>
                                <a href="/" className="apple"><AppleIcon /></a>
                            </div>
                            <p className="not-member text-center">Not a member<span>
                                <Link to={"/s"} >Sign Up?</Link></span></p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;