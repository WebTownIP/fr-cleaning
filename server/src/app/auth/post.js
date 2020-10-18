module.exports = ({ encryption, jwt, userRepository }) => {
  const login = async ({ body }) => {
    let user;

    try {
      user = await userRepository.findOne('email', body.email);
    } catch (e) {
      return Promise.reject(e);
    }

    if (!user) {
      return Promise.reject();
    }

    if (!user.isActive) {
      return Promise.reject();
    }

    let isPasswordCorrect;

    try {
      isPasswordCorrect = await encryption.comparePassword(body.password, user.password);
    } catch (e) {
      return Promise.reject(e);
    }

    if (!isPasswordCorrect) {
      return Promise.reject();
    }

    let token;

    try {
      token = await jwt.sign({
        id: user.id,
      });
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve({
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  };

  const register = async ({ body }) => {
    let password;

    try {
      password = await encryption.encryptPassword(body.password);
    } catch (e) {
      return Promise.reject(e);
    }

    try {
      await userRepository.create({
        email: body.email,
        password,
      });
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  };

  return {
    login,
    register,
  };
};
