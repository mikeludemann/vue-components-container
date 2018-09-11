Vue.component('user-agent', {
    computed: {
        getUserAgent: function () {
            return navigator.userAgent;
        }
    },
    template:
    `
    <div>{{ getUserAgent }}</div>
    `
})