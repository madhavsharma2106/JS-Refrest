// This was the issue
// const button = document.querySelector('.same-class-name');

// button.addEventListener('click', ()=>{
//     console.log("Button Clicked");
// })

document.body.addEventListener('click', buttonClicked);

function buttonClicked(e) {
    console.log(e.target.className);
}


