import axios from "axios";

const proceduresData = axios.get('http://localhost:3001/procedures')
  .then(res => res.data)
  .catch(error => console.error(error));

export {proceduresData};