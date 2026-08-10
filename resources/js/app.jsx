// import '../css/app.css';
// import './bootstrap';

// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { createRoot } from 'react-dom/client';

// const appName = import.meta.env.VITE_APP_NAME || 'HOSPITALITY SALES & MARKETING ASSOCIATION NEPAL | kathmandu';

// createInertiaApp({
//     title: (title) => `${title}  ${appName}`,
//     resolve: (name) =>
//         resolvePageComponent(
//             `./Pages/${name}.jsx`,
//             import.meta.glob('./Pages/**/*.jsx'),
//         ),
//     setup({ el, App, props }) {
//         const root = createRoot(el);

//         root.render(<App {...props} />);
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });

import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import MainLayout from '@/Layouts/MainLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Hospitality Sales & Marketing Association Nepal | kathmandu';

createInertiaApp({
    title: (title) => `${title}  ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ).then((page) => {
            // If the page doesn't have a layout defined, use PublicLayout
            if (!page.default.layout) {
                page.default.layout = (page) => <MainLayout children={page} />;
            }
            return page;
        }),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});