import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8080/" });

// const post = async () => {
//     const { data: { msg } } = await instance.post('/start')
//     return msg
// }

// GET，沒有加任何參數
// const get = async () => {
//     const { data:  msg  } = await instance.get('/api/test_get')
//     console.log(msg)
//     return msg
// }

// GET，加上一個id參數
const get = async (id) => {
  const { data: msg } = await instance.get(`/api/test_get/aaaaa`);
  console.log(msg);
  return msg;
};

// POST，加上 input data
const post = async (user_email, post_id) => {
  const postData = {
    user_email: "gsjlgjeslj@gmail.com",
    post_id: "gsgddgsgsgd",
  };

  const response = await instance.post("/api/test_post", postData);
  const { data: msg } = response;
  console.log(msg);

  return msg;
};

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

export { post, get, login, register };
