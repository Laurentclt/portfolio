<script setup lang="ts">
// imports
    
    import { ref } from "vue";
    
// Darkmode

const darkMode = ref(false)



</script>

<template>
  <div id="capsule" :class="darkMode ? 'dark': ''" class="dark:bg-Pdark dark:text-Pmoon p-5">

  <!-- Header -->

  <header class="flex flex-col py-10 justify-center max-w-7xl mx-auto relative dark:bg-Pdark">
    <nav>
      <ul class="flex justify-center ">
        <li class="px-5 font-bold text-md text-Pgreen cursor-pointer dark:text-Pmoon"> <routerLink to="/cv"> CV</routerLink></li>
        <li class="px-5 font-bold text-md text-Pgreen cursor-pointer dark:text-Pmoon"> <routerLink to="/home"> Home </routerLink></li>
        <li class="px-5 font-bold text-md text-Pgreen cursor-pointer dark:text-Pmoon"> <routerLink to="/contact" >Contact </routerLink></li>
      </ul>
    </nav>
    
    <div @click="darkMode = !darkMode" class="mx-auto my-5 w-24 h-9 rounded-full bg-Pgreen flex justify-center items-center dark:bg-Pred cursor-pointer md:absolute right-0" >
      <p class="absolute bottom-8 md:bottom-10  w-36 text-center text-Pgreen dark:text-Pred">mode dark is {{darkMode ? "on" : "off"}}</p>
      <div  v-show="darkMode === false" >
        <img src="./assets/icons/moon-light.png" alt="" class="w-5 h-5" >
      </div>
      <div  v-show="darkMode">
        <img src="./assets/icons/sun-light.png" alt="" class="w-5 h-5">
      </div>
    </div>
  </header>

  <!-- Header -->

  <!-- component SHOWN -->

  <RouterView :darkMode="darkMode" ></RouterView>
 
</div>
</template>

