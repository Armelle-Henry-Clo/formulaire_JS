
 let btnValid = document.getElementById('btn');
 let prenom = document.getElementById('name');
 let mail = document.getElementById('email');;
 let mdp1 = document.getElementById('mdp');
 let mdp2 = document.getElementById('mdp');

// btnValid.addEventListener('click', inscription());

function inscription(){
    if(mdp1.textContent === mdp2.textContent){
        console.log('yes!');
    }else{
        console.log('No');
    }
  };

  function identite(){
    if(prenom.textContent === ''){
        console.log('prénom!');
    }else{
        console.log('No prenom');
    }
  };

  function mailing(){
    if(mail.textContent == ){
        console.log('votre mail!');
    }else{
        console.log('pas de mail');
    }
  };

identite();
mailing();
inscription();


