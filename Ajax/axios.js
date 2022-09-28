var url = 'http://api.giphy.com/v1/gifs/search?q=';
var keyWord = '';
// thay doi api
var api_key = '&api_key=9amNrlAB3hfyJtJByZfmtmLG7S8VGG7s';

var input = document.querySelector('.input');
var button = document.querySelector('.button');
var remove = document.querySelector('.remove');
var gift = document.querySelector('.gift'); 
button.onclick = () => {
    keyWord = input.value;
    // console.log(url+keyWord+api_key)
    axios.get(url+keyWord+api_key)
    .then(response => {
        const {data} = response; 
        // if()
        const firstElement = data.data[0];
        // console.log(typeof firstElement);
        // console.log(firstElement);
        const {images: {original: {url}}} = firstElement;
        // console.log(url);
        let elementImg = document.createElement('img');
        elementImg.src = url;
        elementImg.className = 'itemImg'
        gift.appendChild(elementImg);
    })
    .catch(e => {
        console.log(e);
    })
}

remove.onclick = () => {
    gift.innerHTML = '';
}