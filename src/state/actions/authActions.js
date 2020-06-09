import axios from "axios";
const url = "http://localhost:4000/api/v1";

const userSignup = async (data) => {
  try {
    let res = await axios.post(`${url}/users`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { userSignup };
