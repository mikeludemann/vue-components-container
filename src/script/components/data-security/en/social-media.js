Vue.component('social-media', {
    template:
    `
    <div>
        <h2>Social media</h2>
        <h3>Share content via plugins (Facebook, Google+1, Twitter, etc.)</h3>
        <p>The content on our pages can be shared on other social networks like Facebook, Twitter, or Google+. This page uses the
            <a href="https://www.e-recht24.de/erecht24-safe-sharing.html#datenschutz" target="_blank">eRecht24 Safe Sharing Tool</a>. This tool establishes direct contact between the networks and users only after users
            click on one of these buttons.</p>
        <p>This tool does not automatically transfer user data to the operators of these platforms. If users are logged into one
            or more of the social networks, the Like, +1, and Share buttons for Facebook, Google+1, Twitter, etc. will display
            an information window in which the user can edit the text before it is sent.</p>
        <p>Our users can share the content of this page on social networks without their providers creating profiles of users' surfing
            behavior.</p>
        <h3>Facebook plugins (Like & Share buttons)</h3>
        <p>Our website includes plugins for the social network Facebook, Facebook Inc., 1 Hacker Way, Menlo Park, California 94025,
            USA. The Facebook plugins can be recognized by the Facebook logo or the Like button on our site. For an overview
            of Facebook plugins, see
            <a href="https://developers.facebook.com/docs/plugins/" target="_blank">https://developers.facebook.com/docs/plugins/</a>.</p>
        <p>When you visit our site, a direct connection between your browser and the Facebook server is established via the plugin.
            This enables Facebook to receive information that you have visited our site from your IP address. If you click on
            the Facebook "Like button" while you are logged into your Facebook account, you can link the content of our site
            to your Facebook profile. This allows Facebook to associate visits to our site with your user account. Please note
            that, as the operator of this site, we have no knowledge of the content of the data transmitted to Facebook or of
            how Facebook uses these data. For more information, please see Facebook's privacy policy at
            <a href="https://de-de.facebook.com/policy.php"
                target="_blank">https://de-de.facebook.com/policy.php</a>.</p>
        <p>If you do not want Facebook to associate your visit to our site with your Facebook account, please log out of your Facebook
            account.</p>
        <h3>Twitter plugin</h3>
        <p>Functions of the Twitter service have been integrated into our website and app. These features are offered by Twitter
            Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. When you use Twitter and the “Retweet” function,
            the websites you visit are connected to your Twitter account and made known to other users. In doing so, data will
            also be transferred to Twitter. We would like to point out that, as the provider of these pages, we have no knowledge
            of the content of the data transmitted or how it will be used by Twitter. For more information on Twitter's privacy
            policy, please go to
            <a href="https://twitter.com/privacy" target="_blank">https://twitter.com/privacy</a>.</p>
        <p>Your privacy preferences with Twitter can be modified in your account settings at
            <a href="https://twitter.com/account/settings"
                target="_blank">https://twitter.com/account/settings</a>.</p>
        <slot></slot>
    </div>
    `
})