#  动态规划

负责论坛 圈子 问答 前端开发 优质内容越来越多的时候

搜索的错误纠正背后在发生什么?
faeebook 输入了一个跟facebook相似度比较高的 有能力有责任更正
facebook   专有名词
数据 检索 历史(频繁度)
mysql有个表 放着常用的,名称
怎么实现它呢?
莱文斯坦距离   可以算出来?

mitcmu    i
mtacnu  ?  j穷举
一次编辑 t前面出入一个i
第二次 mit a删除
第三次 n改变成m就好增删改 哪一种更加的适合我们目标 就是最小的莱文斯坦距离

逐步考察 i,j edist
没有捷径 因为有无限的可能
0,0,0  最短的0
1,1,1  依赖于之前的决策 做什么决定更好呢?
2,2 1  不知道如何下手了  可以交给穷举
