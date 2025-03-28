<script setup>
import {ref, reactive, computed} from 'vue';

const parentColumns = [
  {
    title: '父级姓名',
    dataIndex: 'name',
  },
  {
    title: '订单ID',
    dataIndex: 'ordId',
  },
]
const childColumns = [
  {
    title: '子级姓名',
    dataIndex: 'cName',
  },
  {
    title: '商品id',
    dataIndex: 'goodsId',
  },
]
const parentData = [
  {
    key: 'parent1',
    name: 'Parent 1',
    ordId: '1',
    children: [
      {key: 'child1-1', cName: 'Child 1-1', goodsId: '11'},
      {key: 'child1-2', cName: 'Child 1-2', goodsId: '12'},
    ],
  },
  {
    key: 'parent2',
    name: 'Parent 2',
    ordId: '2',
    children: [
      {key: 'child2-1', cName: 'Child 2-1', goodsId: '21'},
      {key: 'child2-2', cName: 'Child 2-2', goodsId: '22'},
    ],
  },

];

const selectedParentKeys = ref([]);
const childSelectedKeys = reactive({});

// 父表格选择配置
const parentRowSelection = {
  selectedRowKeys: selectedParentKeys,
  onChange: handleParentSelect,
  // getCheckboxProps: record => ({
  //   indeterminate: isParentIndeterminate(record.key),
  // }),
};

// 子表格选择配置生成器
const getChildRowSelection = parentKey => ({
  selectedRowKeys: childSelectedKeys[parentKey] || [],
  onChange: selected => handleChildSelect(parentKey, selected),
});

// 处理父级选择
function handleParentSelect(selectedKeys) {
  selectedParentKeys.value = selectedKeys;

  // 更新子级选中状态
  selectedKeys.forEach(key => {
    const parent = parentData.find(p => p.key === key);
    // if (parent && !childSelectedKeys[key]) {
    if (parent) {
      childSelectedKeys[key] = parent.children.map(c => c.key);
    }
  });

  // 移除未选中的父级对应的子级状态
  Object.keys(childSelectedKeys).forEach(parentKey => {
    if (!selectedKeys.includes(parentKey)) {
      delete childSelectedKeys[parentKey];
    }
  });
}

// 处理子级选择
function handleChildSelect(parentKey, selected) {
  childSelectedKeys[parentKey] = selected;

  const parent = parentData.find(p => p.key === parentKey);
  const allChildKeys = parent.children.map(c => c.key);
  const isAllSelected = allChildKeys.every(k => selected.includes(k));

  // 更新父级选中状态
  const parentIndex = selectedParentKeys.value.indexOf(parentKey);
  if (isAllSelected && parentIndex === -1) {
    selectedParentKeys.value = [...selectedParentKeys.value, parentKey];
  } else if (!isAllSelected && parentIndex !== -1) {
    selectedParentKeys.value = selectedParentKeys.value.filter(k => k !== parentKey);
  }
}

// 判断父级半选状态
// function isParentIndeterminate(parentKey) {
//   const selected = childSelectedKeys[parentKey] || [];
//   const parent = parentData.find(p => p.key === parentKey);
//   return selected.length > 0 && selected.length < parent.children.length;
// }
</script>

<template>
  <div>
    <a-table
        :columns="parentColumns"
        :data-source="parentData"
        :row-selection="parentRowSelection"
        rowKey="key"
        bordered
    >
      <template #expandedRowRender="{ record }">
        <a-table
            :columns="childColumns"
            :data-source="record.children"
            :row-selection="getChildRowSelection(record.key)"
            rowKey="key"
            :pagination="false"
        />
      </template>
    </a-table>
  </div>
</template>
