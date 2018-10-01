Vue.component('popover-right', {
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
        <div class="popover-text-right">
            {{this.popovertext}}
        </div>
    </div>
    `
})