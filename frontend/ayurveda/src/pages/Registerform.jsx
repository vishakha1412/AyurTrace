import { useState } from 'react';
import DashboardRouter from '../router/DashboardRouter';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const roles = [
  'Farmer', 'Lab Technician', 'Processor', 'Retailer', 'Ayurvedic Expert', 'Admin'
];

const languages = ['English', 'Hindi', 'Marathi', 'Tamil', 'Telugu'];
const myStyle = {
  backgroundImage: "url('/assets/herbs/registerback.jpg')",
  height: "full",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function RegisterForm() {
    const [submitted, setSubmitted] = useState(false);
    const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    location: '',
    gps: '',
    idNumber: '',
    orgName: '',
    language: '',
    accessibility: '',
    offlineMode: false,
    consent: false,
  });
const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('register',formData);
    // Add validation + API call here
    setSubmitted(true);

  };

  return (
    <>
     <div className='bg-green-100 mx-auto h-screen   flex justify-center items-center px-5    ' style={myStyle}>
    {!submitted ? ( <>
       
    <motion.form  
          onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-2xl z-10 rounded-lg mt-16 py-6 px-6  max-md:mt-25 space-y-6   w-full focus:outline-none focus:ring-2 focus:ring-green-500">
         
      <motion.h2   className="text-2xl font-bold text-center text-green-700">AyurTrace Registration</motion.h2>

      {/* Account Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Full Name" onChange={handleChange} className='bg-gray-50 rounded-2xl p-2' required />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange}  className='bg-gray-50 rounded-2xl p-2' required />
        <input name="email" placeholder="Email Address" onChange={handleChange}  className='bg-gray-50 rounded-2xl p-2' required  />
        <input name="password" type="password" placeholder="Create Password" className='bg-gray-50 rounded-2xl p-2' onChange={handleChange}required />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" className='bg-gray-50 rounded-2xl p-2'onChange={handleChange}  required />
      </div>

      {/* Role Selection */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block font-semibold">Select Role</label>
        <select name="role" onChange={handleChange} className="input bg-gray-50 rounded-2xl p-2" required>
          <option value="">-- Choose Role --</option>
          {roles.map(role => <option key={role}>{role}</option>)}
        </select>
      </div>

      {/* Location & Identity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="location" placeholder="Village / District / State" onChange={handleChange} className="input bg-gray-50 rounded-2xl p-2" required/>
        <input name="gps" placeholder="GPS Location" onChange={handleChange} className="input bg-gray-50 rounded-2xl p-2" required />
        <input name="idNumber" placeholder="Aadhaar / ID Number (optional)" onChange={handleChange} className="input bg-gray-50 rounded-2xl p-2"  />
        <input name="orgName" placeholder="Farm / Lab / Business Name" onChange={handleChange} className="input bg-gray-50 rounded-2xl p-2"  required/>
      </div>

      {/* Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select name="language" onChange={handleChange} className="input">
          <option value="">Preferred Language</option>
          {languages.map(lang => <option key={lang}>{lang}</option>)}
        </select>
        <input name="accessibility" placeholder="Accessibility Needs (e.g. voice, large text)" onChange={handleChange} className="input" />
      </div>
 <div className="  flex flex-col md:flex-row gap-6 items-start md:items-center">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="offlineMode" onChange={handleChange} />
          <span className="ml-2">Enable Offline Mode</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="consent" onChange={handleChange} required />
          <span className="ml-2">I consent to data sharing</span>
        </label>
      </div>

      <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
        Register & Proceed
      </button>
         <p className="text-center text-sm text-gray-600">
          Already Done with  Registration <NavLink to='/login' className="text-green-700 font-medium hover:underline"> Login Yourself</NavLink>
        </p>
    </motion.form>
     
    
  </>):(
        <DashboardRouter role={formData.role}/>
    )}</div>
    </>
  );
}

