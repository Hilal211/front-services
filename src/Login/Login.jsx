import "./Login.css"
import React, { useContext, useState } from "react";
import img from '../image/features-3.png'
import SessionContext from "../Session/SessionContext";
import { Link } from "react-router-dom";

export default function Login() {
    const {
        actions: { login },
    } = useContext(SessionContext);

    const [state, setValue] = useState({
        email: "",
        password: "",
    });

    const { email, password } = state;

    function setState(nextState) {
        setValue((prevState) => ({
            ...prevState,
            ...nextState,
        }));
    }

    function handleChange(e) {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    async function handleSubmit(e) {
        e.nativeEvent.preventDefault();
        if (email && password) {
            login(state);

        }
        else {

        }
    }

    return (
        <section class="sign-in">
            <div class="containerl">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure class="figurel"><img class="imgl" src={img} alt="sing up image" /></figure>
                        <Link class="linkLogin" to="/register" class="signup-image-link">Create an account</Link>
                    </div>

                    <div class="signin-form">
                        <h2 class="titlel" class="form-title">Sign up</h2>
                        <form onSubmit={handleSubmit} class="register-form" id="login-form">
                            <div class="form-group">
                                <label class="labell" for="your_name"><i class="iconl bi bi-person-fill"></i></label>
                                < input  class="inputl" type="text" name="email"
                                    value={email}
                                    autoComplete="off"
                                    onChange={handleChange} id="your_name" placeholder="Your Name" />
                            </div>
                            <div class="form-group">
                                <label class="labell" for="your_pass"><i class="iconl bi bi-shield-lock-fill"></i></label>
                                < input  class="inputl" type="password" name="password"
                                    value={password}
                                    onChange={handleChange} id="your_pass" placeholder="Password" />
                            </div>
                            <div class="">
                                < input autoComplete="off" class="inputl" type="submit" name="signin" id="signin" class="fbtn btn-primary w-50 loginb" value="Log in" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );

}