Vue.component('popover', {
    props: {
        defaulttext: String,
        popovertext: String,
        position: String
    },
    template:
        `
    <div class="popover">
        <div class="popover-text">
            {{this.defaulttext}}
        </div>
        <div :class="['popover-text-' + position]">
            {{this.popovertext}}
        </div>
    </div>
    `
})