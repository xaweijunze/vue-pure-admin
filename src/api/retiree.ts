import { http } from "@/utils/http";

/** 查询列表 */
export const getRetirees = (data?: object) => {
  return http.request<any>("post", "/api/retirees/getList", { data });
};
