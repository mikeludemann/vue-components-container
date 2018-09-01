Vue.component('modern-item', {
    props: ['list'],
    template: '<div>{{ list.text }}</div>'
})

var MList = new Vue({
    el: '#modernlist',
    data: {
        modernList: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'Morning' },
            { id: 3, text: 'Evening' }
        ]
    }
})