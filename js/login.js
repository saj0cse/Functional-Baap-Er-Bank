    

// login button 
    document.getElementById('login-btn').addEventListener('click', function(){

        const emailInput = document.getElementById('user-email').value;
       

        const passwordInput = document.getElementById('user-password').value;
      

        if(emailInput == "admin@gmail.com" && passwordInput == "admin@gmail.com"){
            window.location.href ="bank.html";  
        }
        else{
           alert('Ohhh No!!!! Invaild Email & Password. Tui ki asolei tor baper chele!!!')
        }
    
    })