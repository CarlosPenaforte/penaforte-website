import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Greetings from "./components/Greetings.js";
import Projects from "./components/Projects.js";

new Infimo.default({
    name: "App",
    components: [Navbar, About, Skills, Greetings, Projects],
    mounted() {
        const hash = window.location.hash;
        switch (hash) {
            case "#/about":
                setTimeout(() => this.scrollToSection("about-section"), 200);
                break;
            case "#/skills":
                setTimeout(() => this.scrollToSection("skills-section"), 200);
                break;
            case "#/projects":
                setTimeout(() => this.scrollToSection("projects-section"), 200);
                break;
            default:
                setTimeout(() => this.scrollToSection("greetings-card"), 200);
                break;
        }
    },
    methods: {
        scrollToSection(id) {
            const mainColumn = document.querySelector("#main-column");
            const el = document.querySelector("#" + id);
            
            const topSpacing = window.innerWidth > 768 ? 0 : 70;
            const topDistance = Math.max(el.offsetTop - topSpacing, 0);

            el && mainColumn 
                ? mainColumn.scrollTo({ top: topDistance, behavior: "smooth" })
                : document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        },
        scrollToView(section) {
            switch (section) {
                case "about":
                    window.location.hash = "#/about";
                    this.scrollToSection("about-section");
                    break;
                case "skills":
                    window.location.hash = "#/skills";
                    this.scrollToSection("skills-section");
                    break;
                case "projects":
                    window.location.hash = "#/projects";
                    this.scrollToSection("projects-section");
                    break;
                default:
                    window.location.hash = "#/";
                    this.scrollToSection("greetings-card");
                    break;
            }
        }
    },
    template: `
        <main id="infimo" class="w-full h-full m-0 p-0 flex flex-col md:flex-row overflow-hidden">
            <Navbar @click-nav-link="scrollToView"></Navbar>
            <section id="main-column" class="flex-1 h-full flex flex-col gap-4 overflow-y-auto bg-gray-700 text-gray-100">
                <Greetings></Greetings>
                <div id="page-container" class="flex flex-col px-3 md:px-6 py-3 md:py-4 gap-4">
                    <About></About>
                    <Skills></Skills>
                    <Projects></Projects>
                </div>
            </section>
        </main>
    `
}).build(this || {}, "#app");