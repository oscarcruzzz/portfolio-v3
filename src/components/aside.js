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
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Linkein</li>
            <li>Github</li>
          </ul>
      </div>
    </aside>
  )
}

export default Aside