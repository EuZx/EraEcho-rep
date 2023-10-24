import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import ContainerNav from "../components/ContainerNav";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // send search query to backend and get search results
    const results = await fetch(`/api/search?q=${searchQuery}`).then((res) =>
      res.json()
    );
    setSearchResults(results);
  };

  const Result = ({ result }) => {
    const handleClick = async () => {
      // send clicked item to backend and get item details
      const itemDetails = await fetch(`/api/item?id=${result.id}`).then((res) =>
        res.json()
      );
      // redirect to ItemDetailsPage with item details as query parameter
      window.location.href = `/itemdetailspage?item=${JSON.stringify(itemDetails)}`;
    };

    return (
      <div className="result" onClick={handleClick}>
        <a className="result-child" href="#">
          {result.image ? (
            <img src={result.image} alt={result.name} />
          ) : (
            <img src="/public/subimage1.jpeg" alt={result.name} />
          )}
        </a>
        <h2 className="name-category-brand-container">
          <span className="name-category-brand-container1">
            <p className="name1">Name:</p>
            <p className="name2">{result.name}</p>
            <p className="name1">Category:</p>
            <p className="name2">{result.category}</p>
            <p className="name1">Brand:</p>
            <p className="name2">{result.brand}</p>
          </span>
        </h2>
      </div>
    );
  };

  return (
    <div className="searchresultspage">
      <ContainerNav />
      <div className="searchbar">
        <div className="bar">
          <Form className="bar1" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Search Items or Keywords"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button type="submit">Search</button>
          </Form>
        </div>
        <div className="results">
          <section className="searchresults">
            {searchResults.map((result) => (
              <Result key={result.id} result={result} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;