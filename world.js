window.onload = () => {
  const lookupButton = document.querySelector("#lookup");


  lookupButton.addEventListener("click", () => {
    let inputVal = document.querySelector("#country").value;
   
    inputVal = inputVal.trim();
    //console.log(inputVal);

    const displayResult = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          let response = httpRequest.responseText;
          //alert(response);
          document.querySelector("div#result").innerHTML = "";
          document.querySelector("div#result").innerHTML = response;
        } else {
          alert("There was a problem with the request.");
        }
      }
    };

    const httpRequest = new XMLHttpRequest();
    let url = `./world.php?country=${inputVal}`;
    httpRequest.onreadystatechange = displayResult;
    httpRequest.open("GET", url);
    httpRequest.send();
  });
};
