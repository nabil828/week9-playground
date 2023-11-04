function process_response(json) {
  console.log(json)
  arr = json.data.movies
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].title)
    // inject the title into the DOM
    resultDiv = document.getElementById("result")
    childDiv = document.createElement("div")
    childDiv.innerHTML = `

      <div class="outer-div">
        <img src="${arr[i].medium_cover_image}" alt="" />
        <div class="inner-div"> 
          <span id="star" class="fas fa-star" style="color: green;"></span>
          <br />
          ${arr[i].rating}/10 
        </div>
        <div class="overlay"></div>
      </div>
      <div> ${arr[i].title} </div>
      <div> ${arr[i].year} </div>

    
    `
    resultDiv.appendChild(childDiv)
  }
}


// fetch the YTS movies
fetch("https://yts.mx/api/v2/list_movies.json")
  .then(response => response.json())
  .then(process_response)
