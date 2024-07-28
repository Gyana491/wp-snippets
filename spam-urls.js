// Function to get all URLs containing '.html' and starting with 'motorindia.in' from the Google SERP
function logMotorIndiaHtmlUrls() {
  // Get all the 'a' elements which usually contain the URLs in the Google SERP
  const links = document.querySelectorAll('a');

  // Initialize an array to store the filtered URLs
  let htmlUrls = [];

  // Filter the URLs that contain '.html' and start with 'motorindia.in'
  links.forEach(link => {
    const url = link.href;
    if (url.includes('.html') && url.startsWith('https://motorindia.in')) {
      htmlUrls.push(url);
    }
  });

  // Print all URLs at once, each on a new line
  console.log(htmlUrls.join('\n'));
}

// Execute the function
logMotorIndiaHtmlUrls();
