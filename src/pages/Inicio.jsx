import { useContext } from 'react'
import Card from '../components/Card'
import './Inicio.scss'
import ProductoContext from '../contexts/ProductoContext'

const Inicio = () => {
  const { productos } = useContext(ProductoContext)
  console.log(productos)

  return (
    <main>
      <section className="section-cards"> 
        <header className="section-cards__header">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Se encontraron X productos</p>
        </header>

        <div className="cards-container">
          
          {
            productos && productos.map( (producto, idx) => (
                <Card key={idx} producto={producto} />
              ))
          }

        </div>

      </section>
    </main>
  )
}

export default Inicio