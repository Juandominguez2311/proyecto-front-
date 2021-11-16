var firebaseConfig = {
    apiKey: "AIzaSyBGSbjyzLCAkdDWyDeGuqPRuz_EzWaa1jU",
    authDomain: "proyecto-integrador-98add.firebaseapp.com",
    databaseURL: "https://proyecto-integrador-98add-default-rtdb.firebaseio.com",
    projectId: "proyecto-integrador-98add",
    storageBucket: "proyecto-integrador-98add.appspot.com",
    messagingSenderId: "1011012838140",
    appId: "1:1011012838140:web:8151e4d90c4eff222bed79",
    measurementId: "G-43B757H7M3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('dashboard').style.display = "none"
document.getElementById('boproductos').style.display = "none"

document.getElementById('login').addEventListener('click', GoogleLogin)
document.getElementById('logout').addEventListener('click', LogoutUser)

let provider = new firebase.auth.GoogleAuthProvider()
    //console.log(provider)

function GoogleLogin() {
    //console.log('Login Btn Call')
    firebase.auth().signInWithPopup(provider).then(res => {

        console.log(res.user)
        document.getElementById('LoginScreen').style.display = "none"
        document.getElementById('boproductos').style.display = "none"
        document.getElementById('dashboard').style.display = "block"
        showUserDetails(res.user)
    }).catch(e => {
        console.log(e)
    })
}

function showUserDetails(user) {
    document.getElementById('userDetails').innerHTML = `
          <img src="${user.photoURL}" style="width:10%">
          <p> Bienvenido ${user.displayName}</p>
          <p display="none"> ${user.email} </p>
          
        `
    if (/istea.com.ar/.test(user.email)) {
        localStorage.setItem('token', "admin")
        document.getElementById('boproductos').style.display = "block"
    } else {
        localStorage.setItem('token', "client")
    }
    console.log("token : " + localStorage.getItem('token'))
}

function checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            document.getElementById('LoginScreen').style.display = "none"
            document.getElementById('dashboard').style.display = "block"
            showUserDetails(user)
        } else {

        }
    })
}

function LogoutUser() {
    //console.log('Logout Btn Call')
    firebase.auth().signOut().then(() => {
        document.getElementById('LoginScreen').style.display = "block"
        document.getElementById('dashboard').style.display = "none"
        localStorage.removeItem('token')
    }).catch(e => {
        console.log(e)
    })
}
checkAuthState()