const books = require("../models/books");
const users = require("../models/users");

const addReview = async (req, res) => {
  if (!req.userData.user_id) return res.json({ status: false, type: "user" });
  if (!req.body.ibn) return res.json({ status: false, type: "ibn" });
  try {
    const findBook = await books.findOne({ ibn: req.body.ibn });
    if (!findBook) return res.json({ status: false, type: "bookdoesntexists" });
    const findUser = await users.findById(req.userData.user_id);
    if (!findUser) return res.json({ status: false, type: "userdoesntexists" });

    const isReviewed = findUser.books.reviewed.find((value) => {
      if (value.book.toString() === findBook._id.toString()) return true;
      else return false;
    });
    if (isReviewed) return res.json({ status: false, type: "exists" });
    console.log("huhu");
    findBook.reviews.push({
      user_id: req.userData.user_id,
      rating: req.body.rating,
      comment: req.body.comment,
      res_upvotes: 0,
      date: new Date(),
      name: findUser.name,
      avatar: findUser.avatar || "",
    });

    findBook.avg_rating =
      (findBook.avg_rating + req.body.rating) / findBook.reviews.length;
    findUser.books.reviewed.push({
      book: findBook._id,
      review: findBook.reviews[findBook.reviews.length - 1]._id,
    });

    await findBook.save();
    await findUser.save();
    return res.json({ status: true });
  } catch (e) {
    return res.json({ status: false, error: e });
  }
};

const editReview = async (req, res) => {
  //code later

  return res.json({ status: false });
};

const removeReview = async (req, res) => {
  //code later

  return res.json({ status: false });
};

module.exports = { addReview, editReview, removeReview };
