//warmup

// 1
let span = document.querySelector('.mess-with-me');
span.style.fontSize = '40px';

// 2
let para = document.querySelector('p.mess-with-me');
para.style.background = 'green';

// 3
let img = document.querySelector('#hide-me');
img.style.display = 'none';

// 4
let img2 = document.querySelector('#triceratops');
img2.style.width = '324px';

// event listener challanges

//1
span.addEventListener('click', function(){
    span.style.color = 'orange';
});

//2
img2.addEventListener('click', function(){
    img2.style.border = '2px solid red';
});

//3
let feather = document.querySelector('#feathers');
feather.addEventListener('click', function(){
    feather.style.opacity = '.50';
});

// 4 and first stretch goal
let button = document.querySelector('#toggle');
button.addEventListener('click', function(){
    let row = document.querySelector('#row');
    if(row.style.background === ''){
        row.style.background = 'red';
    }else {
        row.style.background = '';
    }
});

// 5 and second stretch goal
let big = document.querySelector('#biggify');
big.addEventListener('mouseenter', function(){
    big.style.width = '200px';
});
big.addEventListener('mouseout', function(){
    big.style.width = '';
});