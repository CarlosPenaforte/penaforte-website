export default Infimo.default.defineComponent({
    name: "Navbar",
    data: {
        linkClass: "flex items-center justify-center flex-col gap-1 rounded h-full px-4 md:px-0 md:py-3 md:h-[initial] transition-colors hover:bg-gray-700 active:bg-gray-800"
    },
    methods: {
        emitNavigation(section) {
            this.emit("click-nav-link", section);
        }
    },
    template: `
        <nav 
            id="header-container"
            class="flex md:flex-col h-[70px] md:h-auto md:w-[90px] bg-gray-800 text-gray-100 items-center px-3 md:px-6 md:px-0 py-0 md:py-4 z-20 justify-between md:justify-normal md:gap-8 shadow-[0_0_6px_0_rgba(255,255,255,0.2)]"
            role="navigation"
            aria-label="main navigation"
        >
            <div id="profile-image-container">
                <button @click="() => emitNavigation('')" title="Carlos Penaforte" class="flex items-center justify-center">
                    <span class="text-[60px] text-center drop-shadow-[4px_4px_0_rgba(0,255,255,0.5)]">P</span>
                </button>
            </div>
            <div id="nav-links" class="flex md:flex-col h-full md:w-full text-sm mb:text-base">
                <button @click="() => emitNavigation('')" title="Go to Home" :class="linkClass">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-gray-100">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                    </svg>
                    <span>Home</span>
                </button>
                <button @click="() => emitNavigation('about')" title="Go to About section" :class="linkClass">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-gray-100">
                        <path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/>
                    </svg>
                    <span>About</span>
                </button>
                <button @click="() => emitNavigation('skills')" title="Go to Skills section" :class="linkClass">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-gray-100">
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                    </svg>
                    <span>Skills</span>
                </button>
                <button @click="() => emitNavigation('projects')" title="Go to Projects section" :class="linkClass">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-gray-100">
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/>
                    </svg>
                    <span>Projects</span>
                </button>
            </div>
        </nav>
    `
});