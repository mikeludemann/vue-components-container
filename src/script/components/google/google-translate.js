Vue.component('google-translate', {
    methods: {
        insertExternalSource: function () {

            var style = document.createElement('style');
            style.type = 'text/css';

            let styling =
            `                
            body > .skiptranslate:nth-child(1) {
              opacity: 0;
            }
            
            body {
            	top: 0 !important;
            }
            `

            style.innerHTML = styling;
            document.getElementsByTagName('head')[0].appendChild(style);

            var gscript = document.createElement("script");

            gscript.setAttribute("type", "text/javascript");

            gscript.innerHTML =
            `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
            }
            `;

            document.getElementsByTagName("body").item(0).appendChild(gscript);

            var script = document.createElement("script");

            script.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
            script.setAttribute("type", "text/javascript");

            document.getElementsByTagName("body").item(0).appendChild(script);

        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template: '<div id="google_translate_element"></div>'
})