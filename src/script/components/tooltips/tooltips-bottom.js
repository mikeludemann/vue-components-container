Vue.component('tooltips-bottom', {
    props: {
        defaulttext: String,
        tooltipstext: String
    },
    template:
    `
    <div class="tooltip">
        <div class="tooltip-text">
            {{this.defaulttext}}
        </div>
        <div class="tooltip-text-bottom">
            {{this.tooltipstext}}
        </div>
    </div>
    `
})