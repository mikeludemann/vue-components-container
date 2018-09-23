Vue.component('contact-form', {
    props: {
        salutation: String,
        title: String,
        secondname: String,
        firstname: String,
        lastname: String,
        street: String,
        streetnumber: String,
        postalcode: String,
        place: String,
        country: String,
        telephone: String,
        telefax: String,
        email: String,
        homepage: String
    },
    computed: {
        handleSalutation: function () {

            if (this.salutation != "" || this.salutation != null) {

                return '<span :class="salutation">' + this.salutation + '</span>';

            }

        },
        handleTitle: function () {

            if (this.title != "" || this.title != null) {

                return '<span :class="title">' + this.title + '</span>';

            }

        },
        handleSecondName: function () {

            if (this.secondname != "" || this.secondname != null) {

                return '<span :class="secondName">' + this.secondname + '</span>';

            }

        },
        handleCountry: function () {

            if (this.country != "" || this.country != null) {

                return '<div :class="contact--information--country"><div :class="country">' + this.country + '</div></div>';
            
            }

        },
        handleTelephone: function () {

            if (this.telephone != "" || this.telephone != null) {
                
                return '<div :class="telephone">' + this.telephone + '</div>';
            
            }

        },
        handleTelefax: function () {
            
            if (this.telefax != "" || this.telefax != null) {
            
                return '<div :class="telefax">' + this.telefax + '</div>';
            
            }

        },
        handleEmail: function () {
            
            if (this.email != "" || this.email != null) {
            
                return '<div :class="email"><a href="mailto:"' + this.email + '>' + this.email + '</a></div>';
            
            }

        },
        handleHomepage: function () {
            
            if (this.homepage != "" || this.homepage != null) {
            
                return '<div :class="homepage"><a href="http://"' + this.homepage + '>' + this.homepage + '</a></div>';
            
            }

        }
    },
    template:
    `
        <div class="contact--container">
            <div class="contact--information--person">
                    <span v-html="handleSalutation"></span>
                    <span v-html="handleTitle"></span>
                <span class="fullName">
                    <span class="firstName">{{this.firstname}}</span>
                            <span v-html="handleSecondName"></span>
                    <span class="lastName">{{this.lastname}}</span>
                </span>
            </div>
            <div class="contact--information--street">
                <span class="street">{{this.street}}</span>
                <span class="streetNumber">{{this.streetnumber}}</span>
            </div>
            <div class="contact--information--place">
                <span class="postalcode">{{this.postalcode}}</span>
                <span class="place">{{this.place}}</span>
            </div>
            <div v-html="handleCountry"></div>
            <div class="contact--information--forms">
                <div v-html="handleTelephone"></div>
                <div v-html="handleTelefax"></div>
                <div v-html="handleEmail"></div>
                <div v-html="handleHomepage"></div>
            </div>
        </div>
    `
})