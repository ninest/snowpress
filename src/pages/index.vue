<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content("index").fetch();

    return {
      doc,
    };
  },
  head() {
    return {
      title: `${this.doc.title}`,
      titleTemplate: "%s",
      meta: [
        // {
        //   hid: "description",
        //   name: "description",
        //   content: `${this.doc.description}`,
        // },
      ],
    };
  },
};
</script>

<template>
  <Default :title="doc.title" :sidebarPresent="doc.sidebar">
    <article>
      <nuxt-content :document="doc"></nuxt-content>
    </article>
  </Default>
</template>

<style lang="scss" scoped>
</style>