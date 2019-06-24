var accessToken = "d40a2e1786324a019851c794082aaaa1";
var baseUrl = "https://api.api.ai/v1/";
var hasUsedInput = 0;

function scroll(){
    var divx = document.getElementById("chatScroll");
    divx.scrollTop = divx.scrollHeight;
}

$(document).ready(function(){
   document.getElementById("input").addEventListener('click', function (e){
       if(hasUsedInput == 0){
           document.getElementById("whatToKnow").style.visibility = "visible";
           document.getElementById("whatToKnow").style.display = "none";
           $("#whatToKnow").fadeIn(1500);
           hasUsedInput = 1;
       }

   });
});

$(document).ready(function(){
    document.getElementById("rec").addEventListener('click', function(d){
        var e = jQuery.Event("keypress");
        e.which = 13; //choose the one you want
        e.keyCode = 13;
        $("#input").trigger(e);
    });
});


$(document).ready(function() {
    $("#input").keypress(function(event) {
        if (event.which == 13) {
            scroll();
            var meString = "Me: ";
            meString = meString.fontcolor("blue");
            $('.chatBox').append('<span class="userInput">' + meString + "\n" + $('input').val() + '</span><br><br>')
            event.preventDefault();
            let query  = $('input').val()
            $('input').val('')
            send(query);
        }
    });
});

const history = [];
function send(query) {
    var text = query;
    scroll();
    $.ajax({
        type: "POST",
        url: baseUrl + "query?v=2180101",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({ query: text, lang: "en", sessionId: "sam" }),
        success: function(data) {
            var timeout = 0;
            if($.inArray(text, history)){
                timeout = 1000 * ((Math.random() * 2) + 0.5);
            }
            history.push(text);
            setTimeout(setResponse, timeout, data);
        }
    });
}
function setResponse(val) {

    var botString = "Sam-Bot: ";
    botString = botString.fontcolor("red");
    var newString = '<span class="responseData">'+ botString + val.result.fulfillment.speech + '</span><br><br>';
    newString = newString.replace(/\s+/g,' ').trim();
    $(".chatBox").append("\n" + newString + "\n");
    scroll();
}