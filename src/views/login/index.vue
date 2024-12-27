<template>
  <div class="login-container">
    <el-form
      ref="ruleFormRef"
      :model="loginState"
      :rules="rules"
      style="max-width: 400px"
      label-width="auto"
      class="login-form"
      status-icon
    >
      <el-form-item prop="name">
        <el-input placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" />
      </el-form-item>
      <el-form-item class="submit-button">
        <el-button type="primary" @click="submit(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';

interface RuleForm {
  name: string;
  password: string;
}
const loginState = reactive<RuleForm>({
  name: '',
  password: '',
});
const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
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

<style lang="less">
.login-container {
  width: 100%;
  height: 100%;
  position: relative;

  .login-form {
    width: 400px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow:
      34px 34px 79px #b1b1b1,
      -34px -34px 79px #ffffff;

    .el-form-item {
      width: 300px;
      height: 50px;

      .el-input {
        height: 100%;
      }
    }

    .submit-button {
      margin: 40px 0 0;
      .el-form-item__content {
        justify-content: center;
        .el-button {
          height: 100%;
          flex: 1;
        }
      }
    }
  }
}
</style>
