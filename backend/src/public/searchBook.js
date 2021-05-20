const books = require("../models/books");

const searchBook = async (req, res) => {
  if (!req.body.query) return res.json({ status: false, type: "empty" });
  const findBooks = await books
    .find({
      $or: [
        { ibn: { $regex: req.body.query, $options: "i" } },
        { title: { $regex: req.body.query, $options: "i" } },
      ],
    })
    .sort({ avg_rating: -1 })
    .select("-_id");
  return res.json({ status: true, data: findBooks });
};



const findBook = async (req, res) => {
  if (!req.body.ibn) return res.json({ status: false, type: "ibn" });
  const findBook = await books.findOne({ ibn: req.body.ibn });
  if (!findBook) return res.json({ status: false, type: "empty" });
  return res.json({ status: true, data: findBook });
};

const viewBooks = async (req, res) => {
  if (!req.body.genre) return res.json({ status: false, type: "genre" });
  let findBooks;
  if (req.body.genre === "all")
    findBooks = await books.find().sort({ avg_rating: -1 });
  else
    findBooks = await books
      .find({ genre: { $eq: req.body.genre } })
      .sort({ avg_rating: -1 });
  if (findBooks.length === 0) return res.json({ status: false, type: "empty" });
  return res.json({ status: true, data: findBooks });
};

module.exports = { findBook, viewBooks, searchBook };

