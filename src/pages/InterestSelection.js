import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeContainer from "../components/HomeContainer";
import "./InterestSelection.css";

const InterestSelection = () => {
  const [labels, setLabels] = useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch labels from backend using an API call
    fetch("/api/labels")
      .then((response) => response.json())
      .then((data) => setLabels(data));
  }, []);

  const handleLabelClick = (label) => {
    // Toggle the selected state of the label
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((l) => l !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  const handleContinueClick = () => {
    // Validate that at least one label is selected
    if (selectedLabels.length === 0) {
      alert("Please select at least one label.");
      return;
    }

    // Send selected labels to backend using an API call
    fetch("/api/selected-labels", {
      method: "POST",
      body: JSON.stringify(selectedLabels),
    }).then(() => {
      // Navigate to Main page
      navigate("/main");
    });
  };

  return (
    <div className="interestselection">
      <HomeContainer />
      <div className="selection">
        <a className="welcome">Welcome</a>
        <h1 className="eraecho1">EraEcho</h1>
        {labels.map((label) => (
          <div
            key={label.id}
            className={`label-box ${
              selectedLabels.includes(label) ? "selected" : ""
            }`}
            onClick={() => handleLabelClick(label)}
          >
            {label.name}
          </div>
        ))}
        <Button
          className="continue-button"
          variant="warning"
          onClick={handleContinueClick}
          size="lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default InterestSelection;
