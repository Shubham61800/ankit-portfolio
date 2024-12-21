// Function to fetch the README file
async function fetchReadme() {
    try {
        const response = await fetch('README.md'); // Adjust the path as necessary
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const text = await response.text();
        displayContent(text);
    } catch (error) {
        console.error('Error fetching the README file:', error);
        document.getElementById('content').innerText = 'Error loading README file.';
    }
}

// Function to display the content
function displayContent(markdown) {
    const html = marked(markdown); // Convert Markdown to HTML
    document.getElementById('content').innerHTML = html; // Insert HTML into the page
}

// Call the function to fetch and display the README
fetchReadme();