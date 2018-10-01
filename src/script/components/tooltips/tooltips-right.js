Vue.component('tooltips-right', {
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
        <div class="tooltip-text-right">
            {{this.tooltipstext}}
        </div>
    </div>
    `
})