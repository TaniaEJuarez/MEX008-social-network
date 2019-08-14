let Muro = {
    render : async () => {
        let view = /* html */ `
        <nav class="navbar navbar-inverse">
 <div class="container-fluid">
   <div class="navbar-header">
     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
     </button>
     <a class="navbar-brand"></a>
   </div>
   <div class="collapse navbar-collapse" id="myNavbar">
     <ul class="nav navbar-nav">
       <li class="active"><img src="../icon/FAVORITO.png"></li>
       <li class="dropdown">
         <a class="dropdown-toggle" data-toggle="dropdown" href="#">Selecciona tus Insignias <span class="caret"></span></a>
         <ul class="dropdown-menu">
           <li><a href="#">Viajero Experto</a></li>
           <li><a href="#">Viajero sin Experiencia</a></li>
           <li><a href="#">Coachsurfing</a></li>
         </ul>
       </li>
       <form class="navbar-form navbar-left" action="/action_page.php">
       <div class="input-group">
         <input type="text" class="form-control" placeholder="Search" name="search">
         <div class="input-group-btn">
           <button class="btn btn-default" type="submit">
             <i class="glyphicon glyphicon-search"></i>
           </button>
         </div>
     </div>
   </form>
     </ul>
     <ul class="nav navbar-nav navbar-right">
       <li><a href="#"><span class="glyphicon glyphicon-user"></span> Perfil</a></li>
       <li><a href="#"><span class="glyphicon glyphicon-log-out"></span> Cerrar Sesión</a></li>
     </ul>
   </div>
 </div>
</nav>
        <div class="nav">
  </div> 
        <div class="slider">
            <ul>
               <li> <img src="../icon/slider1.jpg" /></li>
               <li><img src="../icon/slide2.jpeg" /></li>
               <li> <img src="../icon/slide3.jpeg" /></li>
               <li><img src="../icon/slide4.jpeg" /></li>
               <li><img src="../icon/slide5.jpeg" /></li>
               <li><img src="../icon/slide6.jpg" /></li>
            </ul>
  </div> 
      
    
        `
        return view
    },
    after_render : async () => {}
}

export default Muro;

  
  