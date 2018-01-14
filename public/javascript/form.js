const suburbInput = document.getElementById("suburb");
const postcodeInput = document.getElementById("postcode");

/**
 * 
 * VALIDATORS
 *  
 */

// Can only contain letters a-z in lowercase
function isValidSuburb(suburb) {
  return /^([a-z]+\s?|[a-z]+\s?[a-z]+|[a-z]+\s?[a-z]+\s?[a-z]+)$/i.test(suburb);
}

// Can only contain
function isValidPostcode(postcode) {
  return /^\d{4}$/.test(postcode);
}


/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */

// function formatSuburb(text) {
//   const regex = /\s+/g;
//   return text.replace(regex, '-').toLowerCase();
// }

/**
 * 
 * SET UP EVENTS
 * 
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  }
}

suburbInput.addEventListener("input", createListener(isValidSuburb));

// suburbInput.addEventListener("blur", e => {
//   e.target.value = formatSuburb(e.target.value);
// });

postcodeInput.addEventListener("input", createListener(isValidPostcode));


