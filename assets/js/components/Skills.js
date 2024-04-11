import Stack from "./Stack.js";

export default Infimo.default.defineComponent({
    name: "Skills",
    components: [Stack],
    data: {
        stacks: ["vue", "typescript", "node", "python", "elm"]
    },
    template: `
        <div id="skills-section" class="flex flex-col bg-gray-200 text-gray-900 rounded py-4 px-6 justify-center">
            <h2 class="text-xl font-semibold mb-2">My Skills</h2>
            <div id="stack-container" class="flex w-full items-center text-xs gap-2 flex-wrap">
                <Stack i-for="stack in stacks" :type="stack" />
            </div>
        </div>
    `
});