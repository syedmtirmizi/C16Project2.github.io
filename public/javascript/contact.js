function signupFormHandler(event) {
  event.preventDefault();
  // console.log( 'click' )
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const email = document.querySelector('#inputEmail4');
  const address = document.querySelector('#inputAddress');
  const address2 = document.querySelector('#inputAddress2');
  const city = document.querySelector('#inputCity');
  const state = document.querySelector('#inputState');
  const zip = document.querySelector('#inputZip');

  const formContainer = document.querySelector('.background-contact');

// console.log( firstName , lastName, email , address , address2 , city , state , zip )
  if( firstName && lastName && email && address && address2 && city && state && zip ) {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        address: address.value,
        address2: address2.value,
        city: city.value,
        state: state.value,
        zip: zip.value         
      }),
    })
    .then((response) => response.json())
    .then(json => console.log( json ))
    .then(formContainer.innerHTML = '<h1> Thank you very much for your submittion! We will contact you shortly</h1>')
    .then(window.scrollTo({ top: 0, behavior: 'smooth' }))
  }
}
document.querySelector('.contactForm').addEventListener('submit', signupFormHandler);


