function onFormSubmit(){
    var formData=readFormData();
}

var db= openDatabase("intern","1.0","intern",80808)
function readFormData(){
    var formData={};
    formData["fullname"]=document.getElementById("fullname").value;
    formData["email"]=document.getElementById("email").value;
    formData["username"]=document.getElementById("usenname").value;
     formData["password"]=document.getElementById("password").value;
    formData["repeatpassword"]=document.getElementById("repeatpassword").value;
    return formData;
}
transaction.executeSql(sql,[],
                function(){
                    alert("Logged in succesfully!!")
                },function(){
                    alert("error occured");
                })

    
     
    


$(function(){

    $("#signup-button").click(function(){
        db.transaction(function(transaction){
            var sql="CREATE TABLE user" +

            "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
            "fullname varchar(300) NOT NULL,"+
             "username varchar(300) NOT NULL,"+
            "email varchar(100) NOT NULL ,"+
            "repeatpassword varchar(100) NOT NULL,"+
            "password varchar(100) NOT NULL)"
            transaction.executeSql(sql,undefined,
                function(){
                    alert("Logged in succesfully!!");
                },function(){
                    alert("error occured")
                })

        })
    })
})























(function ($) {
    "use strict";

   
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })


   
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })

    
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    


})(jQuery);