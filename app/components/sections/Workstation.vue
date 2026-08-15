<template>
  <section id="workstation" ref="workstationSection"
    class="bg-blue-50/40 py-24 px-6 relative z-10 border-t border-slate-100 transition-all duration-[1000ms] ease-out transform font-sans antialiased text-slate-800 shadow-[0_25px_50px_rgba(8,28,68,0.03)] relative z-20"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      ">
    <div class="max-w-6xl mx-auto">
      <div class="mb-16 flex flex-col items-start select-none">
        <div class="w-12 h-1 bg-gradient-to-r from-[#00CCFF] to-[#081C44] rounded-full mb-4"></div>
        <h2 class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-[#081C44] leading-none">
          Workstation
        </h2>
        <p class="text-xs font-sans font-bold text-slate-400 tracking-widest pt-3">
          開発・配信環境スペック
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          class="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,28,68,0.02)] space-y-6">
          <div class="flex items-center gap-3 border-b border-slate-100 pb-4 select-none">
            <span class="w-2 h-2 rounded-full bg-[#00CCFF]"></span>
            <h3 class="font-mono text-xs font-bold text-[#00CCFF] tracking-widest uppercase">
              PC Specifications
            </h3>
          </div>

          <div class="space-y-1 font-medium">
            <div class="flex py-3.5 border-b border-slate-100/70 text-sm items-baseline tracking-wide">
              <div class="w-20 font-mono text-xs text-slate-400 font-bold uppercase">
                CPU
              </div>
              <div class="flex-1 text-[#081C44] font-semibold pl-4 text-right font-mono text-xs sm:text-sm">
                AMD Ryzen 5 4600H
              </div>
            </div>
            <div class="flex py-3.5 border-b border-slate-100/70 text-sm items-baseline tracking-wide">
              <div class="w-20 font-mono text-xs text-slate-400 font-bold uppercase">
                GPU
              </div>
              <div class="flex-1 text-[#081C44] font-semibold pl-4 text-right font-mono text-xs sm:text-sm">
                AMD Radeon(TM) Graphics
              </div>
            </div>
            <div class="flex py-3.5 border-b border-slate-100/70 text-sm items-baseline tracking-wide">
              <div class="w-20 font-mono text-xs text-slate-400 font-bold uppercase">
                RAM
              </div>
              <div class="flex-1 text-[#081C44] font-semibold pl-4 text-right font-mono text-xs sm:text-sm">
                24GB DDR4-2666
              </div>
            </div>
            <div class="flex py-3.5 text-sm items-baseline tracking-wide">
              <div class="w-20 font-mono text-xs text-slate-400 font-bold uppercase">
                OS
              </div>
              <div class="flex-1 text-[#081C44] font-semibold pl-4 text-right font-mono text-xs sm:text-sm">
                Windows 11 Pro / Ubuntu 26.04 LTS
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,28,68,0.02)] space-y-6">
          <div class="flex items-center gap-3 border-b border-slate-100 pb-4 select-none">
            <span class="w-2 h-2 rounded-full bg-[#00CCFF]"></span>
            <h3 class="font-mono text-xs font-bold text-[#00CCFF] tracking-widest uppercase">
              Peripheral Gear
            </h3>
          </div>

          <div class="space-y-1 font-medium">
            <div class="flex py-3.5 border-b border-slate-100/70 text-sm items-baseline tracking-wide">
              <div class="w-24 font-mono text-xs text-slate-400 font-bold uppercase">
                Keyboard
              </div>
              <div class="flex-1 text-[#081C44] font-semibold pl-4 text-right font-sans text-xs sm:text-sm">
                Logicool K295 Silent Wireless Keyboard K295OW
              </div>
            </div>
            <div class="flex py-3.5 border-b border-slate-100/70 text-sm items-baseline tracking-wide">
              <div class="w-24 font-mono text-xs text-slate-400 font-bold uppercase">
                Mouse
              </div>
              <div class="flex-1 text-[#081C44] font-semibold pl-4 text-right font-sans text-xs sm:text-sm">
                ELECOM EX-G M-XGL10UBWH
              </div>
            </div>
            <div class="flex py-3.5 border-b border-slate-100/70 text-sm items-baseline tracking-wide">
              <div class="w-24 font-mono text-xs text-slate-400 font-bold uppercase">
                Monitor
              </div>
              <div class="flex-1 text-[#081C44] font-semibold pl-4 text-right font-mono text-xs sm:text-sm">
                WQHD 27 inch + 15.6 inch
              </div>
            </div>
            <div class="flex py-3.5 text-sm items-baseline tracking-wide">
              <div class="w-24 font-mono text-xs text-slate-400 font-bold uppercase">
                Audio I/F
              </div>
              <div class="flex-1 text-slate-400 font-semibold pl-4 text-right font-mono text-xs sm:text-sm">
                N/A
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isVisible = ref(false);
const workstationSection = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  if (workstationSection.value) observer.observe(workstationSection.value);
});
</script>
