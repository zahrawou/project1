const showHiddenPass = (loginPass,loginEye)=>{
    const input = document.createElement(loginPass );
    iconEye = document.getElementById(loginEye);

    iconEye.addEventListener( 'click',() => {
        //change password to text
        if(input.type == 'password'){
            input.type = 'text';
            iconEye.classList.remove('ri-eye-off-line');
            iconEye.classList.add('ri-eye-line');
        }else{
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    })
}
showHiddenPass('Upassword','bx bxs-lock-alt')