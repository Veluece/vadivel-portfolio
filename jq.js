$(document).ready(function(){
   $("#vv").validate({
    rules:{
        Name:{
            required : true,
            minlength :5,
        },
        moblie :{
            required : true,
            minlength :5,
        },
        Emailaddress:{
            required : true
        },
    }
   })
});