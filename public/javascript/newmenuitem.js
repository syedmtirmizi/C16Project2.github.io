async function newMenuFormHandler(event) {
  event.preventDefault();

  const description = document.querySelector('input[name="menu-description"]').value;
  const ingredients = document.querySelector('input[name="menu-ingredients"]').value;
  const price = document.querySelector('input[name="menu-price"]').value;
  const location = document.querySelector('input[name="menu-location"]').value;

  const response = await fetch(`/api/menu`, {
    method: 'POST',
    body: JSON.stringify({
      description,
      ingredients,
      price,
      location
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

document.querySelector('.add-new-menu').addEventListener('submit', newMenuFormHandler);