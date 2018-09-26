Vue.component('data-protection-officer', {
    props: {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        street: {
            type: String
        },
        streetnumber: {
            type: String
        },
        postalcode: {
            type: String
        },
        city: {
            type: String
        },
        telephone: {
            type: String
        },
        email: {
            type: String
        }
    },
    template:
    `
    <div>
        <h2>Data protection officer</h2>
        <h3>Statutory data protection officer</h3>
        <p>We have appointed a data protection officer for our company.</p>
        <p>{{firstname}} {{lastname}}
        <br /> {{street}} {{streetnumber}}
        <br /> {{postalcode}} {{city}}</p>
        <p>Telephone: {{telephone}}
        <br /> Email: {{email}}</p>
    </div>
    `
})