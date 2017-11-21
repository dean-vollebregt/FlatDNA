const suburbInput = document.getElementById("suburb");
const postcodeInput = document.getElementById("postcode");

/**
 * 
 * VALIDATORS
 *  
 */

// Can only contain letters a-z in lowercase
function isValidSuburb(suburb) {
  return /^[a-z]+$/.test(suburb);
}


// The telephone number must be in the format of (555) 555-5555
function isValidPostcode(postcode) {
  return /^\d{4}$/.test(postcode);
}


/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */

// function formatPostcode(text) {
//   const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
//   return text.replace(regex, '($1) $2-$3');
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
  };
}

suburbInput.addEventListener("input", createListener(isValidSuburb));

postcodeInput.addEventListener("input", createListener(isValidPostcode));

// postcodeInput.addEventListener("blur", e => {
//   e.target.value = formatPostcode(e.target.value);
// });


