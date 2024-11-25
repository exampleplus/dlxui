<template>
  <button class="dlx-button" :class="buttonStyle">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'dlx-button',
})
</script>

<script setup lang="ts">
import './style/index.less'
import { computed } from 'vue'

type ButtonProps = {
  type?: String
}

const buttonProps = defineProps<ButtonProps>()
const buttonStyle = computed(() => {
  return {
    [`dlx-button--${buttonProps.type}`]: buttonProps.type,
  }
})
</script>
