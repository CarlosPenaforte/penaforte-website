import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Greetings from "./components/Greetings.js";

new Infimo.default({
    name: "App",
    components: [Navbar, About, Skills, Greetings],
    methods: {
    },
    template: `
        <main id="infimo" class="w-full h-full m-0 p-0 flex flex-col md:flex-row overflow-hidden">
            <Navbar></Navbar>
            <section id="main-column" class="flex-1 h-full flex flex-col gap-4 overflow-y-auto bg-gray-700 text-gray-100">
                <Greetings></Greetings>
                <div id="page-container" class="flex flex-col px-6 py-4 gap-4">
                    <About></About>
                    <Skills></Skills>
                </div>
            </section>
        </main>
    `
}).build(this || {}, "#app");

window.addEventListener("hashchange", (event) => {
    const path = window.location.hash;

    switch (path) {
        case "#/about":
            document.querySelector("#about-section").scrollIntoView({ behavior: "smooth" });
            break;
        case "#/skills":
            document.querySelector("#skills-section").scrollIntoView({ behavior: "smooth" });
            break;
        case "#/projects":
            document.querySelector("#projects-section").scrollIntoView({ behavior: "smooth" });
            break;
        default:
            console.log("Home");
            break;
    }
});