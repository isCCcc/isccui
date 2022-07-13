declare module '*.vue' {
    import { ComponentOptions } from "vue";
    const componentOption: ComponentOptions;
    export default componentOption;
}
declare module '*.md' {
    const str: String;
    export default str;
}