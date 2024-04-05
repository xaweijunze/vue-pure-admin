<script setup lang="ts">
import { onMounted } from "vue";
import { Plus } from "@element-plus/icons-vue";
import options from "./components/options.vue";
import { useParams, useTableData } from "./hooks";
import _ from "lodash";

const { params, setDefalut } = useParams();
const { tableData } = useTableData({ params });

onMounted(() => {
  setDefalut({ name: "", no: "" });
});
</script>

<template>
  <div class="table-base">
    <options :params="params" :setDefalut="setDefalut" />

    <div class="list">
      <div class="header">
        <div class="title">退休人员信息管理</div>
        <el-button :icon="Plus" plain>新增</el-button>
      </div>

      <el-table :data="tableData.tableData" style="width: 100%">
        <el-table-column
          prop=""
          label="#"
          width="40"
          :formatter="(row, column, cellValue, index) => String(index + 1)"
        />
        <el-table-column prop="name" label="姓名" width="70" />
        <el-table-column prop="no" label="身份证号" width="180" />
        <el-table-column prop="gender" label="性别" width="120" />
        <el-table-column prop="age" label="年龄" width="120" />
        <el-table-column prop="birthDate" label="出生日期" width="120" />
        <el-table-column prop="healthStatus" label="健康状态" width="120" />
        <el-table-column prop="managerName" label="管理人" width="120" />
        <el-table-column
          prop="managerPhoneNo"
          label="管理人手机号"
          width="120"
        />
        <el-table-column prop="managerType" label="管理人类型" width="120" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="() => {}"
              >详情</el-button
            >
            <el-button link type="primary" size="small" @click="() => {}"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.table-base {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .search-form {
    flex: 0 0 auto;
  }

  .list {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 10px;
    background-color: #fff;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px 0 0;
      background-color: #fff;

      .title {
        padding: 12px 10px;
        color: #606266;
        border-bottom: 1px solid #ebeef5;
      }
    }

    .el-table--fit {
      flex: 1;
    }
  }
}
</style>
