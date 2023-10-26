// function sendMail() {
//     var params = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value
//     };

//     

//     emailjs.send(serviceID, templateID, params)
//         .then((res) => {
//             document.getElementById('name').value = '';
//             document.getElementById('email').value = '';
//             document.getElementById('sub').value = '';
//             document.getElementById('msg').value = '';
//             console.log(res);
//             alert("Message sent successfully");
//         })
//         .catch((err) => console.log(err));
// }

const form = document.getElementById('form-area');
const submitbtn = document.getElementById('form-submit__btn');
const nameInput=document.getElementById('name');
const emailInput= document.getElementById('email');
const messageInput= document.getElementById('message');

const serviceID = 'service_wxhxq2k';
const templateID = 'template_6ozf3vc';
const publicKEY = 'DnBc5bCak8jUdzQ-y';

(function () {
    emailjs.init("DnBc5bCak8jUdzQ-y");
})();


form.addEventListener('submit', e =>{
    e.preventDefault();
    submitbtn.innerText = "wait...";

    const inputFields = {
        name:nameInput.value,
        email:emailInput.value,
        message:messageInput.value
    }

    emailjs.send(serviceID,templateID,inputFields)
    .then(()=>{
        submitbtn.innerText="sent...";
        nameInput.value = '';
        emailInput.value = '';
        
        Swal.fire({
            title: 'Sucess...',
            text: 'Thanks For Messaging,will reach to you shortly',
            icon: 'success',
            confirmButtonText: 'close'
          })
    },(error) =>{
        console.log(error);
        Swal.fire({
            title: 'Error',
            text: 'Something is Wrong,Please Try Again!',
            icon: 'error',
            confirmButtonText: 'close'
          })
    })
});
