Vue.component('analytics-advertising', {
    props: {
        headline: {
            type: String,
            default: 'Analytics and advertising'
        }
    },
    template:
    `
    <div>
        <h2>{{headline}}</h2>
        <div>
            <slot></slot>
        </div>
    </div>
    `
})