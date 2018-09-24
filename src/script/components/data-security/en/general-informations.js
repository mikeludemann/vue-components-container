Vue.component('general-informations', {
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
      <h2>General information and mandatory information</h2>
        <h3>Data protection</h3>
        <p>The operators of this website take the protection of your personal data very seriously. We treat your personal data as
            confidential and in accordance with the statutory data protection regulations and this privacy policy.</p>
        <p>If you use this website, various pieces of personal data will be collected. Personal information is any data with which
            you could be personally identified. This privacy policy explains what information we collect and what we use it for.
            It also explains how and for what purpose this happens.</p>
        <p>Please note that data transmitted via the internet (e.g. via email communication) may be subject to security breaches.
            Complete protection of your data from third-party access is not possible.</p>
        <h3>Notice concerning the party responsible for this website</h3>
        <p>The party responsible for processing data on this website is:</p>
        <p>{{firstname}} {{lastname}}
            <br /> {{street}} {{streetnumber}}
            <br /> {{postalcode}} {{city}}</p>
        <p>Telephone: {{telephone}}
            <br /> Email: {{email}}</p>
        <p>The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means
            of processing personal data (names, email addresses, etc.).</p>
        <h3>Revocation of your consent to the processing of your data</h3>
        <p>Many data processing operations are only possible with your express consent. You may revoke your consent at any time
            with future effect. An informal email making this request is sufficient. The data processed before we receive your
            request may still be legally processed.</p>
        <h3>Right to file complaints with regulatory authorities</h3>
        <p>If there has been a breach of data protection legislation, the person affected may file a complaint with the competent
            regulatory authorities. The competent regulatory authority for matters related to data protection legislation is
            the data protection officer of the German state in which our company is headquartered. A list of data protection
            officers and their contact details can be found at the following link:
            <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
        <h3>Right to data portability</h3>
        <p>You have the right to have data which we process based on your consent or in fulfillment of a contract automatically
            delivered to yourself or to a third party in a standard, machine-readable format. If you require the direct transfer
            of data to another responsible party, this will only be done to the extent technically feasible.</p>
        <h3>SSL or TLS encryption</h3>
        <p>This site uses SSL or TLS encryption for security reasons and for the protection of the transmission of confidential
            content, such as the inquiries you send to us as the site operator. You can recognize an encrypted connection in
            your browser's address line when it changes from "http://" to "https://" and the lock icon is displayed in your browser's
            address bar.</p>
        <p>If SSL or TLS encryption is activated, the data you transfer to us cannot be read by third parties.</p>
        <h3>Encrypted payments on this website</h3>
        <p>If you enter into a contract which requires you to send us your payment information (e.g. account number for direct debits),
            we will require this data to process your payment.</p>
        <p>Payment transactions using common means of payment (Visa/MasterCard, direct debit) are only made via encrypted SSL or
            TLS connections. You can recognize an encrypted connection in your browser's address line when it changes from "http://"
            to "https://" and the lock icon in your browser line is visible.</p>
        <p>In the case of encrypted communication, any payment details you submit to us cannot be read by third parties.</p>
        <h3>Information, blocking, deletion</h3>
        <p>As permitted by law, you have the right to be provided at any time with information free of charge about any of your
            personal data that is stored as well as its origin, the recipient and the purpose for which it has been processed.
            You also have the right to have this data corrected, blocked or deleted. You can contact us at any time using the
            address given in our legal notice if you have further questions on the topic of personal data.</p>
        <h3>Opposition to promotional emails</h3>
        <p>We hereby expressly prohibit the use of contact data published in the context of website legal notice requirements with
            regard to sending promotional and informational materials not expressly requested. The website operator reserves
            the right to take specific legal action if unsolicited advertising material, such as email spam, is received.</p>
        </div>
      `
})