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

/********************************************
        Use laravel passport for API
*********************************************/
1-composer require laravel/passport
2-php .\artisan vendor:publish --tag=passport-migrations
3-php artisan migrate
4-php artisan passport:install
5-Though we use API for user login so use HasApiToken trait in user model (App\User)
6-Passport::routes(); in boot method on AuthServiceProvider and use Laravel\Passport\Passport;
7- Goto auth.php in guards section
    'api' => [
        'driver' => 'token',
        'provider' => 'users',
    ],
8-php artisan vendor:publish --tag=passport-components
9- put below these component in app.js
    Vue.component(
        'passport-clients',
        require('./components/passport/Clients.vue').default
    );

    Vue.component(
        'passport-authorized-clients',
        require('./components/passport/AuthorizedClients.vue').default
    );

    Vue.component(
        'passport-personal-access-tokens',
        require('./components/passport/PersonalAccessTokens.vue').default
    );


Use every api controller ($this->middleware('auth:api')) to protect unwanted access
