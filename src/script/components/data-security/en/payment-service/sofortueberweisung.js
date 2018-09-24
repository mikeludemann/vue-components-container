Vue.component('sofortueberweisung', {
    template:
        `
    <div>
        <h3>Sofortüberweisung</h3>
        <p>Our website accepts payments via Sofortüberweisung. The provider of this service is Sofort GmbH, Theresienhöhe 12, 80339
            Munich, Germany.</p>
        <p>Sofortüberweisung provides us with real-time payment confirmations, allowing us to begin fulfilling our end of our contract
            right away.</p>
        <p>If you opt to pay using Sofortüberweisung, you will be submitting a PIN and a valid TAN to Sofort GmbH so that it can
            access your online banking account. Sofort GmbH will automatically check your account balance and perform the transfer
            to our account using the TAN you supply. It then sends an immediate transaction confirmation. After logging in, your
            income, the overdraft protection, and the availability of other accounts and their balances will be checked.</p>
        <p>In addition to the PIN and TAN, the payment details you provide as well as personal information will be sent to Sofort
            GmbH. This personal information includes your name, address, telephone numbers, email address, IP address, and any
            other data required to process your payment. This data must be transferred to identify you securely and to prevent
            fraud.</p>
        <p>Data is transmitted to Sofort GmbH based on Art. 6 (1) (a) (Consent) and Art. 6 (1) (b) DSGVO (Processing for contract
            purposes). You have the option to revoke your consent at any time with future effect. It does not affect the processing
            of data previously collected.</p>
        <p>Please refer to the payment with Sofortüberweisung links below:
            <a href="https://www.sofort.de/datenschutz.html" target="_blank">https://www.sofort.de/datenschutz.html</a> and
            <a href="https://www.klarna.com/sofort/" target="_blank">https://www.klarna.com/sofort/</a>.</p>
    </div>
    `
})