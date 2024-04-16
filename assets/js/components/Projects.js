import SingleProject from "./SingleProject.js";

export default Infimo.default.defineComponent({
    name: "Projects",
    components: [SingleProject],
    data: {
        projects: [
            {
                title: "Infimo",
                description: "A simple and lightweight reactivity lib for building web components with modern JavaScript and TypeScript.",
                githubLink: "https://github.com/cpenaforte/infimo",
            },
            {
                title: "Simple Tasks App",
                description: "A web application to manage your tasks and to-do lists with a clean and responsive design, built with Vue.js and Quasar Framework.",
                image: "assets/images/simpleTasksLogo.jpeg",
                githubLink: "https://github.com/cpenaforte/simple-tasks",
            },
            {
                title: "Simple Tasks Backend",
                description: "A RESTful API to manage tasks and to-do lists, built with Node.js and Express.",
                image: "assets/images/simpleTasksLogo.jpeg",
                githubLink: "https://github.com/cpenaforte/simple-tasks-backend",
            }
        ]
    },
    template: `
        <div id="projects-section" class="flex flex-col bg-gray-200 text-gray-900 select-none rounded-lg py-4 px-6 justify-center">
            <h2 class="text-2xl text-gray-800 font-semibold mb-2">Projects</h2>
            <p class="text-base">
                Here are some interesting projects I worked on recently. You can find more of my work on my <a href="https://github.com/cpenaforte" target="_blank">GitHub profile</a>.
            </p>
            <div class="flex gap-4 mt-4 flex-wrap">
                <SingleProject i-for="project in projects" :title="project.title" :description="project.description" :image="project.image" :github="project.githubLink"></SingleProject>
            </div>
        </div>
    `
});