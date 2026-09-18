<template>
  <section
    id="contact"
    ref="contactSection"
    class="relative z-10 overflow-hidden bg-[#1E1B4B] px-6 py-20 font-sans antialiased transition-all duration-[1000ms] ease-out transform md:py-24"
    :class="
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    "
  >
    <div
      class="pointer-events-none absolute -left-16 top-12 h-44 w-44 rounded-full bg-[#8EDBFA]/35"
    ></div>
    <div
      class="pointer-events-none absolute -right-12 bottom-8 h-56 w-56 rounded-full bg-[#79A9F3]/20"
    ></div>
    <div
      class="pointer-events-none absolute right-[18%] top-12 h-8 w-8 rounded-full bg-[#00CCFF]/25"
    ></div>

    <div class="relative mx-auto max-w-6xl">
      <div
        class="overflow-hidden rounded-[2.5rem] border border-white bg-white/90 shadow-[0_24px_70px_rgba(58,111,181,0.13)] backdrop-blur-sm"
      >
        <div
          class="grid min-h-[390px] grid-cols-1 items-center md:grid-cols-[minmax(230px,0.8fr)_minmax(0,1.5fr)] lg:grid-cols-[340px_minmax(0,1fr)]"
        >
          <div
            class="relative flex h-[270px] items-end justify-center self-end md:h-full"
          >
            <div
              class="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#DDF5FF] to-[#E9EEFF] md:h-64 md:w-64"
            ></div>
            <NuxtImg
              src="/images/contact-chibi-flat.png"
              format="webp"
              quality="82"
              alt="お問い合わせをご案内する汐猫みお"
              width="720"
              height="900"
              loading="lazy"
              class="relative z-10 h-[285px] w-auto object-contain drop-shadow-[0_16px_20px_rgba(8,28,68,0.12)] md:h-[390px] lg:h-[430px]"
            />
          </div>

          <div class="px-7 pb-10 pt-5 sm:px-10 md:py-14 md:pr-14 lg:pr-20">
            <div class="mb-8 flex flex-col items-start select-none">
              <div
                class="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#00CCFF] to-[#79A9F3]"
              ></div>
              <h2
                class="text-4xl font-bold leading-none tracking-wider text-[#081C44] md:text-5xl"
              >
                Contact
              </h2>
              <p
                class="pt-3 text-xs font-bold tracking-widest text-[#3F6FBA]"
              >
                お問い合わせ
              </p>
            </div>

            <p
              class="max-w-2xl text-left text-sm font-medium leading-loose text-slate-600 md:text-base"
            >
              お仕事のご依頼、コラボレーションのご相談、その他お問い合わせは、専用フォームよりお気軽にお送りください。
            </p>
            <p class="mt-3 text-sm font-medium text-slate-400">
              みおが内容を確認して、丁寧にお返事します。
            </p>

            <div class="pt-8">
              <NuxtLink
                to="/contact"
                class="group flex w-full min-w-0 items-center justify-between rounded-full bg-[#081C44] px-8 py-4 text-sm font-black tracking-widest text-white shadow-[0_15px_30px_rgba(8,28,68,0.13)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00CCFF] hover:text-[#081C44] hover:shadow-[0_20px_40px_rgba(0,204,255,0.24)] sm:w-auto sm:min-w-[320px]"
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
