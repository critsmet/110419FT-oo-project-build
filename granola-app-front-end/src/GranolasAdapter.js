class GranolasAdapter{
  constructor(baseURL){
    this.baseURL = baseURL
  }

  //the adapter is going to do all fetch requests that correspond to granolas
  fetchGranolas(){
    fetch(this.baseURL)
      .then(res => res.json())
      .then(resObj => {
        resObj.data.forEach(granolaObj => {
          let sanitized = {...granolaObj.attributes, id: granolaObj.id, brandId: granolaObj.relationships.brand.data.id}
          new Granola(sanitized)
        })
      })
      .then(() => console.log(Granola.all))
  }
}
