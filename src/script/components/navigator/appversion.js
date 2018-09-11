Vue.component('app-version', {
    computed: {
        getAppVersion: function () {
            return navigator.appVersion;
        }
    },
    template:
    `
    <div>{{ getAppVersion }}</div>
    `
})