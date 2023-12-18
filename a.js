// Get all elements with the specified class name
var elements = document.getElementsByClassName('WpHeLc VfPpkd-mRLv6');

// Create a Set to store unique email values
var uniqueEmails = new Set();

// Iterate through the elements
for (var i = 0; i < elements.length; i++) {
    // Get the aria-label attribute value
    var ariaLabel = elements[i].getAttribute('aria-label');

    // Look for the pattern "Email" followed by an email address
    var emailStartIndex = ariaLabel.indexOf('Email');
    if (emailStartIndex !== -1) {
        var emailSubstring = ariaLabel.substring(emailStartIndex + 'Email'.length).trim();

        // Extract the email address
        var email = emailSubstring.replace(/^\((.+)\)/, '$1').trim();

        // Check if the email is not already in the Set
        if (email && !uniqueEmails.has(email)) {
            // Add the email to the Set to avoid duplicates
            uniqueEmails.add(email);
        }
    }
}

// Print all unique emails in a single output
console.log([...uniqueEmails].join(', '));
