

document.getElementById("signup-btn").addEventListener('click', ()=>{
    const userId = document.getElementById("user-id");
    const userIdValue = userId.value;
    const password = document.getElementById("pass-id");
    const passwordValue = password.value;

    if(userIdValue == 'admin' && passwordValue == 'admin123'){
        alert('sign in successful')
        window.location.assign('home.html')
    }else{
        alert('please try again')
    }
})