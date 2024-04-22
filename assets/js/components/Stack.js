export default Infimo.default.defineComponent({
    name: "Stack",
    props: {
        type: {
            type: String,
            required: true
        }
    },
    methods: {
        typeToLogoPath(type){
            switch(type) {
                case "vue":
                    return "assets/images/logos/vueLogo.svg";
                case "node":
                    return "assets/images/logos/nodeLogo.svg";
                case "typescript":
                    return "assets/images/logos/typescriptLogo.svg";
                case "javascript":
                    return "assets/images/logos/javascriptLogo.svg";
                case "python":
                    return "assets/images/logos/pythonLogo.svg";
                case "elm":
                    return "assets/images/logos/elmLogo.svg";
                case "java":
                    return "assets/images/logos/javaLogo.svg";
                default:
                    return "";
            }
        },
        typeToTitle(type){
            switch(type) {
                case "vue":
                    return "Vue.js";
                case "node":
                    return "Node.js";
                case "typescript":
                    return "TypeScript";
                case "javascript":
                    return "JavaScript";
                case "python":
                    return "Python";
                case "elm":
                    return "Elm";
                case "java":
                    return "Java";
                default:
                    return "";
            }
        },
        typeToLink(type){
            switch(type) {
                case "vue":
                    return "https://vuejs.org/";
                case "node":
                    return "https://nodejs.org/";
                case "typescript":
                    return "https://www.typescriptlang.org/";
                case "javascript":
                    return "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
                case "python":
                    return "https://www.python.org/";
                case "elm":
                    return "https://elm-lang.org/";
                case "java":
                    return "https://www.java.com/";
                default:
                    return "";
            }
        }
    },
    template: `
        <div class="p-1 bg-gray-800 hover:brightness-110 hover:bg-gray-700 transition z-10 shadow-[0_0_4px_1px_rgba(0,0,0,0.2)] rounded-lg">
            <a :title="typeToTitle(type)" :href="typeToLink(type)" target="_blank">
                <img :src="typeToLogoPath(type)" loading="lazy" :alt="typeToTitle(type)" class="w-[64px] h-[64px]">
            </a>
        </div>
    `
});