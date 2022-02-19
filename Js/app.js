
//----input Nom--------

let nom = document.getElementById('name');
    nom.style.borderColor = "blue";
    
function monNom(){

    if(nom.value == true){
        nom.style.border = "thick solid green";
        
    }else{
        nom.style.borderColor = "thick solid red";
        alert("Vous devez mettre votre nom!")
    };
};

///------------input Email

let mail = document.getElementById('email');
    mail.style.borderColor = "blue";

function monMail(){

    if (mail.value.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i))
    {
        mail.style.border = "thick solid green";

    }else{
        mail.style.border = "thick solid red";
        alert("votre mail n'est pas valide!");
    };  
};


//------Confirmation mot de passe---------

let mdp1 = document.getElementById('mdp1');
let mdp2 = document.getElementById('mdp2');

     mdp1.style.borderColor = "blue";
     mdp2.style.borderColor = "blue";

  function monMdp(){ 
    
    let z = mdp1.value;
        a = mdp2.value; 

    if(z === a ){
        mdp1.style.border = "thick solid green";
        mdp2.style.border = "thick solid green";

    }else{
        mdp1.style.border = "thick solid red";
        mdp2.style.border = "thick solid red";
        alert("Veuillez taper le même mot de passe");
    };

  };


//-----------evenement----

let btnValid = document.getElementById('btn');     
   
function inscription(){

    if(mail.style.borderColor == 'green'&& nom.style.borderColor == 'green' && mdp2.style.borderColor == 'green'){
        
    let titre = document.getElementById('titre');

    titre.style.color = "green";

    titre.innerHTML = `Bravo ${nom.value}! Un mail de confirmation vient de vous être envoyé sur ${mail.value}.`;
    }else{

        alert(`Vous devez remplir tous les champs pour vous inscrire!`);
    }        

};
