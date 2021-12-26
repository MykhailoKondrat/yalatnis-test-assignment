const { hashEmail } = require("../util/utils");

db = {};

module.exports.getUsersList = () => {
  return { usersList: Object.values(db) };
};

module.exports.addUser = (req, res) => {
  const hashedEmail = hashEmail(req.body.email);

  if (db[hashedEmail]) {
    return res.render("error", { existingEmail: db[hashedEmail].email });
  }

  if (hashedEmail) {
    db[hashedEmail] = {
      ...req.body,
      createdAt: new Date().toLocaleDateString()
    };
    return res.redirect("/");
  }
};
