import Router from 'vue-router';
import Vue from 'vue';

const Layout = () =>
    import(/* webpackChunkName: "labkit-docs" */
    '@/labkit/documentation/Layout');

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/labkit',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Home'),
            },
        },
        {
            path: '/labkit/components/alert',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Alert'),
            },
        },
        {
            path: '/labkit/components/app-icon',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/AppIcon'),
            },
        },
        {
            path: '/labkit/components/search-select',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/SearchSelect'),
            },
        },
        {
            path: '/labkit/components/badge',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Badge'),
            },
        },
        {
            path: '/labkit/components/breadcrumb',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Breadcrumb'),
            },
        },
        {
            path: '/labkit/components/button',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Button'),
            },
        },
        {
            path: '/labkit/components/card',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Card'),
            },
        },
        {
            path: '/labkit/components/checkbox',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Checkbox'),
            },
        },
        {
            path: '/labkit/components/checkbox-buttons',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/CheckboxButtons'),
            },
        },
        {
            path: '/labkit/components/content',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Content'),
            },
        },
        {
            path: '/labkit/components/date-picker',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/DatePicker'),
            },
        },
        {
            path: '/labkit/components/date-time-picker',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/DateTimePicker'),
            },
        },
        {
            path: '/labkit/components/divider',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Divider'),
            },
        },
        {
            path: '/labkit/components/dropdown-button',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/DropdownButton'),
            },
        },
        {
            path: '/labkit/components/dropdown-menu',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/DropdownMenu'),
            },
        },
        {
            path: '/labkit/components/file-upload',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/FileUpload'),
            },
        },
        {
            path: '/labkit/components/format-number',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/FormatNumber'),
            },
        },
        {
            path: '/labkit/components/glass',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Glass'),
            },
        },
        {
            path: '/labkit/components/grid',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Grid'),
            },
        },
        {
            path: '/labkit/components/heading',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Heading'),
            },
        },
        {
            path: '/labkit/components/input',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Input'),
            },
        },
        {
            path: '/labkit/components/icon',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Icon'),
            },
        },
        {
            path: '/labkit/components/loading-glass',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/LoadingGlass'),
            },
        },
        {
            path: '/labkit/components/loading-spinner',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/LoadingSpinner'),
            },
        },
        {
            path: '/labkit/components/modal',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Modal'),
            },
        },
        {
            path: '/labkit/components/multi-input',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/MultiInput'),
            },
        },
        {
            path: '/labkit/components/navigation-tabs',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/NavigationTabs'),
            },
        },
        {
            path: '/labkit/components/navigation-tree',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/NavigationTree'),
            },
        },
        {
            path: '/labkit/components/notification',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Notification'),
            },
        },
        {
            path: '/labkit/components/padder',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Padder'),
            },
        },
        {
            path: '/labkit/components/page-navigation',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/PageNavigation'),
            },
        },
        {
            path: '/labkit/components/panel',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Panel'),
            },
        },
        {
            path: '/labkit/components/popper',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Popper'),
            },
        },
        {
            path: '/labkit/components/switch',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Switch'),
            },
        },
        {
            path: '/labkit/components/radio',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Radio'),
            },
        },
        {
            path: '/labkit/components/radio-tabs',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/RadioTabs'),
            },
        },
        {
            path: '/labkit/components/select',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Select'),
            },
        },
        {
            path: '/labkit/components/table',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Table'),
            },
        },
        {
            path: '/labkit/components/textarea',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Textarea'),
            },
        },
        {
            path: '/labkit/components/tooltip',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Tooltip'),
            },
        },
        {
            path: '/labkit/components/tree',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Tree'),
            },
        },
        {
            path: '/labkit/components/tree-picker',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/TreePicker'),
            },
        },
        {
            path: '/labkit/components/wrapper',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Wrapper'),
            },
        },
        {
            path: '/labkit/style-guide/colors',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Colors'),
            },
        },
        {
            path: '/labkit/style-guide/text',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Text'),
            },
        },
        {
            path: '/labkit/style-guide/spacing',
            component: Layout,
            props: {
                component: () =>
                    import(/* webpackChunkName: "labkit-docs" */
                    '@/labkit/documentation/views/Spacing'),
            },
        },
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    },
});
