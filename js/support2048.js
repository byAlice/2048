/**
 * Created by alice on 2016/8/27.
 */
documentWidth=window.screen.availWidth;
documentHeight=window.screen.availHeight;
gridContainerWidth=0.80*documentWidth;
cellSideLength=0.15*documentWidth;
cellSpace=0.04*documentWidth;

function getPosTop(i,j) {
    return cellSpace+i*(cellSpace+cellSideLength);
}
function getPosLeft(i,j) {
    return cellSpace+j*(cellSpace+cellSideLength);
}
function getNumberCellBgColor(number) {
    switch(number){
        case 2:return "#eee4da"; break;
        case 4:return "#ede0c8"; break;
        case 8:return "#f2b179"; break;
        case 16:return "#f59563"; break;
        case 32:return "#f67c5f"; break;
        case 64:return "#ec6544"; break;
        case 128:return "#e44d29"; break;
        case 256:return "#edcf72"; break;
        case 512:return "#c8a145"; break;
        case 1024:return "#a8832b"; break;
        case 2048:return "#86aa9c"; break;
        case 4096:return "#a6c"; break;
        case 8192:return "#791e6f"; break;
    }
    return 'black';
}
function getNumberCellFontSize(number) {
    if(number<=64){
        return 0.6*cellSideLength+'px';
    }
    else if(number<=512){
        return 0.5*cellSideLength+'px';
    }
    else if(number<=8192){
        return 0.4*cellSideLength+'px';
    }
    else{
        return 0.3*cellSideLength+'px';
    }
    /*return 'white';*/
}
function getNumberCellFontColor(number) {
    if(number<=4){
        return "#776e65"
    }
    return 'white'
}
function noSpace(board) {
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]==0){
                return false;   //若能找到board[i][j]==0,则说明还有空间

                 }
        }
    }
    return true;    //否则没空间
}
function canMoveUp() {
    for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(board[i][j]!=0){
                if(board[i-1][j]==0||board[i-1][j]==board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}
function noMove(board) {
    if(canMoveLeft()||canMoveRight()||canMoveUp()||canMoveDown()){
        return false;   //说明可以移动
    }
    return true;    //否则不能移动
}
/*
//
检测是电脑端还是手机端访问
function isPC() {
    var system={
        win:false,
        mac:false,
        xll:false
    };
    //检测平台
    var p=navigator.platform;
    system.win=p.indexOf('Win')==0;
    system.mac=p.indexOf('ac')==0;
    system.x11=(p=="X11")(p.indexOf('Linux'))==0;

    if(system.win||system.mac||system.x11){
        return true;//是电脑
    }
    else{
        return false;//是手机
    }
}
function isMobile() {
    var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
    var u = navigator.userAgent;
    if (null == u) {
        return true;
    }
    var result = regex_match.exec(u);
    if (null == result) {
        return false
    } else {
        return true
    }
}*/
