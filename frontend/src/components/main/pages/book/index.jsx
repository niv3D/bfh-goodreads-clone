import React, { useState, useEffect } from "react";
import api from "../../../../service/api";

import "./styles.css";

function BookDetails({
  match: {
    params: { isbn },
  },
}) {
  const [data, setData] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  // const [reviewed, setReviewed] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.post("/find", { ibn: isbn });
        if (res.data.status) setData(res.data);
      } catch (e) {
        setData({ status: false, type: "catch", error: "" + e });
      }
    }
    getData();
  }, [isbn]);

  return (
    <>
      <div className="Book-details">
        <div className="Book-cover">
          <img src="/dummy.jpg" />
        </div>
        <div className="Book-review">
          <p>
            <h4>My Review : stars</h4> <br />
            ithvare book vayikkatta njn ent review idaana ithvare book
            vayikkatta njn ent review idaana ithvare book vayikkatta njn ent
            review idaana ithvare book vayikkatta njn ent review idaana ithvare
            book vayikkatta njn ent review idaana ithvare book vayikkatta njn
            ent review idaana ithvare book vayikkatta njn ent review idaana
          </p>
        </div>
        <div className="Book-description">
          <p>
            <h4>Description : </h4>
            <br />
            entaaammoooo kidilan book vayikkatta njn ent review idaana ithvare
            book vayikkatta njn ent review idaana ithvare book vayikkatta njn
            ent review idaana ithvare book vayikkatta njn ent review idaana
            ithvare book vayikkatta njn ent review idaana ithvare book
            vayikkatta njn ent review idaana
          </p>
        </div>
        <div className="Book-data">
          <p>
            <h2>Details :</h2>
            <br />
            <label>IBN Number : </label>
            <br />
            <label>Book title : </label>
            <br />
            <label>Author Name : </label>
            <br />
            <label>Language : </label>
            <br />
            <label>Year of Publication : </label>
            <br />
            <label>Genre : </label>
            <br />
            <label>Buy At : </label>
          </p>
        </div>
        <div className="Book-reviews">
          <p>
            <h3>Reviews :</h3>
          </p>
          <div className="user-review">
            <p>
              <h4>username : ; stars:</h4>
              kollaaam super book ,pakshe njan vaayichilla !
            </p>
          </div>
          <div className="user-review">
            <p>
              <h4>username : ; stars:</h4>
              kollaaam super book ,pakshe njan vaayichilla !
            </p>
          </div>
          <div className="user-review">
            <p>
              <h4>username : ; stars:</h4>
              kollaaam super book ,pakshe njan vaayichilla !
            </p>
          </div>
          <div className="user-review">
            <p>
              <h4>username : ; stars:</h4>
              kollaaam super book ,pakshe njan vaayichilla !
            </p>
          </div>
          <div className="user-review">
            <p>
              <h4>username : ; stars:</h4>
              kollaaam super book ,pakshe njan vaayichilla !
            </p>
          </div>
          <div className="user-review">
            <p>
              <h4>username : ; stars:</h4>
              kollaaam super book ,pakshe njan vaayichilla !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
