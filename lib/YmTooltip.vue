<template>
  <el-tooltip
    ref="tooltip"
    v-bind="$attrs"
  >
    <template slot="content">
      <slot name="content" />
    </template>
    <slot />
  </el-tooltip>
</template>
<script>
export default {
  name: 'YmTooltip',
  mounted() {
    window.addEventListener('touchmove', this.hideTip);
    if (this.$el.nodeType === 1) {
      this.$el.classList.add('ym-tooltip');
    }
  },
  beforeDestroy() {
    window.removeEventListener('touchmove', this.hideTip);
  },
  methods: {
    hideTip() {
      if (this.$el.blur) {
        this.$el.blur();
      }
    },
  },
};
</script>
