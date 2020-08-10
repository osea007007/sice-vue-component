<template>
  <a :href="`twsice://lqld`"
     v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'sice-lqld',
};
</script>

<style></style>
