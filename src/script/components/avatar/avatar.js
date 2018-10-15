Vue.component('avatar', {
    props: {
        id: {
            type: String,
            required: true
        },
        classname: {
            type: String,
            required: false
        },
        firstname: {
            type: String,
            required: true
        },
        secondname: {
            type: String,
            required: false
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        textsize: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: true
        },
        bgcolor: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        overcolor: {
            type: String,
            required: true
        },
        borderradius: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            isHover: false
        };
    },
    computed: {
        main: function () {
            return {
                position: "absolute",
                width: this.size + "px",
                height: "auto",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center"
            };
        },
        container: function () {
            return {
                position: "relative",
                width: this.size + "px",
                height: this.size + "px",
                fontSize: this.textsize + "px",
                color: this.color,
                backgroundColor: this.bgcolor,
                borderRadius: this.borderradius + "%"
            };
        },
        overlay: function () {
            return {
                position: "absolute",
                top: "0%",
                bottom: "0%",
                left: "0%",
                right: "0%",
                height: this.size + "px",
                width: this.size + "px",
                opacity: this.isHover ? '1' : '0',
                transition: "all 0.3s ease",
                backgroundColor: this.overcolor,
                borderRadius: this.borderradius + "%"
            };
        },
        icon: function () {
            return {
                color: "white",
                fontSize: (this.size / 4) + "px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center"
            };
        }
    },
    methods: {
        insertExternalSource: function () {

            var link = document.createElement("link");

            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
            link.setAttribute("crossorigin", "anonymous");
            link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");
            document.getElementsByTagName("head").item(0).appendChild(link);

            var style = document.createElement('style');
            style.type = 'text/css';

            let styling =
                `                
            .fa-user:hover {
              color: #eee;
            }
            
            `

            style.innerHTML = styling;
            document.getElementsByTagName('head')[0].appendChild(style);

        },
        isVisible(status) {
            this.isHover = status;
        }
    },
    mounted: function () {
        this.insertExternalSource();
    },
    template:
    `
    <div :id="id" :class="[classname, 'container']" :style="container" @mouseover="isVisible(true)" @mouseleave="isVisible(false)">
      <div class="main" :style="main">{{this.firstname.charAt(0).toUpperCase() + this.lastname.charAt(0).toUpperCase()}}</div>
      <div class="overlay" :style="overlay">
        <a :href="'mailto:' + email" class="icon" :style="icon">
        	<i class="fa fa-user"></i>
        </a>
      </div>
    </div>
    `
})