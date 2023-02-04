//获取元素部分
        var number = true;
        var div = document.getElementsByTagName('div')[0]
        var video1 = document.getElementById('audio_id')
        var video2 = document.getElementById('audio_id1')
        var btn = document.getElementsByTagName('button')[0]
        //木鱼的点击事件
        div.onclick = function () {
            //改变div的样式，使其可以执行动画
            div.style.cssText = 'animation: run 0.5s linear;'
            //添加一个新的节点来显示功德+1
            var p1 = document.createElement('p')//创建一个p标签
            p1.innerHTML = '功德+1'
            p1.className = 'n4'//这个p标签样式使用classname为n4的
            document.body.appendChild(p1)//为父元素添加一个p标签
            //播放木鱼敲的声音
            video1.play();
            //调用木鱼声音停止的函数，使用定时器使其延时执行，保证音乐播放只敲一下的声音
            setTimeout(pause, 100)
            //清除样式的定时器
            setTimeout(qing, 500)
            //清除添加的p标签
            setTimeout(premove, 800)
 
        }
        function pause() {//写一个函数，使得木鱼敲的声音结束
            video1.pause();
        }
        function qing() {//清除样式使其不可以执行动画
            div.style.cssText = ''
            p1.style.cssText = ''
        }
        function premove(){//清除添加的p标签
            document.body.removeChild(p1.querySelector("p"));
        }
        //为按钮设置点击事件，使其可以开关bgm
        btn.onclick = function () {
            if (number === false) {
                number = true;
                video2.play();
            } else {
                number = false
                video2.pause()
            }
 
        }
