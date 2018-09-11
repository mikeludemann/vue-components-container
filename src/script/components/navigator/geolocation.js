Vue.component('geolocation', {
    computed: {
        getGeolocation: function () {
            if (navigator.geolocation) {

                return "Browser Geolocation is supported and available";

            } else {

                return "Browser Geolocation is not supported and not available";

            }
        }
    },
    template:
    `
    <div>{{ getGeolocation }}</div>
    `
})