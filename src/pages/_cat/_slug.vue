<script>
export default {
  async asyncData({ params, $content }) {
    const cat = params.cat;
    const slug = params.slug ? params.slug : "index";
    const doc = await $content(cat, slug).fetch();

    return {
      doc,
    };
  },
  head() {
    return {
      title: `${this.doc.title}`,
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
  <Default :title="doc.title">
    <article>
      <nuxt-content :document="doc"></nuxt-content>
    </article>
  </Default>
</template>