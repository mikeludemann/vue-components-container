Vue.component('newsletter', {
    template:
        `
    <div>
        <h2>Newsletter</h2>
        <h3>Newsletter data</h3>
        <p>If you would like to receive our newsletter, we require a valid email address as well as information that allows us to
            verify that you are the owner of the specified email address and that you agree to receive this newsletter. No additional
            data is collected or is only collected on a voluntary basis. We only use this data to send the requested information
            and do not pass it on to third parties.</p>
        <p>We will, therefore, process any data you enter onto the contact form only with your consent per Art. 6 (1) (a) DSGVO.
            You can revoke consent to the storage of your data and email address as well as their use for sending the newsletter
            at any time, e.g. through the "unsubscribe" link in the newsletter. The data processed before we receive your request
            may still be legally processed.</p>
        <p>The data provided when registering for the newsletter will be used to distribute the newsletter until you cancel your
            subscription when said data will be deleted. Data we have stored for other purposes (e.g. email addresses for the
            members area) remain unaffected.</p>
        <slot></slot>
    </div>
    `
})