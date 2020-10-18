module.exports = ({ orderRepository }) => {
  const updateOrder = ({ id, orderData }) => {
    return orderRepository.partialUpdate(id, orderData);
  }

  return {
    updateOrder,
  };
};
