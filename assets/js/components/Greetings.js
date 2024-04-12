export default Infimo.default.defineComponent({
    name: "Greetings",
    data: {
        linkClass: "rounded-full p-2 w-9 h-9 border border-gray-100 text-gray-100 fill-gray-100 hover:bg-[rgba(255,255,255,0.15)] transition-colors",
    },
    template: `
        <div class="flex flex-wrap items-center gap-4 py-4 px-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500">
            <img
                src="assets/images/profile.jpeg"
                alt="Profile Image"
                class="h-[160px] w-[160px] self-center mx-auto md:mx-0 rounded-full border border-2 border-gray-100"
            />
            <div class="flex flex-col">
                <p class="text-xl mb-1 font-semibold">
                    Hello 👋,
                </p>
                <h1 class="text-4xl md:text-6xl mb-1 font-bold text-blue-100">
                    My name is Carlos Penaforte
                </h1>
                <p class="text-2xl md:text-3xl mb-2 font-semibold text-gray-100">
                    I'm a Web Developer
                </p>
                <div id="contact-links" class="flex gap-2">
                    <a title="Linkedin" href="https://linkedin.com/in/carlospenaforte" target="_blank" :class="linkClass">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve">
                            <g id="XMLID_801_">
                                <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                                    C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                                <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                                    c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                                <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                                    c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                                    c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                                    C310,145.43,300.549,94.761,230.454,94.761z"/>
                            </g>
                        </svg>
                    </a>
                    <a title="E-mail" href="mailto:dannhl08@gmail.com?subject=Website" target="_blank" :class="linkClass">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `
});