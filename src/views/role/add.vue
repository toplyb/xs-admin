<template>
  <div class="role-add-container">
    <el-form
      ref="ruleFormRef"
      :model="roleAddState"
      :rules="rules"
      style="max-width: 400px"
      label-width="auto"
      class="login-form"
      status-icon
    >
      <el-form-item prop="name">
        <el-input placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item class="submit-button">
        <el-button type="primary" @click="submit(ruleFormRef)">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';

interface RuleForm {
  name: string;
}
const roleAddState = reactive<RuleForm>({
  name: '',
});
const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
});
const ruleFormRef = ref<FormInstance>();

const submit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>

<style scoped lang="less">
.role-add-container {
  margin: 20px 0 0 20px;

  /deep/ .submit-button {
    .el-form-item__content {
      justify-content: center;
    }
  }
}
</style>
