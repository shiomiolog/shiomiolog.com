<template>
  <section
    id="contact"
    ref="contactSection"
    class="bg-[#1E1B4B] py-24 px-6 relative z-10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border-t border-white/5 transition-all duration-[1000ms] ease-out transform font-sans antialiased text-white"
    :class="
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    "
  >
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div class="lg:col-span-5 flex flex-col items-start select-none">
          <div
            class="w-12 h-1 bg-gradient-to-r from-[#00CCFF] to-white/10 rounded-full mb-4"
          ></div>
          <h2
            class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-white leading-none"
          >
            Contact
          </h2>
          <p
            class="text-xs font-sans font-bold text-[#00CCFF] tracking-widest pt-3"
          >
            お問い合わせ
          </p>
        </div>

        <div class="lg:col-span-7 space-y-8 flex flex-col items-start">
          <p
            class="text-sm md:text-base text-slate-300 font-medium leading-loose text-left lg:pt-5"
          >
            お仕事のご依頼、その他お問い合わせにつきましては、下記の専用フォームよりパケットを送信してください。
          </p>

          <div class="w-full sm:w-auto pt-2">
            <NuxtLink
              to="/contact"
              class="bg-white text-[#081C44] hover:bg-[#00CCFF] hover:text-[#081C44] px-12 py-4 rounded-full font-sans font-black text-sm tracking-widest transition-all duration-300 shadow-[0_15px_30px_rgba(8,28,68,0.02)] hover:shadow-[0_20px_40px_rgba(0,204,255,0.3)] hover:-translate-y-0.5 flex items-center justify-between min-w-[280px] sm:min-w-[300px] group"
            >
              <span>お問い合わせフォームへ</span>
              <i
                class="fa-solid fa-arrow-right-long text-xs transition-transform duration-300 group-hover:translate-x-1.5"
              ></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const contactSection = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.1 },
  );

  if (contactSection.value) {
    observer.observe(contactSection.value);
  }
});
</script>
