import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { emailValid, passwordValid } from "../../helper/validation";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import LoginDetail from "../../dispatcher/login";

export default function Login() {
  const dispatch = useDispatch();
  const loginUserDetail = useSelector((state) => state.LoginDetail);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [ValidationData, setValidationData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (
      emailValid(formData.email) == true &&
      passwordValid(formData.password) == true
    ) {
      axios
        .get("http://localhost:3000/users")
        .then((response) => {
          let result = response.data;
          let resultFinal = result.filter((obj) => {
            return (
              obj.email === formData.email && obj.password === formData.password
            );
          });
          if (resultFinal.length > 0) {
            LoginDetail.userSignIn(dispatch);
            navigate("./dashboard");
          } else {
            setValidationData({
              ...ValidationData,
              email: "No match found",
              password: "No match found",
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      // if (
      //   sessionStorage.getItem("email") === formData.email &&
      //   sessionStorage.getItem("password") === formData.password
      // ) {
      //   navigate("./dashboard");
      // } else {
      //   setValidationData({
      //     ...ValidationData,
      //     email: "No match found",
      //     password: "No match found",
      //   });
      // }
    } else {
      setValidationData({
        ...ValidationData,
        email: emailValid(formData.email),
        password: passwordValid(formData.password),
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={onChangeHandler}
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
                <div className="text-danger">{ValidationData.email}</div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={formData.password}
                  name="password"
                  onChange={onChangeHandler}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <div className="text-danger">{ValidationData.password}</div>
              </div>
              <button
                type="submit"
                onClick={onsubmitHandler}
                className="btn btn-success"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}
