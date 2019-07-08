import YmTooltip from './YmTooltip.vue';

const myPlugin = {
  install: function install(Vue) {
    Vue.component('YmTooltip', YmTooltip);
  },
};

export default myPlugin;