module.exports = ({ mailer, addressRepository, orderRepository }) => {
  const sendCallNotification = ({ body }) => {
    return mailer.sendEmail({
      from: 'planet-gomel@yandex.by',
      to: 'gomelklining@gmail.com',
      subject: 'Заказ уборки',
      text: `
        Новы заказ
        ---------
        Тип: ${body.attributes.type}
        ---------
        Контактные данные
        Имя: ${body.name || '-'}
        Номер тел: ${body.phone || '-'}
        Email: ${body.email || '-'}
        Доп информация: ${body.description || '-'}
        ---------
        Адрес
        Улица: ${body.street || '-'}
        Дом: ${body.house || '-'}
        Квартира: ${body.flat || '-'}
        ---------
        Больше деталей на странице администрирования https://xn--80aaalitaofesfbr3c.xn--90ais/admin
      `,
    });
  };

  const createOrder = async ({ body }) => {
    const address = await addressRepository.create({
      street: body.street,
      house_n: body.house,
      appartm_n: body.flat,
    });

    const order = await orderRepository.create({
      name: body.name,
      phone: body.phone,
      email: body.email,
      price: body.price || 0,
      address_id: address.id,
      comment: body.description,
      status: 0,
    });

    const attributes = body.attributes || {};
    const orderAttributes = Object.keys(attributes).map(attribute => ({
      name: attribute,
      value: attributes[attribute],
      order_id: order.id,
    }));

    orderRepository.createAttributes(orderAttributes);

    const orderServices = (body.services || []).map(service => ({
      service_id: service,
      order_id: order.id,
    }));

    orderRepository.createServices(orderServices);
  };

  return {
    sendCallNotification,
    createOrder,
  };
};
