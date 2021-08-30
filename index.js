 const loadData= () =>{
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res=>res.json())
     .then(data=>displayCountry(data))
 }
 loadData();
 displayCountry= countries =>{
     
     const countriesDiv=document.getElementById('countries');

     countries.forEach(country => {
      /* console.log(country);*/
         const createDiv=document.createElement('div');
         createDiv.classList.add("style");
         createDiv.innerHTML=`<h3>${country.name}</h3>
         <p>${country.capital}</p>
         <button onclick="loadCountryDetails('${country.name}')">Details</button>`;
         countriesDiv.appendChild(createDiv);
     })

     loadCountryDetails=name=>{
       const url=`https://restcountries.eu/rest/v2/name/${name}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>displayCountryDetails(data[0]))
     }

     displayCountryDetails=details=>{
         console.log(details);
        const countryDetails=document.getElementById('countryDetails');
       
        const div=document.createElement('div');
        div.innerHTML=`<h4>${details.name}</h4>
        <p>${details.population}</p>
        <img width="200px" src="${details.flag}">`
        countryDetails.appendChild(div);

         
     }
 }
