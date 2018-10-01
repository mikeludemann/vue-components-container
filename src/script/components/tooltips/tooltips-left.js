Vue.component('tooltips-left', {
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
        <div class="tooltip-text-left">
            {{this.tooltipstext}}
        </div>
    </div>
    `
})