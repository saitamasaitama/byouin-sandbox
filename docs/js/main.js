console.log(1);
function Life(x ,y){
  const result= $("<span>🟩</span>");
  result.addClass("dot");
  result.data("x",x)
  result.css("left",x+"em");
  result.css("top",y+"em");
 // result.addClass("x-5");
  return result;
}
function Death(){
  return $("<span>🟥</span>");
}
const A=$("#A");
const B=$("#B");
const Main=$("#Main");

const table=[];
for(let y=0;y<16;y++){
  const line=[];
  for(let x=0;x<16;x++){
    const life=Life(x,y)
    //alert(x*16+y);
    Main.append(life)
    line.push(life);
  }
  table.push(line);
}
// table done
for(let i=0;i<6;i++){
//  A.append(Life());
//  B.append(Life());
}

function tick(){
  const life=Life(8,4);
  life.addClass("dot");
 // life.addClass("x-9");
  if(A.children().length < 12) A.append(life);
 // if(B.children().length < 12) B.append(Life());
}

setInterval(tick,1000);
//alert(50);