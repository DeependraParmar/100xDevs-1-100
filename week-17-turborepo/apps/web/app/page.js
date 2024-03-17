"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_module_css_1 = __importDefault(require("./page.module.css"));
function Gradient({ conic, className, small, }) {
    return (<span className={[
            page_module_css_1.default.gradient,
            conic ? page_module_css_1.default.glowConic : undefined,
            small ? page_module_css_1.default.gradientSmall : page_module_css_1.default.gradientLarge,
            className,
        ]
            .filter(Boolean)
            .join(" ")}/>);
}
const LINKS = [
    {
        title: "Docs",
        href: "https://turbo.build/repo/docs",
        description: "Find in-depth information about Turborepo features and API.",
    },
    {
        title: "Learn",
        href: "https://turbo.build/repo/docs/handbook",
        description: "Learn more about monorepos with our handbook.",
    },
    {
        title: "Templates",
        href: "https://turbo.build/repo/docs/getting-started/from-example",
        description: "Choose from over 15 examples and deploy with a single click.",
    },
    {
        title: "Deploy",
        href: "https://vercel.com/new",
        description: "Instantly deploy your Turborepo to a shareable URL with Vercel.",
    },
];
function Page() {
    return (<div>
      Hello
    </div>);
}
exports.default = Page;
