const colors = require("colors");
const nodemailer=require("nodemailer")
const sendGridTransport=require("nodemailer-sendgrid-transport")
let transporter = nodemailer.createTransport(sendGridTransport({
  auth: {
      api_user: process.env.API_SENDGRID,
  }
}));
const sendEmailController = (req, res) => {
  try {
    const {name,email,msg}=req.body;
if(!name || !email || !msg){
  return res.status(500).send({
    success:false,
    message:"Please Provide All Fields"
  })
} 
transporter.sendMail({
  to: ['subhamkumarsahoo109@gmail.com', 'mike@bar.com'],
  from: 'subhamkumarsahoo112@gmail.com',
  subject: 'regarding subham portfolio',
  text: 'subham portfolio',
  html: `
  <h5>Details Information</h5>
  <ul>
  <li><p>SenderName:${name}</p></li>
  <li><p>SenderEmail:${email}</p></li>
  <li><p>SenderMessage:${msg}</p></li>
  </ul>
  `
});




    return res.status(200).send({
      success: true,
      message: "message send successfully",
    });
  } catch (error) {
    console.log(`error in portFolio controller ${error}`.bgGreen.white);
    return res.status(500).send({
      success: false,
      message: "Send Email api Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
