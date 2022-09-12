var imgArray = [ 
  'https://mario.wiki.gallery/images/4/4f/MK8DX_Mario_Icon.png',
  'https://mario.wiki.gallery/images/6/69/MK8DX_Luigi_Icon.png',
  'https://mario.wiki.gallery/images/1/1f/MK8DX_Peach_Icon.png',
  'https://mario.wiki.gallery/images/3/38/MK8DX_Yoshi_Icon.png',
  'https://mario.wiki.gallery/images/8/89/MK8DX_Toad_Icon.png',
  'https://mario.wiki.gallery/images/9/9b/MK8DX_DK_Icon.png',
  'https://mario.wiki.gallery/images/3/32/MK8_Daisy_Icon.png',
  'https://mario.wiki.gallery/images/8/89/MK8_Rosalina_Icon.png',
  'https://mario.wiki.gallery/images/2/20/MK8_Isabelle_Icon.png',
  'https://mario.wiki.gallery/images/a/a2/MK8_Tanooki_Mario_Icon.png',
  'https://mario.wiki.gallery/images/e/e8/MK8_Link_Icon.png'
];


var startGame = document.getElementById('startGame');
let game = document.getElementById('game');
game.addEventListener('click', flip);



 function flip(game) {

  game.style.transform = "rotateY(360deg)"
  game.style.transitionDuration = "0.5s"

 }


