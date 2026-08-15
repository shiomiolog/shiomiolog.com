<template>
  <section
    id="guidelines"
    ref="guidelinesSection"
    class="bg-white py-24 px-6 relative z-10 border-t border-slate-100 transition-all duration-[1000ms] ease-out transform font-sans antialiased text-slate-800"
    :class="
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    "
  >
    <div class="max-w-6xl mx-auto">
      <div class="mb-16 flex flex-col items-start select-none">
        <div
          class="w-12 h-1 bg-gradient-to-r from-[#00CCFF] to-[#081C44] rounded-full mb-4"
        ></div>
        <h2
          class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-[#081C44] leading-none"
        >
          Guidelines
        </h2>
        <p
          class="text-xs font-sans font-bold text-slate-400 tracking-widest pt-3"
        >
          ガイドライン・規約
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="bg-slate-50/60 border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_15px_45px_rgba(8,28,68,0.02)] flex flex-col justify-between items-start space-y-6 hover:border-[#00CCFF]/20 transition-all group"
        >
          <div class="space-y-3">
            <h3
              class="text-lg font-black text-[#081C44] flex items-center gap-2"
            >
              <i class="fa-solid fa-palette text-[#00CCFF] text-sm"></i>
              二次創作ガイドライン
            </h3>
            <p
              class="text-xs md:text-sm text-slate-500 leading-loose font-medium"
            >
              ファンアートの投稿や同人活動、切り抜き動画の作成など、汐猫みおの二次創作活動を楽しんでいただくための共通ルールとお願いです。
            </p>
          </div>
          <NuxtLink
            to="/guideline"
            class="inline-flex items-center gap-2 text-xs font-bold text-[#081C44] hover:text-[#00CCFF] transition-colors tracking-wider font-sans group-hover:translate-x-1 transition-transform"
          >
            詳しく見る
            <i class="fa-solid fa-arrow-right-long text-[10px]"></i>
          </NuxtLink>
        </div>

        <div
          class="bg-slate-50/60 border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_15px_45px_rgba(8,28,68,0.02)] flex flex-col justify-between items-start space-y-6 hover:border-[#00CCFF]/20 transition-all group"
        >
          <div class="space-y-3">
            <h3
              class="text-lg font-black text-[#081C44] flex items-center gap-2"
            >
              <i class="fa-solid fa-shield-halved text-[#00CCFF] text-sm"></i>
              プライバシーポリシー
            </h3>
            <p
              class="text-xs md:text-sm text-slate-500 leading-loose font-medium"
            >
              公式ポータルサイトおよび各種お問い合わせフォーム等における、個人情報の取り扱いに関するポリシーです。
            </p>
          </div>
          <NuxtLink
            to="/privacy"
            class="inline-flex items-center gap-2 text-xs font-bold text-[#081C44] hover:text-[#00CCFF] transition-colors tracking-wider font-sans group-hover:translate-x-1 transition-transform"
          >
            詳しく見る
            <i class="fa-solid fa-arrow-right-long text-[10px]"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(true);
</script>
