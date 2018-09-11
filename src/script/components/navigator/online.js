Vue.component('on-line', {
    computed: {
        getOnLine: function () {
            return navigator.onLine;
        }
    },
    template:
    `
    <div>{{ getOnLine }}</div>
    `
})