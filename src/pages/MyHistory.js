import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./MyHistory.css";

const MyHistory = () => {
  return (
    <div className="myhistory">
      <div className="frame">
        <textarea className="textarea">
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
          <p className="p">.</p>
        </textarea>
      </div>
      <div className="frame1">
        <div className="frame2">
          <div className="frame3">
            <h1 className="eraecho">EraEcho</h1>
            <div className="frame4">
              <div className="home-parent">
                <a className="home">Home</a>
                <div className="login">Login</div>
              </div>
            </div>
          </div>
          <div className="frame5">
            <section className="frame-parent">
              <div className="frame-child" />
              <div className="frame6">
                <div className="frame7">
                  <img className="group-icon" alt="" src="/group.svg" />
                  <Form className="username">
                    <Form.Control type="text" placeholder="Username" />
                  </Form>
                </div>
              </div>
            </section>
            <div className="frame8">
              <h1 className="my-history">My History</h1>
            </div>
          </div>
        </div>
        <div className="frame9">
          <section className="history-reviews">History Reviews</section>
        </div>
      </div>
    </div>
  );
};

export default MyHistory;
