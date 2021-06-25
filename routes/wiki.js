const router = require("express").Router();
const { addPage, editPage, main, userList, userPages, wikiPage } = require("../views/index.js");

router.get("/", (req, res, next) => {
  res.send(main());
});

router.post("/", (req, res, next) => {
  res.send(res.json(req.body));
});

router.get("/add" , (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
