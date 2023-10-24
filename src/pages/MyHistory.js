import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyHistory.css';

function MyHistory() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [reviews, setReviews] = useState([]); // This would be your fetched data
  const [selectedSort, setSelectedSort] = useState('genre');

  const handleSearch = () => {
    // Send start and end time to the backend and update reviews state based on the response
  }

  const handleSort = (type) => {
    // Sort the reviews based on type and update the state
    setSelectedSort(type);
  }

  const handleReviewSearch = () => {
    // Search for reviews based on the selected sorting option and update the state
    // You can replace this with your actual review search logic
    const sortedReviews = reviews.sort((a, b) => {
      switch (selectedSort) {
        case 'priceLowHigh':
          return a.price - b.price;
        case 'priceHighLow':
          return b.price - a.price;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        default:
          return a.genre.localeCompare(b.genre);
      }
    });
    setReviews(sortedReviews);
  }

  return (
    <div className="container">
      <div className="header">
      <h1>EraEcho</h1> 
      <div className="links">
        <Link to="/mainpage">Home</Link>
        <Link to="/loginpage">Login</Link>
      </div>
      </div>
      <div className="profile-container">
        <div className="profile-image">
        <img className="vinyl-image" />
        <img className="user-icon" />
        <div className="profile-name">Username</div>
        </div>
      </div>
      <div className="history-section">
        <div className="history-title">My History</div>

        <div className="time-selector">
          <input type="month" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <span>to</span>
          <input type="month" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
        
        {/* Graph */}
        <div className="graph">
          <div className="x-axis"></div>
          <div className="y-axis"></div>
          {/* You can render your graph data here */}
        </div>

        <div className="graph-label">
          <span>Date/Time</span>
          <span>Number of Comments</span>
        </div>

        <div className="review-sort">
          <h2>History Reviews</h2>
          <select value={selectedSort} onChange={(e) => handleSort(e.target.value)}>
            <option value="genre">Genre</option>
            <option value="priceLowHigh">Price Low to High</option>
            <option value="priceHighLow">Price High to Low</option>
            <option value="brand">Brand</option>
          </select>
          <button onClick={handleReviewSearch}>Enter</button>
        </div>

        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            {review.content} {/* Replace with actual review data */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyHistory;
