import react from "react";
import "./style.css";

function Addbook() {
  return (
    <>
      <div className="Addbook">
        <div className="addbook-cover"></div>
        <div className="addbook-container">
          <form className="addbook-form">
            <h2>Add Book</h2>
            <p>
              <label>IBN Number : </label>
              <input
                className="addbook-field"
                style={{ width: "30%" }}
                type="text"
              />
            </p>
            <p>
              <label>Book title :</label>
              <input className="addbook-field" type="text" />
            </p>
            <p>
              <label>Author Name : </label>
              <input className="addbook-field" type="text" />
            </p>
            <p>
              <label>Language : </label>
              <input
                className="addbook-field"
                style={{ width: "50%" }}
                type="text"
              />
            </p>
            <p>
              <label>Year Of Publication :</label>
              <input
                className="addbook-field"
                style={{ width: "20%" }}
                type="text"
              />
            </p>
            <p>
              <label>Genre : </label>
              <input
                className="addbook-field"
                placeholder="romance,action,adventure,..."
                type="text"
              />
            </p>
            <p>
              <label style={{ position: "relative", top: "-8em" }}>
                Description :
              </label>
              <textarea />
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addbook;
