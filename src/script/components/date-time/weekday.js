Vue.component('weekday', {
    props: {
        text: String
    },
    computed: {
        toString: function () {
            if (this.text == "true") {
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                return days[new Date().getDay()];

            } else {
                return new Date().getDay();
            }
        }
    },
    template:
    `
    <div>{{ toString }}</div>
    `
})