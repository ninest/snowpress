<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      sidebarOpen: "sidebar/open",
    }),
  },
  methods: {
    ...mapMutations({
      toggle: "sidebar/toggle",
    }),
  },
};
</script>

<template>
  <div class="mobile-nav">
    <nuxt-link to="/" class="logo">{{ siteConfig.name }} Docs</nuxt-link>

    <nav>
      <ul>
        <li v-for="link in siteConfig.navLinks" v-bind:key="link.url">
          <nuxt-link :to="link.url" class="link-hover">{{ link.title}}</nuxt-link>
        </li>
        <li>
          <a :href="siteConfig.github" target="_blank" class="link-hover">GitHub</a>
        </li>
      </ul>
    </nav>

    <div @click="toggle" class="hamburger link-hover">
      <fa-icon :icon="['fas', 'bars']" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-nav {
  font-size: 0.9rem;
  height: 100%;
  padding: 1em 1.5em;
  background-color: var(--bg-sidebar);
  border-bottom: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    @include mobile-screen {
      display: none;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;

      li {
        font-weight: 600;
        color: var(--nav-link);
      }
      li + li {
        margin-left: 2em;
        @include mobile-screen {
          margin-left: 1.4em;
        }
      }

      margin-right: 1rem;
    }
  }

  .hamburger {
    @include not-mobile-screen {
      display: none;
    }
  }
}
</style>