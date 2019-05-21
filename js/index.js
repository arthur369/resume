$(".product").prepend("<img class='coffee' src='https://lh3.googleusercontent.com/w7otGRYjNctyAPSrBYGStMtIUKbpeaYdbShFhDAuBTw9DcUngft0GMe-ZcEm9PkUvBWIr1gqL9NCvXqifoiJSuw5mzw4EMJsrPJ5bdy8Jj6oXzw7vXm8E2C2tC3juisin2vpOdD5e_eElZGFh7lofmlWQLqDcfmGt8o5mP6QhNpnBNrXWTYcCdI6N8XH7hy8SQluIaZmHDpdTZFIgqYuoCq801Ip5JbRU5CKAg3DJhNAPEXZz9jDlGuowEIjIWMw5iYoMqLvLlh_LuSPdSfQ5Xje1U83z74G7w1TV_IF3YA8vhUpqACFD2lRmacwREpUdmM7i3e0xpf2JxOoTpyMcOep0Tip83v_vzhUNtfdb3-FBqh698qIQFhZOSz8eb-U__nL_uXxDRBPKW7y46wr5QdbONFXIFyQqMaO-BmVqm7jQMbJqssqfd5mS9b13vbZVw_gCigl3o7QxNyudoD2TdkBM5FFg5jEW6yrUsUq5X7ruYLW6P_kFfUsBZWupg0XDxA67IKkXEKSfl85G9AEvfwAgNxRwn9rHK6163ZnSWv3j0Z57k32ORcZc_3d6PrMNIzAulT10B_aUBqa-VM_ZHAgoRDPJF_WofBK1fE=s640-no'>")

$(window).mousemove(function(evt){
  // console.log(evt.pageX)
  // console.log($("body").width())
  var bodyWidth=$("body").width();
  var mouthX=evt.pageX;
  if(mouthX > bodyWidth*0.7){
    $(".eyeball").addClass("moveLeft")
                 .removeClass("moveRight")
                
  }
  if(mouthX< bodyWidth*0.7){
     $(".eyeball").addClass("moveRight")
                 .removeClass("moveLeft")
  }
})

var precent=0
var timer=setInterval(function(){
$(".loadingBar").width(precent+"%")
  precent+=1
  if(precent>100){
    clearInterval(timer)
    $(".pageLoading").addClass("complete")
  }

},20)