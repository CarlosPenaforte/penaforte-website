export default Infimo.default.defineComponent({
    name: "Navbar",
    data: {
        linkClass: "text-center py-3 transition-colors hover:bg-gray-700 active:bg-gray-800"
    },
    methods: {
    },
    template: `
        <nav 
            id="header-container"
            class="flex flex-col w-[10%] min-w-[100px] max-w-[150px] bg-gray-800 text-gray-100 items-center py-4 z-20 gap-8 shadow-[1px_0_8px_0_rgba(255,255,255,0.2)]"
            role="navigation"
            aria-label="main navigation"
        >
            <div id="profile-image-container">
                <a href="#" title="Carlos Penaforte" class="flex items-center justify-center">
                    <span class="text-[60px] text-center drop-shadow-[4px_4px_0_rgba(0,255,255,0.5)]">P</span>
                </a>
            </div>
            <div id="nav-links" class="flex flex-col w-full text-base">
                <a href="#" title="Go to Home" :class="linkClass">Home</a>
                <a href="#/about" title="Go to About section" :class="linkClass">About</a>
                <a href="#/skills" title="Go to Skills section" :class="linkClass">Skills</a>
                <a href="#/projects" title="Go to Projects section" :class="linkClass">Projects</a>
            </div>
        </nav>
    `
});