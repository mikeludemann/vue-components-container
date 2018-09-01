Vue.component('i-frame', {
    props: {
        class: String,
        src: String,
        width: String,
        height: String,
        srcdoc: String,
        sandbox: String
    },
    template: `
    <iframe
        v-bind:class="class"
        v-bind:src="src"
        v-bind:width="width"
        v-bind:height="height"
        v-bind:srcdoc="srcdoc"
        v-bind:sandbox="sandbox"
    >
    </iframe>
    `
})