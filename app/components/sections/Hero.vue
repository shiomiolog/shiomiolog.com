<template>
  <section class="relative z-20 w-full bg-white pt-5
           shadow-[0_25px_50px_rgba(8,28,68,0.02)]">
    <div class="hero relative h-[520px] overflow-hidden
             sm:h-[580px]
             md:h-auto md:aspect-[5/2]">
      <!-- CSS背景 -->
      <div class="hero-bg absolute inset-0 overflow-hidden">
        <!-- 1枚目 -->
        <div class="orb-scroll-layer orb-scroll-a">
          <span class="orb orb-01" />
          <span class="orb orb-02" />
          <span class="orb orb-03 orb-blue" />
          <span class="orb orb-04" />
          <span class="orb orb-05 orb-blue" />
          <span class="orb orb-06 orb-blue" />
          <span class="orb orb-07 orb-dark" />
          <span class="orb orb-08" />
          <span class="orb orb-09" />
          <span class="orb orb-10" />
          <span class="orb orb-11" />
          <span class="orb orb-12 orb-blue" />
          <span class="orb orb-13" />
          <span class="orb orb-14" />
          <span class="orb orb-15" />
        </div>

        <!-- 2枚目 -->
        <div class="orb-scroll-layer orb-scroll-b">
          <span class="orb orb-01" />
          <span class="orb orb-02" />
          <span class="orb orb-03 orb-blue" />
          <span class="orb orb-04" />
          <span class="orb orb-05 orb-blue" />
          <span class="orb orb-06 orb-blue" />
          <span class="orb orb-07 orb-dark" />
          <span class="orb orb-08" />
          <span class="orb orb-09" />
          <span class="orb orb-10" />
          <span class="orb orb-11" />
          <span class="orb orb-12 orb-blue" />
          <span class="orb orb-13" />
          <span class="orb orb-14" />
          <span class="orb orb-15" />
        </div>
      </div>

      <!-- キャラクター -->
      <div class="
          absolute
          left-1/2
          top-[3%]
          z-20
          h-[57%]
          w-[76%]
          -translate-x-1/2

          md:left-[15%]
          md:top-1/2
          md:h-[92%]
          md:w-[28%]
          md:translate-x-0
          md:-translate-y-1/2
        ">
        <div class="hero-character flex h-full items-center justify-center">
          <img src="/images/animation.webp" alt="汐猫みお" fetchpriority="high" decoding="async"
            class="h-full w-auto object-contain">
        </div>
      </div>

      <!-- ロゴ -->
      <div class="
          absolute
          bottom-[7%]
          left-1/2
          z-20
          flex
          w-[68%]
          max-w-[340px]
          -translate-x-1/2
          items-center
          justify-center

          md:bottom-auto
          md:left-[43%]
          md:top-1/2
          md:w-[32%]
          md:max-w-none
          md:translate-x-0
          md:-translate-y-1/2
        ">
        <NuxtImg src="/images/logo.png" format="webp" alt="汐猫みお SHIONE MIO" preload class="block h-auto w-full" />
      </div>

      <!-- 下端 -->
      <div class="pointer-events-none absolute bottom-0 left-0 z-30
               h-10 w-full
               bg-gradient-to-t from-blue-50 to-transparent" />
    </div>
  </section>
</template>

<style scoped>
.hero-bg {
  overflow: hidden;

  background:
    radial-gradient(circle at 50% 42%,
      #ffffff 0%,
      #f3faff 40%,
      #e3f3ff 72%,
      #d7edff 100%);
}

/* -------------------------
   背景スクロール
-------------------------- */

.orb-scroll-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  will-change: transform;
}

.orb-scroll-a {
  animation: orb-scroll-a 45s linear infinite;
}

.orb-scroll-b {
  transform: translate3d(0, 100%, 0);
  animation: orb-scroll-b 45s linear infinite;
}

