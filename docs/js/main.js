console.log(1);
function Life(){
  return $("<span>🟩</span>");
}
const A=$("#A");
const B=$("#B");
//体力初期化
for(let i=0;i<6;i++){
  $("#A").append(Life());
  $("#B").append(Life());
}

function tick(){
  if(A.children().length < 12) A.append(Life());
  if(B.children().length < 12) B.append(Life());
}

setInterval(tick,1000);
$("#main").on("click",function(){alert(66);});
//alert(50);