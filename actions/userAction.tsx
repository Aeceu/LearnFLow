import axios from "axios";
import { userSignUpType } from "../../zod/types/user";

export default class UserAction {
  getUsers = async () => {
    try {
      const res = await axios.get("/api/user");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  registerUser = async (data: userSignUpType) => {
    try {
      const res = await axios.post("/api/signup", data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}
