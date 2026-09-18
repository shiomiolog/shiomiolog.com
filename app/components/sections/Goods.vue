<template>
  <section id="goods" ref="goodsSection"
    class="bg-blue-50 py-24 px-6 relative shadow-[0_25px_50px_rgba(8,28,68,0.03)] relative z-20 border-t border-slate-100 transition-all duration-[1000ms] ease-out transform font-sans antialiased"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      ">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7">
          <div class="flex flex-col items-start select-none">
            <div class="w-12 h-1 bg-gradient-to-r from-[#00CCFF] to-[#081C44] rounded-full mb-4"></div>

            <h2 class="text-4xl md:text-5xl font-sans font-bold text-[#081C44] tracking-wider leading-none">
              Goods
            </h2>

            <p class="text-xs font-sans font-bold text-slate-400 tracking-widest pt-3">
              公式グッズ
            </p>
          </div>

          <p class="mt-8 text-sm md:text-base text-[#081C44] font-medium leading-loose">
            汐猫みおの公式グッズやボイスを各ショップにて販売しています。
          </p>

          <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div class="space-y-5">
              <div class="flex items-center gap-4 text-xs font-bold text-[#081C44] tracking-widest select-none">
                <div class="flex-1 h-[1px] bg-slate-200"></div>
                <span>ボイス・グッズ</span>
                <div class="flex-1 h-[1px] bg-slate-200"></div>
              </div>

              <a href="https://shiomiolog.booth.pm/" target="_blank" rel="noopener noreferrer"
                class="bg-[#081C44] text-white rounded-full py-4 px-7 flex items-center justify-between hover:bg-[#00CCFF] hover:text-[#081C44] transition-all duration-300 shadow-[0_10px_20px_rgba(8,28,68,0.08)] group font-bold text-sm tracking-wider">
                <span>汐猫みお公式BOOTH</span>
                <i class="fa-solid fa-arrow-right-long text-xs transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"></i>
              </a>
            </div>

            <div class="space-y-5">
              <div class="flex items-center gap-4 text-xs font-bold text-[#081C44] tracking-widest select-none">
                <div class="flex-1 h-[1px] bg-slate-200"></div>
                <span>LINE</span>
                <div class="flex-1 h-[1px] bg-slate-200"></div>
              </div>

              <div
                class="bg-slate-50 text-slate-400 rounded-full py-4 px-7 flex items-center justify-between font-bold text-sm tracking-wider cursor-not-allowed select-none border border-slate-200/40 relative overflow-hidden">
                <div
                  class="absolute inset-0 bg-[linear-gradient(-45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.02)_75%,transparent_75%,transparent)] bg-[size:16px_16px]">
                </div>

                <span class="relative z-10 opacity-70">LINE スタンプ</span>
                <span
                  class="font-mono text-[10px] tracking-widest bg-slate-200/60 text-slate-500 px-3 py-1 rounded-full relative z-10 font-bold">
                  COMING SOON
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex min-h-[330px] items-end justify-center lg:col-span-5 lg:min-h-[440px]">
          <div
            class="absolute bottom-4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/65 shadow-[0_20px_60px_rgba(8,28,68,0.05)] md:h-72 md:w-72"
            aria-hidden="true"></div>
          <div class="absolute bottom-16 right-4 h-16 w-16 rounded-full bg-[#00CCFF]/10" aria-hidden="true"></div>
          <div class="absolute left-4 top-16 h-10 w-10 rounded-full bg-[#548BE2]/10" aria-hidden="true"></div>

          <NuxtImg src="/images/goods-chibi-plush.png" format="webp" loading="lazy" decoding="async"
            alt="汐猫みおのぬいぐるみを両手で掲げるミニキャラの汐猫みお"
            class="relative z-10 max-h-[350px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(8,28,68,0.14)] lg:max-h-[460px]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(true);
</script>
