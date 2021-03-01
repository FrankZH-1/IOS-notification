window.onload = function () {
    var barLeft = 0;
    var controlDot = document.querySelector(".controlDot");
    var volumeMoved = document.querySelector(".volumeBarMoved");
    var volumeCover = document.querySelector(".volumeCover");
    var volumeBarMoved = document.querySelector(".volumeBarMoved");
    var volumeBarBackgroune = document.querySelector(".volumeBarBackground");

    function findPosX(obj){
        var positionX = 0;
        if(obj.offsetParent){
            while(obj.offsetParent){
                positionX += obj.offsetLeft;
                obj = obj.offsetParent;
            }
        }
        else{
            positionX = obj.offsetLeft;
        }
        return positionX;
    }
    
    function clickMove (event){
        var event = event || window.event;
        var leftVal = findPosX(controlDot) - controlDot.offsetLeft;
        barLeft = event.clientX - leftVal;
        controlDot.style.marginLeft = barLeft - 7.5 + "px";
        volumeMoved.style.width = barLeft - 7.5 + "px";
        document.onmousemove = function(event){
            var event = event || window.event;
            barLeft = event.clientX - leftVal;
            if(barLeft>375)
                barLeft = 375;
            else if(barLeft<0)
                barLeft = 0;
            controlDot.style.marginLeft = barLeft - 7.5 + "px";
            volumeMoved.style.width = barLeft - 7.5 + "px";
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        };
    };

    volumeCover.onmousedown = volumeBarMoved.onmousedown = volumeBarBackgroune.onmousedown = controlDot.onmousedown = clickMove;
    
}