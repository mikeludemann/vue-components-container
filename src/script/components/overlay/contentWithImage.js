Vue.component('content-image-overlay', {
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
        overcolor: {
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
            required: true
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
                height: "100%",
                width: "100%",
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
    <div :class="[classname, 'container']" :style="container" @mouseover="isVisible(true)" @mouseleave="isVisible(false)">
      <div class="main" :style="main">
      	{{text}}
      </div>
      <div class="overlay" :style="overlay">
      	<img :src="image" :alt="alttext" class="icon" :style="icon" />
      </div>
    </div>
    `
})