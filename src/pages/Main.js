import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Main.css";

const Item = ({ imageUrl, description, onThumbsDownClick }) => (
  <div className="item">
    <img src={imageUrl || "/subimage1.jpeg"} alt="item" />
    <div className="description">{description}</div>
    <Button variant="danger" onClick={onThumbsDownClick}>Thumbs Down</Button>
  </div>
);

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([
    { imageUrl: "/top-pick-1.jpg", description: "Top Pick 1 Description" },
    { imageUrl: "/top-pick-2.jpg", description: "Top Pick 2 Description" },
    { imageUrl: "/top-pick-3.jpg", description: "Top Pick 3 Description" },
    { imageUrl: "/top-pick-4.jpg", description: "Top Pick 4 Description" },
    { imageUrl: "/top-pick-5.jpg", description: "Top Pick 5 Description" },
    { imageUrl: "/top-pick-6.jpg", description: "Top Pick 6 Description" },
    { imageUrl: "/best-rating-1.jpg", description: "Best Rating 1 Description" },
    { imageUrl: "/best-rating-2.jpg", description: "Best Rating 2 Description" },
    { imageUrl: "/best-rating-3.jpg", description: "Best Rating 3 Description" },
    { imageUrl: "/best-rating-4.jpg", description: "Best Rating 4 Description" },
    { imageUrl: "/best-rating-5.jpg", description: "Best Rating 5 Description" },
    { imageUrl: "/best-rating-6.jpg", description: "Best Rating 6 Description" },
    { imageUrl: "/may-like-1.jpg", description: "May Like 1 Description" },
    { imageUrl: "/may-like-2.jpg", description: "May Like 2 Description" },
    { imageUrl: "/may-like-3.jpg", description: "May Like 3 Description" },
    { imageUrl: "/may-like-4.jpg", description: "May Like 4 Description" },
    { imageUrl: "/may-like-5.jpg", description: "May Like 5 Description" },
    { imageUrl: "/may-like-6.jpg", description: "May Like 6 Description" },
    { imageUrl: "/similar-1.jpg", description: "Similar 1 Description" },
    { imageUrl: "/similar-2.jpg", description: "Similar 2 Description" },
    { imageUrl: "/similar-3.jpg", description: "Similar 3 Description" },
    { imageUrl: "/similar-4.jpg", description: "Similar 4 Description" },
    { imageUrl: "/similar-5.jpg", description: "Similar 5 Description" },
    { imageUrl: "/similar-6.jpg", description: "Similar 6 Description" },
  ]);
  const history = useNavigate();

  const handleSearch = () => {
    // Send search query to backend API
    // ...
    // Navigate to search results page
    Navigate("/searchresultspage");
  };

  const handleThumbsDownClick = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <div className="main">
      <section className="coverpic">
        <div className="cover">
          <input
            type="text"
            className="search-input"
            placeholder="Search Items or Keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-bar" onClick={handleSearch}>Search</button>
        </div>
      </section>
      <h1 className="eraecho2">EraEcho</h1>
      <nav className="three-tabs">
        <a className="home2">Home</a>
        <Link className="login1" to="/loginpage">Login</Link>
        <Link className="my-history2" to="/myhistory">My History</Link>
      </nav>
      <h2 className="top-picks">Top Picks</h2>
      <div className="items-container">
        {items.slice(0, 6).map((item, index) => (
          <Item
            key={index}
            imageUrl={item.imageUrl}
            description={item.description}
            onThumbsDownClick={() => handleThumbsDownClick(index)}
          />
        ))}
      </div>
      <h2 className="best-ratings">Best Ratings</h2>
      <div className="items-container">
        {items.slice(6, 12).map((item, index) => (
          <Item
            key={index}
            imageUrl={item.imageUrl}
            description={item.description}
            onThumbsDownClick={() => handleThumbsDownClick(index + 6)}
          />
        ))}
      </div>
      <h2 className="you-may-like">You May Like</h2>
      <div className="items-container">
        {items.slice(12, 18).map((item, index) => (
          <Item
            key={index}
            imageUrl={item.imageUrl}
            description={item.description}
            onThumbsDownClick={() => handleThumbsDownClick(index + 12)}
          />
        ))}
      </div>
      <h2 className="similar-items">Similar Items</h2>
      <div className="items-container">
        {items.slice(18, 24).map((item, index) => (
          <Item
            key={index}
            imageUrl={item.imageUrl}
            description={item.description}
            onThumbsDownClick={() => handleThumbsDownClick(index + 18)}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
