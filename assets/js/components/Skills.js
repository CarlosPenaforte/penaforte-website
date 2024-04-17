import Stack from "./Stack.js";

export default Infimo.default.defineComponent({
    name: "Skills",
    components: [Stack],
    data: {
        stacks: ["vue", "typescript", "javascript", "node", "python", "elm", "java"]
    },
    template: `
        <div id="skills-section" class="flex flex-col bg-gray-200 text-gray-900 select-none rounded-lg py-3 px-3 md:py-4 md:px-6 justify-center">
            <h2 class="text-2xl text-gray-800 font-semibold mb-2">My Skills</h2>
            <div id="stack-container" class="flex w-full items-center text-xs gap-2 flex-wrap">
                <Stack i-for="stack in stacks" :type="stack" />
            </div>
        </div>
    `
});