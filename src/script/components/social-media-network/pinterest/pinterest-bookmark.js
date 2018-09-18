Vue.component('pinterest-bookmark', {
    props: {
        round: Boolean,
        large: Boolean,
        language: String
    },
    methods: {
        insertExternalSource: function () {

            var js = document.createElement("script"),
                pin = document.getElementById("pinterest");

            js.setAttribute("async", "true");
            js.setAttribute("defer", "true");
            js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");


            if (this.round == true) {

                pin.setAttribute("data-pin-round", "true");

            }

            if (this.large == true) {

                pin.setAttribute("data-pin-tall", "true");

            }


            if (this.language != "" || this.language != null) {

                pin.setAttribute("data-pin-lang", + this.language);

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
        <a id="pinterest" data-pin-do="buttonBookmark" href="https://www.pinterest.com/pin/create/button/"></a>
    </div>
    `
})