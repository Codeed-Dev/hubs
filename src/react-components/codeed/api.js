const server = process.env.CODEEDMETA_SERVER;
console.log("server", server);

const api = {
  get: async function (url, params) {
    const queryString = new URLSearchParams(params ?? {});

    const response = await fetch(`${server}api/${url}?${queryString}`, {
      method: "GET",
      credentials: "include"
    });

    return await response.json();
  },
  post: async function (url, body) {
    const response = await fetch(`${server}api/${url}`, {
      method: "POST",
      credentials: "include",
      body: body && JSON.stringify(body)
    });

    return await response.json();
  }
};

export default api;
