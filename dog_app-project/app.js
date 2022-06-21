const breeds_url = "https://dog.ceo/api/breeds/list/all"
const select = document.querySelector('.breeds')

fetch(breeds_url)
   .then(response => {
       return response.json()
   })
   .then(data => {
       //console.log(data)
       const breedsObject = data.message
       const breedsArray = Object.keys(breedsObject)

       for(let i = 0; i < breedsArray.length; i++) {
           const option = document.createElement('option')
           option.value = breedsArray[i]
           option.innerText = breedsArray[i]
           select.appendChild(option)
       }
   })

   select.addEventListener('change', function(event) {
       let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
       getDoggie(url)
   })

   const image = document.querySelector('.dog-img')
   const spinner = document.querySelector('.spinner')
   
   function getDoggie(url) {
       spinner.classList.add('show')
       image.classList.remove('show')
       fetch(url)
       .then(response => {
           return response.json()
        })
        .then(data => {
            image.src = data.message
        })
   }

   image.addEventListener('load', function(event) {
    spinner.classList.remove('show')
    image.classList.add('show')
   })