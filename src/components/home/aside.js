import React from "react"
import Button from "../assets/button"

const Aside = () => {
  return (
    <aside className="column is-4">
      <h1 className="bebas is-size-1">
        Hola!
        <br />
        Mi nombre es Oscar
      </h1>
      <p className="open pt-5">Desarrollador web y diseñador de interfaces.</p>
      <p className="open pb-5">
        Diseño aplicaciones adaptadas a tu marca y proveo de experiencias
        digitales para que tus clientes se queden en tu sitio web.
      </p>
      <div className="pt-5">
        <Button route="/" text="Ver mi CV"/>
        <Button route="/" text="Contacto" />
      </div>      
    </aside>
  )
}

export default Aside