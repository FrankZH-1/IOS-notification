window.onload = function () {
    document.querySelector(".volumeCover").onmousedown = function clickMove(event) {
        var barLeft = 0;
        var controlDot = document.querySelector(".controlDot");
        var volumeMoved = document.querySelector(".volumeBarMoved");
        var event = event || window.event;
        var leftVal = findPosX(controlDot) - controlDot.offsetLeft;

        function findPosX(obj) {
            var positionX = 0;
            if (obj.offsetParent) {
                while (obj.offsetParent) {
                    positionX += obj.offsetLeft;
                    obj = obj.offsetParent;
                }
            }
            else
                positionX = obj.offsetLeft;
            return positionX;
        }

        barLeft = event.clientX - leftVal;
        controlDot.style.marginLeft = barLeft - 7.5 + "px";
        volumeMoved.style.width = barLeft - 7.5 + "px";

        document.onmousemove = function (event) {
            var event = event || window.event;
            barLeft = event.clientX - leftVal;
            if (barLeft > 375)
                barLeft = 375;
            else if (barLeft < 0)
                barLeft = 0;
            controlDot.style.marginLeft = barLeft - 7.5 + "px";
            volumeMoved.style.width = barLeft - 7.5 + "px";
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }

        document.onmouseup = function () {
            document.onmousemove = null;
        };
    };

    document.querySelector(".deleteButton").onclick = function clickDelete() {
        var deleteButton = document.querySelector(".deleteButton");
        var textX = document.querySelector(".textX");
        var textDelete = document.querySelector(".textDelete");

        if (deleteButton.offsetWidth === 24) {
            textDelete.innerHTML = "清除";
            deleteButton.style.width = "40px";
            textDelete.style.animation = "fadeIn 0.5s";
            textDelete.style.opacity = "0.65";
            textX.style.animation = "fadeOut 0.5s";
            textX.style.opacity = "0";
        }
        else if (deleteButton.offsetWidth === 40) {
            textX.innerHTML = "X";
            deleteButton.style.width = "24px";
            textDelete.style.animation = "fadeOut 0.5s";
            textDelete.style.opacity = "0";
            textX.style.animation = "fadeIn 0.5s";
            textX.style.opacity = "0.65";
            clearNotiAll();
        }

        function clearNotiAll() {
            var notification = document.querySelector(".noti-contents");
            var notiBlock = notification.firstElementChild;
            while(notification.hasChildNodes()){
                while(notiBlock.hasChildNodes()){
                    notiBlock.removeChild(notiBlock.firstChild);
                } 
                notification.removeChild(notification.firstChild);
            }
        }
    }
    
    var climbStairs = function(n) {
        var sum = 1;
        function calculate(num){
            for(let i = num;i > 0;i --){
                sum *= i;
            }
        }
        calculate(3);
        console.log(calculate(3));
    };
}
