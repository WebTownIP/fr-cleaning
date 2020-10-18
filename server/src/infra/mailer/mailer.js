const nodemailer = require('nodemailer');

module.exports = ({ config }) => {
  const transporter = nodemailer.createTransport({ ...config.mailer });

  const sendEmail = (mailOptions) => {
    const sendPromise = new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          reject(error);
        } else {
          resolve(info.response);
        }
      });
    });

    return sendPromise;
  };

  return {
    sendEmail,
  };
};
