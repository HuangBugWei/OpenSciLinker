import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8080/" });

const login = async (props) => {
  console.log("here", props);
  //   const postData = {
  //     email: "gsjlgjeslj@gmail.comm",
  //     password: "gsgddgsgsgd",
  //   };

  const { data: response } = await instance.post("/api/login", props);
  console.log(response);
  return response;
};

const register = async (props) => {
  console.log("here", props);
  const { data: response } = await instance.post("/api/register", props);
  console.log(response);
  return response;
};

const search = async (props) => {
  console.log("here", props);
  const { data: response } = await instance.get("/api/search/post/" + props);
  console.log(response);
  return response;
};

const postproject = async (props) => {
  console.log("here", props);
  const { data: response } = await instance.post("/api/post/" + props);
  console.log(response);
  return response;
};

const findownproject = async (props) => {
  console.log("here", props);
  const { data: response } = await instance.post("/api/post/" + props);
  console.log(response);
  return response;
};

export { login, register, search, postproject, findownproject };
