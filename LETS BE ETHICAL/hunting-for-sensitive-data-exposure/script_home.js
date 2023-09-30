const errorOut = (content) => {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "";
    errorMessage.innerText = content;
  }
  
  const loadUser = (user) => {
    console.log("Loading user: " + user.username);
    window.name = JSON.stringify(user);
    window.location.href="user.html"
  }
  
  document.getElementById("formElem").onsubmit = async (e) => {
    e.preventDefault();
  
    //Get input data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    //Check for SQL injection
    if(settings.allowSqlInjection) {
      if(password == settings.injectionString) {
        document.getElementById("injectionOutput").innerText = JSON.stringify(settings.users);
        return;
      }
    }
  
    //Make sure entry was provided (normal behavior)
    if(username.length <= 0) {
      errorOut("Please provide a username");
      return;
    }
    else if(password.length <= 0) {
      errorOut("Please provide a password");
      return;
    }
  
    //Scan user database for matching username
    let foundUsername = false;
    let loginSuccess = false;
    for(let i = 0; i < settings.users.length; i++) {
      const user = settings.users[i];
  
      if(user.username == username) {
        foundUsername = true;
  
        if(user.password == password) {
          loginSuccess = true;
          loadUser(user);
        }
        else break;
      }
    }
    if(!loginSuccess) errorOut("Invalid credentials");
  
  };