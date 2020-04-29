let btnText = document.querySelector('#btnText');
let btnHtml = document.querySelector('#btnHtml');
let content = document.querySelector('.content');

let myString = `<p>lorem ipsum dolor, <strong>sit amet</strong>and so on..</p>
<img src="image/cat.png"/>
`;


btnText.addEventListener('click', () => {
   content.innerText = myString;
});



btnHtml.addEventListener('click', () => {
   content.innerHTML = myString;
});