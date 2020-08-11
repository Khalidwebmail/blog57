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
