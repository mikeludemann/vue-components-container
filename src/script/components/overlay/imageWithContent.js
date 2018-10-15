Vue.component('image-content-overlay', {
    props: {
        classname: {
            type: String,
            required: false
        },
        text: {
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
                height: this.size + "px",
                width: this.size + "px",
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
                fontSize: this.textsize + "px",
                color: this.color,
                backgroundColor: this.bgcolor,
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
                height: this.size + "%",
                width: this.size + "%",
                transform: "translate(-50%, -50%)",
                textAlign: "center"
            };
        },
        txt: function () {
            return {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
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
            <img :src="image" :alt="alttext" class="icon" :style="icon" />
        </div>
        <div class="overlay" :style="overlay">
            <div :style="txt">{{text}}</div>
        </div>
    </div>
    `
})