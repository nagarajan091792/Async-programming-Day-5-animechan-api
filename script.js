async function foo () {
  try{
  let res =  await fetch("https://animechan.vercel.app/api/random")
  var res1=  await res.json()
  
  
  console.log(res1)
      var div = document.createElement("div");
      div.innerHTML=`
      <div class="card card_center text-white  mb-3">
<div  class="card-header bg-danger"><h4>Animechan</h4></div>
<div class="card-body bg-info">
<h6>Anime</h6>
<p class="card-text">${res1.anime}</p>
<h6>Character</h6>
<p class="card-text">${res1.character}</p>
<h6>Quote</h6>
  <p class="card-text">${res1.quote}</p>
</div>
</div>
      `
      document.body.append(div);
  }

catch(error){
  console.log(error)
 
}
}
foo()