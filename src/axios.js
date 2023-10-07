import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-fastapi-backend.onrender.com",
});

const post = async () => {
  const {
    data: { msg },
  } = await instance.post("/start");
  return msg;
};
const get = async (number) => {
  const {
    data: { msg },
  } = await instance.get("/guess", { params: { number } });
  return msg;
};

export { post, get };
