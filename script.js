// // let subHeading = document.getElementById('information')[0];
// // const paginationItems = document.querySelectorAll('#pagination .pagination-item');
// // const pagination = document.getElementById('pagination').children;
// // const form = document.getElementById('form'); // Assume form is the container for steps
// // let currentStepIndex = 0; // Keeps track of the current step index

// // let myList = ['Personal Information', 'Credit Needs', 'Primary Employment', 'Secondary Employment', 'Face Capture(Optional)']
// // const steps = ['personal-info', 'credit', 'primary', 'secondary', 'face']; // Array of step IDs in the order

// // // Function to show a specific step
// // let displayItem = document.getElementById('pointer').children;
// // let subHeading = document.getElementById('Information')[0];



// // function showStep(index) {
// //     steps.forEach((stepId, i) => {
// //         const stepElement = document.getElementById(stepId);
// //         if (i === index) {
// //             stepElement.classList.add('active'); // Show the current step
// //         } else {
// //             stepElement.classList.remove('active'); // Hide the other steps
// //         }
// //     });

// //     // Update the subHeading
// //     let subHeading = document.getElementById('Information');
// //     if (subHeading) {
// //         subHeading.innerHTML = myList[index];
// //     }


// //     // Update navigation state
// //     updateNavigation(index);
// // }

// //   // When the page loads make the first form div visible and pagination color: green
// // form.children[current].style.display = 'block';
// // pagination[0].style.backgroundColor = "#08ddb8";

// // // A loop to run an event through each pagination list item
// // // and listen for a click
// // for (let i = 0; i < pagination.length; i++){
// //   pagination[i].addEventListener('click', function(){

// //     // Change the text in the subheading to match the clicked
// //     // pagination item using the 'sub' array
// //     subHeading.innerHTML = sub[i];

// //     // Everytime a pagination item is clicked,
// //     // run a loop to change background color of all items to ash
// //     for (let j = 0; j < pagination.length; j++){
// //       pagination[j].style.backgroundColor = "#eaeaea";
// //     }

// //     // Then run another loop to set the bg color
// //     // of all pagination items up to the one clicked on
// //     // to green
// //     for (let j = 0; j <= i; j++){
// //       pagination[j].style.backgroundColor = "#08ddb8";
// //     }
    
// //     // Finally, Change the current form div to display none to hide it
// //     // and the one matching the clicked pagination item
// //     // to display block making it visible
// //     form.children[current].style.display = 'none';
// //     form.children[i].style.display = 'block';
// //     current = i; // the selected one becomes the current one
// //   })
// // };

// // // Function to update the navigation steps
// // function updateNavigation(index) {
// //     const navItems = document.querySelectorAll('.range .personal');
// //     navItems.forEach((item, i) => {
// //         const roundElement = item.querySelector('.round');
// //         if (i < index) {
// //             roundElement.classList.add('active');
// //         } else {
// //             roundElement.classList.remove('active');
// //         }
// //     });
// // }

// // // Function to go to the next step
// // function nextStep() {
// //     if (currentStepIndex < steps.length - 1) {
// //         currentStepIndex++;
// //         showStep(currentStepIndex);
// //     }
// // }

// // // Function to go to the previous step
// // function previousStep() {
// //     if (currentStepIndex > 0) {
// //         currentStepIndex--;
// //         showStep(currentStepIndex);
// //     }
// // }

// // // Function to update the navigation steps
// // function updateNavigation(index) {
// //     const navItems = document.querySelectorAll('.range .personal');
// //     navItems.forEach((item, i) => {
// //         const roundElement = item.querySelector('.round');
// //         if (i < index) {
// //             roundElement.classList.add('completed');
// //         } else {
// //             roundElement.classList.remove('completed');
// //         }
// //     });
// // }

// // // Initialize the first step
// // // document.addEventListener('DOMContentLoaded', () => {
// // //     showStep(currentStepIndex);
// // // });

// // const range = document.querySelectorAll('range personal');
// // console.log(range)
// // window.addEventListener('click', function () {
// //     let current = '';

// //     range.forEach(link => {
// //         link.classList.remove('completed');
// //         if (link.getElementsByClassName('personal') === "" + current) {
// //             link.classList.add('completed');
// //         }

// //     })


// // });











// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize variables
//     const pagination = document.getElementById('pagination').children;
//     const form = document.getElementById('form'); // Assume form is the container for steps
//     const myList = ['Personal Information', 'Credit Needs', 'Primary Employment', 'Secondary Employment', 'Face Capture (Optional)'];
//     const steps = ['personal-info', 'credit', 'primary', 'secondary', 'face']; // Array of step IDs in the order
//     let currentStepIndex = 0; // Keeps track of the current step index

//     // Function to show a specific step
//     function showStep(index) { 
//         steps.forEach((stepId, i) => {
//             const stepElement = document.getElementById(stepId);
//             if (i === index) {
//                 stepElement.classList.add('active'); // Show the current step
//             } else {
//                 stepElement.classList.remove('active'); // Hide the other steps
//             }
//         });

//         // Update the subHeading
//         const subHeading = document.getElementById('Information');
//         if (subHeading) {
//             subHeading.innerHTML = myList[index];
//         }

//         // Update pagination colors
//         updatePagination(index);

//         // Update form visibility
//         // Array.from(form.children).forEach((child, i) => {
//         //     child.style.display = (i === index) ? 'block' : 'none';
//         // });

//         // Update navigation state
//         updateNavigation(index);
//     }

//     // Function to update pagination colors
// function updatePagination(index) {
//     Array.from(pagination).forEach((item, i) => {
//         item.style.backgroundColor = (i <= index) ? '#08ddb8' : '#eaeaea';
//     });
// }

// // Function to update the navigation steps
// function updateNavigation(index) {
//     const navItems = document.querySelectorAll('.range .personal');
//     navItems.forEach((item, i) => {
//         const roundElement = item.querySelector('.round');
//         if (i < index) {
//             roundElement.classList.add('active');
//         } else {
//             roundElement.classList.remove('active');
//         }
//     });
// }

// //  Function to go to the next step
// function nextStep() {
//     if (currentStepIndex < steps.length - 1) {
//         currentStepIndex++;
//         showStep(currentStepIndex);
//     }
// }

// // Function to go to the previous step
// function previousStep() {
//     if (currentStepIndex > 0) {
//         currentStepIndex--;
//         showStep(currentStepIndex);
//     }
// }


//     // Event listeners for pagination
//     Array.from(pagination).forEach((item, i) => {
//         item.addEventListener('click', () => {
//             currentStepIndex = i;
//             showStep(currentStepIndex);
//         });
//     });

//     // Initialize the first step
//     showStep(currentStepIndex);

    
// });



// DOM elements
const pagination = document.getElementById('pagination').children;
const form = document.getElementById('form'); // Assume form is the container for steps
const subHeading = document.getElementById('Information'); // Adjusted based on context
const steps = ['personal-info', 'credit', 'primary', 'secondary', 'face']; // Array of step IDs in the order
const myList = ['Personal Information', 'Credit Needs', 'Primary Employment', 'Secondary Employment', 'Face Capture(Optional)']; // Labels for steps

let currentStepIndex = 0; // Keeps track of the current step index

// Function to show a specific step
function showStep(index) { 
    steps.forEach((stepId, i) => {
        const stepElement = document.getElementById(stepId);
        if (i === index) {
            stepElement.classList.add('active'); // Show the current step
        } else {
            stepElement.classList.remove('active'); // Hide the other steps
        }
    });

    // Update the subHeading
    if (subHeading) {
        subHeading.innerHTML = myList[index];
    }

    // Update navigation state
    updateNavigation(index);
}

// Function to update the navigation steps
function updateNavigation(index) {
    // Set pagination background color
    for (let i = 0; i < pagination.length; i++) {
        pagination[i].style.backgroundColor = i <= index ? "#08ddb8" : "transparent";
    }
}

// Function to go to the next step
function nextStep() {
    if (currentStepIndex < steps.length - 1) {
        currentStepIndex++;
        showStep(currentStepIndex);
    }
}

// Function to go to the previous step
function previousStep() {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        showStep(currentStepIndex);
    }
}

// Initialize the first step
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStepIndex);
});

// Add event listeners to pagination items
Array.from(pagination).forEach((item, i) => {
    item.addEventListener('click', () => {
        currentStepIndex = i;
        showStep(currentStepIndex);
    });
});
