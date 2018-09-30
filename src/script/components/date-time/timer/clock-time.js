Vue.component('clock-time', {
    props: {
        id: {
            type: String,
            default: "clocktime"
        }
    },
    methods: {
        insertExternalSource: function (element) {

            var timer = function () {
                var d = new Date();
                var t = d.toLocaleTimeString();
                document.getElementById(element).innerHTML = t;

                setInterval(timer, 1000);
            }

            window.onload = timer();

        }
    },
    mounted: function () {
        this.insertExternalSource(this.id);
    },
    template: '<div :id="id"></div>'
})