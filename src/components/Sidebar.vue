<script>
export default {
  props: {},
  data() {
    return {
      cat: null,
      sidebarContent: null,
      isHome: false,
    };
  },
  created() {
    // if there's not cat, it means we're at the root, so show the home links
    this.cat = this.$route.params.cat ?? "home";
    this.isHome = this.cat == "home";

    // find the link sections for that category
    this.sidebarContent = this.siteConfig.sidebar[this.cat];

    if (!process.server) {
      // Scroll title into view
      // for (const title of document.querySelectorAll('.title')) {
      //   if (title.textContent.includes("Choolest")) {
      //     console.log(title)
      //     title.scrollIntoView()
      //   }
      // }
    }
  },
};
</script>

<template>
  <div class="sidebar">
    <section class="nav">
      <nuxt-link
        v-for="link in siteConfig.navLinks"
        :key="link.url"
        :to="link.url"
        class="link-hover-block"
      >{{ link.title }}</nuxt-link>
      <a :href="siteConfig.github" target="_blank" class="link-hover-block">GitHub</a>
    </section>

    <section v-if="!isHome" class="links">
      <div
        v-for="section in sidebarContent.sections"
        v-bind:key="section.root + Math.random().toString()"
        class="section"
      >
        <div class="title">{{ section.title }} {{section.root }}</div>
        <nuxt-link
          v-for="link in section.links"
          :key="link.slug + Math.random()"
          :to="'/' + cat + link.slug"
          class="link-hover-block highlight-exact-active"
        >{{ link.title }}</nuxt-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  font-size: 0.9rem;
  background-color: var(--bg);
  border-right: 1px solid var(--border);

  > section {
    padding: 1em 1.5em;
  }

  .nav {
    // only required on mobile layout
    display: none;
    @include mobile-screen {
      display: block;
    }
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