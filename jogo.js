console.log('[LiviaVasc] Flappy Bird');

const sprites = new Image();
sprites.src = 'C:/Users/livia/OneDrive/Documentos/flappyBird/sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const planoDeFundo = {
    spriteX: 390,
    SpriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204, 
    desenha(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height)

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.SpriteY,//Sprite X, Sprite Y
            planoDeFundo.largura, planoDeFundo.altura,// Tamanho do recorte na sprite
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
            );
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.SpriteY,//Sprite X, Sprite Y
            planoDeFundo.largura, planoDeFundo.altura,// Tamanho do recorte na sprite
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
            );
    }
}


const chao = {
    spriteX: 0,
    SpriteY: 611,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112, 
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.SpriteY,//Sprite X, Sprite Y
            chao.largura, chao.altura,// Tamanho do recorte na sprite
            chao.x, chao.y,
            chao.largura, chao.altura,
            );
        
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.SpriteY,//Sprite X, Sprite Y
            chao.largura, chao.altura,// Tamanho do recorte na sprite
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
            );
    }
}

const flappyBird = {
    spriteX: 0,
    SpriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50, 
    gravidade: 0.25,
    velocidade: 0,

    atualiza(){
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade 
        flappyBird.y = flappyBird.y + flappyBird.velocidade
    },

    desenha(){
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.SpriteY,//Sprite X, Sprite Y
            flappyBird.largura, flappyBird.altura,// Tamanho do recorte na sprite
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
            );
    }
}

const mensagemGetRead = {
    spriteX: 134,
    SpriteY: 0,
    largura: 174,
    altura: 152,
    x: (canvas.width / 2) - 174 / 2,
    y: 50, 
    desenha(){
        contexto.drawImage(
            sprites,
            mensagemGetRead.spriteX, mensagemGetRead.SpriteY,//Sprite X, Sprite Y
            mensagemGetRead.largura, mensagemGetRead.altura,// Tamanho do recorte na sprite
            mensagemGetRead.x, mensagemGetRead.y,
            mensagemGetRead.largura, mensagemGetRead.altura,
            );
    
    }
}


//
// TELAS
//

let telaAtiva = {};
function mudaParaTela(novaTela) {
    telaAtiva = novaTela
}

const Telas = {
    INICIO: {
        desenha(){
        planoDeFundo.desenha();
        chao.desenha();
        flappyBird.desenha();
        mensagemGetRead.desenha();
           
        },
        click(){
            mudaParaTela(Telas.JOGO);
        },
        atualiza(){

        }
    }

}

Telas.JOGO = {
    desenha(){
        planoDeFundo.desenha();
        chao.desenha();
        flappyBird.desenha();
    },
    atualiza(){
        flappyBird.atualiza();
    }
}

function loop(){

    telaAtiva.desenha();
    telaAtiva.atualiza();

    requestAnimationFrame(loop);
}

window.addEventListener('click', function(){
    if(telaAtiva.click){
        telaAtiva.click();
    }
})

mudaParaTela(Telas.INICIO);
loop();