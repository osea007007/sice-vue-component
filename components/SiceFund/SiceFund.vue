<template>
  <a
    :href="
      fundId ? `twsice://fundDetail?fundId=${fundId}` : 'twsice://fundList'
    "
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'sice-fund',
  props: {
    fundId: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
