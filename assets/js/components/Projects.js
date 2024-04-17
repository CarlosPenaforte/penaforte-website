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
                language: "TypeScript",
            },
            {
                title: "Simple Tasks App",
                description: "A web application to manage your tasks and to-do lists with a clean and responsive design, built with Vue.js and Quasar Framework.",
                githubLink: "https://github.com/cpenaforte/simple-tasks",
                language: "Vue.js",
            },
            {
                title: "Simple Tasks Backend",
                description: "A RESTful API to manage tasks and to-do lists, built with Node.js and Express.",
                githubLink: "https://github.com/cpenaforte/simple-tasks-backend",
                language: "Node.js",
            }
        ]
    },
    async mounted(){
        try{
            const response = await fetch("https://api.github.com/users/cpenaforte/repos?type=public&sort=updated&per_page=5&page=1");
            const data = await response.json();
            if(data && data.length > 0){
                this.projects = data.map(repo => {
                    return {
                        title: repo.name,
                        description: repo.description,
                        githubLink: repo.html_url,
                        language: repo.language,
                    };
                });
            }
        } catch (error) {
            console.log("Not possible to fetch data from GitHub API.");
        }
    },
    template: `
        <div id="projects-section" class="flex flex-col bg-gray-200 text-gray-900 select-none rounded-lg px-3 py-3 md:py-4 md:px-6 justify-center">
            <h2 class="text-2xl text-gray-800 font-semibold mb-2">Projects</h2>
            <p class="text-base">
                Here are some interesting projects I worked on recently. You can find more of my work on my <a href="https://github.com/cpenaforte" target="_blank">GitHub profile</a>.
            </p>
            <div class="flex gap-4 mt-4 flex-wrap">
                <div i-for="item in projects" class="w-full min-[400px]:w-[360px]">
                    <SingleProject :title="item.title" :description="item.description" :image="item.image" :github="item.githubLink" :language="item.language"></SingleProject>
                </div>
            </div>
        </div>
    `
});