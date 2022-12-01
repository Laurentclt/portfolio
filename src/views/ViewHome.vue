<script setup lang="ts">

// imports

    import type { Project } from "../models/Project.model"
    import type { Language } from "../models/Language.model";
    import {onBeforeMount, reactive, defineProps} from "vue"

    // languages
const typescript: Language = { name : "Typescript", image_path: 'src/assets/images/logos/png-typescript.png'}
const angular: Language = { name : "Angular", image_path: 'src/assets/images/logos/png-angular.png'}
const rxjs: Language = { name : "RxJS", image_path: 'src/assets/images/logos/png-rxjs.png'}
const vuejs: Language = { name : "VueJs", image_path: 'src/assets/images/logos/png-vuejs.png'}

// props

defineProps<{
  darkMode?: Boolean
}>()

// projects
const projects: Array<Project> = [
    {
        title: "Poker planning App",
        background_path: 'src/assets/images/projects/planning-poker-app.png',
        languages_used: [
            angular,
            typescript,
            rxjs,
        ],
        isDeployed: true,
        ghDirectoryPath : "https://github.com/Laurentclt/planning-poker-app",
        websitePath : "https://laurentclt.github.io/planning-poker-app",
        isMouseOver : false,
        theme : "light",
    },
    {
        title: "Personal website",
        background_path: "src/assets/images/projects/portfolio.png",
        languages_used: [
            vuejs,
            typescript
        ],
        isDeployed: true,
        ghDirectoryPath : "https://github.com/Laurentclt/portfolio",
        websitePath : "https://laurentclt.github.io/portfolio/",
        isMouseOver : false,
        theme : "dark",
    },
    {
        title: "blackJack game",
        background_path: "src/assets/images/projects/portfolio.png",
        languages_used: [
            vuejs,
            typescript
        ],
        isDeployed: false,
        ghDirectoryPath : "blabla",
        websitePath : "blabla",
        isMouseOver : false,
        theme : "dark"
        
    },
];

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
      
      <img id="profil" src="../assets/images/photos/image_profil_détouré.png" alt="Myself" class="rounded-full h-80  border-Pgreen border-solid border-b-8 dark:border-Pred">
    </section>

    <!-- Titles + profil picture -->

    <!-- 1st stage -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      I started my journey in programmation by learning HTML, CSS and Javascript in early 2022 !
    </p>
    <div class="flex my-10 md:m-10">
      <img src="../assets/images/logos/logo-css.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
      <img src="../assets/images/logos/logo-html.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
      <img src="../assets/images/logos/png-js.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
    </div>

    <!-- 1st stage -->

    <!-- 2nd stage -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      Then I learned a bit of backend side programmation with nodeJS.
    </p>
    <div class="flex my-5 md:m-10">
      <img src="../assets/images/logos/png-nodejs.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20" v-show="darkMode === false">
      <img src="../assets/images/logos/png-light-nodejs.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20" v-show="darkMode">
    </div>

    <!-- 2nd stage -->

    <!-- 3rd stage -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      Around the end of my degree I tried Javascript frameworks. <br>
      My choice went to Vue so I started to learn VueJS, that I used to build the enterprise social network which was my final project of my Openclassrooms degree.  
    </p>
    <div class="flex my-5 md:m-10">
      <img src="../assets/images/logos/png-vuejs.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
    </div>

    <!-- 3rd stage -->

    <!-- 4th stage -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      After finishing my degree, I learned Angular, which is the first framework that I used in a professional environment, it's also introduced me to Typescript and RxJs.
    </p>
    <div class="flex my-5 md:m-10">
      <img src="../assets/images/logos/png-angular.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
      <img src="../assets/images/logos/png-typescript.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
      <img src="../assets/images/logos/png-rxjs.png" alt="" class=" md:w-28 md:h-28 ml-5 md:ml-10 h-20 w-20">
    </div>

    <!-- 4th stage -->

    <!-- conclusion -->

    <p class=" text-xl md:text-2xl md:w-4/5">
      These are the main languages that I used so far in my developer experience. <br> <br>
      I used a lot of other tools like MongoDB or FireBase, I try to expend my experience on the global web environment so when I have opportunity to try new tools I take it.
    </p>
    <p class="text-2xl mt-10"> <span class="text-Pgreen cursor-pointer dark:text-Pred font-bold">contact me</span> for more information</p>

    <!-- conclusion -->

    <!-- Projects -->

    <section id="projects" class="mt-36 flex flex-col max-w-3xl lg:max-w-full mx-auto" >
      <h2 class="text-3xl lg:text-4xl font-russoOne mb-10 ">
      My Projects
      </h2>
      <div  class="flex flex-col lg:flex-row justify-center items-center ">
          <img src="../assets/icons/moon-left-arrow.png" alt="" v-show="darkMode" class="w-28 h-28 cursor-pointer opacity-30 hover:opacity-100 my-10 rotate-90 lg:rotate-0" @click="goToTheLeft()">
          <img src="../assets/icons/dark-left-arrow.png" alt="" v-show="darkMode === false" class="w-28 h-28 cursor-pointer opacity-30 hover:opacity-100 my-10 rotate-90 lg:rotate-0" @click="goToTheLeft()">

          <!-- project loop-->

          <div  v-for="project in projectsDisplayed.value" class=" lg:max-w-sm mx-10 cursor-pointer"
          >
            <h3 class="text-Pgreen text-center lg:text-xl mb-2 font-bold dark:text-Pred ">
              {{project.title}} <br> <span v-if="project.isDeployed === false" class=" text-Pdark font-bold text-center text-sm dark:text-Plight" >  ( In development ) </span>
              <span v-else><br></span>
            </h3>
            <div @mouseenter="project.isMouseOver = true" @mouseleave="project.isMouseOver = false" class="relative group">
              <img  :src="project.background_path" alt="" class=" rounded-3xl border-solid border-Pgreen border-4 dark:border-Pred group-hover:opacity-60">
              <div class="absolute flex bottom-0 my-2 px-2 w-full">
                <div v-show="project.isMouseOver === true" 
                :class="{
                  'bg-Pmoon border-Pdark hover:border-Plight text-Pdark': project.theme === 'dark',
                  'bg-Pgreen  hover:border-Pdark text-Plight' : project.theme === 'light'
                  }" class="flex items-center  border-2 text-lg flex-1 font-bold text-center rounded-lg mx-1">
                  <a  class=" w-full"
                  :href="project.ghDirectoryPath" target="_blank" > go to GitHub directory</a>
                </div>
                <div v-show="project.isMouseOver === true && project.isDeployed === true" 
                :class="{
                  'bg-Pmoon border-Pdark hover:border-Plight text-Pdark'  : project.theme === 'dark',
                  'bg-Pgreen  hover:border-Pdark text-Plight' : project.theme === 'light'
                  }" class=" flex items-center border-2 flex-1 text-lg font-bold text-center rounded-lg mx-2">
                  <a  class=" w-full"
                  :href="project.websitePath" target="_blank" > go to website</a>
                </div>
              </div>
            </div>

            <!-- languages used -->

            <div class="flex justify-center my-5">
              <img :src="language.image_path" alt="" v-for="language in project.languages_used" class="h-10 m-1 lg:h-12 lg:m-4">
            </div>

          </div>
          <img src="../assets/icons/moon-right-arrow.png" alt="" v-show="darkMode" class="w-28 h-28 cursor-pointer opacity-30 hover:opacity-100 my-10 rotate-90 lg:rotate-0" @click="goToTheRight()">
          <img src="../assets/icons/dark-right-arrow.png" alt="" v-show="darkMode === false" class="w-28 h-28 cursor-pointer opacity-30 hover:opacity-100 my-10 rotate-90 lg:rotate-0" @click="goToTheRight()">
      </div>
    </section>

    <!-- contact page -->

    <section>
      <form action=""></form>
    </section>

  </main>

  <!-- Main -->

</template>