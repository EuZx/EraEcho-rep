import { memo } from "react";
import "./ContainerFrame.css";

const ContainerFrame = memo(() => {
  return (
    <div className="frame16">
      <section className="eraecho-wrapper">
        <h1 className="eraecho3">EraEcho</h1>
      </section>
      <div className="frame17">
        <div className="home-group">
          <a className="home3">Home</a>
          <div className="login2">Login</div>
          <div className="my-history3">My History</div>
        </div>
      </div>
    </div>
  );
});

export default ContainerFrame;
