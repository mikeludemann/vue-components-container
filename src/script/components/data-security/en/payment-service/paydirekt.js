Vue.component('paydirekt', {
    template:
        `
    <div>
        <h3>Paydirekt</h3>
        <p>Our website accepts payments via Paydirekt. The provider of this service is Paydirekt GmbH, Hamburger Allee 26-28, 60486
            Frankfurt am Main, Germany (hereafter referred to as “Paydirekt”).</p>
        <p>When you make payments through Paydirekt, Paydirekt collects various pieces of transaction data and forwards it to the
            bank you have indicated to Paydirekt. In addition to the data required for the payment, Paydirekt will also collect
            such data as your shipping address or the items in your shopping cart.</p>
        <p>Paydirekt then authenticates the transaction by using the authentication method your bank has set up. The payment is
            then transferred from your account to ours. Neither we nor third parties have access to your account information.
            </p>
        <p>For more information, see the terms and conditions and privacy policy of Paydirekt at
            <a href="https://www.paydirekt.de/agb/index.html"
                target="_blank">https://www.paydirekt.de/agb/index.html</a>.</p>
    </div>
    `
})