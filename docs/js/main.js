console.log(1);
function Life(x ,y){
  const result= $("<span>■</span>");
  result.addClass("dot");
  result.data("x",x)
  result.data("y",y)
  result.data("current",true);
  result.data("next",true);
  result.css("left",x*1.1+"em");
  result.css("top",y*1.1+"em");
  result.addClass("life");
  
  result.on("click",function(){alert(x+":"+y);});
 // result.addClass("x-5");
  return result;
}
function Death(){
  return $("<span>🟥</span>");
}
const A=$("#A");
const B=$("#B");
const Main=$("#Main");

const Table=[];
for(let y=0;y<16;y++){
  const line=[];
  for(let x=0;x<16;x++){
    const life=Life(x,y)
    //alert(x*16+y);
    Main.append(life)
    line.push(life);
  }
  Table.push(line);
}
// table done

function rand(){
  for(let y=0;y<16;y++)
  for(let x=0;x<16;x++){
    const r=0.5<Math.random();
    Table[x][y].data("current",r);  
  }
  
}

function tick(){

  for(let y=0;y<16;y++)
  for(let x=0;x<16;x++)
  liveCheck(x,y);
    
  updateLives();
  
}
function liveCheck(x,y){
  let count=0;
  if(liveCheckC(x-1,y-1))count++;
  if(liveCheckC(x,y-1))count++;
  if(liveCheckC(x+1,y-1))count++;
  if(liveCheckC(x-1,y))count++;
  if(liveCheckC(x,y))count++;
  if(liveCheckC(x+1,y))count++;
  if(liveCheckC(x-1,y+1))count++;
  if(liveCheckC(x,y+1))count++;
  if(liveCheckC(x+1,y+1))count++;
    
    // 0-2 dead
    if(count < 3 || 4<= count){
      Table[x][y].data("next",false);
    }else{
      Table[x][y].data("next",true);
    }
   
}

function liveCheckC(x,y){
  if(x<0)return false;
  if(16<=x)return false;
  if(y<0)return false;
  if(16<=y)return false;
  return Table[x][y].data("current");
}

function updateLives(){
  for(let y=0;y<16;y++){
    for(let x=0;x<16;x++){
      const e= Table[x][y];
      e.removeClass("dead");
      e.removeClass("life");
      if(e.data("next")){
        e.addClass("life");
      }else{
        e.addClass("dead")
      }
      e.data("current",e.data("next"));
    }
  }
 
  
}
rand()
setInterval(tick,1000);
//alert(50);