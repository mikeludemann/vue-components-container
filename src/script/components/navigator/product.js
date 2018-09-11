Vue.component('product', {
    computed: {
        getProduct: function () {
            return navigator.product;
        }
    },
    template:
    `
    <div>{{ getProduct }}</div>
    `
})