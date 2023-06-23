// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import '../UserProfilePage.css';

// const UserProfilePage = ({ name }) => {
//   const initialValues = {
//     name: name || '',
//     username: '',
//     bio: '',
//     location: '',
//     photo: null,
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required('Required'),
//     username: Yup.string().required('Required'),
//     bio: Yup.string(),
//     location: Yup.string(),
//     photo: Yup.mixed(),
//   });

//   const handleSubmit = (values) => {
//     // Here you can handle form submission, e.g., send data to an API
//     console.log(values);
//   };

//   return (
//     <div className='auth-form-container'>
//       <h1>User Profile</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <div className="form-control">
//             <div className="photo-upload-container">
//               <Field type="file" id="photo" name="photo" style={{ display: 'none' }} />
//               <ErrorMessage name="photo" component="div" />
//               {initialValues.photo ? (
//                 <img src={URL.createObjectURL(initialValues.photo)} alt="Uploaded" className="uploaded-photo" />
//               ) : (
//                 <div className="empty-photo-circle">
//                   <label htmlFor="photo" className="upload-icon">
//                     <span className="material-icons-outlined">sports_tennis</span>
//                   </label>
//                 </div>
//               )}
//             </div>
//           <div className="form-control">        
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" />
//             <ErrorMessage name="name" component="div" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="username">Username:</label>
//             <Field type="text" id="username" name="username"/>
//             <ErrorMessage name="username" component="div" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="bio">Bio:</label>
//             <Field as="textarea" id="bio" name="bio" />
//             <ErrorMessage name="bio" component="div" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="location">Location:</label>
//             <Field type="text" id="location" name="location" />
//             <ErrorMessage name="location" component="div" />
//           </div>
//           <button className='save-button'>
//             save
//           </button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default UserProfilePage;
