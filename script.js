let thumb=document.getElementById("thumb")
let imgatual=document.querySelector(".imgatual")
let iconmenu=document.querySelector(".iconmenu")
let listamenu=document.querySelector(".listamenu")
let closee=document.querySelector(".close")
let arrowbaack=document.querySelector(".back")
let arrownext=document.querySelector(".next")


let images=["image-product-1.jpg",`image-product-2.jpg`,`image-product-3.jpg`,`image-product-4.jpg`]


//abre o menu//
iconmenu.addEventListener("click",() =>{
    listamenu.style.display="block"
    closee.style.display="block"
})
//fecha o menu//
closee.addEventListener("click",()=>{
    listamenu.style.display="none"
    closee.style.display="none"
})
//proxima foto//
let i=1
arrownext.addEventListener("click",()=>{
    i++
    if(i>4){
        i=1
    }
    imgatual.setAttribute('src', "images/image-product-"+[i]+".jpg")

})




























/*


let images=["image-product-1-thumbnail.jpg",`image-product-2-thumbnail.jpg`,`image-product-3-thumbnail.jpg`,`image-product-4-thumbnail.jpg`]
const alts = {
    'image-product-1.jpg' : 'Closeup of a human eye',
    'image-product-2.jpg' : 'Rock that looks like a wave',
    'image-product-3.jpg' : 'Purple and white pansies',
    'image-product-4.jpg' : 'Section of wall from a pharoah\'s tomb',
  }








for (const image of images){
    const newphoto=document.createElement('img')
    console.log(newphoto)
    newphoto.setAttribute('src', `images/${image}`)
    newphoto.setAttribute('alt', alts[image])
    thumb.appendChild(newphoto)
    newphoto.addEventListener("click",e =>{
        imgatual.src=e.target.src
        imgatual.alt=e.target.alt

    })
    
}
*/




