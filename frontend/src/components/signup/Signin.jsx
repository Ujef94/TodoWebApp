import React from 'react'
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { authActions } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };
    const submit = async (e) => {
        e.preventDefault();
        if (Inputs.email === "" && Inputs.password === "") {
            toast.error("Email and Password is required");
        } else if (Inputs.email === "") {
            toast.error("Email can't be empty");
        } else if (Inputs.password === "") {
            toast.error("Password can't be empty");
        } else {
            try {
                const response = await axios
                    .post("http://localhost:1000/api/v1/signin", Inputs)
                sessionStorage.setItem("id", response.data.others._id)
                dispatch(authActions.login());
                history("/todo");
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    toast.error("User not found. Please Sign Up First");
                } else {
                    toast.error("An error occurred. Please try again later.");
                }
            }

        }

    };
    return (
        <div>
            <div className="signin">
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-4 column col-left d-lg-flex justify-content-center align-items-center  d-none">
                            <HeadingComp first="Sign" second="In" />
                        </div>
                        <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
                            <div className="d-flex flex-column  w-100 p-3">
                                <input
                                    className="p-2 my-3 input-signup"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={Inputs.email}
                                    onChange={change}
                                />
                                <input className="p-2 my-3 input-signup"
                                    type="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    value={Inputs.password}
                                    onChange={change}
                                />
                                <button className="btn-signup p-2" onClick={submit}>
                                    Signin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
