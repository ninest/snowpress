<script>
export default {
  async asyncData({$content}) {
    const doc = await $content('index').fetch()

    return {
      doc
    }
  }
}
</script>

<template>
  <Default
    :title="doc.title"
  >
    <article>
      <nuxt-content :document="doc"></nuxt-content>
    </article>
  </Default>
</template>