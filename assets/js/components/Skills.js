import Stack from "./Stack.js";

export default Infimo.default.defineComponent({
    name: "Skills",
    components: [Stack],
    data: {
        stacks: ["vue", "typescript", "javascript", "node", "python", "elm", "java", "rust"],
    },
    template: `
        <div id="skills-section" class="flex flex-col bg-gray-200 text-gray-900 select-none rounded-lg py-3 px-3 md:py-4 md:px-6 justify-center">
            <div class="height-[50px] flex items-center gap-1 text-gray-800 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-[inherit]">
                    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                </svg>
                <h2 class="text-2xl font-semibold">My Skills</h2>
            </div>
            <div id="stack-container" class="flex w-full items-center text-xs gap-2 flex-wrap">
                <Stack i-for="stack in stacks" :type="stack"></Stack>
            </div>
        </div>
    `
});