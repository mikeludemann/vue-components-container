Vue.component('app-code-name', {
    computed: {
        getAppCodeName: function () {
            return navigator.appCodeName;
        }
    },
    template:
    `
    <div>{{ getAppCodeName }}</div>
    `
})