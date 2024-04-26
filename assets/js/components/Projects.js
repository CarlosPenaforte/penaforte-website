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
    mounted(){
        fetch("https://api.github.com/users/cpenaforte/repos?type=public&sort=updated&per_page=5&page=1")
            .then(response => response.json())
            .then(data => {
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
            })
            .catch(error => {
                console.log("Not possible to fetch data from GitHub API.");
            });
    },
    template: `
        <div id="projects-section" class="flex flex-col bg-gray-200 text-gray-900 select-none rounded-lg px-3 py-3 md:py-4 md:px-6 justify-center">
            <div class="height-[50px] flex items-center gap-1 text-gray-800 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-[inherit]">
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/>
                </svg>
                <h2 class="text-2xl font-semibold">Projects</h2>
            </div>
            <p class="text-base">
                <span class="text-[inherit]">Here are some interesting projects I worked on recently. You can find more of my work on my </span><a href="https://github.com/cpenaforte" target="_blank" title="Go to Github profile" class="font-semibold text-[rgb(0,100,180)] hover:text-[rgb(50,120,210)] hover:underline active:text-[rgb(0,100,180)]">GitHub profile</a>.
            </p>
            <div class="flex gap-4 mt-4 flex-wrap">
                <div i-for="item in projects" class="w-full min-[400px]:w-[360px]">
                    <SingleProject :title="item.title" :description="item.description" :image="item.image" :github="item.githubLink" :language="item.language"></SingleProject>
                </div>
            </div>
        </div>
    `
});