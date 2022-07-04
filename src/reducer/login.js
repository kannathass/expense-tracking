const initialState = {
  userName: "my name..",
  // firstName: "",
  // lastName: "",
  // email: "",
  // password: "",
  loginStatus: false,
  timestamp: "",
};

function login(state = initialState, action) {
  switch (action.type) {
    case "success":
      return {
        ...state,
        loginStatus: true,
      };
    case "login.userDetail":
      return {
        ...state,
        userDetail: action.payLoad,
      };
    case "login.success":
      return {
        ...state,
        loginStatus: true,
      };
    case "signout":
      return {
        ...state,
        loginStatus: false,
        userDetail: {},
      };
    case "failure":
      return {
        ...state,
        loginStatus: false,
        userDetail: {},
      };
    default:
      return state;
  }
}

export default login;
