<template>
  <div class="paw-heading-style">
    <SectionsHero />

    <SectionsProfileSection />

    <SectionsFanKit />

    <SectionsNews />

    <SectionsSocialsSection />

    <SectionsModelSpec />

    <SectionsGoods />

    <SectionsBusinessGuidance />

    <SectionsGuidelinesSection />

    <SectionsContactSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "汐猫みお Official Site",
  ogTitle: "汐猫みお Official Site",
  description:
    "情報セキュリティと情報法を学びながら、プログラミング、ゲーム、旅行などの話題を気ままに発信する、青い世界の猫Virtual YouTuber「汐猫みお」の公式サイトです。",
  ogDescription:
    "情報セキュリティと情報法を学びながら、プログラミング、ゲーム、旅行などの話題を気ままに発信する、青い世界の猫 Virtual YouTuber「汐猫みお」の公式ポータルサイトです。",
  ogImage: "/ogp-image.png",
  twitterCard: "summary_large_image",
  twitterSite: "@shiomiolog",
  twitterCreator: "@shiomiolog",
});
</script>

<style>
/* 各セクションの大見出し先頭に、淡い肉球をCSSだけで描画 */
.paw-heading-style > section:not(:first-of-type) {
  --paw-color: rgb(63 111 186);
}

.paw-heading-style > section:not(:first-of-type) h2:first-of-type {
  position: relative;
  z-index: 0;
  isolation: isolate;
}

.paw-heading-style > section:not(:first-of-type) h2:first-of-type::before {
  content: "";
  position: absolute;
  z-index: -1;
  left: -40px;
  top: -12px;
  width: 72px;
  height: 66px;
  pointer-events: none;
  opacity: 0.13;
  transform: rotate(-11deg);
  background-image:
    radial-gradient(circle 5px at 24% 34%, var(--paw-color) 96%, transparent 100%),
    radial-gradient(circle 6px at 42% 21%, var(--paw-color) 96%, transparent 100%),
    radial-gradient(circle 6px at 61% 22%, var(--paw-color) 96%, transparent 100%),
    radial-gradient(circle 5px at 78% 36%, var(--paw-color) 96%, transparent 100%),
    radial-gradient(ellipse 17px 14px at 51% 66%, var(--paw-color) 97%, transparent 100%);
  background-repeat: no-repeat;
}

.paw-heading-style > section:nth-of-type(3n + 2) {
  --paw-color: rgb(0 204 255);
}

.paw-heading-style > section:nth-of-type(3n) {
  --paw-color: rgb(84 139 226);
}

.paw-heading-style > section:nth-of-type(3n + 1) {
  --paw-color: rgb(8 28 68);
}

.paw-heading-style > #contact {
  --paw-color: rgb(142 219 250);
}

@media (max-width: 640px) {
  .paw-heading-style > section:not(:first-of-type) h2:first-of-type::before {
    left: -32px;
    width: 62px;
    height: 57px;
    opacity: 0.11;
  }
}
</style>
