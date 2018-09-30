Vue.component('coming-soon', {
    props: {
        id: {
            type: String,
            required: true
        },
        enddate: {
            type: String,
            required: true
        },
        endtime: {
            type: String,
            required: false
        },
        expiredtext: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: true
        },
        backgroundcolor: {
            type: String,
            required: true
        },
        backgroundimage: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true,
            default: "Coming Soon"
        },
        extratext: {
            type: String,
            required: false
        }
    },
    methods: {
        insertExternalSource: function (element, date, time, expiredText) {

            'use strict';

            var setCountdown;

            if (time == null || time == "") {

                setCountdown = new Date(date).getTime();

            } else if ((date != null || date != "") && (time != null || time != "")) {

                setCountdown = new Date(date + "T" + time + "Z").getTime();

            } else {

                console.log("Date and/or time format is wrong!");

            }

            var x = setInterval(function () {

                var now = new Date().getTime();

                var distance = setCountdown - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds = Math.floor((distance % (1000 * 60)) / 1000);

                var daysText,
                    hoursText,
                    minutesText,
                    secondsText;

                if (days == 1) { daysText = " day " } else { daysText = " days " }
                if (hours == 1) { hoursText = " hour " } else { hoursText = " hours " }
                if (minutes == 1) { minutesText = " minute " } else { minutesText = " minutes " }
                if (seconds == 1) { secondsText = " second " } else { secondsText = " seconds " }

                var elementExist = document.getElementById(element);

                if (distance < 0) {

                    clearInterval(x);

                    if (expiredText == "" || expiredText == null) {

                        elementExist.innerHTML = "0" + daysText + "0" + hoursText + "0" + minutesText + "0" + secondsText;

                    } else {

                        elementExist.innerHTML = expiredText;

                    }

                } else {

                    elementExist.innerHTML = days + daysText + hours + hoursText + minutes + minutesText + seconds + secondsText;

                }

            }, 1000);

        }
    },
    mounted: function () {
        this.insertExternalSource(this.id, this.enddate, this.endtime, this.expiredtext);
    },
    template:
    `
    <div class="container" :style="{
        width: '100%',
        height: '100%',
        color: this.color,
        backgroundColor: this.backgroundcolor,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: this.backgroundimage,
        position: 'absolute'
    }">
        <div class="middle" :style="{
            left: '50%',
            top: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        }">
            <div class="headline" :style="{
                paddingBottom: '10px'
            }">
                <h1>
                    {{title}}
                </h1>
            </div>
            <hr class="parting-line" :style="{
                width: '100%', 
                height: '5px', 
                backgroundColor: '#fff',
                margin: 'auto'
            }"/>
            <div class="countdown" :style="{marginTop: '20px'}">
                <div :id="id"></div>
            </div>
            <div class="text-middle" :style="{
                left: '50%',
                bottom: '0',
                paddingTop: '20px',
                position: 'relative',
                transform: 'translateX(-50%)'
            }">
                {{extratext}}
            </div>
        </div>
    </div>
    `
})