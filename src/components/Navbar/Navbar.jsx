import BrandName from "./BrandName";
import CartWidget from "./CartWidget";
import { NavbarRoutes } from "../../routes/NavbarRoutes";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <BrandName
          img="https://e7.pngegg.com/pngimages/837/160/png-clipart-video-game-pc-game-personal-computer-nvidia-3d-vision-others-game-angle.png"
          name="ROKI"
        ></BrandName>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {NavbarRoutes.map((route) => (
              <li className="nav-item" key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CartWidget countNumber={4} />
    </nav>
  );
};

export default Navbar;
