import React from 'react';

import './Header.css';

 const Header = () =>(
   <header>
     <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
       <span className="sr-only">Toggle navigation</span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand" href="#"><img alt="logo" /></a>
     </div>
     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li ><a href="#"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Subir rutas</a></li>
        <li></li>
        </ul>

      <ul class="nav navbar-nav navbar-right">

          <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search"/>
          </div>
          </form>
      </ul>
         </div>
   </div>
 </nav>
     </header>
   )

 export default Header
