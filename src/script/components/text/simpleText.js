Vue.component('simple-text', {
    props: ['content'],
    template: '<p>{{content}}</p>'
})

var text = new Vue({
    el: '#text'
})