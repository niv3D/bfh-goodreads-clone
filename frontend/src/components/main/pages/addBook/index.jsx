import react, { useState } from "react";
import "./style.css";

function Addbook() {
  const [ibn, setIbn] = useState("");
  const [ibnValid, setIbnValid] = useState(true);
  const [title, setTitle] = useState("");
  const [titleValid, setTitleValid] = useState(true);
  const [author, setAuthor] = useState("");
  const [authorValid, setAuthorValid] = useState(true);
  const [language, setLanguage] = useState("");
  const [languageValid, setLanguageValid] = useState(true);
  const [year, setYear] = useState("");
  const [yearValid, setYearValid] = useState(true);
  const [genre, setGenre] = useState("");
  const [genreValid, setGenreValid] = useState(true);
  const [descritpion, setDescription] = useState("");
  const [descriptionValid, setDescriptionValid] = useState(true);
  const [link, setLink] = useState("");
  const [linkValid, setLinkValid] = useState(true);

  const handleBook = async (e) => {
    e.preventDefault();
    setIbnValid(true);
    setTitleValid(true);
    setAuthorValid(true);
    setLanguageValid(true);
    setYearValid(true);
    setGenreValid(true);
    setDescriptionValid(true);
    setLinkValid(true);
  };
  return (
    <>
      <div className="Addbook">
        <div className="addbook-cover">
          <img src="" />
          <input type="file" />
        </div>
        <div className="addbook-container">
          <form className="addbook-form">
            <h2>Add Book</h2>
            <p>
              <label>ISBN Number : </label>
              <input
                className="addbook-field"
                style={{ width: "30%" }}
                type="number"
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
                type="number"
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
            <p>
              <label>Link to purchase : </label>
              <input
                className="addbook-field"
                placeholder="paste url here"
                type="url"
              />
            </p>
            <p>
              <label></label>
              <button
                style={{ margin: "3em 2em 0 0" }}
                className="input-button"
              >
                Add Book
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addbook;
