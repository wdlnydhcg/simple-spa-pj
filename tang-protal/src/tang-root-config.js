import { registerApplication, start } from "single-spa";

registerApplication(
  "@single-spa/welcome",
  () => System.import(
    "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
  ),
  location => location.pathname === '/'
);

//React -- simple-spa-react
registerApplication({
  name: "@tang/simple-spa-react",
  app: () => System.import("@tang/simple-spa-react"),
  activeWhen: ["/simple-spa-react"]
});


// Vue -- simple-spa-vue
registerApplication({
  name: "@tang/simple-spa-vue",
  app: () => System.import("@tang/simple-spa-vue"),
  activeWhen: ["/simple-spa-vue"],
});

start({
  urlRerouteOnly: true,
});
