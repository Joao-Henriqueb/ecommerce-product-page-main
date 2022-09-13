function esperar(){
    let thumb=document.querySelector("#thumb")
    let imgatual=document.querySelector(".imgatual")
    let iconmenu=document.querySelector(".iconmenu")
    let listamenu=document.querySelector(".listamenu")
    let closee=document.querySelector(".close")
    let paiarow=document.querySelector(".arrow")
    let arrowbaack=document.querySelector(".back")
    let arrownext=document.querySelector(".next")
    let mais=document.querySelector(".mais")
    let menos=document.querySelector(".menos")
    let qtdproduto=document.querySelector(".qtdproduto")
    let comprado=document.querySelector(".comprado")
    let carrinho=document.querySelector(".carrinho")
    let descricaoCompra=document.querySelector(".descricaoCompra")
    let qntidadecompradaHTML=document.querySelector(".qntidadecompradaHTML")
    let totalcompra=document.querySelector(".totalcompra")
    let vazio=document.querySelector(".vazio")
    let add=document.querySelector(".add")
    let deletee=document.querySelector(".delete")
    let carqntidade=document.querySelector(".carqntidade")
    let main=document.querySelector("main")
    let thumbzoom=document.querySelector(".thumbzoom")
    let thumb2=document.querySelector(".thumb2")
    let xzinho=document.querySelector(".xzinho img")
    let volta=document.querySelector(".volta")
    let frente=document.querySelector(".frente")
    let imgatualthumb=document.querySelector(".imgatualthumb")
    let selecionada=document.querySelector(".selecionada")
    

    var largura = window.innerWidth // usei para aplicar javascript
    var altura = window.innerHeight
  



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
    //voltando foto//
    arrowbaack.addEventListener("click",()=>{
        i--
        if(i<1){
            i=4
        }
        imgatual.setAttribute('src', "images/image-product-"+[i]+".jpg")

    })





    //adicionar quantidade/
    let quantidade=0
    mais.addEventListener("click",()=>{
        quantidade++
        qtdproduto.innerHTML=quantidade
        Compras()
    })

    menos.addEventListener("click",()=>{
        quantidade--
        if(quantidade<0){
            quantidade=0

        }
        qtdproduto.innerHTML=quantidade
        Compras()
    })




    //clicando no carrinho mostra quantos foram comprados//

    carrinho.addEventListener("click",()=>{
        if(comprado.style.display==="none"){
            comprado.style.display="block"
            arrowbaack.style.display="none"
            arrownext.style.display="none"  
            


            
        }
        else{
            comprado.style.display="none"
            arrowbaack.style.display="flex"
            arrownext.style.display="flex"





        }
    
        })
        // caso não tenha comprado nada e clicar no carrinho//
    function Compras(){
        if(quantidade > 0){
            qntidadecompradaHTML.innerHTML=quantidade
            totalcompra.innerHTML="$"+125.00*quantidade
            carqntidade.innerHTML=quantidade
        }
        else{
            descricaoCompra.style.display="none"
            vazio.style.display="block"
            carqntidade.innerHTML=quantidade

        }

    }

    //adiciona ao carrinho//
    add.addEventListener("click",()=>{
        if(quantidade>0)
        descricaoCompra.style.display="block"
        vazio.style.display="none"
        carqntidade.style.display="block"

    })
    // deleta tudo
    deletee.addEventListener("click",()=>{
        quantidade=0
        descricaoCompra.style.display="none"
        vazio.style.display="block"
        qtdproduto.innerHTML=quantidade
        carqntidade.style.display="none"   

    })
    

    // thumb para tela grande

            //let photosthumb=["image-product-1-thumbnail.jpg",`image-product-2-thumbnail.jpg`,`image-product-3-thumbnail.jpg`,`image-product-4-thumbnail.jpg`]

    for (const photot of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${photot}`);
    thumb.appendChild(newImage);
    newImage.addEventListener('click', event => {
        let ftThumb=document.querySelectorAll("#thumb img")
        
        ftThumb.forEach(element=>{
            element.classList.remove("selecionada")
        })
        imgatual.src = event.target.src
        event.target.setAttribute("class","selecionada")
    });
    
    }
    
    

    /*tentando fazer imagem vir pra frente backdroopfilter*/
    for (const photot of images) {
        const newPhoto = document.createElement('img');
        newPhoto.setAttribute('src', `images/${photot}`);
        thumb2.appendChild(newPhoto);
      
    }
    /*abre o novo thumb ao clicar*/
    imgatual.addEventListener("click",()=>{
        if(largura>400){
            thumbzoom.style.display="block"
            main.style.filter="blur(2px)"
        }
        
      
    })
    xzinho.addEventListener("click",()=>{
        thumbzoom.style.display="none"
        main.style.filter="blur(0px)"
    })
    //mudando foto na nova thumb//
    let i2=1
    frente.addEventListener("click",()=>{
        i2++
        if(i2>4){
            i2=1
        }
        imgatualthumb.setAttribute('src', "images/image-product-"+[i2]+".jpg")

    })
    volta.addEventListener("click",()=>{
        i2--
        if(i2<1){
            i2=4
        }
        imgatualthumb.setAttribute('src', "images/image-product-"+[i2]+".jpg")

    })
    
    



}