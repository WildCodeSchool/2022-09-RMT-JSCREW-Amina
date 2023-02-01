const Joi = require("joi");

const user = {
  email: "trainer@wildcodeschool.com",
  password: "WildCodeSchool2022",
  name: "John Smith",
  role: "admin",
};

const validateUser = (req, res) => {
  const { error } = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "fr", "net"] } })
      .required(),
    password: Joi.string().min(8).max(25).required(),
  }).validate(req.body, { abortEarly: false });
  if (
    !error &&
    req.body.email === user.email &&
    req.body.password === user.password
  ) {
    res
      .cookie("access_token", "connexion validated", {
        httpOnly: true,
      })
      .status(200)
      .json({ email: user.email, name: user.name, role: user.role });
  } else {
    res.status(400).json({ msg: "Wrong credentials" });
  }
};

module.exports = { validateUser };
