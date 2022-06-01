const breeds_url = "https://dog.ceo/api/breeds/image/random"

function addDoggie() {
    fetch(breeds_url)
      .then(function(response) {
          return response.json()
      })
      .then(function(data) {
          const img = document.createElement('img')
          img.src = data.message
          img.alt = "Cute Doggie"
    
          document.querySelector(".doggies").appendChild(img)
      })
}

document.querySelector(".add-doggie").addEventListener("click", addDoggie)