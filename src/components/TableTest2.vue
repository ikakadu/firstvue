<template>
  <a-table
      :row-selection="rowSelection"
      :columns="columns"
      :data-source="data"
      :custom-row="customRow"
  >
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script>
import { computed, defineComponent, reactive } from "vue";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    slots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];
export default defineComponent({
  name: "TblTest2",
  setup() {
    const state = reactive({
      selectedRowKeys: [],
    });
    const selectRow = (record) => {
      const selectedRowKeys = [...state.selectedRowKeys];
      if (selectedRowKeys.indexOf(record.key) >= 0) {
        selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
      } else {
        selectedRowKeys.push(record.key);
      }
      state.selectedRowKeys = selectedRowKeys;
    };
    const rowSelection = computed(() => {
      return {
        selectedRowKeys: state.selectedRowKeys,
        onChange: (selectedRowKeys) => {
          state.selectedRowKeys = selectedRowKeys;
        },
      };
    });
    const customRow = (record) => {
      return {
        onClick: () => {
          selectRow(record);
        },
      };
    };

    return {
      data,
      columns,
      customRow,
      rowSelection,
    };
  },
});
</script>
