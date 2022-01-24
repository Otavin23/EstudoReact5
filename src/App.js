import React from "react"
import "./index.css"


const App = ()=>{

  const [image, setImage] = React.useState([])
  //url api e  = https://ranekapi.origamid.dev/json/api/produto   
  const [esconder, setEsconder] = React.useState(false)

  async function imagess(){
    const request = await fetch("https://ranekapi.origamid.dev/json/api/produto ")
    const json = await request.json()
    console.log(json)
    setImage(json)
  }

  function handshow(){
    setEsconder(!esconder)
  }

  return (
    <>
      <button onClick={imagess}>Mostrar Imagem</button>
      <button onClick={()=> setEsconder(!esconder)}>Esconder Imagens</button>

      {esconder && (
            <div class="photo">
            {image.map((el) => (
              <div key={el.id}>
                <img id="editphoto" src={el.fotos[0].src} />
              </div>
            ))}
          </div>
      )}
    </>
  );
}
export default App