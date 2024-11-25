# hello dlxui

## 介绍

dlxui 是一个基于 Vue 3 的 UI 组件库，旨在为开发者提供简单易用的组件，帮助开发者快速构建高质量的应用程序。

## 安装

```bash
npm install dlxui
```

## 使用

```vue
<template>
  <div>
    <dlx-button>按钮</dlx-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { DlxButton } from 'dlxui'

export default defineComponent({
  components: {
    DlxButton,
  },
})
</script>
```

## 贡献

如果您对 dlxui 有任何建议或想要贡献代码，请随时提交 issue 或 pull request。

## 许可证
