<template>
  <div>
    <section class="w-full pt-5 bg-white relative z-20 shadow-[0_25px_50px_rgba(8,28,68,0.02)]">
      <div class="relative overflow-hidden">
        <NuxtImg src="/images/banner.png" format="webp" preload alt="汐猫みお バナー" class="w-full h-auto object-cover" />
        <div
          class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none">
        </div>
      </div>
    </section>

    <section class="bg-blue-50 pt-8 pb-20 px-6 relative z-20 shadow-[0_10px_55px_rgba(8,28,68,0.06)]">
      <div class="max-w-7xl mt-4 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full">
        <div class="lg:col-span-6 flex justify-center relative">
          <div
            class="absolute w-[260px] h-[260px] bg-gradient-to-tr from-[#00CCFF]/15 to-transparent rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          </div>
          <NuxtImg src="/images/utumuki.png" format="webp" preload alt="机に頬杖ついてる汐猫みお"
            class="w-full max-w-[460px] h-auto transition-transform duration-500 hover:scale-[1.01]" />
        </div>

        <div class="lg:col-span-6 flex justify-center lg:justify-start lg:pl-8">
          <div
            class="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_15px_45px_rgba(8,28,68,0.08)] max-w-sm md:max-w-md w-full">
            <i
              class="fa-solid fa-paw text-[#00CCFF] absolute top-[20px] right-[24px] text-4xl rotate-[15deg] opacity-90 drop-shadow-[0_0_8px_#00CCFF]"></i>

            <div
              class="hidden lg:block absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-8 bg-white border-l border-b border-slate-100 rotate-45 rounded-bl-sm">
            </div>
            <div
              class="block lg:hidden absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-t border-l border-slate-100 rotate-45 rounded-tl-sm">
            </div>

            <div class="relative z-10 space-y-4">
              <div
                class="inline-block bg-[#081C44] text-[#00CCFF] font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-[#00CCFF]/20 shadow-sm">
                stdout: welcome_message
              </div>

              <h2 class="text-2xl md:text-3xl font-sans font-black text-[#081C44] leading-relaxed tracking-wide">
                汐猫みおの<br />
                公式サイトへ<br class="hidden md:block" />ようこそ！
              </h2>

              <p class="text-xs md:text-sm text-slate-500 leading-relaxed font-mono pt-3 border-t border-slate-100">
                //
                ここは技術と創作、温もりが交差する場所。のんびりデコードしていってね。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>