document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  
  const name = document.querySelector('#flname').value;
  const email = document.querySelector('#email').value;
  const captcha = document.querySelector('#g-recaptcha-response').value;

  fetch('/messages', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({name: name, email: email, captcha: captcha})
  })
  .then((res) => res.json())
  .then((data) => {
    alert(`${data}`)
  })
}