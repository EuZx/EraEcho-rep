import { useState, useEffect } from "react";
import ContainerFrame from "../components/ContainerNav";
import "./ItemDetailsPage.css";

const ItemDetailsPage = ({ itemId }) => {
  const [item, setItem] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch item details and reviews from backend using itemId
    fetch(`/api/items/${itemId}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.item);
        setReviews(data.reviews);
      })
      .catch((error) => console.error(error));
  }, [itemId]);

  return (
    <div className="itemdetailspage">
      <ContainerFrame />
      <div className="frame10">
        <div className="frame11">
          <img
            className="frame-item"
            alt=""
            src={item?.image || "/subimage1.jpeg"}
          />
          <div className="frame12">
            <div className="name-brand-category-container">
              <p className="name">Name: {item?.name}</p>
              <p className="name">Brand: {item?.brand}</p>
              <p className="name">Category: {item?.category}</p>
              <p className="name">Overall Rating: {item?.rating}</p>
            </div>
          </div>
        </div>
        <div className="frame13">
          <div className="frame14">
            <div className="reviews">Reviews:</div>
          </div>
          <div className="frame14">
            <section className="reviewer-1-rating-container">
              {reviews.map((review) => (
                <div key={review.id}>
                  <p className="reviewer-1">{`Reviewer ${review.id}:`}</p>
                  <p className="name">Rating: {review.rating}</p>
                  <p className="name">Review: {review.review}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
