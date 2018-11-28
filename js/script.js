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
        console.log(a4(q4Result));
        var totalScore = a1(0) + a2(1) + a3("turtleduck") + a4(q4Result);// + a5(q5Result);
        console.log("here", totalScore);
        if(totalScore <= 3){
            $("#finalAnswer").text("you should be an airbender");
        }
        else if(totalScore <= 6 && totalScore > 3){
            $("#finalAnswer").text("you should be an earthbender");
        }
        else if(totalScore <= 9 && totalScore > 6){
            $("#finalAnswer").text("you should be a waterbender");
        }
        else if(totalScore <= 12 && totalScore > 9){
            $("#finalAnswer").text("you should be a firebender");
        }
        else if(totalScore >= 15){
            $("#finalAnswer").text("maybe you're not cut off to be a bender at all");
        }
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
        else if(q1 === "fufillment"){
            return 3;
        }
        else{
            //window.alert("please enter a valid answer");
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
        else if(q2 === "emotion"){
            return 3;
        }
        else{
            //$(q2).alert("please enter a valid answer");
        }
    }
    function a3(q3){
        if(q3 === "badger mole"){
            return 0;
        }
        else if(q3 === "eelhound"){
            return 1;
        }
        else if(q3 === "turtleduck"){
            return 2;
        }
        else if(q3 === "polarbear dog"){
            return 3;
        }
        else{
           // $(q3).alert("please enter a valid answer");
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
           // $(q4).alert("please enter a valid answer");
        }
    }
    function a5(q5){
        if(a5 === "rat"){
            return 0;
        }
        else if(a5 === "ox"){
            return 0;
        }
        else if(a5 === "tiger"){
            return 0;
        }
        else if(a5 === "rabbit"){
            return 1;
        }
        else if(a5 === "dragon"){
            return 1;
        }
        else if(a5 === "snake"){
            return 1;
        }
        else if(a5 === "horse"){
            return 2;
        }
        else if(a5 === "ram"){
            return 2;
        }
        else if(a5 === "monkey"){
            return 2;
        }
        else if(a5 === "rooster"){
            return 3;
        }
        else if(a5 === "dog"){
            return 3;
        }
        else if(a5 === "pig"){
            return 3;
        }
        else{
           // $(q5).alert("please enter a valid answer");
        }
    }
    
});
