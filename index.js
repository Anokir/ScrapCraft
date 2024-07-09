const urlInput = document.getElementById('myURL');
urlInput.addEventListener('input', () => {
  const url = urlInput.value;
    console.log(url);

  fetch('http://127.0.0.1:3000/scrape', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  })
   .then(response => response.json())
   .then(data => console.log('Data:', data))
   .catch(error => console.error('Error:', error));
});