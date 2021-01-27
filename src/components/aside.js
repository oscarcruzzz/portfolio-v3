import React from "react"
import Button from "./assets/button"

const Aside = () => {
  return (
    <aside>
      <h1>
        Hola!
        <br />
        Mi nombre es Oscar
      </h1>
      <h4>Desarrollador web y diseñador de interfaces.</h4>
      <p>
        Diseño aplicaciones adaptadas a tu marca y proveo de experiencias
        digitales para que tus clientes se queden en tu sitio web.
      </p>
      <div className="aside-buttons-container">
        <Button route="/" text="Ver mi CV"/>
        <Button route="/" text="Contacto" />
      </div>
      <div className="aside-social-container">
        <span>Sigueme</span>
          <ul>                        
            <li><a href="https://www.linkedin.com/in/oscar-cruz-b48b73b6/" target="_blank">Linkein</a></li>
            <li><a href="https://github.com/oscarcruzzz" target="_blank">Github</a></li>
            <li><a href="https://www.facebook.com/rackzoothe" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/cruz.oscarr_ux/" target="_blank">Instagram</a></li>
          </ul>
      </div>
    </aside>
  )
}

export default Aside