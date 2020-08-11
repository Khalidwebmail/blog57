Use moment js to display date
-----------------------------

Install momentJS
in app.js (import moment from 'moment';)
make function like below

    Vue.filter('myDate',function(created){
        return moment(created).format('MMMM Do YYYY');
    });

Make below this function to make 1st char uppercase
---------------------------------------------------

Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
})

Use progress bar
----------------

npm install vue-progressbar
Make function like below
    Vue.use(VueProgressBar, {
        color: 'rgb(143, 255, 199)',
        failedColor: 'red',
        height: '3px'
    })
Use <vue-progress-bar></vue-progress-bar> tag in home.blade.php below <router-view></router-view>
Goto user.vue and in createUser method (this.$Progress.start();) before post request and (this.$Progress.finish();) after post request

Install sweet alert
-------------------

npm install --save sweetalert2

import Swal from 'sweetalert2'
window.swal = Swal;
