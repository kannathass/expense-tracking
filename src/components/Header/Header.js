import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginDetail from "../../dispatcher/login";

export default function Header() {
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    LoginDetail.userSignOut(dispatch);
    navigate("./");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <i className="fa fa-address-book-o" aria-hidden="true"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="dashboard" className="nav-link">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {!loginData.loginStatus ? (
              <>
                <Link to="/register">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0 submit-register"
                    type="submit"
                  >
                    Sign up
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/">
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  // type="submit"
                  onClick={onSubmitHandler}
                >
                  Signout
                </button>
              </Link>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
}
