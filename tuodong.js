<script>
 let pop = document.getElementById("pop")
 //定义开关变量,用于控制图片是否跟随鼠标移动
 let canMove = false;
 //在开始拖拽时,就保存鼠标距div左上角的相对位置
 let offsetX,offsetY;
 //当在pop上按下鼠标时
 pop.onmousedown=function(e){
  //可以开始拖动
  canMove=true;
  offsetX=e.offsetX;
  offsetY=e.offsetY;
 }
 //当鼠标在窗口移动时
 window.onmousemove=function(e){
  //只有当pop可以移动时
  if(canMove==true){
  //让pop跟随鼠标移动
  //开始拖拽时，立刻获得鼠标距图片左上角的相对位置
  //求pop的top和left
  let left=e.clientX-offsetX;
  let top=e.clientY-offsetY;
  //设置pop的top和left属性
   pop.style.left=left+"px";
   pop.style.top=top+"px";
  }
 }
 //当在pop上抬起鼠标按键时
 pop.onmouseup=function(){
  //停止拖拽
  canMove=false
 } 
 </script>
