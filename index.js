const fragment = document.createDocumentFragment()                  

function crearCard(data){
    const fieldCollection = data.items.map((item)=>{                         //metodo para crear los objetos
        return{                                                              //usado por marce
            titulo:item.fields.titulo,
            descripcion:item.fields.descripcion,
            imagen:item.fields.imagen.sys ,
            url:item.fields.url,
        }
    })
    //console.log(fieldCollection)
    const template = document.querySelector(".template").content             //el template con su contenido
    const contenedor = document.querySelector("section")                     //el contenedor donde se va a agregar los items
    
    fieldCollection.forEach((item)=>{                                        //devuelve una collection de objetos por lo que 
        template.querySelector(".h3").textContent = item.titulo;             // deberia poder usar forEach para iterar
        template.querySelector(".p-card").textContent = item.descripcion;    // pero solamente me crea el primer item
        template.querySelector(".link").href = item.url
    })
    
    const clone = template.cloneNode(true)                                    //el clon del template
    fragment.appendChild(clone)                                               // el fragment se usa para avitar el reflow al iterar (segun entendi es bueno)
    contenedor.appendChild(fragment)                                          // daberia agregar la lista de cards
}

   
        function fetchData (){
            fetch("https://cdn.contentful.com/spaces/o1xrr1wfzugd/environments/master/entries?access_token=ddL6FyukkU8wBU0OyQvnhRk4_ZZOSl5Jh4JaqCvc_1A&content_type=work")
            .then(response => response.json())
            .then(data => crearCard(data));
        }

function main(){
fetchData()                      //mi funcion main casi vacia

}
main()