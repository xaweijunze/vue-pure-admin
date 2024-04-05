import { reactive, watch } from "vue";
import { getRetirees } from "@/api/retiree";

export function useParams() {
  const defalut = { name: null, no: null };
  const params = reactive({ ...defalut });
  function setDefalut(value = defalut) {
    params.name = value.name;
    params.no = value.no;
  }
  return { params, setDefalut };
}

export function useTableData({ params }) {
  const tableData = reactive({
    tableData: []
  });

  watch(params, async () => {
    const res = await getRetirees(params);
    tableData.tableData = res.data;
  });

  return { tableData };
}
