Vue.component('month', {
    props: {
        text: String
    },
    computed: {
        toString: function () {
            if (this.text == "true") {
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return months[new Date().getMonth()];

            } else {
                return new Date().getMonth() + 1;
            }
        }
    },
    template:
    `
    <div>{{ toString }}</div>
    `
})