<script setup lang="ts">
// imports
    import type { Project } from "./models/Project.model"
    import type { Language } from "./models/Language.model";
    import { onBeforeMount, reactive, ref } from "vue";
    
// languages
const typescript: Language = { name : "Typescript", image_path: 'src/assets/images/logos/png-typescript.png'}
const angular: Language = { name : "Angular", image_path: 'src/assets/images/logos/png-angular.png'}
const rxjs: Language = { name : "RxJS", image_path: 'src/assets/images/logos/png-rxjs.png'}
const vuejs: Language = { name : "VueJs", image_path: 'src/assets/images/logos/png-vuejs.png'}

// projects
const projects: Array<Project> = [
    {
        title: "Poker planning App",
        background_path: 'src/assets/images/projects/planning-poker-app.png',
        languages_used: [
            angular,
            typescript,
            rxjs,
        ]
    },
    {
        title: "Personal website",
        background_path: "src/assets/images/projects/portfolio.png",
        languages_used: [
            vuejs,
            typescript
        ]
    },
    {
        title: "test",
        background_path: "src/assets/images/projects/portfolio.png",
        languages_used: [
            vuejs,
            typescript
        ]
    },
];

// Darkmode

const darkMode = ref(false)


// projects showed on page
let projectsDisplayed = reactive<{value: Array<Project>}>({ value: []})
    
    onBeforeMount(() => {
        projectsDisplayed.value.push(projects[project1], projects[project2])
        console.log(projectsDisplayed.value)
    })
    

    // Navigate in my projects with arrows
    let project1: number = 0;
    let project2: number = 1;

    let goToTheLeft = ()  => {
        let a = project1
        let b = project2
        if (projects.length > 2) {
            if (a === 0) {
                a = projects.length - 1
                b -- 
            }
            else if (b === 0) {
                a --
                b = projects.length - 1
            } else {
                a -= 1
                b -= 1
            }
            project1 = a
            project2 = b
            console.log(project1, project2)
            projectsDisplayed.value =[]
            projectsDisplayed.value.push(projects[project1], projects[project2])
            console.log(projectsDisplayed)
        } else {}
    }
    let goToTheRight = () =>{
        let a = project1
        let b = project2
        if (projects.length > 2) {
            if (a === projects.length - 1) {
                a = 0
                b ++
            }
            else if (b === projects.length - 1) {
                a ++
                b = 0
            } else {
                a += 1
                b += 1
            }
            project1 = a
            project2 = b
            console.log(project1, project2)
            projectsDisplayed.value =[]
            projectsDisplayed.value.push(projects[project1], projects[project2])
            console.log(projectsDisplayed)
        } else {}
    }
</script>

