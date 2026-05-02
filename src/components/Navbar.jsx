// import React from "react";

// export default function Navbar({ theme, toggleTheme }) {
//   return (
//     <nav className="navbar">
//       <div className="nav-logo">&lt;AMIT CHANDRA DAS /&gt;</div>
//       <ul className="nav-links">
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#skills">Skills</a>
//         </li>
//         <li>
//           <a href="#projects">Projects</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       <button
//         className="theme-toggle hidden md:inline-block"
//         onClick={toggleTheme}
//       >
//         {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
//       </button>
//       {/* sidebar */}
//       <div className="inline-block md:hidden">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col">
//           {/* Navbar */}
//           <div className="w-full">
//             <div className="flex-none lg:hidden">
//               <label
//                 htmlFor="my-drawer-2"
//                 aria-label="open sidebar"
//                 className="btn btn-square btn-ghost"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   className="inline-block h-6 w-6 stroke-current"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   ></path>
//                 </svg>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="drawer-side">
//           <label
//             htmlFor="my-drawer-2"
//             aria-label="close sidebar"
//             className="drawer-overlay"
//           ></label>
//           <ul className="menu bg-base-200 min-h-full w-50 p-4 drawer-info ">
//             {/* Sidebar content here */}
//             <li>
//               <a href="#about" className="theme-toggle">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#skills" className="theme-toggle">
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a href="#projects" className="theme-toggle">
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="theme-toggle">
//                 Contact
//               </a>
//             </li>
//             <li>
//               {" "}
//               <button className="theme-toggle" onClick={toggleTheme}>
//                 {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
