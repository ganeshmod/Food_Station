export default function ValidateForm(values) {
  const errors = {};
  //Name Validation
  if (!values.name.trim()) {
    errors.name = "Name is Required";
  } else if (values.name.trim().length < 3) {
    errors.name = "Name must be at least 3 Character";
  }
  // Email Validation
  if (!values.email.trim()) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email";
  }
  // Password Validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password should be at least 8 characters";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/.test(values.password)
  ) {
    errors.password =
      "Must contain uppercase, lowercase, number & special character";
  }
  // Mobile Number
  if (!values.phone) {
    errors.phone = "Phone Number is required";
  } else if (!/^[6-9]\d{9}$/.test(values.phone)) {
    errors.phone = "Invalid Phone Number";
  }
  // Aadhaar Number
  if (!values.adharNumber) {
    errors.adharNumber = "Aadhaar Number is required";
  } else if (!/^\d{12}$/.test(values.adharNumber)) {
    errors.adharNumber = "Invalid Aadhaar Number";
  }
 
    // Date of Birth
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Select Date of Birth";
  }
  // Gender Validation
if (!values.gender) {
  errors.gender = "Please select your gender";
}

// Role Validation
if (!values.role) {
  errors.role = "Please select your role";
}
return errors;



}
