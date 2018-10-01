Vue.component('popover-bottom', {
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
        <div class="popover-text-bottom">
            {{this.popovertext}}
        </div>
    </div>
    `
})