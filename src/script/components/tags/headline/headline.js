Vue.component('headline', {
    render: function (createElement) {
        return createElement(
            'h' + this.level,
            this.$slots.default
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})

// ----------------------------------------------------

Vue.component('headline', {
    template: '#headline-template',
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})