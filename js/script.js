/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        var totalScore;
    });
    function a1(q1){
        if(q1 === "health"){
            return 0;
        }
        else if(q1 === "happiness"){
            return 1;
        }
        else if(q1 === "wealth"){
            return 2;
        }
        else{
            $().alert();
        }
    }
    function a2(q2){
        if(q2 === "knowledge"){
            return 0;
        }
        else if(q2 === "strength"){
            return 1;
        }
        else if(q2 === "balance"){
            return 2;
        }
        else{
            
        }
    }
    function a3(q3){
        if(q3 === "badger mole"){
            return 0;
        }
        else if(q3 === "eelhound"){
            return 1;
        }
        else if(q3 === "koalaotter"){
            return 2;
        }
        else if(q3 === "polarbear dog")
        else{
            
        }
    }
    function a4(q4){
        if(q4 === "spring"){
            return 0;
        }
        else if(q4 === "summer"){
            return 1;
        }
        else if(q4 === "fall"){
            return 2;
        }
        else if(q4 === "winter"){
            return 3;
        }
        else{
            
        }
    }
    function a5(q5){
        if(a5 === "rat"){
            return 0;
        }
        else if(a5 === "")
    }
});
