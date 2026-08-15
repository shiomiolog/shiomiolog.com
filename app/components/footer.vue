<template>
  <footer class="bg-[#0B0F19] text-white border-t border-white/10 pt-16 pb-12 font-sans antialiased">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
        <div class="md:col-span-5 space-y-6">
          <NuxtLink to="/" class="inline-block">
            <NuxtImg src="/images/logo.png" format="webp" alt="汐猫みお 公式ロゴ" loading="lazy"
              class="w-32 brightness-0 invert opacity-80 transition-opacity hover:opacity-100" />
          </NuxtLink>

          <p class="text-xs text-slate-400 leading-relaxed tracking-wide max-w-sm">
            本業である研究活動の傍ら、プログラミングやセキュリティ、<br />大好きなゲームや旅行のログを気ままに発信する、青い世界の猫 Virtual YouTuber「汐猫みお」の公式ポータルサイトです。
          </p>

          <div class="space-y-2.5 pt-2">
            <a href="https://x.com/shiomiolog" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-2.5 text-xs text-slate-400 hover:text-[#00CCFF] transition-colors group">
              <i class="fa-brands fa-x-twitter text-sm w-4 text-center"></i>
              <span class="font-bold tracking-wider">汐猫みお公式X (Twitter)</span>
            </a>
            <a href="https://youtube.com/@shiomiolog" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-2.5 text-xs text-slate-400 hover:text-[#00CCFF] transition-colors group">
              <i class="fa-brands fa-youtube text-sm w-4 text-center"></i>
              <span class="font-bold tracking-wider">YouTubeチャンネル</span>
            </a>
            <a href="https://github.com/shiomiolog" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-2.5 text-xs text-slate-400 hover:text-[#00CCFF] transition-colors group">
              <i class="fa-brands fa-github text-sm w-4 text-center"></i>
              <span class="font-bold tracking-wider">GitHub</span>
            </a>
          </div>
        </div>

        <div class="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:pl-8">
          <div class="space-y-4">
            <h4 class="text-xs font-mono font-bold tracking-[0.2em] text-[#00CCFF] uppercase">
              // Contents
            </h4>
            <ul class="space-y-3 text-sm font-medium text-slate-300">
              <li>
                <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
              </li>
              <li>
                <a href="/#profile" class="hover:text-white transition-colors">Profile</a>
              </li>
              <li>
                <NuxtLink to="/news" class="hover:text-white transition-colors">News</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h4 class="text-xs font-mono font-bold tracking-[0.2em] text-[#00CCFF] uppercase">
              // Activity
            </h4>
            <ul class="space-y-3 text-sm font-medium text-slate-300">
              <li>
                <a href="/#goods" class="hover:text-white transition-colors">Goods</a>
              </li>
              <li>
                <a href="/#guidance" class="hover:text-white transition-colors">Guidance</a>
              </li>
            </ul>
          </div>

          <div class="space-y-4 col-span-2 sm:col-span-1">
            <h4 class="text-xs font-mono font-bold tracking-[0.2em] text-[#00CCFF] uppercase">
              // Support
            </h4>
            <ul class="space-y-3 text-sm font-medium text-slate-300">
              <li>
                <NuxtLink to="/guideline" class="hover:text-white transition-colors">Guideline</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
        <div
          class="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-xs font-bold text-slate-400">
          <NuxtLink to="/guideline" class="hover:text-white transition-colors tracking-wider">
            二次創作ガイドライン
          </NuxtLink>

          <span class="hidden text-white/10 sm:inline">|</span>

          <NuxtLink to="/privacy" class="hover:text-white transition-colors tracking-wider">
            プライバシーポリシー
          </NuxtLink>

          <span class="hidden text-white/10 sm:inline">|</span>

          <a href="https://mayu2664.jp/" target="_blank" rel="noopener noreferrer"
            class="font-medium tracking-wider text-slate-500 transition-colors hover:text-slate-300">
            運営者・研究活動について
            <i class="fa-solid fa-arrow-up-right-from-square ml-1 text-[8px]"></i>
          </a>
        </div>

        <div class="text-xs font-mono text-slate-500 tracking-wider">
          &copy; 2026 Shione Mio
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// スタティック接続のため、余計なロジックパケットは不要です
</script>