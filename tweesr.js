function gameCicle(time = 1) {
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