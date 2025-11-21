document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const menuClose = document.querySelector('.menu-close');
    
    // Open Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.add('active');
        });
    }
    
    // Close Menu (X Button)
    if (menuClose) {
        menuClose.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    }
    
    // Close Menu when clicking a link (Optional better UX)
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // Request Form Submission Handler
    const requestForm = document.getElementById('requestForm');
    const successMessage = document.getElementById('successMessage');
    
    if (requestForm) {
        requestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(requestForm);
            let isValid = true;
            
            for (let [key, value] of formData.entries()) {
                if (!value.trim()) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) {
                requestForm.classList.add('form-hidden');
                successMessage.style.display = 'block';
                
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    requestForm.classList.remove('form-hidden');
                    requestForm.reset();
                }, 2000);
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Enquiry Form Submission Handler (keeps message on screen)
    const enquiryForm = document.getElementById('enquiryForm');
    const enquirySuccessMessage = document.getElementById('enquirySuccessMessage');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get required fields only (name and email)
            const name = enquiryForm.querySelector('input[name="enquiry-name"]').value;
            const email = enquiryForm.querySelector('input[name="enquiry-email"]').value;
            
            if (name.trim() && email.trim()) {
                // Hide the form permanently
                enquiryForm.classList.add('form-hidden');
                
                // Show success message (stays visible)
                enquirySuccessMessage.style.display = 'block';
            } else {
                alert('Please fill in all required fields (Name and Email).');
            }
        });
    }
});