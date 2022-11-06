async function getDescription(key, bookTitle, bookDescription, axios, _) {
    try {
        bookTitle.textContent = '';
        bookDescription.textContent = '';

        let response = await axios.get(`https://openlibrary.org${key}.json`);
        let title = await _.get(response, 'data.title', 'titolo non trovato');
        let description = await _.get(response, 'data.description', 'Book description not found');

        bookTitle.textContent = title;
        bookDescription.textContent = description;
    }
    catch {
        (e) => {
            alert(e);
        }
    }
}
export {getDescription};
