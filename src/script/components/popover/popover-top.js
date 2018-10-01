Vue.component('popover-top', {
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
        <div class="popover-text-top">
            {{this.popovertext}}
        </div>
    </div>
    `
})