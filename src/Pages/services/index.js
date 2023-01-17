import http from "../../http";

const getVolumes = (query) => {
  return http.get(`volumes?q=${query}`);
};

export {
  getVolumes,
};
