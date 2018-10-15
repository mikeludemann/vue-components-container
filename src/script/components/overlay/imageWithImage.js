Vue.component('image-image-overlay', {
    props: {
        classname: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: true
        },
        borderradius: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: true
        },
        alttext: {
            type: String,
            required: false
        },
        mainimage: {
            type: String,
            required: true
        },
        mainalttext: {
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
                position: "relative",
                width: this.size + "px",
                height: "auto",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                borderRadius: this.borderradius + "%"
            };
        },
        container: function () {
            return {
                position: "relative",
                width: this.size + "px",
                height: this.size + "px",
                fontSize: this.textsize + "px",
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
                borderRadius: this.borderradius + "%"
            };
        },
        icon: function () {
            return {
                position: "absolute",
                top: "50%",
                left: "50%",
                height: this.size + "%",
                width: this.size + "%",
                transform: "translate(-50%, -50%)",
                textAlign: "center"
            };
        },
        mainicon: function () {
            return {
                position: "relative",
                top: "50%",
                left: "50%",
                height: this.size + "%",
                width: this.size + "%",
                transform: "translate(-50%, 0%)",
                textAlign: "center"
            };
        }
    },
    methods: {
        isVisible(status) {
            this.isHover = status;
        }
    },
    template:
    `
    <div class="[classname, 'container']" :style="container" @mouseover="isVisible(true)" @mouseleave="isVisible(false)">
        <div class="main" :style="main">
            <img :src="mainimage" :alt="mainalttext" class="icon-main" :style="mainicon" />
        </div>
        <div class="overlay" :style="overlay">
            <img :src="image" :alt="alttext" class="icon" :style="icon" />
        </div>
    </div>
    `
})