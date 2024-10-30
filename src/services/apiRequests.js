import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

export const login = async (userData) => {
  const BASE_URL = "https://12141.fullstack.clarusway.com";
  try {
    const data = await axios.post(`${BASE_URL}/auth/login`, userData);
    toastSuccessNotify("Giriş işlemi başarılı")
    console.log(data);
  } catch (error) {
    toastErrorNotify("Giriş işlemi başarısız")
    console.log(error)
  }
};