<template>
  <div id="capsule" :class="darkMode ? 'dark': ''" class="dark:bg-Pdark dark:text-Pmoon p-5">

  <!-- Header -->

  <header class="flex flex-col py-10 justify-center max-w-7xl mx-auto relative dark:bg-Pdark">
    <nav>
      <ul class="flex justify-center ">
        <li class="px-5 font-bold text-md text-Pgreen cursor-pointer dark:text-Pmoon">CV</li>
        <li class="px-5 font-bold text-md text-Pgreen cursor-pointer dark:text-Pmoon">Projects</li>
        <li class="px-5 font-bold text-md text-Pgreen cursor-pointer dark:text-Pmoon">Contact</li>
      </ul>
    </nav>
    
    <div class="mx-auto my-5 w-24 h-9 rounded-full bg-Pgreen flex justify-center items-center dark:bg-Pred cursor-pointer md:absolute right-0" >
      <p class="absolute bottom-8 md:bottom-10  w-36 text-center text-Pgreen dark:text-Pred">mode dark is {{darkMode ? "on" : "off"}}</p>
      <div @click="darkMode = !darkMode" v-show="darkMode === false">
        <img src="./assets/icons/moon-light.png" alt="" class="w-5 h-5" >
      </div>
      <div @click="darkMode = !darkMode" v-show="darkMode">
        <img src="./assets/icons/sun-light.png" alt="" class="w-5 h-5">
      </div>
    </div>
  </header>

  <!-- Header -->

  <!-- Main -->

  <main class=" max-w-5xl mx-auto lg:pl-10 text-Pdark dark:bg-Pdark dark:text-Pmoon">

    <!-- Titles + profil picture -->

    <section class="flex justify-between mb-20 md:flex-nowrap flex-wrap">
      <div id="titles">
        <h1 class="text-5xl font-russoOne mb-10">
          Hi I'm Laurent,
          <br>
          a Web Developer
        </h1>
        <h3 class="text-2xl md:w-4/5">
          Here is a quick resume of my journey with programmation so far 💻
        </h3>
      </div>
      
      <img id="profil" src="./assets/images/photos/image_profil_détouré.png" alt="Myself" class="rounded-full h-80  border-Pgreen border-solid border-b-8 dark:border-Pred">
    </section>

    <!-- Titles + profil picture -->

    <!-- 1st stage -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      I started my journey in programmation by learning HTML, CSS and Javascript in early 2022
    </p>
    <div class="flex my-10 md:m-10">
      <img src="./assets/images/logos/logo-css.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
      <img src="./assets/images/logos/logo-html.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
      <img src="./assets/images/logos/png-js.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
    </div>

    <!-- 1st stage -->

    <!-- 2nd stage -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      Then i did a bit of backend side programmation with nodeJS
    </p>
    <div class="flex my-5 md:m-10">
      <img src="./assets/images/logos/png-nodejs.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20" v-show="darkMode === false">
      <img src="./assets/images/logos/png-light-nodejs.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20" v-show="darkMode">
    </div>

    <!-- 2nd stage -->

    <!-- 3rd stage -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      Around the end of my degree I tried Javascript frameworks. <br>
      My choice went to Vue so I started to learn VueJS that I used to build the enterprise social network which was my final project of my Openclassrooms degree.  
    </p>
    <div class="flex my-5 md:m-10">
      <img src="./assets/images/logos/png-vuejs.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
    </div>

    <!-- 3rd stage -->

    <!-- 4th stage -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      I then learned Angular, which is the first framework that I used in a professional environment, it's also introduced me to Typescript and RxJs.
    </p>
    <div class="flex my-5 md:m-10">
      <img src="./assets/images/logos/png-angular.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
      <img src="./assets/images/logos/png-typescript.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
      <img src="./assets/images/logos/png-rxjs.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
    </div>

    <!-- 4th stage -->

    <!-- conclusion -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      These are the main languages that I used so far in my developer experience. <br> <br>
      I used a lot of other tools like MongoDB or FireBase, I try to expend my experience on the global web environment so when I have opportunities to try a new tool I take it.
    </p>
    <p class="text-2xl mt-10"> <span class="text-Pgreen cursor-pointer dark:text-Pred font-bold">contact me</span> for more information</p>

    <!-- conclusion -->

    <!-- Projects -->

    <section id="projects" class="mt-36 flex flex-col max-w-3xl lg:max-w-full mx-auto" >
      <h2 class="text-3xl lg:text-4xl font-russoOne mb-10 ">
      My Projects
      </h2>
      <div  class="flex flex-col lg:flex-row justify-center items-center ">
          <img src="./assets/icons/moon-left-arrow.png" alt="" v-show="darkMode" class="w-28 h-28 cursor-pointer opacity-30 hover:opacity-100 my-10 rotate-90 lg:rotate-0" @click="goToTheLeft()">
          <img src="./assets/icons/dark-left-arrow.png" alt="" v-show="darkMode === false" class="w-28 h-28 cursor-pointer opacity-30 hover:opacity-100 my-10 rotate-90 lg:rotate-0" @click="goToTheLeft()">
          <div  v-for="project in projectsDisplayed.value" class=" lg:max-w-sm mx-10 cursor-pointer opacity-70 hover:opacity-100">
            <h3 class="text-Pgreen text-center lg:text-xl mb-5 font-bold dark:text-Pred ">
              {{project.title}}
            </h3>
            <img :src="project.background_path" alt="" class=" rounded-3xl border-solid border-Pgreen border-4 dark:border-Pred peer-hover:opacity-100">

            <!-- languages used -->

            <div class="flex justify-center my-5">
              <img :src="language.image_path" alt="" v-for="language in project.languages_used" class="h-10 m-1 lg:h-12 lg:m-4">
            </div>

            <!-- languages used -->

          </div>
          <img src="./assets/icons/moon-right-arrow.png" alt="" v-show="darkMode" class="w-28 h-28 cursor-pointer opacity-30 hover:opacity-100 my-10 rotate-90 lg:rotate-0" @click="goToTheRight()">
          <img src="./assets/icons/dark-right-arrow.png" alt="" v-show="darkMode === false" class="w-28 h-28 cursor-pointer opacity-30 hover:opacity-100 my-10 rotate-90 lg:rotate-0" @click="goToTheRight()">
      </div>
    </section>

    <!-- Projects -->

    <!-- contact page -->

    <section>
      <form action=""></form>
    </section>

    <!-- contact page -->


  </main>

  <!-- Main -->
</div>
</template>

<style scoped>

</style>
