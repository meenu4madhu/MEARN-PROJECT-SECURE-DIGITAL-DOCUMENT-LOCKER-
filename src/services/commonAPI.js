import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody, reqHeader = {}, responseType = "json") => {
  const token = sessionStorage.getItem("token");

  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
    ...reqHeader
  };

  // ONLY set JSON content-type when reqBody is NOT FormData
  if (!(reqBody instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers,
    responseType
  };

  return axios(reqConfig)
    .then(res => res)
    .catch(err => err.response || err);
};

export default commonAPI;
