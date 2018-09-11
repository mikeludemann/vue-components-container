Vue.component('language', {
    computed: {
        getLanguage: function () {
            return navigator.language;
        }
    },
    template:
    `
    <div>{{ getLanguage }}</div>
    `
})