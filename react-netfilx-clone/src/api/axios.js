import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b9abea3849ac08168f065eacbf6042f4",
    language: "ko-KR",
  },
});

export default instance;
