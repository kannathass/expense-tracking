import axios from "axios";

const LoginDetail = {
  getLoginDetail(dispatch) {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        dispatch({
          type: "login.userDetail",
          payload: {
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            password: res.password,
          },
        });
      })
      .catch((err) => console.log(err));
  },
  userSignIn(dispatch) {
    dispatch({
      type: "login.success",
    });
  },
  userSignOut(dispatch) {
    dispatch({
      type: "signout",
    });
  },
  failedLogin(dispatch) {
    dispatch({
      type: "failure",
    });
  },
};

export default LoginDetail;
