export function invokeApi() {
  const api_url = process.env.REACT_APP_API_URL;

  const params = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
    },
  };

  return fetch(api_url, params).then((res) => res.json());
}
