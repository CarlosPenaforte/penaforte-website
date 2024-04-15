import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Greetings from "./components/Greetings.js";
import Projects from "./components/Projects.js";

new Infimo.default({
    name: "App",
    components: [Navbar, About, Skills, Greetings, Projects],
    methods: {
        scrollToView(section) {
            switch (section) {
                case "about":
                    window.location.hash = "#/about";
                    document.querySelector("#about-section")?.scrollIntoView({ behavior: "smooth" });
                    break;
                case "skills":
                    window.location.hash = "#/skills";
                    document.querySelector("#skills-section")?.scrollIntoView({ behavior: "smooth" });
                    break;
                case "projects":
                    window.location.hash = "#/projects";
                    document.querySelector("#projects-section")?.scrollIntoView({ behavior: "smooth" });
                    break;
                default:
                    window.location.hash = "#/";
                    document.querySelector("#greetings-card")?.scrollIntoView({ behavior: "smooth" });
                    break;
            }
        }
    },
    template: `
        <main id="infimo" class="w-full h-full m-0 p-0 flex flex-col md:flex-row overflow-hidden">
            <Navbar @click-nav-link="scrollToView"></Navbar>
            <section id="main-column" class="flex-1 h-full flex flex-col gap-4 overflow-y-auto bg-gray-700 text-gray-100">
                <Greetings></Greetings>
                <div id="page-container" class="flex flex-col px-6 py-4 gap-4">
                    <About></About>
                    <Skills></Skills>
                    <Projects></Projects>
                </div>
            </section>
        </main>
    `
}).build(this || {}, "#app");