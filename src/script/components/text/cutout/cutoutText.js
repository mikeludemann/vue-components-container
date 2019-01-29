Vue.component('cutout-text', {
    props: {
        text: String,
        bgcolor: String,
        color: String,
        mode: String,
        size: String
    },
    computed: {
        cutout: function () {
            return {
                backgroundColor: this.bgcolor,
                color: this.color,
                fontSize: this.size + "px",
                margin: "0 auto",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                mixBlendMode: this.mode
            };
        }
    },
    template:
    `
    <div class="cutout-text" :style="cutout">
        {{this.text}}
    </div>
    `
})