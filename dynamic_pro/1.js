var a="mitcmu";
var b="mtacnu";
var n=6,m=6;//长度有可能不等
// 各种策略都去尝试下,用递归很容易
// 回溯算法
var minDist=Infinity;     //最大值,js无穷大
function lwstBT(i,j,edist){
    // dist 依赖于上一步的编辑距离 0   +1
    //退出条件
    if(i==n || j==m){ //不一定同时到达
        if(i<n) edist +=(n-i); //
        if(j<m) edist +=(m-j);
        if(edist<minDist) minDist=edist;
        return;
    }
    if(a[i]==b[j]){
        lwstBT(i+1,j+1,edist)
    }
    else{
        lwstBT(i+1,j,edist+1);//删除a[i]  或者b[j]前添加一个字符
        lwstBT(i,j+1,edist+1);//删除b[j] 或a[i]前添加一个字符
        lwstBT(i+1,j+1,edist+1);//替换为相同字符
    }
}
lwstBT(o,0,0)