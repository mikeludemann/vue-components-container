Vue.component('tooltips-top', {
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
        <div class="tooltip-text-top">
            {{this.tooltipstext}}
        </div>
    </div>
    `
})