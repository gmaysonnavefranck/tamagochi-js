(function() {
  'use strict';
 
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

  const petImg = document.getElementById('pet');

  let pet = {
    fome: 100,
    higiene: 100, 
    sono: 100, 
    diversao: 100, 
    social: 100
  };
  
  let status = { 
    fome: {
      taxa: 3,
      campo: document.getElementById('fome'),
      botao: document.getElementById('alimentar'),
      tempo: 400,
      temporizador: null,
      update: null
    },
    higiene: {
      taxa: 2,
      campo: document.getElementById('higiene'),
      botao: document.getElementById('banho'),
      tempo: 400,
      temporizador: null,
      update: null
    },
    sono: {
      taxa: 4,
      campo: document.getElementById('sono'),
      botao: document.getElementById('dormir'),
      tempo: 600,
      temporizador: null,
      update: null
    },
    diversao: {
      taxa: 2,
      campo: document.getElementById('diversao'),
      botao: document.getElementById('brincar'),
      tempo: 200,
      temporizador: null,
      update: null
    },
    social: {
      taxa: 3,
      campo: document.getElementById('social'),
      botao: document.getElementById('socializar'),
      tempo: 300,
      temporizador: null,
      update: null
    }
  };

  let verify = {
    tempo: 100,
    temporizador: null
  };

  start()

  function start() {
    status.fome.temporizador = setInterval(fomeCiclo, status.fome.tempo);
    status.higiene.temporizador = setInterval(higieneCiclo, status.higiene.tempo);
    status.sono.temporizador = setInterval(sonoCiclo, status.sono.tempo);
    status.diversao.temporizador = setInterval(diversaoCiclo, status.diversao.tempo);
    status.social.temporizador = setInterval(socialCiclo, status.social.tempo);
    verify.temporizador = setInterval(updateVerify, verify.tempo);
    addEventsToButtons();
  }; 

  function updateStatus(propriedade) {
    if(pet[propriedade] < 0)
      pet[propriedade] = 0;
    status[propriedade].campo.innerHTML = pet[propriedade] + '%'; 
    status[propriedade].campo.style.width = pet[propriedade] + 'px'; 
  };

  function updateVerify() {
    if(pet.fome <= 0 && pet.higiene <= 0 && pet.sono <= 0 && pet.diversao <= 0 && pet.social <= 0) {
      document.getElementById("balaofala").textContent="Boo!";
      return petImg.src=imagesUrls.petDeath;
    } else if(pet.fome <= 0) {
      petImg.src=imagesUrls.petGiveMeFood;
      document.getElementById("balaofala").textContent="Me dê comida!";
    } else if(pet.higiene <= 0) {
      petImg.src=imagesUrls.petTrash;
      document.getElementById("balaofala").textContent="Banho?";
    } else if(pet.sono <= 0) {
      petImg.src=imagesUrls.petTired;
      document.getElementById("balaofala").textContent="Estou cansadito";
    } else if(pet.diversao <= 0) {
      petImg.src=imagesUrls.petBoring;
      document.getElementById("balaofala").textContent="Boooring, arg";
    } else if(pet.social <= 0) { 
      petImg.src=imagesUrls.petPls;
      document.getElementById("balaofala").textContent="ME AME!!!";
    };
  };

  function fomeCiclo() {
    pet.fome = pet.fome - status.fome.taxa;
    updateStatus('fome');
  };

  function higieneCiclo() {
    pet.higiene = pet.higiene - status.higiene.taxa;
    updateStatus('higiene');
  };

  function sonoCiclo() {
    pet.sono = pet.sono - status.sono.taxa;
    updateStatus('sono');
  };

  function diversaoCiclo() {
    pet.diversao = pet.diversao - status.diversao.taxa;
    updateStatus('diversao');
  };

  function socialCiclo() {
    pet.social = pet.social - status.social.taxa;
    updateStatus('social');
  };

  function alimentar() {
    pet.fome = 100;
    updateStatus('fome');
    petImg.src=imagesUrls.petEat;
    document.getElementById("balaofala").textContent="Hmmmm *-*";
  };

  function banho() {
    pet.higiene = 100;
    updateStatus('higiene');
    petImg.src=imagesUrls.petBath;
    document.getElementById("balaofala").textContent="Quack quack";
  };

  function dormir() {
    pet.sono = 100;
    updateStatus('sono');
    petImg.src=imagesUrls.petSleepTime;
    document.getElementById("balaofala").textContent="zzZ";
  };

  function brincar() {
    pet.diversao = 100;
    updateStatus('diversao');
    petImg.src=imagesUrls.petPlay;
    document.getElementById("balaofala").textContent="Headshot, otário!";
  };

  function socializar() {
    pet.social = 100;
    updateStatus('social');
    petImg.src=imagesUrls.petPat;
    document.getElementById("balaofala").textContent="Nya";
  };

  function addEventsToButtons() {
    status.fome.botao.addEventListener('click', alimentar);
    status.higiene.botao.addEventListener('click', banho);
    status.sono.botao.addEventListener('click', dormir);
    status.diversao.botao.addEventListener('click', brincar);
    status.social.botao.addEventListener('click', socializar);
  };
 
})();
