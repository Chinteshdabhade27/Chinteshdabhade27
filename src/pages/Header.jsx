import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.png";
import Nlogo from "../images/stock.jpg";


const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg  " id="nav-bar">
        <div class="container-fluid text-color">
          <img
            src={Nlogo}
            width="55"
            height="50"
            class="d-inline-block align-top"
            alt=""
          />
          <Link to="/" class="navbar-brand ms-2">
            <i>
              <b className="text-color Nav_Logo"><span id="Nav_Logo_T">T</span>rend<span id="Nav_Logo_T">Z</span>one</b>
              {/* <img scr={logo}/> */}
            </i>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  <b className="text-color Nav_i">About Us</b>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  <b className="text-color Nav_i ">Contact Us</b>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
