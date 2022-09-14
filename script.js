function esperar(){
    let escolha=document.querySelector(".escolha")
    let triangulo=document.querySelector(".triangulo")
    let VitoriOuDerrota=document.querySelector(".VitoriOuDerrota")
    let botEscolheu=document.querySelector(".botEscolheu div")
    let voceEscolheu=document.querySelector(".voceEscolheu div")
    let pontuacao=document.querySelector(".ptos")
    let ganhou=document.querySelector(".ganhou")
    let perdeu=document.querySelector(".perdeu")
    let empate=document.querySelector(".empate")
    let novamente=document.querySelector(".novamente")
    let regras=document.querySelector(".regras")
    let botaoRegras=document.querySelector(".botaoRegras")
    let fechar=document.querySelector(".fechar")


    let papel=document.querySelector(".papel")
    let pedra=document.querySelector(".pedra")
    let tesoura=document.querySelector(".tesoura")





    let player=""
    let bot=Math.floor(Math.random()*3)
    let pontos=0
    const imgaa=document.createElement("img")
    const NovaImagem=document.createElement("img")
    
    papel.addEventListener("click",()=>{
        player=0
        imgaa.setAttribute("src","images/icon-paper.svg")
        voceEscolheu.setAttribute("class","papel redondo")
        voceEscolheu.appendChild(imgaa)
        vencedor()
        tela2()


    })
    pedra.addEventListener("click",()=>{
        player=1
        imgaa.setAttribute("src","images/icon-rock.svg")
        voceEscolheu.setAttribute("class","pedra redondo")
        voceEscolheu.appendChild(imgaa)
        vencedor()
        tela2()



    })
    tesoura.addEventListener("click",()=>{
        player=2
        imgaa.setAttribute("src","images/icon-scissors.svg")
        voceEscolheu.setAttribute("class","tesoura redondo")
        voceEscolheu.appendChild(imgaa)
        vencedor()
        tela2()
        
    })
    // BOTÃO PRA JOGAR NOVAMENTE
    novamente.addEventListener("click",()=>{
        console.log("funfando")
        escolha.style.display="flex"
        triangulo.style.display="block"
        VitoriOuDerrota.style.display="none"
        bot=Math.floor(Math.random()*3)
        perdeu.style.display="none"
        ganhou.style.display="none"
        empate.style.display="none"
        NovaImagem.removeAttribute("src")


    })

    //botão regras
    botaoRegras.addEventListener("click",()=>{
        regras.style.display="block"
        
    })
    //fechar as regras
    fechar.addEventListener("click",()=>{
        regras.style.display="none"

    })





    // tirar o triangulo da tela e mostra oq foi escolhido//
    function tela2(){
        if (player>=0){
            escolha.style.display="none"
            triangulo.style.display="none"
            VitoriOuDerrota.style.display="flex"
        }
        escolhaTela2()
    }
    function escolhaTela2(){
        if(bot===0){
            NovaImagem.setAttribute("src","images/icon-paper.svg")
            botEscolheu.setAttribute("class","papel redondo")
            botEscolheu.appendChild(NovaImagem)
        }
        else if(bot===1){
            NovaImagem.setAttribute("src","images/icon-rock.svg")
            botEscolheu.setAttribute("class","pedra redondo")
            botEscolheu.appendChild(NovaImagem)

        }
        else if(bot===2){
            NovaImagem.setAttribute("src","images/icon-scissors.svg")
            botEscolheu.setAttribute("class","tesoura redondo")
            botEscolheu.appendChild(NovaImagem)
        }

    }


    function vencedor(){
        console.log("bot escolheu: "+bot)
        console.log("player escolheu:"+ player)
        if(player===0 && bot===1){
            pontos++
            ganhou.style.display="block"
        }
        else if(player===1 && bot===2){
            pontos++
            ganhou.style.display="block"
        }
        else if(player===2 && bot===0){
            pontos++
            ganhou.style.display="block"
        }
        else if(player===bot){
            empate.style.display="block"
        }
        else{
            console.log("Bot Win")
            perdeu.style.display="block"
        }
        novamente.style.display="block"
        pontuacao.innerHTML=pontos
        
    }


  

}