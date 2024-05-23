import axios from "axios";

export const getRequest = (url: string) => {
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};

export const postRequest = (url: string, payload: any) => {
  return axios.post(url, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};

export const patchRequest = (url: string, payload: any) => {
  return axios.patch(url, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};

export const deleteRequest = (url: string) => {
  return axios.delete(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
