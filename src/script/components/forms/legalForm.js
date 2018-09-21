Vue.component('legal-form', {
    props: {
        headline: String,
        register_form: String,
        vat_title: String,
        vat_form: String,
        tax_title: String,
        tax: String,
        law_title: String,
        law_name: String
    },
    template:
        `
    <div className="legalForm--container">
        <div className="legalForm--headline">
            {{this.headline}}
        </div>
        <div className="legalForm--commercial--register">
            <span className="register--title">{{this.register_title}}</span><br />
            <span className="register">{{this.register_form}}</span>
        </div>
        <div className="legalForm--vat--identification--number">
            <span className="vat--title">{{this.vat_title}}</span><br />
            <span className="vat">{{this.vat_form}}</span>
        </div>
        <div className="legalForm--tax">
            <span className="tax--title">{{this.tax_title}}</span><br />
            <span className="tax">{{this.tax}}</span>
        </div>
        <div className="legalForm--law">
            <span className="law--title">{{this.law_title}}</span><br />
            <span className="law">{{this.law_name}}</span>
        </div>
    </div>
        `
})