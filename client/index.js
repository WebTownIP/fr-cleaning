import server from './ssr';

const UI_PORT = 3000;

server.listen(UI_PORT, (err) => {
  if (err) {
    return console.error(err);
  }

  return console.info(`Server running on http://localhost:${UI_PORT}`);
});
