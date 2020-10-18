// https://xn--80aaalitaofesfbr3c.xn--90ais/
// http://localhost:3003/
export const request = (path, options, token) => {
  return fetch(`https://xn--80aaalitaofesfbr3c.xn--90ais/api/v1/${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `JWT ${token}` : '',
    },
    ...options,
  })
    .then((response) => {
      if (!response.ok) return Promise.reject(response);

      if (response.status === 204) return Promise.resolve();

      return response.json();
    });
};
