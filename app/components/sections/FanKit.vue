<template>
  <section id="fankit" ref="fanKitSection"
    class="bg-white py-24 px-6 relative z-40 border-t border-slate-100 transition-all duration-[1000ms] ease-out transform font-sans antialiased text-slate-800 shadow-[0_25px_50px_rgba(8,28,68,0.03)]"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      ">
    <div class="max-w-6xl mx-auto">
      <div class="mb-16 flex flex-col items-start select-none">
        <div class="w-12 h-1 bg-gradient-to-r from-[#00CCFF] to-[#081C44] rounded-full mb-4"></div>

        <h2 class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-[#081C44] leading-none">
          Fan Kit
        </h2>

        <p class="text-xs font-sans font-bold text-slate-400 tracking-widest pt-3">
          ファンネーム・ハッシュタグ・ファンマーク・コミュニティ
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- ファンネーム -->
        <div
          class="cat-ear-card bg-slate-50/60 border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_15px_45px_rgba(8,28,68,0.01)] space-y-4">
          <div class="flex items-center gap-3 text-[#081C44]">
            <i class="fa-solid fa-users text-[#00CCFF] text-lg"></i>
            <h3 class="text-base font-bold font-sans">ファンネーム</h3>
          </div>

          <p class="text-2xl font-sans font-black text-[#081C44] tracking-wide pt-1">
            観測者
            <span class="text-xs text-slate-400 font-medium font-mono block sm:inline sm:ml-1">
              (型推論: Observer)
            </span>
          </p>

          <p class="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
            いつもパケットを受信し、活動をあたたかく見守って（デバッグして）くれているみんなの総称です。
          </p>
        </div>

        <!-- ハッシュタグ -->
        <div
          class="cat-ear-card bg-slate-50/60 border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_15px_45px_rgba(8,28,68,0.01)] space-y-4">
          <div class="flex items-center gap-3 text-[#081C44]">
            <i class="fa-solid fa-hashtag text-[#00CCFF] text-lg"></i>
            <h3 class="text-base font-bold font-sans">ハッシュタグ</h3>
          </div>

          <div class="space-y-1.5 pt-1 font-mono">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold bg-[#081C44] text-white px-2 py-0.5 rounded-md text-[10px] select-none">
                LIVE
              </span>

              <a href="https://x.com/search?q=%23shiomioLive" target="_blank" rel="noopener noreferrer"
                class="text-sm font-black text-[#081C44] hover:text-[#00CCFF] transition-colors cursor-pointer">
                #shiomioLive
              </a>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-xs font-bold bg-[#081C44] text-white px-2 py-0.5 rounded-md text-[10px] select-none">
                ART
              </span>

              <a href="https://x.com/search?q=%23shiomioarts" target="_blank" rel="noopener noreferrer"
                class="text-sm font-black text-[#081C44] hover:text-[#00CCFF] transition-colors cursor-pointer">
                #shiomioarts
              </a>
            </div>
          </div>

          <p class="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
            X（Twitter）等でのポストの際にお使いください。ハッシュタグ付きのログは定期的に巡回・集約しています。
          </p>
        </div>

        <!-- ファンマーク -->
        <div
          class="cat-ear-card bg-slate-50/60 border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_15px_45px_rgba(8,28,68,0.01)] space-y-4 sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-3 text-[#081C44]">
            <i class="fa-solid fa-paw text-[#00CCFF] text-lg"></i>
            <h3 class="text-base font-bold font-sans">ファンマーク</h3>
          </div>

          <p class="text-4xl font-sans font-black text-[#081C44] pt-1">
            🐾
            <span class="text-xl text-slate-300 ml-1">/</span>
            💻
          </p>

          <p class="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
            名前の後ろやプロフィールに刻むための識別子（Endpoint）です。猫の肉球とノートPCのセット！
          </p>
        </div>

        <!-- ファンサーバー -->
        <a href="https://discord.gg/GUA9MnEvb6" target="_blank" rel="noopener noreferrer"
          class="cat-ear-card relative isolate sm:col-span-2 lg:col-span-3 grid gap-6 overflow-visible rounded-[2.5rem] border border-[#00CCFF]/20 bg-gradient-to-br from-[#F6FCFF] via-white to-[#EAF7FF] p-8 shadow-[0_20px_50px_rgba(8,28,68,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_25px_60px_rgba(8,28,68,0.13)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00CCFF] md:grid-cols-[minmax(0,1fr)_260px] md:items-center md:gap-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_300px] group">
          <span class="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]" aria-hidden="true">
            <span class="absolute -left-10 -top-12 h-36 w-36 rounded-full bg-[#00CCFF]/8"></span>
            <span class="absolute left-[42%] top-8 h-10 w-10 rounded-full bg-[#5E9DF4]/10"></span>
            <span class="absolute -bottom-16 right-16 h-44 w-44 rounded-full bg-[#00CCFF]/10"></span>
          </span>

          <div class="relative z-10 space-y-5">
            <div class="flex flex-wrap items-center gap-3">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#081C44] text-xl text-[#00CCFF] shadow-[0_8px_20px_rgba(8,28,68,0.14)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                <i class="fa-brands fa-discord" aria-hidden="true"></i>
              </div>

              <div>
                <span
                  class="mb-1 inline-flex rounded-full bg-[#00CCFF]/10 px-3 py-1 text-[10px] font-bold tracking-wider text-[#087A9A]">
                  みんなの交流スペース
                </span>
                <h3 class="text-xl font-bold font-sans text-[#081C44]">
                  ファンサーバー
                </h3>
              </div>
            </div>

            <p class="max-w-2xl text-xs font-medium leading-relaxed text-slate-600 md:text-sm">
              汐猫みおの活動を応援してくださる方のためのコミュニティです。配信や活動のお知らせを受け取ったり、観測者同士で交流したりできます。
            </p>

            <span
              class="inline-flex items-center gap-3 rounded-full bg-[#081C44] px-6 py-3 text-sm font-bold tracking-wider text-white shadow-[0_10px_24px_rgba(8,28,68,0.15)] transition-colors duration-300 group-hover:bg-[#00CCFF] group-hover:text-[#081C44]">
              サーバーに参加する
              <i class="fa-solid fa-arrow-right-long text-xs transition-transform group-hover:translate-x-1"
                aria-hidden="true"></i>
            </span>
          </div>

          <div class="relative z-10 flex min-h-52 items-end justify-center md:min-h-64 md:justify-end">
            <span
              class="absolute bottom-4 left-1/2 h-8 w-48 -translate-x-1/2 rounded-[50%] bg-[#081C44]/10 blur-md"
              aria-hidden="true"></span>
            <NuxtImg src="/images/fankit-community-chibi.png" format="webp" loading="lazy" decoding="async"
              alt="ノートパソコンでファンサーバーに書き込むミニキャラの汐猫みお"
              class="relative max-h-64 w-auto object-contain drop-shadow-[0_14px_18px_rgba(8,28,68,0.14)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1 md:max-h-72" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const fanKitSection = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (fanKitSection.value) {
    observer.observe(fanKitSection.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
