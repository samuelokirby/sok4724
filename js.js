

// (function(){
//     var min = 500, max = 900, pad_right = 5, input = document.getElementById('field');
//
//     input.style.width = min+'px';
//     input.onkeypress = input.onkeydown = input.onkeyup = function(){
//         var input = this;
//         setTimeout(function(){
//             var tmp = document.createElement('div');
//             tmp.style.padding = '0';
//             if(getComputedStyle)
//                 tmp.style.cssText = getComputedStyle(input, null).cssText;
//             if(input.currentStyle)
//                 tmp.style.cssText = input.currentStyle.cssText;
//             tmp.style.width = '';
//             tmp.style.position = 'absolute';
//             tmp.innerHTML = input.value.replace(/&/g, "&amp;")
//                 .replace(/</g, "&lt;")
//                 .replace(/>/g, "&gt;")
//                 .replace(/"/g, "&quot;")
//                 .replace(/'/g, "&#039;")
//                 .replace(/ /g, '&nbsp;');
//             input.parentNode.appendChild(tmp);
//             var width = tmp.clientWidth+pad_right+1;
//             tmp.parentNode.removeChild(tmp);
//             if(min <= width && width <= max)
//                 input.style.width = width+'px';
//         }, );
//     }
// })();



function saveInput(event){
    var input = document.getElementById('field').value;
    $("#chat").slideUp();
    $("#chat").slideDown();
    //alert(input);

    // event.preventDefault();
}




function animateField(newText){
    var chatbotfield = document.getElementById('chat');
    $(document).ready(function(){
        $("#chat").slideUp('slow', function(){
            document.getElementById("chat").innerText = newText;
        });
        $("#chat").slideDown('slow');
    });
}

































