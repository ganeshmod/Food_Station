import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ValidateForm from "./ValidateForm";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

export default function SignUp() {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adharNumber: "",
    dateOfBirth: "",
    role: "",
    image: null,
    password: "",
    gender: "",
  });
  const handleChangeSignUp = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
    setPreview(URL.createObjectURL(file));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const checkValidation = ValidateForm(formData);

    if (Object.keys(checkValidation).length > 0) {
      setError(checkValidation);
    }
    if (Object.keys(checkValidation).length === 0) {
      setError(null);
      setLoading(true);
      toast.success("Signup Successful!");
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        adharNumber: "",
        dateOfBirth: "",
        role: "",
        image: null,
        password: "",
        gender: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-[#5c264c] p-8">
        <h1 className="text-2xl font-bold text-[#5c264c] text-center">
          Create Account
        </h1>
        <p className="text-sm text-slate-500 text-center mt-1 mb-6">
          Join Food Station as a team member
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image upload */}
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="image" className="cursor-pointer">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#5c264c] overflow-hidden flex items-center justify-center bg-gray-100">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[#5c264c] text-xs text-center px-2">
                    Upload Photo
                  </span>
                )}
              </div>
            </label>

            <input
              id="image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChangeSignUp}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
            <p className="text-red-500 text-xs mt-1">{error?.name}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChangeSignUp}
              value={formData.email}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
            <p className="text-red-500 text-xs mt-1">{error?.email}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={handleChangeSignUp}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
            <p className="text-red-500 text-xs mt-1">{error?.phone}</p>
          </div>

          {/* Aadhaar */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Aadhaar Card Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="adharNumber"
              placeholder="12-digit Aadhaar number"
              value={formData.adharNumber}
              onChange={handleChangeSignUp}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
            <p className="text-red-500 text-xs mt-1">{error?.adharNumber}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChangeSignUp}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
            <p className="text-red-500 text-xs mt-1">{error?.password}</p>
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Date of Birth <span className="text-red-500">*</span>
            </label>

            <DatePicker
              selected={
                formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
              }
              onChange={(date) =>
                handleChangeSignUp({
                  target: {
                    name: "dateOfBirth",
                    value: date ? date.toISOString().split("T")[0] : "",
                  },
                })
              }
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              maxDate={new Date()}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              wrapperClassName="w-full"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
            <p className="text-red-500 text-xs mt-1">{error?.dateOfBirth}</p>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChangeSignUp}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] bg-white text-[#5c264c]"
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="chef">Chef</option>
            </select>
            <p className="text-red-500 text-xs mt-1">{error?.role}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChangeSignUp}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] bg-white text-[#5c264c]"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className="text-red-500 text-xs mt-1">{error?.gender}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5c264c] hover:bg-[#4a1e3d] text-white font-medium rounded-lg py-2.5 mt-2 transition-colors"
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
}

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signupSchema } from "../schemas/signupSchema";

// export default function SignUp() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//   resolver: zodResolver(signupSchema),
// });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-[#5c264c] p-8">
//         <h1 className="text-2xl font-bold text-[#5c264c] text-center">
//           Create Account
//         </h1>
//         <p className="text-sm text-slate-500 text-center mt-1 mb-6">
//           Join Food Station as a team member
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Image upload */}
//           {/* <div className="flex flex-col items-center gap-2">
//             <label htmlFor="image" className="cursor-pointer">
//               <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#5c264c] overflow-hidden flex items-center justify-center bg-gray-100">
//                 {preview ? (
//                   <img
//                     src={preview}
//                     alt="Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-[#5c264c] text-xs text-center px-2">
//                     Upload Photo
//                   </span>
//                 )}
//               </div>
//             </label>

//             <input
//               id="image"
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </div> */}

//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               {...register("name")}
//               className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">
//               Email
//             </label>
//             <input
//               {...register("email")}
//               type="email"
//               placeholder="you@example.com"
//               className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">
//               Phone Number
//             </label>
//             <input
//               {...register("phone")}
//               placeholder="10-digit mobile number"

//               className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
//             />
//           </div>

//           {/* Aadhaar */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">
//               Aadhaar Card Number
//             </label>
//             <input
//               type="text"
//               {...register("adharNumber")}
//               placeholder="12-digit Aadhaar number"

//               className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
//             />
//           </div>

//           {/* DOB */}
//           {/* <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">
//               Date of Birth
//             </label>

//             <DatePicker
//               selected={
//                 formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
//               }
//               onChange={(date) =>
//                 handleChangeSignUp({
//                   target: {
//                     name: "dateOfBirth",
//                     value: date ? date.toISOString().split("T")[0] : "",
//                   },
//                 })
//               }
//               dateFormat="dd/MM/yyyy"
//               placeholderText="DD/MM/YYYY"
//               maxDate={new Date()}
//               showMonthDropdown
//               showYearDropdown
//               dropdownMode="select"
//               wrapperClassName="w-full"
//               className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
//             />
//           </div> */}

//           {/* Role */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">
//               Role
//             </label>
//             <select
//              {...register("Role")}

//               className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] bg-white text-[#5c264c]"
//             >
//               <option value="">Select role</option>
//               <option value="admin">Admin</option>
//               <option value="chef">Chef</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#5c264c] hover:bg-[#4a1e3d] text-white font-medium rounded-lg py-2.5 mt-2 transition-colors"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
