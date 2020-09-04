<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      required: false,
    }
  },
  computed: {
    ...mapGetters({
      sidebarOpen: 'sidebar/open'
    })
  },
}
</script>

<template>
  <Base>
    <main>

      <aside :class="{ open: sidebarOpen }">
        <Sidebar></Sidebar>
      </aside>


      <div class="wrapper">
        <nav>
          <MobileNavbar></MobileNavbar>
        </nav>

        <div class="content">
          <h1
            v-if="this.title"
            class="page-title"
          >{{ this.title }}</h1>
          <slot></slot>
        </div>
      </div>

    </main>
  </Base>
</template>

<style lang="scss" scoped>
main {

  aside {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: var(--sidebar-width);

    overflow: scroll;

    border-right: 1px solid var(--border);
    background-color: var(--bg);

    // sidebar open and closeable for mobile
    @include mobile-screen {
      z-index: 100;
      transition: 0.2s all;
      left: calc(-1 * var(--sidebar-width));
      &.open { left:0 }
    }
  }


  nav {
    display: none;

    @include mobile-screen {
      display: block;
    }
  }
  

  .wrapper{
    position: absolute;
    top: 0;
    right: 0;
    left: var(--sidebar-width);
    bottom: 0;

    overflow: scroll;

    @include mobile-screen {
      // full width on mobile
      left: 0;
    }

    max-width: 1fr;

    .content {
      padding: 0 var(--side-p);
      padding-top: 1.5em;

      .page-title {
        margin-top: 0;
        margin-bottom: 0.7rem;
      }
    }

    // required to prevent overscrolling page
    min-height: 0;
    min-width: 0;
  }
}


</style>