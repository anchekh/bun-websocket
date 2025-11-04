const server = Bun.serve({
  port: 3000,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Bun!");
  },
  websocket: {
	message(ws, message) {},
    open(ws) {
      ws.send("Плясова Дарья Вадимовна");
    },
    close(ws, code, reason) {}
  },
});
console.log(`Listening on http://localhost:3000`);