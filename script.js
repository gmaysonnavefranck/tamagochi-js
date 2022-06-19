(function() {
  'use strict';

  let pet = {
    fome: 100,
    higiene: 100, 
    sono: 100, 
    diversao: 100, 
    social: 100
  }; 

  const imagesUrls = {
    petRainbow: "img/rainbow.jpg",
    petAaa: "img/aaa.jpg",
    petWtf: "img/wtf.jpg",
    petPls: "img/pls.jpg",
    petFuckYou: "img/fuckyou.jpg",
    petDeath: "img/death.jpg",
    petEat: "img/eat.jpg",
    petGiveMeFood: "img/givemefood.jpg",
    petBath: "img/bath.jpg",
    petTrash: "img/trash.jpg",
    petSleepTime: "img/sleeptime.jpg",
    petTired: "img/tired.jpg",
    petPlay: "img/play.jpg",
    petBoring: "img/boring.jpg",
    petPat: "img/pat.jpg",
    petAttention: "img/attention.jpg"
  };

  let temporizador

  const petImg = document.getElementById('pet');
  const campoFome = document.getElementById('fome');
  const campoHigiene = document.getElementById('higiene');
  const campoSono = document.getElementById('sono');
  const campoDiversao = document.getElementById('diversao');
  const campoSocial = document.getElementById('social');
  
  const botaoAlimentar = document.getElementById('alimentar');
  const botaoBanho = document.getElementById('banho');
  const botaoDormir = document.getElementById('dormir');
  const botaoBrincar = document.getElementById('brincar');
  const botaoSocializar = document.getElementById('socializar');

  start()

  function loop(time = 2) {
    const total = pet.fome + pet.higiene + pet.sono + pet.diversao + pet.social; 

    if(pet.fome <= 0 || pet.higiene <= 0 || pet.sono <= 0 || pet.diversao <= 0 || pet.social <= 0) {
      petImg.src=imagesUrls.petDeath;
      clearInterval(temporizador);
      window.alert('Oh não! Seu pet virou um fantasminha. Atualize a página e tente novamente.');
    } else if(total > 400) {
      petImg.src=imagesUrls.petRainbow;
    } else if(total > 300) {
      petImg.src=imagesUrls.petAaa; 
    } else if(total > 200) {
      petImg.src=imagesUrls.petWtf;
    } else if(total > 100) {
      petImg.src=imagesUrls.petPls;
    } else if(total > 50) {
      petImg.src=imagesUrls.petFuckYou;
    };

    if(pet.fome > 0 & pet.higiene > 0 & pet.sono > 0 & pet.diversao > 0 & pet.social > 0) {
    pet.fome = pet.fome - parseInt(time);
    pet.higiene = pet.higiene - parseInt(time);
    pet.sono = pet.sono - parseInt(time);
    pet.diversao = pet.diversao - parseInt(time);
    pet.social = pet.social - parseInt(time);
    }; 

    campoFome.innerHTML = pet.fome + '%';
    campoHigiene.innerHTML = pet.higiene + '%';
    campoSono.innerHTML = pet.sono + '%';
    campoDiversao.innerHTML = pet.diversao + '%';
    campoSocial.innerHTML = pet.social + '%';

  };

  function start() {
    temporizador = setInterval(loop, 1000);
    addEventsToButtons() 
  }; 

  function alimentar() {
    pet.fome = 100;
    campoFome.innerHTML = pet.fome + '%'; 
    campoFome.style.width = pet.fome + 'px';
    petImg.src=imagesUrls.petEat;
  };

  function banho() {
    pet.higiene = 100;
    campoHigiene.innerHTML = pet.higiene + '%'; 
    campoHigiene.style.width = pet.higiene + 'px';
    petImg.src=imagesUrls.petBath;
  };

  function dormir() {
    pet.sono = 100;
    campoSono.innerHTML = pet.sono + '%'; 
    campoSono.style.width = pet.sono + 'px';
    petImg.src=imagesUrls.petSleepTime;
  };

  function brincar() {
    pet.diversao = 100;
    campoDiversao.innerHTML = pet.diversao + '%'; 
    campoDiversao.style.width = pet.diversao + 'px';
    petImg.src=imagesUrls.petPlay;
  };

  function socializar() {
    pet.social = 100;
    campoSocial.innerHTML = pet.social + '%'; 
    campoSocial.style.width = pet.social + 'px';
    petImg.src=imagesUrls.petPat;
  };

  function addEventsToButtons() {
    botaoAlimentar.addEventListener('click', alimentar);
    botaoBanho.addEventListener('click', banho);
    botaoDormir.addEventListener('click', dormir);
    botaoBrincar.addEventListener('click', brincar);
    botaoSocializar.addEventListener('click', socializar);
  };

})();
