var a = 10
;(function () {
  console.log(a)
  a = 5
  console.log(window.a)
  var a = 20
  console.log(a)
})()
// 分别为 undefined 10 20，原因是作用域问题，在内部声名 var a = 20;相当于
// 先声明 var a;然后再执行赋值操作，这是在ＩＩＦＥ内形成的独立作用域，如果
// 把 var a=20 注释掉，那么 a 只有在外部有声明，显示的就是外部的Ａ变量的值
// 了。结果Ａ会是 10 5 5
// 使用 sort() 对数组[3, 15, 8, 29, 102, 22] 进行排序，输出结果
// 输出：[102, 15, 22, 29, 3, 8]
// 解析：根据 MDN 上对 Array.sort()的解释，默认的排序方法会将数组元素转换
// 为字符串，然后比较字符串中字符的 UTF-16 编码顺序来进行排序。所以'102' 会
// 排在 '15' 前面。
