// API--https://superheroapi.com/api/2071918619630152

const search=document.getElementById("search_bar");
const matches_list=document.getElementById("search_list");
const search_btn = document.getElementById("search_btn");
const fav_btn=document.getElementById("fav_btn");
  
//api fetching 
fetch(`https://akabab.github.io/superhero-api/api/all.json`
       
 //api use      
).then(response => {
  return response.json();
}).then((data)=>{
    return heroes.push(...data);
})

.catch((error) => {
  console.log(error);
});

const heroes=[];
let id;

//suggestion while searching
function SearchMatches(text,heroes){

    return heroes.filter(hero=>{
        const rexex = new RegExp(text,"gi");
        return hero.name.match(rexex);
    });
}
//take input in search and  recognize
search.addEventListener("input",()=>{


   const matches = SearchMatches(search.value,heroes);
   
   const html = matches.map(hero=>{
       return`<li class="matches" val="${hero.id}"> ${hero.name}</li>`;
    // display all matching hero   
   }).join("");
   if(search.value.length>0){
    matches_list.style.display="flex";
   matches_list.innerHTML=html;
   


   }else{
       matches_list.innerHTML="";
       matches_list.style.display="none";
       
   }
   
});
matches_list.addEventListener("click",(e)=>{
    console.log("clicked");
    const item = e.target;
    id=item.getAttribute("val");
    matches_list.style.display="none";
   
    const search_item=item.innerHTML;
    
    search.value=`${search_item}`;
    

})

search_btn.addEventListener("click",()=>{
    
    
    console.log(search.value)
    console.log(id,"id");


   
    window.open(`hero.html?id=${id}`,"_blank");
})
//when clicked on add favourites add on list
fav_btn.addEventListener("click",()=>{
    window.open("favlist.html","_blank");
})