window.onload = () => {
  const lookupCountryButton = document.querySelector("#lookup");
  const lookupCitiesButton = document.querySelector("#lookup_cities");

  const handleClick = (lookup) => {
    let inputVal = document.querySelector("#country").value;

    

    inputVal = inputVal.trim();
   

    const displayResult = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          let response = httpRequest.responseText;
          
          document.querySelector("div#result").innerHTML = "";
          document.querySelector("div#result").innerHTML = response;
        } else {
          alert("There was a problem with the request.");
        }
      }
    };

    const httpRequest = new XMLHttpRequest();
    let url = `./world.php?country=${inputVal}&lookup=${lookup}`;
    httpRequest.onreadystatechange = displayResult;
    httpRequest.open("GET", url);
    httpRequest.send();
    
  };

  lookupCitiesButton.addEventListener("click", ()=>handleClick('cities'));
  lookupCountryButton.addEventListener("click", ()=>handleClick('countries'));
};
