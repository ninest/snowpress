<script>
export default {
  async asyncData({params, $content}) {
    const cat = params.cat;
    const slug = params.slug ? params.slug : 'index';
    const doc = await $content(cat, slug).fetch()

    const sidebarContent = (await $content('sidebar').fetch())[cat]

    return {
      doc,
      sidebarContent
    }
  }
}
</script>

<template>
  <Default
    :title="doc.title"
    :sidebarContent="sidebarContent"
  >
    <article>
      <nuxt-content :document="doc"></nuxt-content>
    </article>

  </Default>
</template>