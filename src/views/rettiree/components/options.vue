<script setup lang="ts">
import { reactive, ref } from "vue";
const props = defineProps(["params", "setDefalut"]);
const value = reactive({ ...props.params });
const formRef = ref();

function resetForm(formEl: any) {
  if (!formEl) return;
  formEl.resetFields();
}
</script>

<template>
  <el-form
    ref="formRef"
    :inline="true"
    :model="value"
    class="search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"
  >
    <el-form-item label="退休人员名称：" prop="name">
      <el-input v-model="value.name" placeholder="请输入" class="!w-[180px]" />
    </el-form-item>
    <el-form-item label="身份证号：" prop="no">
      <el-input v-model="value.no" placeholder="请输入" class="!w-[180px]" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="() => setDefalut(value)">
        搜索
      </el-button>
      <el-button
        @click="
          () => {
            resetForm(formRef);
            props.setDefalut();
          }
        "
      >
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>
