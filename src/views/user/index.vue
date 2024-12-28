<template>
  <div class="user-list-container">
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="createdAt" label="创建时间"></el-table-column>
      <el-table-column label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status === 'open' ? 'primary' : 'warning'">
            {{ scope.row.status === 'open' ? '在职' : '离职' }}
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
            @click.prevent="deleteUser(scope.row, scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
interface IUser {
  id: string;
  name: string;
  status: string;
  createdAt: string;
}
const userList: IUser[] = [
  {
    id: '1',
    name: '小明',
    status: 'open',
    createdAt: '2024-12-28 15:00:00',
  },
  {
    id: '2',
    name: '小红',
    status: 'close',
    createdAt: '2024-12-28 15:00:00',
  },
  {
    id: '3',
    name: '小兰',
    status: 'open',
    createdAt: '2024-12-28 15:00:00',
  },
];

const edit = (role: IUser) => {
  console.log(role);
};

const deleteUser = (role: IUser, index: number) => {
  console.log(role, index);
};
</script>

<style scoped lang="less"></style>
