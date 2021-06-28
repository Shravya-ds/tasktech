function onFormSubmit(){
    var formData=readFormData();
}


function readFormData(){
    var formData={};
    formData["email"]=document.getElementById("email").value;
    formData["password"]=document.getElementById("password").value;
    return formData;
}

var db= openDatabase("intern","1.0","intern",80808)

$(function(){

    $("#login-button").click(function(){
        db.transaction(function(transaction){
            var sql="CREATE TABLE user" +

            "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
            "email varchar(100) NOT NULL ,"+
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



$("#delete").click(function () {
    if(!confirm("Are you sure to delete the table?!","")) return;;
    db.transaction(function(transaction){
        var sql="Delete table items";
        transaction.executeSql(sql,undefined,
            function(){
                alert("table deleted succesfully")
            },function(){
                alert("error occured!")
            })
    })
    // body...
})


// 