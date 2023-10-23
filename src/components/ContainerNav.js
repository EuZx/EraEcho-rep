import { memo } from "react";
import { Link } from "react-router-dom";
import "./ContainerNav.css";

const ContainerNav = memo(() => {
  return (
    <div className="nav1">
      <section className="navsec1">
        <h1 className="eraecho4">EraEcho</h1>
      </section>
      <div className="navsection1">
        <nav className="navbars">
          <Link className="home4" to="/">
            Home
          </Link>
          <Link className="home4" to="/loginpage">
            Login
          </Link>
          <Link className="my-history4" to="/myhistory">
            My History
          </Link>
        </nav>
      </div>
    </div>
  );
});

export default ContainerNav;
