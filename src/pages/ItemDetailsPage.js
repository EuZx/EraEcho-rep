import ContainerFrame from "../components/ContainerFrame";
import "./ItemDetailsPage.css";

const ItemDetailsPage = () => {
  return (
    <div className="itemdetailspage">
      <ContainerFrame />
      <div className="frame10">
        <div className="frame11">
          <img className="frame-item" alt="" src="/ItemCover@2x.png" />
          <div className="frame12">
            <div className="name-brand-category-container">
              <p className="name">Name</p>
              <p className="name">Brand:</p>
              <p className="name">Category:</p>
              <p className="name">Overall Rating:</p>
            </div>
          </div>
        </div>
        <div className="frame13">
          <div className="frame14">
            <div className="reviews">Reviews:</div>
          </div>
          <div className="frame14">
            <section className="reviewer-1-rating-container">
              <p className="reviewer-1">Reviewer 1:</p>
              <p className="name">Rating: ......</p>
              <p className="name">Review: ......</p>
              <p className="reviewer-1">Reviewer 2:</p>
              <p className="name">Rating: ......</p>
              <p className="name">Review: ......</p>
              <p className="reviewer-1">Reviewer 3:</p>
              <p className="name">Rating: ......</p>
              <p className="name">Review: ......</p>
              <p className="reviewer-1">{`Reviewer 4: `}</p>
              <p className="name">Rating: ......</p>
              <p className="name">Review: ......</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
