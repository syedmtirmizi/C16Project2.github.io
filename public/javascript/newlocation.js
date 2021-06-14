async function newLocationFormHandler(event) {
  event.preventDefault();

  const city = document.querySelector('input[name="res-city"]').value;
  const address = document.querySelector('input[name="res-address"]').value;
  const phone = document.querySelector('input[name="res-phone"]').value;
  const email = document.querySelector('input[name="res-email"]').value;
  const user_id = document.querySelector('input[name="res-userid"]').value;

  const response = await fetch(`/api/restaurant`, {
    method: 'POST',
    body: JSON.stringify({
      city,
      address,
      phone,
      email,
      user_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-location').addEventListener('submit', newLocationFormHandler);