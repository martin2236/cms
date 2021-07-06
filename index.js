const fragment = document.createDocumentFragment()
function crearCard(){
    const template = document.querySelector(".template").content
    const contenedor = document.querySelector("section")
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    contenedor.appendChild(fragment)
}
function main(){
crearCard()
crearCard()
crearCard()
}
main()