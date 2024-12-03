<template>
  <div>
    <dlx-button type="primary">全局引入的按钮2</dlx-button>
    <dlx-button type="danger">全局引入的按钮1</dlx-button>
    <dlx-icon></dlx-icon>
    <Button type="primary">按需引入的按钮</Button>
    <Icon></Icon>
  </div>
</template>
<script lang="ts" setup>
import { Button } from '@dlxui/components'
import { Icon } from '@dlxui/components'
</script>
