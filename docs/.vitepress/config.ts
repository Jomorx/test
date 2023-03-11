import { defineConfig } from "vitepress";
import  fs from "fs"
const file = fs.readdirSync("./")
console.log(file);

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: "study-notes",
  description: "A Site To Record My Study",
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: "项目", link: "/project/" },
      { text: "笔记", link: "/notes/" } ,
      { text: "代码", link: "/code/" },
    ],
    logo:"../assets/logo.jpg",
    sidebar: {
      "/notes/": [{ text: "目录", link: "/notes/",items:[] }],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/study-notes/",
});

