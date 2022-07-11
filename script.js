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
    petAttention: "img/attention.jpg",
    petHappy: "img/happy.jpg"
  };

  const petImg = document.getElementById('pet');
  const message = document.getElementById("balaofala");

  let pet = {
    fome: 100,
    higiene: 100, 
    sono: 100, 
    diversao: 100, 
    social: 100,
    busy: false
  };
  
  let status = { 
    fome: {
      taxa: 3,
      campo: document.getElementById('fome'),
      botao: document.getElementById('alimentar'),
      tempo: 4000,
      temporizador: null,
      busyTime: 2000
    },
    higiene: {
      taxa: 2,
      campo: document.getElementById('higiene'),
      botao: document.getElementById('banho'),
      tempo: 4000,
      temporizador: null,
      busyTime: 2000
    },
    sono: {
      taxa: 4,
      campo: document.getElementById('sono'),
      botao: document.getElementById('dormir'),
      tempo: 6000,
      temporizador: null,
      busyTime: 2000
    },
    diversao: {
      taxa: 2,
      campo: document.getElementById('diversao'),
      botao: document.getElementById('brincar'),
      tempo: 2000,
      temporizador: null,
      busyTime: 2000
    },
    social: {
      taxa: 3,
      campo: document.getElementById('social'),
      botao: document.getElementById('socializar'),
      tempo: 3000,
      temporizador: null,
      busyTime: 2000
    }
  };

  let verify = {
    tempo: 100,
    temporizador: null
  };

  let busyTemporizador = null;

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
    if(pet[propriedade] < 0 ) 
      pet[propriedade] = 0;
      status[propriedade].campo.innerHTML = pet[propriedade] + '%'; 
      status[propriedade].campo.style.width = pet[propriedade] * 2.5 + 'px'; 
  };

  function updateVerify() {
    if(!pet.busy){
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
      } else { 
          if(petImg.src !== imagesUrls.petHappy)
          petImg.src=imagesUrls.petHappy; 
          document.getElementById("balaofala").textContent="I'm happy ^.^";
      };
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
    if(!pet.busy) {
      pet.fome += 50 > 100 ? pet.fome = 100 : null;
      updateStatus('fome');
      petImg.src=imagesUrls.petEat;
      message.textContent="Hmmmm *-*";
      setBusy(status.fome.busyTime);
    };
  };

  function banho() {
    if(!pet.busy) {
      pet.higiene += 50 > 100 ? pet.higiene = 100 : null;
      updateStatus('higiene');
      petImg.src=imagesUrls.petBath;
      message.textContent="Quack quack";
      setBusy(status.higiene.busyTime);
    };
  };

  function dormir() {
    if(!pet.busy) {
      pet.sono += 50 > 100 ? pet.sono = 100 : null;
      updateStatus('sono');
      petImg.src=imagesUrls.petSleepTime;
      message.textContent="zzZ";
      setBusy(status.sono.busyTime);
    };
  };

  function brincar() {
    if(!pet.busy) {
      pet.diversao += 50 > 100 ? pet.diversao = 100 : null;
      updateStatus('diversao');
      petImg.src=imagesUrls.petPlay;
      message.textContent="Headshot, otário!";
      setBusy(status.diversao.busyTime);
    };
  };

  function socializar() {
    if(!pet.busy) {
      pet.social += 50 > 100 ? pet.social = 100 : null;
      updateStatus('social');
      petImg.src=imagesUrls.petPat;
      message.textContent="Nya";
      setBusy(status.social.busyTime);
    };
  };

  function setBusy(busyTime) { 
    pet.busy = true;
    busyTemporizador = setInterval(function() {
      pet.busy = false,
      clearInterval(busyTemporizador)
    }, busyTime);
  };

  function addEventsToButtons() {
    status.fome.botao.addEventListener('click', alimentar);
    status.higiene.botao.addEventListener('click', banho);
    status.sono.botao.addEventListener('click', dormir);
    status.diversao.botao.addEventListener('click', brincar);
    status.social.botao.addEventListener('click', socializar);
  };
 
})();
