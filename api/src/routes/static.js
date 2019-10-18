module.exports = app => {
  app.get("/", (req, res, next) => {
    res.render("index", { title: "Home", user: req.user });
  });

  app.get("/about", (req, res, next) => {
    res.render("about", { title: "About", user: req.user });
  });

  app.get("/get-involved", (req, res, next) => {
    res.render("getInvolved", { title: "Get Involved", user: req.user });
  });

  app.get("/how-it-works", (req, res, next) => {
    res.render("howItWorks", { title: "How it (will) Work", user: req.user });
  });

  app.get("/login", (req, res, next) => {
    res.render("login", { title: "Log in to Radical Insight" });
  });

  app.get("/privacy", (req, res, next) => {
    res.render("privacy", { title: "Privacy Policy", user: req.user });
  });

  app.get("/resources", (req, res, next) => {
    res.render("resources", { title: "Resources", user: req.user });
  });

  app.get("/terms", (req, res, next) => {
    res.render("terms", { title: "Terms & Conditions", user: req.user });
  });
};
