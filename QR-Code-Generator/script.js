const input = document.querySelector('input');
const button = document.querySelector('button');
const qrImg = document.querySelector('.qr-img img');
const qrCont = document.querySelector('.qr-img');

function generateQR(){
    let inputValue = input.value;

    if(inputValue == ""){
        qrCont.classList.add('none');
        alert('No input was given...!');
        return
    }else{
        button.innerText = "Generating QR Code...";
        setTimeout(() =>{
            qrImg.setAttribute("src", `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`)
            qrCont.classList.remove('none');
            button.innerText = "Generate QR";
        }, 1000)
    };
    input.value = "";
};

input.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        generateQR();
    }else{
        return;
    };
});