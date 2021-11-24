const LEFT_BUTTON = 0;
const RIGHT_BUTTON = 2;

const cases = document.getElementsByClassName('case');

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for(let i = 0; i < cases.length; i++){
    cases[i].addEventListener('mouseup', function(event){
       switch(event.button){
           case LEFT_BUTTON:
               this.innerText = 'X';
               this.classList.add('blue');
               break;
           case RIGHT_BUTTON:
               this.innerText = 'O';
               this.classList.add('green');
               break;
       }
    });
}

/*
xxxxxxx.addEventListener('mouseup', function(xxxxxxxxxx) {
    xxxxxx (event.button) {
    case 0:
    case 1:
    case 2:
    .....
    }
});*/