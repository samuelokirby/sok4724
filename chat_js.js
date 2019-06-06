var accessToken = "d40a2e1786324a019851c794082aaaa1";
var baseUrl = "https://api.api.ai/v1/";
$(document).ready(function() {
    $("#input").keypress(function(event) {
        if (event.which == 13) {
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

function send(query) {
    var text = query;
    $.ajax({
        type: "POST",
        url: baseUrl + "query?v=20180101",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
        success: function(data) {
            setResponse(data);
        }
    });
}
function setResponse(val) {

    var botString = "Sam-Bot: ";
    botString = botString.fontcolor("red");
    var newString = '<span class="responseData">'+ botString + val.result.fulfillment.speech + '</span><br><br>';
    newString = newString.replace(/\s+/g,' ').trim();
    $(".chatBox").append("\n" + newString + "\n");
}