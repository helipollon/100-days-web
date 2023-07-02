let mainCss = document.querySelector("#main");
mainCss.style.display = "none";

const btnSearchClick = () => {
    if (document.querySelector("#txtSearch").value === "") {
      alert("Lütfen bir ülke adı giriniz.");
      return false;
    } else {
      let countryName = document.querySelector("#txtSearch").value;
      getCountry(countryName);
      document.querySelector("#txtSearch").value = "";
      return true;
    }
  };
  
  const txtSearchKeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      let countryName = document.querySelector("#txtSearch").value;
      getCountry(countryName);
      document.querySelector("#txtSearch").value = "";
      return true;
    } else {
      return false;
    }
  };
  
  document.querySelector("#btnSearch").addEventListener("click", () => {
    btnSearchClick();
  
    let mainCss = document.querySelector("#main");
    if (btnSearchClick() === true) {
      mainCss.style.display = "block";
    } else {
      mainCss.style.display = "none";
    }
  });
  
  document.querySelector("#txtSearch").addEventListener("keydown", (event) => {
    txtSearchKeydown(event);
  
    let mainCss = document.querySelector("#main");
    if (txtSearchKeydown(event) === true) {
      mainCss.style.display = "block";
    } else {
      mainCss.style.display = "none";
    }
  });
  

// document.querySelector("#txtSearch").addEventListener("keyup", (event) => {
//     if (event.keyCode === 13) {
//         let countryName = document.querySelector("#txtSearch").value;
//         getCountry(countryName);
//     }
// });

function getCountry(countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/name/" + countryName);
  request.send();

  request.addEventListener("load", () => {
    const data = JSON.parse(request.responseText);
    console.log(data);
    renderCountryInfo(data[0]);

    const neighbors = data[0].borders.toString();

    const request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      "https://restcountries.com/v3.1/alpha?codes=" + neighbors
    );
    request2.send();

    request2.addEventListener("load", () => {
      const data2 = JSON.parse(request2.responseText);
      console.log(data2);
      renderNeighbors(data2);
    });
  });
}

function renderCountryInfo(countryData) {
  let html = `        
        <div class="card-header">
            <h3 class="card-title">${countryData.name.common}</h3>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                    <img src="${
                      countryData.flags.png
                    }" alt="" class="img-fluid">
                </div>
                <div class="col-8">
                    
                    <hr>
                    <div class="row">
                        <div class="col-4">Population: </div>
                        <div class="col-8">${(
                          countryData.population / 1000000
                        ).toFixed(1)} milyon</div>
                    </div>
                    <div class="row">
                        <div class="col-4">Language: </div>
                        <div class="col-8">${Object.values(
                          countryData.languages
                        )}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">Capital: </div>
                        <div class="col-8">${countryData.capital[0]}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">Currency: </div>
                        <div class="col-8">${
                          Object.values(countryData.currencies)[0].name
                        } (${
    Object.values(countryData.currencies)[0].symbol
  })</div>
                    </div>
                </div>
            </div>
        </div>
    `;
  document.querySelector("#country-details").innerHTML = html;
}

// renderNeighbors fonksiyonunu güncelleyin
function renderNeighbors(neighbors) {
  console.log(neighbors);
  let html = "";
  for (let country of neighbors) {
    html += `
            <div class="col-2 mt-2">
                <div class="card newcountry"data-country="${country.name.common}">
                    <img src="${country.flags.png}"    class="card-img-top">
                    <div class="card-body" style="  background-color: #F5EFE7;
                    ">
                        <h6 class="card-title nghlink" data-country="${country.name.common}">${country.name.common}</h6>
                    </div>
                </div>
            </div>
        `;
  }
  document.querySelector("#neighbors").innerHTML = html;

  // Komşu ülke bağlantılarına tıklama olayını burada dinleyin
  let countryLinks = document.querySelectorAll(".newcountry");
  countryLinks.forEach((link) => {
    link.addEventListener("click", () => {
      let countryName = link.getAttribute("data-country");
      getCountry(countryName);
    });
  });

//   let countryPics = document.querySelectorAll(".card-img-top");
//   countryPics.forEach((pic) => {
//     pic.addEventListener("click", () => {
//       let countryName = pic.getAttribute("data-country");
//       getCountry(countryName);
//     });
//   });
}
