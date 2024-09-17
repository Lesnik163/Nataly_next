import axios from "axios";

const photosData = axios.get('http://localhost:3001/photos')
  .then(res => res.data)
  .catch(error => console.error(error));

export {photosData};