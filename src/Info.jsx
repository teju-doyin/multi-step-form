import React, {useState} from 'react'
import FooterButtons from './components/FooterButtons'
import PageBackground from './components/PageBackground'
import { validateForm } from './JS/FormValidation'
import { useNavigate } from 'react-router-dom'
const Info = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
      navigate('./plan')
    }
  };
  return (
    <>
    <PageBackground>
      <div className="w-[85%]  mx-auto ">
        <h2 className='title'>Personal info</h2>
        <p className='text-gray mb-7'>Please provide your name, email address and phone number</p>
      </div>
      <form 
        
        className='w-[85%]  mx-auto '>
        <div className="form-group">
          <div className="label-section">
            <label className='text-deepBlue'>Name</label>
            {errors.name && <p className="error-message ">{errors.name}</p>}
          </div>
          <input 
            onChange={handleChange}
            value={formData.name}
            name='name'
            className='user-input' 
            placeholder='e.g. Stephanie King' 
            type="text" 
             
          />
        </div>
        <div className="form-group">
          <div className="label-section">
            <label className='text-deepBlue'>Email address</label>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <input 
            onChange={handleChange}
            value={formData.email}
            name='email'
            className='user-input' 
            placeholder='stephanieking@lorem.com' 
            type="email" 
             
          />
        </div>
        <div className="form-group">
          <div className="label-section">
            <label className='text-deepBlue'>Phone number</label>
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <input 
            onChange={handleChange}
            value={formData.phone}
            name='phone'
            className='user-input' 
            placeholder='e.g +1 234 567 890' 
            type="number" 
             
          />
        </div>
      </form>
    </PageBackground>
    <FooterButtons
      lightButtonText=''
      buttonText='Next Step'
      linkBack='' 
      // linkNext='./plan' 
      style='bg-deepBlue' 
      handleNext={handleSubmit}
    />
    </>
  )
}

export default Info