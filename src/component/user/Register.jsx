import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userRegister } from "../../actions/user";
import { errorMessage, warningMessage } from "../../utils/messages";
import SideForm from "../common/SideForm";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    if (
      fullname === "" ||
      email === "" ||
      password === "" ||
      rePassword === ""
    ) {
      warningMessage("لطفا همه اطلاعات را وارد کنید.");
      return;
    }
    if (password !== rePassword) {
      errorMessage("گذرواژه و تکرار گذرواژه باهم برابر نیستند.");
      return;
    }
    dispatch(userRegister({ fullname, email, password }));
    emptyDatas();
    navigate("/simpleAuthentication/confirmemail");
  };

  const emptyDatas = () => {
    setFullname("");
    setEmail("");
    setPassword("");
    setRePassword("");
  };

  return (
    <div>
      <SideForm version="2" /> {/* 40% */}
      <form
        action=""
        onSubmit={registerHandler}
        autoComplete="off"
        className="container text-right from-section"
      >
        <div className="form-group col-10 form-group-custom-lable">
          <input
            type="text"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            value={fullname}
            className="form-control"
            autoComplete="off"
            placeholder=" "
          />
          <label htmlFor="">نام و نام خانوادگی</label>
        </div>
        <div className="form-group col-10 form-group-custom-lable">
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="form-control"
            autoComplete="off"
            placeholder=" "
          />
          <label htmlFor="">ایمیل</label>
        </div>
        <div className="form-group col-10 row pl-0 ">
          <div className="form-group col-6 form-group-custom-lable">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="form-control"
              autoComplete="off"
              placeholder=" "
            />
            <label htmlFor="">گذرواژه</label>
          </div>
          <div className="form-group col-6 pl-0 form-group-custom-lable">
            <input
              type="password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
              value={rePassword}
              className="form-control"
              autoComplete="off"
              placeholder=" "
            />
            <label htmlFor="">تکرار گذرواژه</label>
          </div>
        </div>
        <div className="form-group col-10 row">
          <div className="col-3 form-group">
            <input
              type={"submit"}
              className="col-12 btn btn-info"
              value={"عضویت"}
            />
          </div>
          <div className="col-4 form-group">
            <button className="col-12 btn btn-outline-primary">
              حساب گوگل
              <img
                className="mr-2"
                src={process.env.PUBLIC_URL + "/images/search 1.png"}
                alt=""
              />
            </button>
          </div>
          <div className="col-5 form-group forget-text">
            <NavLink className="" to={"/simpleAuthentication/"}>
              حساب کاربری دارم!
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;