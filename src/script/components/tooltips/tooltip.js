Vue.component('tooltip', {
    props: {
        defaulttext: String,
        tooltipstext: String,
        position: String
    },
    template:
    `
    <div class="tooltip">
        <div class="tooltip-text">
            {{this.defaulttext}}
        </div>
        <div :class="['tooltip-text-' + position]">
            {{this.tooltipstext}}
        </div>
    </div>
    `
})