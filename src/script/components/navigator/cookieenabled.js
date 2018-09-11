Vue.component('cookie-enabled', {
    computed: {
        getCookieEnabled: function () {
            return navigator.cookieEnabled;
        }
    },
    template:
    `
    <div>{{ getCookieEnabled }}</div>
    `
})