import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import HomeContainer from "../components/HomeContainer";
import "./InterestSelection.css";

const InterestSelection = () => {
  return (
    <div className="interestselection">
      <HomeContainer />
      <div className="selection">
        <a className="welcome">Welcome</a>
        <h1 className="eraecho1">EraEcho</h1>
        <Button
          className="continue-button"
          variant="warning"
          href="/main"
          size="lg"
        >
          Continue
        </Button>
        <ul className="selection-child" id="genre list" />
      </div>
    </div>
  );
};

export default InterestSelection;
