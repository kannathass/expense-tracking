const LoginDetail1 = {
  getLoginDetail(dispatch) {
    dispatch({
      type: "success",
      payload: {
        userName: "kanna",
        timeStamp: "11/06/2022",
      },
    });
  },
  failedLogin(dispatch) {
    dispatch({
      type: "failure",
    });
  },
};

export default LoginDetail1;
