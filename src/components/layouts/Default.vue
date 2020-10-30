<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    sidebarPresent: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      sidebarOpen: "sidebar/open",
    }),
    time() {
      return new Date();
    },
  },
  created() {
    console.log("layouts/default.vue created");
  },
};
</script>

<template>
  <div>
    <Base>
      <nav>
        <MobileNavbar></MobileNavbar>
      </nav>      
      <aside
        class="sidebar"
        :class="{ open: sidebarOpen, disabled: !sidebarPresent }"
      >
        <Sidebar></Sidebar>
      </aside>

      <main class="content" :class="{ 'no-sidebar': !sidebarPresent }">
        <h1 v-if="this.title" class="page-title">{{ this.title }}</h1>
        <!-- {{ sidebarOpen }} -->
        <slot></slot>
      </main>
    </Base>
  </div>
</template>

<style lang="scss" scoped>
nav {
  z-index: 50;
  height: var(--nav-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

aside.sidebar {
  z-index: 49;
  position: fixed;
  width: var(--sidebar-width);

  top: var(--nav-height);
  bottom: 0;
  left: 0;

  overflow-y: scroll;

  transition: 0.2s all;

  @include mobile-screen {
    // closed by default
    left: calc(-1 * var(--sidebar-width));

    &.open {
      left: 0
    }
  }
  @include not-mobile-screen {
    &.disabled {
      display: none;
    }
  }
}

main.content {
  z-index: 20;
  margin-top: var(--nav-height);
  margin-left: var(--sidebar-width);
  padding: 1.5rem var(--side-p);

  &.no-sidebar {
    margin-right: calc(0.5 * var(--side-p));
    margin-left: calc(0.5 * var(--side-p));
  }

  @include mobile-screen {
    margin-left: 0;
  }

  h1.page-title {
    margin-top: 0;
  }
}
</style>
