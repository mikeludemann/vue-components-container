Vue.component('symbols', {
    props: ['code'],
    template: '<p>{{code}}</p>'
})

var codes = new Vue({
    el: '#code'
})