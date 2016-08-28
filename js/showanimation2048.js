/**
 * Created by alice on 2016/8/27.
 */

function resetScore() {
    $('#score').text(0);
}
function changeScore(score) {
    $('#score').text(score);
}
function showNumberWithAnimation(randomX,randomY,randomNumber){
    var numberCell = $("#number-cell-"+randomX+"-"+randomY);
    //添加新的数字
    numberCell.css("background-color",getNumberCellBgColor(board[randomX][randomY]));
    numberCell.css("color",getNumberCellFontColor(board[randomX][randomY]));
    numberCell.css("font-size",getNumberCellFontSize(randomNumber));
    numberCell.text(randomNumber);
    //animate函数第一个参数是css样式，第二个参数是时间
    numberCell.animate({
        width:cellSideLength,
        height:cellSideLength,
        top:getPosTop(randomX,randomY),
        left:getPosLeft(randomX,randomY)
    },200);
}
function showMoveAnimation(fromX,fromY,toX,toY) {
    var numberCell=$('#number-cell-'+fromX+'-'+fromY);
    numberCell.animate({
        top:getPosTop(toX,toY),
        left:getPosLeft(toX,toY)
    },200)
}
