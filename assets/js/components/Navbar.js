export default Infimo.default.defineComponent({
    name: "Navbar",
    data: {
        linkClass: "text-center rounded py-3 px-3 md:px-0 transition-colors hover:bg-gray-700 active:bg-gray-800"
    },
    methods: {
        emitNavigation(section) {
            this.emit("click-nav-link", section);
        }
    },
    template: `
        <nav 
            id="header-container"
            class="flex md:flex-col h-[70px] md:h-auto md:w-[10%] md:min-w-[100px] md:max-w-[150px] bg-gray-800 text-gray-100 items-center px-6 md:px-0 md:py-4 z-20 gap-2 md:gap-8 shadow-[0_0_6px_0_rgba(255,255,255,0.2)]"
            role="navigation"
            aria-label="main navigation"
        >
            <div id="profile-image-container">
                <button @click="() => emitNavigation('')" title="Carlos Penaforte" class="flex items-center justify-center">
                    <span class="text-[60px] text-center drop-shadow-[4px_4px_0_rgba(0,255,255,0.5)]">P</span>
                </button>
            </div>
            <div id="nav-links" class="flex md:flex-col w-full text-sm mb:text-base">
                <button @click="() => emitNavigation('')" title="Go to Home" :class="linkClass">Home</button>
                <button @click="() => emitNavigation('about')" title="Go to About section" :class="linkClass">About</button>
                <button @click="() => emitNavigation('skills')" title="Go to Skills section" :class="linkClass">Skills</button>
                <button @click="() => emitNavigation('projects')" title="Go to Projects section" :class="linkClass">Projects</button>
            </div>
        </nav>
    `
});