
const bottone = document.getElementById('bottone');


bottone.addEventListener('click',
    function () {

        const email = ['guidorossi92@gmail.com', 'marcomarchi@libero.it', 'michela_22@hotmail.com'];

        for (let i=0; i<email.length; i++) {

            const emailPermesse = document.getElementById('email').value;
            console.log(email);
        
        
            if (email[i] == emailPermesse){
                alert('Bentornato ' + email[i] + '!');
            }
        }    

    }

);



