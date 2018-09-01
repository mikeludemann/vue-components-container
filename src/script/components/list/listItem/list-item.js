Vue.component('list-item', {
    props: ['list'],
    template: '<li>{{ list.text }}</li>'
})

var List = new Vue({
    el: '#lists',
    data: {
        sourceList: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'Morning' },
            { id: 3, text: 'Evening' }
        ]
    }
})