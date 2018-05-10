
 # reactNative示例代码 

  
  所有示例代码都是在Android模拟器上调试的,IOS暂时还没有调试
  
  ## 1.Hello
  
  这是第一个reactNative示例代码,相当于hello word
  
  ## 2.BViewDemo
  
  这个示例程序主要涉及flex布局,获取屏幕宽高,Image(设置背景图片)知识点
  
  ## 3.ImageDemo
  
  这个示例程序运行起来后相当于安卓的3列GridView效果,每个item由一个Text和一个Image组成,涉及从app的资源文件中加载的用法,将一组控件加到View
  
  ## 4.TextInputDemo
  
  这个示例程序运行起来后是一个登录界面的效果,这个项目里主要代码在loginView.js里面,在index.android.js文件中引用loginView.js。设计输入框TextInput, 点击后控件透明度变化,点击事件,绝对定位等知识点
  
  ## 5.Smzq
  
  这个示例程序主要涉getInitialState()方法中赋值,点击事件知识点
  
  ## 6.ScrollViewDemo
  
  这个示例程序运行起来后是一个轮播图效果。主要涉及ScrollView,计时器的使用(开启,清除,重新启动),getDefaultProps()和getInitialState()方法中赋值, ScrollView的监听事件(开始拖拽,结束拖拽,每帧滚动完毕),在Text中放了2个样式,给控件加refs(安卓中的id)
  控件的生命周期 https://mp.weixin.qq.com/s?__biz=MzIxNjEzNjUzOQ==&mid=402039662&idx=1&sn=f3ea81d2777d657a1f39351b2893e405&chksm=058fad5a32f8244c5ffdbaacf820a173cadc91faa4e238b84466837861cd11370b017825d1c3&scene=18#rd
  
  ## 7.ListViewDemo
  
  这个示例程序主要使用ListView控件加载数据,显示的效果跟Android中ListView效果一样
  
  ## 8.JggListView
  
  这个示例程序主要使用ListView控件实现一个九宫格效果,通过设置相关属性,使 ListView横向显示每个Item,显示不下时自动换行
  ## 9.CarListView
  
  这个示例程序主要使用ListView控件实现一个吸顶的效果,只是在IOS上可以看出效果，Android暂时还不行。注意:Image控件加载本地图片时，拼接图片地址会报错
  
  ## 10.TabBarDemo

  这个示例程序主要使用TabNavigator控件实现一个页面切换的效果
