<script setup></script>

<template>
  <ContentDoc v-slot="{ doc }">
    <header class="page__header">
      <h1 class="page-title">{{ doc.title }}</h1>
    </header>

    <div class="page__body">
      <aside class="page__sidebar">
        <nav>
          <ul>
            <li v-for="link of doc.body.toc.links" :key="link.id">
              <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
          </ul>
        </nav>
      </aside>

      <ContentRenderer :value="doc" class="page__content stack" />
    </div>
  </ContentDoc>
</template>

<style lang="scss" scoped>
.page__header {
  background-color: var(--color-gray-ll);
  padding: var(--space-xl) var(--site-margin);
}

.page-title {
  margin: 0;
}

.page__body {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 2rem;
  margin-block-start: var(--space-lg);
  margin-inline: var(--site-margin);
}

.page__sidebar {
  flex: 1 0 5rem;
}

nav {
  background-color: var(--color-accent);
  color: var(--color-off-white);
  inset-block-start: 30px;
  padding: var(--space-base);
  position: sticky;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.page__content {
  flex: 1 0 min(65ch, 100%);
}
</style>
