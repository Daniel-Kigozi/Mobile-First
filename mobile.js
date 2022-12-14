
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const popup = document.querySelector('.button-line');
const popupbody = document.querySelector('.popup-body');
const projectWork = document.querySelector('.main-works');
const formMobile = document.querySelector('#mobile-form');
const formDesktop = document.querySelector('#desk-top-form');

const formData = {
  name: '',
  email: '',
  message: ''
};

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});popup-body
document.querySelectorAll('.nav-link').forEach((navLink) => navLink.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

const displayProjectDetails = ({ LiveLink, SourceLink, description, image, technologies, name })=>{
  
    let div = document.createElement('div');
    div.className='elementpop';
    div.innerHTML = `
    <div class=inner-pop-btn>
    <a class="close-button" id="close-btn" type="button" href="">X</a>
    <div class="popup-img"><img id="my-img" src="${image}"/></div>
    </div>
    <div class="popup-data">
        <p class="pop-para">${name}</p>
        <ul class="content-inner-pop">
            <li class="pop-btn"> <a class="button-pop" type="button" href="">${technologies[0]}</a></li>
            <li class="pop-btn"> <a class="button-pop" type="button" href="">${technologies[2]}</a></li>
            <li class="pop-btn"> <a class="button-pop" type="button" href="">${technologies[3]}</a></li>
        </ul>
    </div>
    <p class="pop-desc">${description}</p>
    <div class=main-works-pop>
        <a class="button button-line" type="button" href="${LiveLink}">See Live <span><img src="media/livepop.svg"/></span></a>
        <a class="button button-line" type="button" href="${SourceLink}">See Source <span><img id="img-pop" src="media/github.svg"/></span></a>  
    </div>
  
    `
    return div;
  
}

const displayProjects = ({name, technologies, client}, index)=>{
  let li = document.createElement('li');
  li.className ="list-item";
  li.innerHTML = `
          <div class="first-item">
              <div class="first-item-inner">
                  <h3 class="title-sub"><span>${name}</span><span>${client}</span></h3>
                  <ul class="content-inner">
                      <li class="content-inner-li">${technologies[0]}</li>
                      <li class="content-inner-li">${technologies[1]}</li>
                      <li class="content-inner-li">${technologies[2]}</li>
                      <li class="content-inner-li">${technologies[3]}</li>
                  </ul>
                  <a id="${index}" class="button button-line"  type="button" href="">See Project</a>
              </div>
          </diV>
        `;
        return li;
}

const getProjects = async()=>{
  const response = await fetch('./projects.json');
  try {
    const data = await response.json();
    data.forEach((project, index) =>{
      projectWork.append(displayProjects(project, index))
    })
  } catch (error) {
    
  }
  
  
}

window.onload = async ()=>{
  document.querySelectorAll('.button-line').forEach((button)=> button.addEventListener('click', async(e)=> {
    e.preventDefault();
    const response = await fetch('./projects.json');
    const data = await response.json();
    let itemId = e.srcElement.attributes.id.value;
    // console.log(data[itemId], itemId);
    popupbody.append(displayProjectDetails(data[itemId]));
    popupbody.classList.add('showpopup');

    const closeBtn = document.querySelector('#close-btn');
    closeBtn.addEventListener('click', (e)=>{
      e.preventDefault();
    popupbody.classList.remove('showpopup');
    popupbody.innerHTML = "";
  })
    
  }))
  
}

getProjects();

formMobile.addEventListener('submit', (e) =>{
  const email = document.getElementById('email').value;
  e.preventDefault();
  if(email.toLowerCase() === email){
    formMobile.submit();
  } else {
    document.querySelector('#error-mobile').textContent='Email should include only lowercase!';
  }
})

formDesktop.addEventListener('submit', (e) =>{
  const email = document.querySelector('.email-desktop').value;
  e.preventDefault();
  if(email.toLowerCase() === email){
    formDesktop.submit();
  } else {
    document.querySelector('#error-desk').textContent='Email should include only lowercase!';
  }
})


document.querySelectorAll('.form-input').forEach((input)=>
input.addEventListener('keyup', ()=>{
  if(input.name ==='name'){
    formData.name = input.value;
  } else if(input.type ==='email'){
    formData.email = input.value;
  }else if(input.name === 'textarea'){
    formData.message = input.value;
  }
  localStorage.setItem('formInputs', JSON.stringify(formData));
  
}));

const getInputData = () => {
  if(localStorage.getItem('formInputs') !== null){
    let localFormData = JSON.parse(localStorage.getItem('formInputs'));

    document.getElementById('name').value = localFormData.name;
    document.getElementById('email').value = localFormData.email;
    document.getElementById('textarea').value = localFormData.message;

    formData.name = localFormData.name;
    formData.email = localFormData.email;
    formData.message = localFormData.message;
    
  }
};


