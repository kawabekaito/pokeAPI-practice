const max = 493;
const min = 1;
var pokeNumber = Math.floor((Math.random() * ( ( max + 1 ) - min ) )+ min)

async function callApi() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`);
  const poke = await res.json();
  const imageUrl = poke.sprites.other['official-artwork'].front_default;
  const pokeImg = document.createElement('img');
  pokeImg.src = `${imageUrl}`;
  pokeImg.id = "shadowOn";
  document.body.appendChild(pokeImg);
  console.log(poke.id);
}

function tip1(){
  var shadow = document.getElementById("shadowOn") ;
  console.log(shadow);
  if(shadow == null){
  } else {
    shadow.id = "shadow";
  }
}

function tip2(){
  var tip2Text = document.getElementById("tip2Text");
  if(pokeNumber <= 151){
    tip2Text.innerHTML = "カントー地方で見たかも！";
  } else if(pokeNumber <= 251){
    tip2Text.innerHTML = "ジョウト地方で見たかも！";
  } else if(pokeNumber <= 386){
    tip2Text.innerHTML = "ホウエン地方で見たかも！";
  } else if(pokeNumber <= 493){
    tip2Text.innerHTML = "シンオウ地方で見たかも！";
  }
}

function tip3(){
  var tip3Text = document.getElementById("tip2Text");
  tip3Text.innerHTML = `図鑑番号は${pokeNumber}だよ！`;
}

function checkPlace(){
  var pokePlace;
  if(pokeNumber <= 151){
    pokePlace = "rg";
  } else if(pokeNumber <= 251){
    pokePlace = "gs";
  } else if(pokeNumber <= 386){
    pokePlace = "rs";
  } else if(pokeNumber <= 493){
    pokePlace = "dp";
  }
  return pokePlace;
}


function clickBtn(){
  const now = document.getElementById("place").value;
  const pokePlace = checkPlace();
  if(now == pokePlace){
    console.log("正解");
    tip1();
  } else {
    console.log("不正解");
  }
}

window.addEventListener("load",callApi());
