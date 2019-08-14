// aqui exportaras las funciones que necesites

const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

const userLoginToJSON = (nombre, email, password) => {
  return data={
    nombre:nombre,
    email:email,
    password:password
  }
}

const getID= (id)=> {
  return document.getElementById(id).value;
}


const registrar = () => {
  let nombre = getID ("nombre");
  let email = getID("email");
  let password = getID("password");
  if (nombre.length==0 || email.length==0 || password.length ==0){
    alert("Campos requeridos");
  }else{
    let arrayDatos = userLoginToJSON(nombre,email,password);
    let usuarios = firebase.database().ref("usuarios/"+ email);
    usuarios.set(arrayDatos);
    alert("Su información se ha guardado con éxito");
  } 
};