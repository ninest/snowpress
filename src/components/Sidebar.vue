<script>
export default {
  props: {
    // sidebarContent: {
    //   type: Object,
    //   default: () => {}
    // },
  },
  data() {
    return {
      cat: null,
      sidebarContent: null
    }
  },
  created() {
    this.cat = this.$route.params.cat
    this.sidebarContent = this.siteConfig.sidebar[this.cat]
  }
}
</script>

<template>
  <div class="sidebar">
    <section class="top">
      <nuxt-link to="/">
        {{ siteConfig.name }} Docs
      </nuxt-link>
    </section>

    <section
      class="nav"
    >
      <nuxt-link 
        v-for="link in siteConfig.navLinks" v-bind:key="link.url"
        :to="link.url" 
        class="link-hover-block highlight-active"
      >{{ link.title }}</nuxt-link>
    </section>

    <section class="links">
      <div 
        v-for="section in sidebarContent.sections" v-bind:key="Math.random()"
        class="section"
      >
        <div class="title">
          {{ section.title }} {{section.root }}
        </div>
        <nuxt-link
          v-for="link in section.links" v-bind:key="link.slug"
          :to="'/' + cat + link.slug"
          class="link-hover-block highlight-exact-active"
        >
          {{ link.title }}
        </nuxt-link>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--bg);
  > section {
    padding: 1em 1.2em;
  }

  .top {
    position: sticky;
    top: 0;
    font-weight: 700;
    font-size: 1.2rem;

    background-color: var(--bg);
    background-color: var(--bg-sidebar);

    border-bottom: 1px solid var(--border);
  }

  .nav {
    border-bottom: 1px solid var(--border);
  }

  .links {
    .section {
      .title {
        font-weight: 600;
        margin-bottom: 0.2em;
      }
    }
    .section + .section {
      margin-top: 1em;
    }
  }

  @include mobile-screen {
    height: 100%;
  }
}
</style>