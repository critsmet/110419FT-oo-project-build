class Granola{

  static all = []

  constructor({id, name, description, brandId}){
    this.id = id
    this.name = name
    this.description = description
    this.brandId = brandId

    this.element = document.createElement('div')
    this.element.className = "granola"
    this.element.id = `granola-${this.id}`

    Granola.all.push(this)
  }

  brand(){
    return Brand.all.find(brand => brand.id === this.brandId)
  }


  fullRender(){
    this.element.innerHTML = `
    <h1>${this.name}</h1>
    <p>Description: ${this.description}</p>
    <p>Brand: ${this.brand().name}
    `
    return this.element
  }



}
