async function getBooks(axios, wrapperResults, input, _) {
    try
    {
        wrapperResults.innerHTML = '';
        let result = await axios.get(`https://openlibrary.org/subjects/${input.toLowerCase()}.json`)
        .catch(function (error) {
            console.log(error);
            wrapperResults.innerHTML = "<p>There might be an Error...<br>Check your internet connection and try again</p>";
          });
        let works =  await _.get(result, 'data.works', 'non trovato');
    
        await works.forEach(element => {
            wrapperResults.innerHTML += 
            `
                <div class="cards">
                    <div class="textCard">
                        <p class="titleCard">${element.title}</p>
                        <p class="authorCard">${element.authors[0].name}</p></div>
                    <button class="getDescriptionBtn" id="${element.key}">Get Description</button>
                </div>
                `;
        });
    }
    catch{
        (e) => {
            alert(e);
        }

    }
    
}
export {getBooks};
