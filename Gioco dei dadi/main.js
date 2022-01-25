const bottone = document.getElementById('bottone');

bottone.addEventListener('click',
    function () {

        const dadiGiocatore = Math.floor((Math.random() * 6)) + 1;
        console.log(dadiGiocatore)
        
        const dadiComputer = Math.floor((Math.random() * 6)) + 1;
        console.log(dadiComputer);
        

        if(dadiGiocatore>dadiComputer){

            document.getElementById('vincitore').innerHTML = "Vince il Giocatore!";
            document.getElementById('dadi_giocatore').innerHTML = dadiGiocatore;
            document.getElementById('dadi_computer').innerHTML = dadiComputer;

        } else if(dadiComputer>dadiGiocatore){

            document.getElementById('vincitore').innerHTML = "Vince il Computer!";
            document.getElementById('dadi_giocatore').innerHTML = dadiGiocatore;
            document.getElementById('dadi_computer').innerHTML = dadiComputer;

        }else if(dadiComputer==dadiGiocatore){
        
            document.getElementById('vincitore').innerHTML = "Abbiamo un Pareggio!";
            document.getElementById('dadi_giocatore').innerHTML = dadiGiocatore;
            document.getElementById('dadi_computer').innerHTML = dadiComputer;

        }

        let contenitore_vincitore = document.getElementById('contenitore_vincitore');
        contenitore_vincitore.classList.remove('hidden');


    }        

    

);

