<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      sidebarOpen: 'sidebar/open'
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'sidebar/toggle'
    })
  }
}
</script>

<template>
  <div class="mobile-nav">
    <div class="logo">
      {{ siteConfig.name }} Docs
    </div>

    <div @click="toggle" class="hamburger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line last"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-nav {
  padding: 1em var(--side-p);
  background-color: var(--bg-sidebar);
  border-bottom: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;


  .hamburger {
    .line {
      background-color: var(--text);
      width: 25px;
      height: 3px;

      border-radius: 10px;

      &.last {
        // shorter than the rest, float to the left
        margin-left:auto; 
        margin-right:0;
        width: 18px;
      }
    }
    .line + .line {
      margin-top: 3px;
    }
  }
}
</style>