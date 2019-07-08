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
      this.$el.addEventListener('click', this.showTip);
    }
  },
  beforeDestroy() {
    window.removeEventListener('touchmove', this.hideTip);
    this.$el.removeEventListener('click', this.showTip);
  },
  methods: {
    showTip() {
      if (this.$refs && this.$refs.tooltip) {
        this.$refs.tooltip.show();
      }
    },
    hideTip() {
      if (this.$refs && this.$refs.tooltip) {
        this.$refs.tooltip.setExpectedState(false);
        this.$refs.tooltip.handleClosePopper();
      }
    },
  },
};
</script>
