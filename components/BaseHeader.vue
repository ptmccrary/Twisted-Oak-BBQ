<script setup>
const navLinks = [
  { id: 1, text: 'About', to: '/about' },
  { id: 2, text: 'Blog', to: '/blog' },
  { id: 3, text: 'Contact', to: '/contact' }
]
</script>

<template>
  <header class="site-header">
    <NuxtLink to="/" class="sitename">TOBBQ</NuxtLink>
    <nav>
      <ul>
        <li v-for="link in navLinks" :key="link.id">
          <NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/menu" class="btn btn--red">Menu</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  padding-inline: var(--site-margin);
}

nav {
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    align-items: center;
    display: flex;
  }
}

a {
  align-items: center;
  display: flex;
  text-decoration: none;

  &:not(.btn) {
    height: var(--site-header-height);
    padding-inline: var(--space-sm);
  }

  &.btn {
    margin-inline-start: var(--space-sm);
  }
}
</style>
