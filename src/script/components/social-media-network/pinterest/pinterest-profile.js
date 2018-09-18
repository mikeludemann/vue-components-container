Vue.component('pinterest-profile', {
    props: {
        formats: {
            type: String,
            required: true
        },
        boardwidth: {
            type: String,
            required: false
        },
        scaleheight: {
            type: String,
            required: false
        },
        scalewidth: {
            type: String,
            required: false
        },
        profilname: {
            type: String,
            required: true
        }
    },
    methods: {
        insertExternalSource: function () {

            var js = document.createElement("script"),
                pin = document.getElementById("pinterest");

            js.setAttribute("async", "true");
            js.setAttribute("defer", "true");
            js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

            if (this.formats == "square") {

                pin.setAttribute("data-pin-board-width", "400");
                pin.setAttribute("data-pin-scale-height", "240");
                pin.setAttribute("data-pin-scale-width", "80");

            }

            if (this.formats == "sidebar") {

                pin.setAttribute("data-pin-board-width", "150");
                pin.setAttribute("data-pin-scale-height", "800");
                pin.setAttribute("data-pin-scale-width", "60");

            }

            if (this.formats == "header") {

                pin.setAttribute("data-pin-board-width", "900");
                pin.setAttribute("data-pin-scale-height", "120");
                pin.setAttribute("data-pin-scale-width", "115");

            }

            if (this.formats == "custom") {

                pin.setAttribute("data-pin-board-width", + this.boardwidth);
                pin.setAttribute("data-pin-scale-height", + this.scaleheight);
                pin.setAttribute("data-pin-scale-width", + this.scalewidth);

            }

            if (this.profilname != "" || this.profilname != null) {

                pin.setAttribute("href", "https://www.pinterest.com/" + this.profilname);

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
        <a id="pinterest" data-pin-do="embedUser"></a>
    </div>
    `
})