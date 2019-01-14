Vue.component('google-recaptcha', {
    props: {
        code: String
    },
    methods: {
        insertExternalSource: function () {

            var script = document.createElement("script");

            script.setAttribute("src", "https://www.google.com/recaptcha/api.js");
            script.setAttribute("async", "true");
            script.setAttribute("defer", "true");

            document.getElementsByTagName("head").item(0).appendChild(script);
            
            document.getElementsByClassName("g-recaptcha")[0].setAttribute("data-sitekey", this.code);

        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template: '<div class="g-recaptcha"></div>'
})