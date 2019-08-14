// aqui exportaras las funciones que necesites

var firebaseConfig = {
  apiKey: "AIzaSyAmmZe7KTWuN95FA9DlAVRZqF1cVADqu_k",
  authDomain: "wanderlust-acc5a.firebaseapp.com",
  databaseURL: "https://wanderlust-acc5a.firebaseio.com",
  projectId: "wanderlust-acc5a",
  storageBucket: "",
  messagingSenderId: "272328701609",
  appId: "1:272328701609:web:93f50bd23d7b36b2"
};
// Initialize Firebase
var db =firebase.initializeApp(firebaseConfig);
//   var ui = new firebaseui.auth.AuthUI(firebase.auth(


const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const userLoginToJSON = (nombre, email, password) => {
  return data={
    nombre:nombre,
    email:email,
    password:password
  }
}

export const getID= (id)=> {
  return document.getElementById(id).value;
}


export const login = () => {
  let nombre = getID ("nombre");
  let email = getID("email");
  let password = getID("password");
  if (nombre.length==0 || email.length==0 || password.length ==0){
    alert("Campos requeridos");
  }else{
    let arrayDatos = userLoginToJSON(nombre,email,password);
    let usuarios = db.ref("usuarios/"+ email);
    usuarios.set(arrayDatos);
    alert("Su información se ha guardado con éxito");
  } 
};

