//We can some server requests for data

//Get all Granolas
//Get all Brands

const granolaAdapter = new GranolasAdapter("http://localhost:3000/granolas")
const brandsAdapter = new BrandsAdapter("http://localhost:3000/brands")

granolaAdapter.fetchGranolas()
brandsAdapter.fetchBrands()

//Add event listener on menu buttons
//Select our main div

const main = document.getElementById('main')
const menu = document.getElementById('menu')

menu.addEventListener('click', handleMenuClick)

function handleMenuClick(event){
  if (event.target.id !== menu){
    callbacks[`${event.target.id}`]()
  }
}

const callbacks = {
  allGranolas: renderAllGranolas,
  //allBrands: renderAllBrands,
  //granolasGrands: renderAllGranolasBrands,
  //newGranolas: renderNewGranolaForm,
  //newBrand: renderNewBrandForm
}

function renderAllGranolas(){
  Granola.all.forEach(granola => {
    main.appendChild(granola.fullRender())
  })
  //render all granolas with name, description, and brand
}
