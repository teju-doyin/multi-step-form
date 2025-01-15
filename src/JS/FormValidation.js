export const validateForm = (formData) => {
    const errors = {};
  
    // Check name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
  
    // Check email
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }
  
    // Check phone
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-]{7,15}$/.test(formData.phone)) {
      errors.phone = 'Enter a valid phone number';
    }
  
    return errors;
  };
  