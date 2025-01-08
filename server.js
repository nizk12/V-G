const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || vglory - backend.onrender.com;

//Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fforfunforall@gmail.com",
      pass: "mncu epgc ghel yryd",
    },
  });

  const mailOption = {
    from: req.body.email,
    to: "nirmalkhawas02@gmail.com",
    subject: `Enquiry from ${req.body.name}`,
    html: `<br> <b>Name: </b> ${req.body.name}<br> <br><b> Email: </b> <br> ${req.body.email} <br><br> <b> Service:  </b> <br> ${req.body.dropdown} <br><br> <b>Message: </b><br> ${req.body.message}`,
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
