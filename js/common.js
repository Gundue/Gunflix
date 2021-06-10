window.onload = function(e) {
    $(document)
    .on("click","#startPage",function(e){
        $("#startImage").animate({"opacity":0},500,function(e) {
            $("#startPage").animate({"opacity":0},500, function(){
            $("#startPage").css({"display":" none"})
            });
        });
    })
}