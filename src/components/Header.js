import React from 'react';

import './Header.css';

 const Header = ({header}) =>(
   <header>
     <nav className="navbar navbar-default bg-black header">
       <div className="container-fluid">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
       <span className="sr-only">Toggle navigation</span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand texto-logo" href="#"><img src={header.logoimg}/>{header.logo}</a>
     </div>
     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  

      <ul className="nav navbar-nav navbar-right">
        <li ><a href="#"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Subir rutas</a></li>
        <li></li>
          <form className="navbar-form navbar-left">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          </form>
      </ul>
         </div>
   </div>
 </nav>
     </header>
   )

 export default Header
