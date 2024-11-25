---
# Markdown front matter
---

<script setup>
import { defineAsyncComponent } from 'vue'
const DlxButton = defineAsyncComponent(() => import('../../../../packages/components/src/button'))
</script>

<template>
  <DlxButton type='primary'>默认按钮</DlxButton>
</template>

::: details 显示代码

```html
<dlx-button type="primary">默认按钮</dlx-button>
```

:::
