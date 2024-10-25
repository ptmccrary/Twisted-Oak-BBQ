<script setup></script>

<template>
  <ContentDoc v-slot="{ doc }">
    <header>
      <h1>{{ doc.title }}</h1>
    </header>

    <div>
      <aside>
        <nav>
          <ul>
            <li v-for="link of doc.body.toc.links" :key="link.id">
              <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
          </ul>
        </nav>
      </aside>

      <ContentRenderer :value="doc" class="stack" />
    </div>
  </ContentDoc>
</template>

<style lang="scss" scoped></style>
