import { ofetch } from "ofetch";

const apiFetch = ofetch.create({
  baseURL: 'http://localhost:5000',
  credentials: 'include',
});


export default apiFetch