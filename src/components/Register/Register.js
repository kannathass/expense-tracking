import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { alphaNumeric, emailValid } from "../../helper/validation";
import {
  emailValidationMessage,
  nameValidationMessage,
  passwordValidationMessage,
} from "../../helper/constants";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "krishna",
    lastName: "",
    email: "",
    password: "",
  });

  const [validationData, setValidationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const validateName = (input) => {
  //   return alphaNumeric(input);
  // }

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      alphaNumeric(formData.firstName) == true &&
      alphaNumeric(formData.lastName) == true &&
      emailValid(formData.email) == true
    ) {
      axios
        .post("http://localhost:3000/users", formData)
        .then(() => {
          sessionStorage.setItem("email", formData.email);
          sessionStorage.setItem("password", formData.password);
          navigate("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setValidationData({
        ...validationData,
        firstName: alphaNumeric(formData.firstName),
        lastName: alphaNumeric(formData.lastName),
        email: emailValid(formData.email),
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
                <label>First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={onChangeHandler}
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                />
                <div className="text-danger">{validationData.firstName}</div>
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={onChangeHandler}
                  name="lastName"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                />
                <div className="text-danger">{validationData.lastName}</div>
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
                <div className="text-danger">{validationData.email}</div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={onChangeHandler}
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <div className="text-danger">{validationData.password}</div>
              </div>
              <button
                type="submit"
                onClick={onSubmitHandler}
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

export default Register;
