Vue.component('popover-left', {
    props: {
        defaulttext: String,
        popovertext: String
    },
    template:
    `
    <div class="popover">
        <div class="popover-text">
            {{this.defaulttext}}
        </div>
        <div class="popover-text-left">
            {{this.popovertext}}
        </div>
    </div>
    `
})