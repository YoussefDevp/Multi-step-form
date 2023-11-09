var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  var btn = document.getElementsByClassName("buttondiv");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";

  } else {
    document.getElementById("nextBtn").innerHTML = "Next Step";
    document.getElementById("prevBtn").style.display = "none";
    
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("number");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function confirme() {
  document.getElementsByClassName("tab")[currentTab].className += " congratilation";
  
  alert("payment conferm")
}




document.getElementById('regForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting by default
  
  // Check each input field and display error messages if empty
  const nameValue = document.getElementById('Name').value.trim();
  const emailValue = document.getElementById('Email').value.trim();
  const phoneValue = document.getElementById('Phone').value.trim();

  const nameborder = document.getElementById('Name')
  const emailborder = document.getElementById('Email')
  const phoneborder = document.getElementById('Phone')

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

  if (nameValue === '') {
    nameError.style.display = 'block';
    nameborder.style.border =" solid 1px red"
  } else {
    nameError.style.display = 'none';
    
  }

  if (emailValue === '') {
    emailError.style.display = 'block';
    emailborder.style.border = "solid 1px red"
  } else {
    emailError.style.display = 'none';
  }

  if (phoneValue === '') {
    phoneError.style.display = 'block';
    phoneborder.style.border = "solid 1px red"
  } else {
    phoneError.style.display = 'none';
  }
});


// Get the checkbox and price elements
// const checkbox = document.getElementById('s1-14');
// const prices = document.querySelectorAll('.price');

// // Add an event listener to the checkbox
// checkbox.addEventListener('change', function() {
//   prices.forEach(price => {
//     if (checkbox.checked) {
//       // Switch to yearly pricing
//       price.textContent = `$${price.dataset.yearly}/yr`;
//     } else {
//       // Switch back to monthly pricing
//       price.textContent = `$${price.dataset.monthly}/mo`;
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.getElementById("s1-14");
  const monthlyPrices = document.querySelectorAll(".price.monthly");
  const yearlyPrices = document.querySelectorAll(".price.yearly");

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      monthlyPrices.forEach(price => {
        price.style.display = "none";
      });
      yearlyPrices.forEach(price => {
        price.style.display = "block";
      });
    } else {
      monthlyPrices.forEach(price => {
        price.style.display = "block";
      });
      yearlyPrices.forEach(price => {
        price.style.display = "none";
      });
    }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.getElementById("c1-13");
  const addOnsDiv = document.querySelector(".add-ons");

  /*checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      addOnsDiv.style.border = "2px solid green"; // Change the border color to green when checked
    } else {
      addOnsDiv.style.border = "1px solid black"; // Reset border color when unchecked
    }
  });*/

});
const checkboxes = document.querySelectorAll(".checkbox-wrapper-13 input")
for(let item of checkboxes) {
  item.addEventListener("change", function(){
    console.log(this, this.checked, this.parentElement.parentElement)
    if(this.checked) {
      this.parentElement.parentElement.style.border = "2px solid green"
    } else {
      this.parentElement.parentElement.style.border = "1px solid black"

    }
  })
}
