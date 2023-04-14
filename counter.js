module.exports = (req, res) => {
    // Check if the request method is POST
    if (req.method === 'POST') {
        // Get the current count from local storage
        let count = parseInt(localStorage.getItem('count'));

        // If count is null (i.e., no previous count found), set it to 0
        if (isNaN(count)) {
            count = 0;
        }

        // Increase the count by 1
        count++;

        // Store the updated count in local storage
        localStorage.setItem('count', count.toString());

        // Send the updated count as the response
        res.status(200).json({ count });
    } else {
        // Send the current count as the response for other HTTP methods
        let count = parseInt(localStorage.getItem('count')) || 0;
        res.status(200).json({ count });
    }
};
