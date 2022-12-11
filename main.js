// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!

const likes = document.querySelector('.like-glyph');
// console.log(likes)
likes.forEach(like => {
  like.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      if(like.innerText === EMPTY_HEART){
        like.innerText = FULL_HEART;
        like.classList.add('activated-heart');
      }else{
        like.innerText = EMPTY_HEART;
        like.classList.remove('activated-heart');
      }
    })
    .catch(error => {
      const modal = document.querySelector('#modal');
      modal.classList.remove('hidden');
      modal.innerText = error;
      setTimeout(function(){
        error.setAttribute('class', 'hidden');
      }, 3000)
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
