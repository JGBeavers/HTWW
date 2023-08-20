const searchForm = document.querySelector('#search-form');
const textField = document.querySelector('#search');
const gifArea = document.querySelector('#results');
const remove = document.querySelector('#remove');

searchForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  let userInput = textField.value;
  textField.value = '';
  const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: { q: userInput, api_key: 'xJEcvRBdQzS4mb6RWTBtMiTjM8irpVEz' },
  });
  console.log(res.data);
  console.log(res.data.data);
  newGif(res.data);
});

function newGif(res) {
  let numResults = res.data.length;
  let randomResult = Math.floor(Math.random() * numResults);
  let newImg = document.createElement('img');
  newImg.src = res.data[randomResult].images.original.url;
  gifArea.append(newImg);
}

remove.addEventListener('click', function () {
  gifArea.innerText = '';
});
