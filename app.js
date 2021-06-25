const express = require("express");
const app = express();
const morgan = require("morgan");
const { db, Page, User } = require("./models/index");
const { addPage, editPage, main, userList, userPages, wikiPage } = require("./views/index");

db.authenticate()
  .then(() => {
    console.log("connected to the database");
  })

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({
  extended: false
}));

app.use("/wiki", require("./routes/wiki"));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

async function init() {
  try {
    await db.sync({force: true});

    const PORT = 3000;

    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

init();
