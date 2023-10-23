import { memo } from "react";
import { Link } from "react-router-dom";
import "./HomeContainer.css";

const HomeContainer = memo(() => {
  return (
    <div className="frame18">
      <section className="hello1" />
      <div className="navsec2">
        <nav className="nav2">
          <Link className="home5" to="/">
            Home
          </Link>
          <Link className="log-in" to="/loginpage">
            Log in
          </Link>
        </nav>
      </div>
    </div>
  );
});

export default HomeContainer;
