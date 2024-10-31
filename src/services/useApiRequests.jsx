import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

//!Custom Hook
const useApiRequests = () => {
  const navigate = useNavigate();
  const login = async (userData) => {
    // const BASE_URL = "https://12141.fullstack.clarusway.com";
    try {
      const data = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData);
      toastSuccessNotify("Giriş işlemi başarılı");
      navigate("/stock");
      console.log(data.data);
    } catch (error) {
      toastErrorNotify("Giriş işlemi başarısız");
      console.log(error);
    }
  };
  return login;
};

export default useApiRequests;
