console.log('04-jquery-ajax-with-forms.js running!');

// Retrieve the form; input field; search results list
const $form = $('#search-form');
const $search = $('#search-field');
const $results = $('#search-results');

console.log($form, $search, $results);

// Listen for form submissions
$form.on('submit', (event) => {
    event.preventDefault(); // Stop the form from loading a new page.

    // Clear out old results.
    $results.empty();

    const searchTerm = $search.val();
    console.log(searchTerm);

    // Submit the search via Ajax
    $.ajax({
        url: `https://api.cdnjs.com/libraries?search=${searchTerm}`,
        success: (response) => {
            console.log(response);

            const cdns = response.results;

            // Populate our search results list
            for (const cdn of cdns) {
                $results.append(
                    `<li>
                        <a href="${cdn.latest}" target="_blank">
                            ${cdn.name}
                        </a>
                    </li>`
                );
            }
        },
        error: (error) => { console.error(error); }
    });
});


