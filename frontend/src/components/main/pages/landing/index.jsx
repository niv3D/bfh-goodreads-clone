import react from "react";
import "./style.css";

function LandingPage() {
  return (
    <>
      <div className="book-tile">
        <img src="/dummy.jpg" />
        <div className="book-details">
          <div className="book-overview">
            <p className="book-name">
              <h2>Name of the book</h2>
              <b>Author name</b>
            </p>
            <p className="book-rating">
              <h2>5.4</h2>
              <b>(6,592)</b>
            </p>
          </div>
          <p className="book-description">
            <b>Description :</b> <br />
            This book is a training material that covers all aspects of Forensic
            Science with 30 chapters, explaining different types of crime
            scenes, the probable types of evidence expec...
          </p>
        </div>
      </div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>

      <div className="book-tile"></div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>

      <div className="book-tile"></div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>
      <div className="book-tile"></div>
    </>
  );
}

export default LandingPage;
