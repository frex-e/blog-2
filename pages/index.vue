<template>
  <div class="max-w-5xl px-4 pt-24">
    <div class="text-4xl sm:text-5xl">
      Hey. I'm <span class="text-green-600">Indra.</span>
    </div>
    <div>
      <!-- I love anything math and computer sciency things -->
      <div class="text-5xl sm:text-7xl">
        I love <span class="text-red-600">maths</span>
        and <span class="text-highlight">computer sciencey</span> things
      </div>
    </div>
    <div class="text-lg md:text-xl mt-4">
      <img src="@/assets/pic.png" class="m-2 w-1/3 float-right border-red-600 border-2 sm:border-4
      rounded-3xl">
      I'm a university student who loves competitive programming. I happen to be president at <MyLink color="blue-500" to="https://monashaps.com/">
      Monash Algorithms and Problem Solving</MyLink>, and I also
      teach at Monash University.
      If you're a VCE student, I have made a
      <MyLink color="orange-500" to="https://github.com/frex-e/jmssTools">library of Wolfram Language/Mathematica
        functions</MyLink><div class="text-orange-500 border-orange-500"></div>
      to use in
      VCE Maths exams. (Totally not cheating)
      <span class="text-blue-500 border-blue-500"></span>

      <NuxtLink to="/blog" class="block mb-4 mt-8 sm:mt-16 text-xl sm:text-xl text-red-600 border-red-600 border-2 w-min 
      whitespace-nowrap p-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors"> Check Out My Blog</NuxtLink>
    </div>
  </div>
</template>

<script setup>
</script>
  