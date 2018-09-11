Vue.component('platform', {
    computed: {
        getPlatform: function () {
            return navigator.platform;
        }
    },
    template:
    `
    <div>{{ getPlatform }}</div>
    `
})