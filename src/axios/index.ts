import axios from "./config";
export interface ResponseProps {
  status: number;
  message?: string;
  token?: string;
  result?: any;
}
// 登陆接口
type loginProps = {
  email: string;
  password: string;
};
export const login = (params: loginProps) => {
  return axios.post("/user/login", params);
};
