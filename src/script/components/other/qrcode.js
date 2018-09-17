Vue.component('qrcode', {
    props: {
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        data: {
            type: String,
            required: true
        },
        format: {
            default: "UTF-8"
        },
        correction: {
            default: "L"
        }
    },
    methods: {
        insertExternalSource: function () {

            var image = document.createElement("img");

            var url = "https://chart.googleapis.com/chart?cht=qr&chs=" + this.width + "x" + this.height + "&chl=" + this.data + "&choe=" + this.format + "&chld=" + this.correction + "";

            image.setAttribute("src", url);

            document.getElementById("qrcode").appendChild(image);

        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template: '<div id="qrcode"></div>'
})