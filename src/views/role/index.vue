<template>
  <div class="role-list-container">
    <el-table :data="roleList" style="width: 100%">
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="createdAt" label="创建时间"></el-table-column>
      <el-table-column label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status === 'open' ? 'primary' : 'warning'">
            {{ scope.row.status === 'open' ? '可使用' : '暂停使用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click.prevent="edit(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            @click.prevent="deleteRole(scope.row, scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
interface IRole {
  id: string;
  name: string;
  status: string;
  createdAt: string;
}
const roleList: IRole[] = [
  {
    id: '1',
    name: '管理员',
    status: 'open',
    createdAt: '2024-12-28 15:00:00',
  },
  {
    id: '2',
    name: '运营',
    status: 'close',
    createdAt: '2024-12-28 15:00:00',
  },
  {
    id: '3',
    name: '技术开发',
    status: 'open',
    createdAt: '2024-12-28 15:00:00',
  },
];

const edit = (role: IRole) => {
  console.log(role);
};

const deleteRole = (role: IRole, index: number) => {
  console.log(role, index);
};
</script>

<style scoped lang="less"></style>
