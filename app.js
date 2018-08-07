

const github = new Github;
const ui = new UI;
// Search input
const searchUser = document.getElementById('searchUser');
// add event listener to input
searchUser.addEventListener('keyup', (e) =>{
  // get input text
  const inputText = e.target.value;
  // check if the input is not empty
  if(inputText !==''){
    // make HTTP call
github.getUser(inputText).then(data => {
  if(data.profile.message === 'Not Found'){
    // show alert

  }else{
// show profile
ui.showProfile(data.profile);
  }
})
    
}else{
  // clear profile if theres no username that machs
}

});