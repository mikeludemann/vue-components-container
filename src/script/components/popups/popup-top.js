Vue.component('popup-top', {
    props: {
        defaulttext: {
            type: String,
            required: true
        },
        popuptext: {
            type: String,
            required: true
        }
    },
    methods: {
        insertExternalSource: function () {

            var popup = document.getElementsByClassName("popup");

            for (var i = 0; i < popup.length; i++) {

                popup[i].onclick = togglePopup(i);

            }

            function togglePopup(i) {

                return function () {

                    if (popup[i].children[1].style.display == "none") {

                        popup[i].children[1].style.display = "block";

                    } else {

                        popup[i].children[1].style.display = "none";

                    }

                };

            }

        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template:
    `
    <div class="popup">
        <div class="popup-text">{{this.defaulttext}}</div>
        <div class="popup-text-top">{{this.popuptext}}</div>
    </div>
    `
})