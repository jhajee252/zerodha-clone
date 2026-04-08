// // import React from "react";
// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
    
// //       <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#fff"}}>
// //         <div class="container p-2">
// //           <Link class="navbar-brand" to="/">
// //             <img src="media/image/logo.svg" alt="Logo" style={{width:"25%"}}/>
// //           </Link>
// //           <button
// //             class="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarSupportedContent"
// //             aria-controls="navbarSupportedContent"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span class="navbar-toggler-icon"></span>
// //           </button>
// //           <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
// //             <form class="d-flex" role="search">
// //                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //               <li class="nav-item">
// //                 <Link class="nav-link active" aria-current="page" to="/Signup">
// //                   Signup
// //                 </Link>
// //               </li>
// //               <li class="nav-item">
// //                 <Link class="nav-link  active" to="/about">
// //                   About
// //                 </Link>
// //               </li>
// //               <li class="nav-item">
// //                 <Link class="nav-link  active" to="/products">
// //                   Products
// //                 </Link>
// //               </li>
// //               <li class="nav-item">
// //                 <Link class="nav-link  active" to="/pricing">
// //                   Pricing
// //                 </Link>
// //               </li>
// //               <li class="nav-item">
// //                 <Link class="nav-link  active" to="/support">
// //                   Support
// //                 </Link>
// //               </li>
// //               {/* <li class="nav-item">
// //                 <Link class="nav-link  active" href="#">
// //                 <i class="fa fa-bars" aria-hidden="true"></i>
// //                 </Link>
// //               </li> */}
             
              
// //             </ul>
// //             </form>
// //           </div>
// //         </div>
// //       </nav>
// //   );
// // }

// // export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
//       <div className="container p-2">

//         <Link className="navbar-brand" to="/">
//           <img src="media/image/logo.svg" alt="Logo" style={{ width: "25%" }} />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

//             <li className="nav-item">
//               <Link className="nav-link active" to="/signup">
//                 Signup
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link active" to="/about">
//                 About
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link active" to="/products">
//                 Products
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link active" to="/pricing">
//                 Pricing
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link active" to="/support">
//                 Support
//               </Link>
//             </li>

//           </ul>

//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom shadow-sm" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">

        <Link className="navbar-brand fw-bold" to="/">
          <img src="media/image/logo.svg" alt="Logo" style={{ width: "120px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/products">Products</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/pricing">Pricing</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/support">Support</Link>
  </li>

  {/* ✅ Login Button */}
  <li className="nav-item ms-3">
    <Link className="btn btn-outline-primary px-4" to="/login">
      Login
    </Link>
  </li>

  {/* 🔥 Signup Button */}
  <li className="nav-item ms-2">
    <Link
      className="btn btn-primary px-4"
      to="/signup"
      style={{ backgroundColor: "#387ed1", border: "none" }}
    >
      Sign Up
    </Link>
  </li>

</ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;