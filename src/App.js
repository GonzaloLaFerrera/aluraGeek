import { useState } from 'react';
import './App.css';
import BannerHeader from './Components/BannerHeader';
import NavBar from './Components/NavBar';
import ProductGallery from './Components/ProductGallery';
import Categoria from './Components/Categoria';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import ClientLogIn from './Pages/ClientLogIn';
import Formulario from './Pages/FormikForm';


function App() {

  const [productos, actualizarProductos] = useState([{
    id:"1",
    categoria: "Star Wars",
    foto:"/img/StarWars/starwars_cup.svg",
    nombre: "Taza Storm Trooper",
    precio: "$300,00-.",
    descripcion: "Taza cerámica de Storm Trooper"
  },
  {
    id:"2",
    categoria: "Star Wars",
    foto:"/img/StarWars/starwars_father&son.svg",
    nombre: "Darth Vader Mr. & Jr.",
    precio: "$750,00-.",
    descripcion: "Figuras simil Lego de los Sith"
  },
  {
    id:"3",
    categoria: "Star Wars",
    foto:"/img/StarWars/starwars_yoda.svg",
    nombre: "Yoda",
    precio: "$600,00-.",
    descripcion: "Figura articulada de Yoda en 12 inches"
  },
  {
    id:"4",
    categoria: "Star Wars",
    foto:"/img/StarWars/starwars_trooper.svg",
    nombre: "Storm Trooper",
    precio: "$600,00-.",
    descripcion: "Figura articulada de Storm Trooper en 12 inches"
  },
  {
    id:"5",
    categoria: "Star Wars",
    foto:"/img/StarWars/starwars_babyYoda.svg",
    nombre: "Baby Yoda",
    precio: "$950,00-.",
    descripcion: "Figura de Yoda bebé en 18 inches"
  },
  {
    id:"6",
    categoria: "Star Wars",
    foto:"/img/StarWars/starwars_hanRen.svg",
    nombre: "Kylo Ren",
    precio: "$1200,00-.",
    descripcion: "Figura articulada de Kylo Ren en 18 inches"
  },
  {
    id:"7",
    categoria: "Consolas",
    foto:"/img/Consolas/Joystick.svg",
    nombre: "Joystick Basic",
    precio: "$600,00-.",
    descripcion: "Joystick básico inalámbrico con rumble pack"
  },
  {
    id:"8",
    categoria: "Consolas",
    foto:"/img/Consolas/ConsolaJoystickXyz.svg",
    nombre: "Consola Purple Rain XyZ Basic Pack",
    precio: "$2100,00-.",
    descripcion: "Consola Purple Rain XyZ con Joystick XyZ"
  },
  {
    id:"9",
    categoria: "Consolas",
    foto:"/img/Consolas/Nintendo.svg",
    nombre: "Nintendo Snes Basic",
    precio: "$900,00-.",
    descripcion: "Consola Nintendo Snes sin controllers"
  },
  {
    id:"10",
    categoria: "Consolas",
    foto:"/img/Consolas/JoystickXyz.svg",
    nombre: "Joystick XyZ Duo Pack",
    precio: "$850,00-.",
    descripcion: "Joystick XyZ Special x 2 units"
  },
  {
    id:"11",
    categoria: "Consolas",
    foto:"/img/Consolas/ConsolaBlackBox.svg",
    nombre: "Consola Black Box Ultimate Edition",
    precio: "$3200,00-.",
    descripcion: "Consola Black Box Ultimate Edition con un controller"
  },
  {
    id:"12",
    categoria: "Consolas",
    foto:"/img/Consolas/GameBoyColor.svg",
    nombre: "GameBoy Color",
    precio: "$1690,00-.",
    descripcion: "GameBoy Color con 3 juegos clasicos"
  },
  {
  id:"13",
  categoria: "Varios",
  foto:"/img/varios/RemeraAtari.svg",
  nombre: "Remera Atari",
  precio: "$20,00-.",
  descripcion: "Remera estampada Atari Original"
  },
  {
    id:"14",
    categoria: "Varios",
    foto:"/img/Varios/RemeraSnes.svg",
    nombre: "Remera Snes",
    precio: "$20,00-.",
    descripcion: "Remera estampada Snes Original"
  },
  {
    id:"15",
    categoria: "Varios",
    foto:"/img/Varios/Sonic.svg",
    nombre: "Sonic",
    precio: "$350,00-.",
    descripcion: "Escultura en epoxi y esmalte de Sonic The HedgeHog"
  },
  {
    id:"16",
    categoria: "Varios",
    foto:"/img/Varios/Reloj.svg",
    nombre: "Reloj Despertador Vintage Purple Rain XyZ",
    precio: "$450,00-.",
    descripcion: "Reloj alarma despertador con radio y bluetooth Purple Rain XyZ Vintage Edition"
  },
  {
    id:"17",
    categoria: "Varios",
    foto:"/img/Varios/Lentes3d.svg",
    nombre: "3d Gear",
    precio: "$2500,00-.",
    descripcion: "Equipo 3d (Incluye lentes, y pads)"
  },
  {
    id:"18",
    categoria: "Varios",
    foto:"/img/Varios/PeluchePikachu.svg",
    nombre: "Pikachu",
    precio: "$600,00-.",
    descripcion: "Peluche XXL de Pikachu Original"
  },
  ])
  
  const [categorias, actualizarCategorias] = useState([{
    id:"1",
    titulo:"Star Wars" 
  },
  {
    id:"2",
    titulo:"Consolas" 
  },
  {
    id:"3",
    titulo:"Varios" 
  }
])

  const handleSubmit = (valores) => {
    console.log('La data del log es: ', valores)
  }

  return (
    <div>
      <NavBar />
      <BannerHeader />
      <Formulario />
      {/* <ClientLogIn handleSubmit={handleSubmit}/> */}
      {/* <ProductGallery /> */}
      {
        categorias.map((categoria) => <Categoria 
          data={categoria}
          key={categoria.titulo}
          productos={productos.filter(producto => producto.categoria === categoria.titulo)}
        />)
      }
      <Footer />
      <Copyright />

    </div>
  );
}

export default App;
