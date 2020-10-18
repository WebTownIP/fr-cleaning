module.exports = ({ mailer }) => {
  const sendCallNotification = ({ body }) => {
    return mailer.sendEmail({
      from: 'planet-gomel@yandex.by',
      to: 'gomelklining@gmail.com',
      subject: 'Заказ звонка',
      text: `
        ${body.name} заказал звонок на номер ${body.phone}
      `,
    });
  };

  return {
    sendCallNotification,
  };
};