@keyframes orb-scroll-a {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes orb-scroll-b {
  from {
    transform: translate3d(0, 100%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

/* -------------------------
   丸 共通
-------------------------- */

.orb {
  position: absolute;
  display: block;

  aspect-ratio: 1;
  border-radius: 9999px;

  background:
    linear-gradient(145deg,
      #a9e5fc 0%,
      #8fd4f7 100%);

  box-shadow:
    -14px 18px 0 #3f6fba;
}

.orb-blue {
  background:
    linear-gradient(145deg,
      #68a2f4 0%,
      #548be2 100%);

  box-shadow: none;
}

.orb-dark {
  background:
    linear-gradient(145deg,
      #5484cd 0%,
      #3867ac 100%);

  box-shadow: none;
}

/* -------------------------
   左側
-------------------------- */

.orb-01 {
  width: 13%;
  left: -3.2%;
  top: 3.2%;

  animation: orb-drift-a 12s ease-in-out infinite;
}

.orb-02 {
  width: 4.8%;
  left: 17.5%;
  top: -1.5%;

  animation: orb-drift-b 10s ease-in-out infinite;
}

.orb-03 {
  width: 4.1%;
  left: 24.2%;
  top: 9%;

  animation: orb-drift-c 14s ease-in-out infinite;
}

.orb-04 {
  width: 6.2%;
  left: 11.7%;
  top: 40%;

  animation: orb-drift-b 13s ease-in-out infinite;
}

.orb-05 {
  width: 3.8%;
  left: 18.7%;
  top: 70.5%;

  animation: orb-drift-c 11s ease-in-out infinite;
}

.orb-06 {
  width: 16.5%;
  left: -0.2%;
  bottom: -15%;

  animation: orb-drift-a 16s ease-in-out infinite;
}

.orb-07 {
  width: 2.5%;
  left: 23%;
  bottom: 3.7%;

  animation: orb-drift-c 9s ease-in-out infinite;
}

.orb-08 {
  width: 6.2%;
  left: 30%;
  bottom: -0.5%;

  animation: orb-drift-b 13s ease-in-out infinite;
}

/* -------------------------
   右側
-------------------------- */

.orb-09 {
  width: 9.5%;
  left: 61%;
  top: -7%;

  animation: orb-drift-a 15s ease-in-out infinite;
}

.orb-10 {
  width: 4.2%;
  left: 76.5%;
  top: -1%;

  animation: orb-drift-c 10s ease-in-out infinite;
}

.orb-11 {
  width: 5.8%;
  left: 80.5%;
  top: 27%;

  animation: orb-drift-b 12s ease-in-out infinite;
}

.orb-12 {
  width: 5.2%;
  left: 76%;
  top: 56%;

  animation: orb-drift-c 11s ease-in-out infinite;
}

.orb-13 {
  width: 5.5%;
  left: 72.5%;
  bottom: 8%;

  animation: orb-drift-b 14s ease-in-out infinite;
}

.orb-14 {
  width: 12.5%;
  right: -4.5%;
  top: -1%;

  animation: orb-drift-a 17s ease-in-out infinite;
}

.orb-15 {
  width: 17.5%;
  right: -5%;
  bottom: -1%;

  animation: orb-drift-a 19s ease-in-out infinite;
}

/* -------------------------
   丸の弱い横揺れ
-------------------------- */

@keyframes orb-drift-a {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(7px, 0, 0);
  }
}

@keyframes orb-drift-b {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(-6px, 0, 0);
  }
}

@keyframes orb-drift-c {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(4px, 0, 0);
  }
}

/* -------------------------
   キャラクター
-------------------------- */

.hero-character {
  height: 100%;

  animation: hero-float 7s ease-in-out infinite;

  transform-origin: center;
  will-change: transform;
}

.hero-character img {
  filter:
    drop-shadow(0 12px 22px rgba(31, 78, 140, 0.16));
}

@keyframes hero-float {

  0%,
  100% {
    transform:
      translateY(0) rotate(-0.2deg);
  }

  50% {
    transform:
      translateY(-8px) rotate(0.2deg);
  }
}

/* -------------------------
   スマホ
-------------------------- */

@media (max-width: 767px) {
  /*
    スマホでは丸を減らす
  */

  .orb-02,
  .orb-03,
  .orb-05,
  .orb-07,
  .orb-08,
  .orb-10,
  .orb-11,
  .orb-12 {
    display: none;
  }

  .orb-01 {
    width: 135px;
    left: -75px;
    top: 4%;
  }

  .orb-04 {
    width: 90px;
    left: -35px;
    top: 41%;
  }

  .orb-06 {
    width: 160px;
    left: -90px;
    bottom: -40px;
  }

  .orb-09 {
    width: 100px;
    left: auto;
    right: -42px;
    top: -18px;
  }

  .orb-13 {
    width: 80px;
    left: auto;
    right: 8%;
    bottom: 12%;
  }

  .orb-14 {
    width: 130px;
    right: -78px;
    top: 18%;
  }

  .orb-15 {
    width: 170px;
    right: -105px;
    bottom: -45px;
  }

  /*
    モバイルでは個別の横揺れを止めて
    背景全体のスクロールだけにする
  */
  .orb {
    animation: none;
  }

  .orb-scroll-a,
  .orb-scroll-b {
    animation-duration: 60s;
  }

  /*
    キャラ全体の動きも少し弱める
  */
  .hero-character {
    animation-duration: 8s;
  }
}

/* -------------------------
   動きを減らす設定
-------------------------- */

@media (prefers-reduced-motion: reduce) {

  .hero-character,
  .orb,
  .orb-scroll-a,
  .orb-scroll-b {
    animation: none;
  }
}
</style>