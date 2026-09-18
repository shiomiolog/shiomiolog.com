<template>
  <a href="#main-content" class="skip-link">本文へスキップ</a>
  <Header />
  <main id="main-content" tabindex="-1">
    <slot />
  </main>
  <Footer />
  <ScrollToTop />
</template>

<style></style>

<script setup lang="ts"></script>
