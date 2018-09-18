Vue.component('pinterest-button-follow', {
    props: {
        follow: String,
        fullname: String
    },
    methods: {
        insertExternalSource: function () {

            var js = document.createElement("script");
            pin = document.getElementById("pinterest");

            js.setAttribute("async", "true");
            js.setAttribute("defer", "true");
            js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");
            document.getElementsByTagName("head").item(0).appendChild(js);


            if (this.follow != "" || this.follow != null) {

                pin.setAttribute("href", "https://www.pinterest.com/" + this.follow);

            }

            document.getElementsByTagName("head").item(0).appendChild(js);

        }
    },
    mounted: function () {

        this.insertExternalSource();

    },
    template:
    `
    <div id="container">
        <a id="pinterest" data-pin-do="buttonFollow">{{ this.fullName }}</a>
    </div>
    `
})