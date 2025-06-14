let socket = null;

export const socketInit = () => {
  if (socket) {
    return socket
  }

  socket = new WebSocket(process.env.SOCKET_API_URL);

  return socket;
}
