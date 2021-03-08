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

// 获取专栏列表
export const getLists = () => {
  return axios.get("/other/getAllColumnList");
};

export type postProps = {
  id: string;
};
export type resProps = {
  _id: number;
  postId: number;
  title: string;
  content: string;
  time: string;
  avatarUrl: string;
};

// 获取详细专栏的文章
export const getPostById = (params: postProps) => {
  return axios.get("/other/getPostById", {
    params,
  });
};
