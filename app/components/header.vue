<template>
  <!-- 高さを確保 (h-16 lg:h-20)。必要に応じてこの数値を調整してください -->
  <div class="relative h-16 lg:h-20">
    <header class="fixed z-50 flex items-center justify-between transition-all" :class="isScrolled
      ? 'top-3 lg:top-5 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-3/4 bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-full shadow-[0_12px_35px_rgba(8,28,68,0.08)] border border-slate-100 py-2 lg:py-0.5 px-4 lg:px-10 duration-300 ease-in-out'
      : 'top-0 left-0 translate-x-0 w-full bg-white border-b border-slate-200/60 py-2.5 lg:py-1.5 px-5 lg:px-16 shadow-none duration-77 ease-out'
      ">
      <div class="flex items-center h-full">
        <NuxtLink to="/">
          <h1>
            <img src="/images/logo.png" alt="logo"
              class="w-24 lg:w-32 transition-transform duration-300 hover:scale-[1.02]" />
          </h1>
        </NuxtLink>
      </div>

      <nav class="hidden lg:flex items-center">
        <ul class="flex items-center gap-5 border-l border-slate-200 pl-8 h-5">
          <li>
            <NuxtLink to="/"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">
              HOME</NuxtLink>
          </li>
          <li>
            <a href="/#profile"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">PROFILE</a>
          </li>
          <li>
            <NuxtLink to="/news"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">
              NEWS</NuxtLink>
          </li>
          <li>
            <a href="https://blog.shiomiolog.com/"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">
              BLOG
            </a>
          </li>

          <li>
            <a href="https://circle.shiomiolog.com/"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">
              CIRCLE
            </a>
          </li>
          <li>
            <a href="/#goods"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">GOODS</a>
          </li>
          <li>
            <a href="/#guidance"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">GUIDANCE</a>
          </li>
          <li>
            <NuxtLink to="/guideline"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">
              GUIDELINE</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">
              CONTACT</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="hidden lg:flex items-center gap-6 text-slate-400">
        <a href="https://youtube.com/@shiomiolog" target="_blank" class="hover:text-[#00CCFF] transition-colors text-lg"
          title="YouTube"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://github.com/shiomiolog" target="_blank" class="hover:text-[#00CCFF] transition-colors text-lg"
          title="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="https://x.com/shiomiolog" target="_blank" class="hover:text-[#00CCFF] transition-colors text-lg"
          title="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
      </div>

      <button @click="isMenuOpen = true"
        class="lg:hidden flex flex-col justify-center items-center w-8.5 h-8.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm text-[#081C44] focus:outline-none"
        aria-label="メニューを開く">
        <div class="w-4 h-2.5 flex flex-col justify-between">
          <span class="w-full h-[2px] bg-[#081C44] rounded-full"></span>
          <span class="w-full h-[2px] bg-[#081C44] rounded-full"></span>
          <span class="w-full h-[2px] bg-[#081C44] rounded-full"></span>
        </div>
      </button>
    </header>

    <transition name="drawer">
      <div v-if="isMenuOpen"
        class="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col h-screen w-screen overflow-hidden">
        <div class="flex items-center justify-between w-full pt-2.5 px-5 shrink-0"
          :class="isScrolled ? 'mt-3 mx-4 w-[calc(100%-2rem)]' : 'mt-0'">
          <img src="/images/logo.png" alt="logo" class="w-24 opacity-90" />

          <button @click="isMenuOpen = false"
            class="flex flex-col justify-center items-center w-8.5 h-8.5 rounded-full bg-slate-50 text-[#081C44] border border-slate-100 shadow-sm focus:outline-none"
            aria-label="メニューを閉じる">
            <div class="w-4 h-4 relative flex items-center justify-center">
              <span class="absolute w-3.5 h-[2px] bg-[#081C44] rounded-full rotate-45"></span>
              <span class="absolute w-3.5 h-[2px] bg-[#081C44] rounded-full -rotate-45"></span>
            </div>
          </button>
        </div>

        <div class="flex-1 flex flex-col items-center px-8 overflow-y-auto py-8">
          <nav class="w-full text-center my-auto space-y-8">
            <ul class="space-y-4 text-lg font-sans font-black tracking-[0.2em] text-[#081C44] uppercase">
              <li>
                <NuxtLink to="/" @click="isMenuOpen = false" class="hover:text-[#00CCFF] transition-colors block py-1">
                  HOME</NuxtLink>
              </li>
              <li>
                <a href="/#profile" @click="isMenuOpen = false"
                  class="hover:text-[#00CCFF] transition-colors block py-1">PROFILE</a>
              </li>
              <li>
                <NuxtLink to="/news" @click="isMenuOpen = false"
                  class="hover:text-[#00CCFF] transition-colors block py-1">NEWS</NuxtLink>
              </li>
              <li>
                <a href="https://blog.shiomiolog.com/" @click="isMenuOpen = false"
                  class="hover:text-[#00CCFF] transition-colors block py-1">
                  BLOG
                </a>
              </li>

              <li>
                <a href="https://circle.shiomiolog.com/" @click="isMenuOpen = false"
                  class="hover:text-[#00CCFF] transition-colors block py-1">
                  CIRCLE
                </a>
              </li>
              <li>
                <a href="/#goods" @click="isMenuOpen = false"
                  class="hover:text-[#00CCFF] transition-colors block py-1">GOODS</a>
              </li>
              <li>
                <a href="/#guidance" @click="isMenuOpen = false"
                  class="hover:text-[#00CCFF] transition-colors block py-1">GUIDANCE</a>
              </li>
              <li>
                <NuxtLink to="/guideline" @click="isMenuOpen = false"
                  class="hover:text-[#00CCFF] transition-colors block py-1">GUIDELINE</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" @click="isMenuOpen = false"
                  class="hover:text-[#00CCFF] transition-colors block py-1">CONTACT</NuxtLink>
              </li>
            </ul>

            <div class="flex items-center justify-center gap-8 text-slate-400 text-lg pt-4">
              <a href="https://youtube.com/@shiomiolog" target="_blank" @click="isMenuOpen = false"
                class="hover:text-[#00CCFF] transition-colors"><i class="fa-brands fa-youtube"></i></a>
              <a href="https://github.com/shiomiolog" target="_blank" @click="isMenuOpen = false"
                class="hover:text-[#00CCFF] transition-colors"><i class="fa-brands fa-github"></i></a>
              <a href="https://x.com/shiomiolog" target="_blank" @click="isMenuOpen = false"
                class="hover:text-[#00CCFF] transition-colors"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
          </nav>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>