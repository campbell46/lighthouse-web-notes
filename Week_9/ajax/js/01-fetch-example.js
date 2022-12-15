console.log('Example 01 JS is loaded!');

fetch('https://randomfox.ca/floof/')
    .then((response) => {
        // console.log(response);
        // console.log(response.json());
        return response.json();
    })
    .then((data) => {
        console.log(data);

        const img = `<img src="${data.image}">`;
        document.body.innerHTML += img;
    })
    .catch((error) => {
        console.error(error);
    });
