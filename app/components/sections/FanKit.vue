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
          ファンネーム・ハッシュタグ・ファンマーク
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
