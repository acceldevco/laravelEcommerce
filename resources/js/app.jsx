import "./bootstrap";
import "../css/app.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import store from "./store/store";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";
import { Provider } from "react-redux";
createInertiaApp({
    title: (title) => `${title}`,

    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        if (import.meta.env.DEV) {
            createRoot(el).render(
                <Provider store={store}>
                    <App {...props} />
                </Provider>
            );
            return;
        }

        hydrateRoot(
            el,
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
