$( document ).ready(function() {
    $(function(){
        var menuItem = $('.menu .item');
        
        var hoverOn = function() {
            if(!$(this).hasClass('main')) {
                $(this).addClass('active');
            }
        };
        
        var hoverOff = function() {
            if(!$(this).hasClass('main')) {
                $(this).removeClass('active');
            }
        };
        
        menuItem.hover(hoverOn, hoverOff);
    });
    
    $("#github").mouseup(function () {
        $(".github.modal").modal("show");
    });
    
    $("#vsafe").mouseup(function () {
        $(".vsafe.modal").modal("show");
    });
    
    $("#wsiia").mouseup(function () {
        $(".wsiia.modal").modal("show");
    });
    
    $("#mitml").mouseup(function () {
        $(".mitml.modal").modal("show");
    });
    
    $("#microsoft").mouseup(function () {
        $(".microsoft.modal").modal("show");
    });
});