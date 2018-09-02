Vue.component('option-list', {
    props: ['options'],
    template: "#selection"
})

new Vue({
    el: "#optSelect",
    data: {
        options: {
            "1": "Eat",
            "2": "Sleep",
            "3": "Sport"
        }
    }
});