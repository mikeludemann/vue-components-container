Vue.component('data-security', {
    props: {
        headline: {
            type: String,
            default: 'Privacy Policy'
        }
    },
    template:
    `
    <div id="data--security">
        <h1>{{headline}}</h1>
        <div>
            <slot></slot>
        </div>
    </div>
    `
})