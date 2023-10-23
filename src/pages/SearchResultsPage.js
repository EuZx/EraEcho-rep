import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import ContainerNav from "../components/ContainerNav";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  return (
    <div className="searchresultspage">
      <ContainerNav />
      <div className="searchbar">
        <div className="bar">
          <Form className="bar1">
            <Form.Control type="text" />
            <Form.Text>search items or keywords</Form.Text>
          </Form>
        </div>
        <div className="results">
          <section className="searchresults">
            <div className="result">
              <a
                className="result-child"
                target="_blank"
                href="/itemdetailspage"
              />
              <h2 className="name-category-brand-container">
                <span className="name-category-brand-container1">
                  <p className="name1">Name:</p>
                  <p className="name1">Category:</p>
                  <p className="name1">Brand:</p>
                </span>
              </h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
