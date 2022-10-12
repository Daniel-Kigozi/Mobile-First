const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const popup = document.querySelector('.button-line');
const popupbody = document.querySelector('.popup-body')
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((navLink) => navLink.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

popup.addEventListener('click', ()=>{
  let div = document.createElement('div');
  div.className='elementpop';
  div.innerHTML = `
  
  <a class="close-button" id="close-btn" type="button" href="#">X</a>
  <div class="popup-img"><img src="media/Snapshoot Portfolio.png"/></div>
  <div class="popup-data">
      <p class="pop-para">Keeping track of hundreds of components</p>
      <ul class="content-inner-pop">
          <li class="pop-btn"> <a class="button-pop" type="button" href="#">Ruby on rails</a></li>
          <li class="pop-btn"> <a class="button-pop" type="button" href="#">Css</a></li>
          <li class="pop-btn"> <a class="button-pop" type="button" href="#">Javascript</a></li>
      </ul>
  </div>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
  <div>
      <a class="button button-line" type="button" href="#">See Live <span><img src="media/github.svg"/></span></a>
      <a class="button-pop button-line " type="button" href="#">See Source<img id="inner-pop" src="media/github.svg"></a> 
  </div>

  `
  popupbody.append(div);
  popupbody.classList.add('showpopup');
})




// popup.addEventListener('click', ()=>{
//   const element = document.createElement('section');
//   element.className ='element'
//   const elementPop = document.createElement('div');
//   elementPop.className = 'elementpop'
//   element.appendChild(elementPop);
//   elementPop.innerHTML = `
//   <a class="close-button" id="close-btn" type="button" href="#">X</a>
//   <div class="popup-data">
//       <p class="pop-para">Keeping track of hundreds of components</p>
//       <ul class="content-inner-pop">
//           <li class="pop-btn"> <a class="button-pop" type="button" href="#">Ruby on rails</a></li>
//           <li class="pop-btn"> <a class="button-pop" type="button" href="#">Css</a></li>
//           <li class="pop-btn"> <a class="button-pop" type="button" href="#">Javascript</a></li>
//       </ul>
//   </div>
//   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
//   <div>
//       <a class="button button-line" type="button" href="#">See Live</a>
//       <a class="button-pop button-line " type="button" href="#">See Source<img id="inner-pop" src="media/github.svg"></a> 
//   </div>
//   `;
//   body.appendChild(element);

//   const closeButton= document.querySelector('#close-btn');
//   closeButton.addEventListener('click', ()=>{
//     body.removeChild(element);
//   })

// })