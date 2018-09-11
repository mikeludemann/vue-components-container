Vue.component('app-name', {
    computed: {
        getAppName: function () {
            return navigator.appName;
        }
    },
    template:
    `
    <div>{{ getAppName }}</div>
    `
})