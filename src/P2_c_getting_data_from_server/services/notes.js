import axios from "axios";

// for local see package.json 
// const baseUrl = "http://localhost:3001/notes";

// for server first version
//const baseUrl = "http://localhost:3001/api/notes";

// for server running fly.io
const baseUrl = '/api/notes';


// const baseUrl = "https://solitary-fog-6639.fly.dev/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
