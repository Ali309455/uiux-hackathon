import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="border-t border-gray-200  px-[300px] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px] py-8">
//       <div className="flex flex-col">
//         <div className="flex flex-wrap gap-8 items-center justify-between">
//           {/* Logo and Description */}
//           <div className="flex flex-col items-start mb-6 lg:mb-0 flex-1 ">
//             <div className="flex gap-3 max-[750px]:gap-1 items-center justify-start max-[750px]:flex-col">
//               <img src="/logo.png" alt="logo" className="h-10 w-auto " />
//               <p className="font-medium text-xl">Comforty</p>
//             </div>
//             <p className="text-gray-600 mt-4 max-w-sm text-base">
//               Vivamus tristique odio sit amet velit semper, eu posuere turpis
//               interdum. Cras egestas purus.
//             </p>
//             <div className="flex max-[440px]:flex-col-reverse items-center mt-4 ">
//               <div className="flex">
//               <Link href="#" className="hover:text-blue-600">
//                 <img src="/facebook.png" alt="facebook" className="h-6 w-6" />
//               </Link>
//               <Link href="#" className="hover:text-blue-600">
//                 <img src="/twitter.png" alt="twitter" className="h-6 w-6" />
//               </Link>
//               </div>
//               <div className="flex">
//               <Link href="#" className="hover:text-blue-600">
//                 <img src="/instagram.png" alt="instagram" className="h-6 w-6" />
//               </Link>
//               <Link href="#" className="hover:text-blue-600">
//                 <img src="/pinterest.png" alt="pinterest" className="h-6 w-6" />
//               </Link>
//               <Link href="#" className="hover:text-blue-600">
//                 <img src="/yt.png" alt="youtube" className="h-6 w-6" />
//               </Link>
//               </div>
//             </div>
//           </div>

//           {/* Category Section */}
//           <div className="flex flex-col items-start mb-6 lg:mb-0 flex-1">
//             <h4 className="text-sm font-medium text-gray-600 mb-4">CATEGORY</h4>
//             <ul className="text-gray-600 space-y-2">
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Sofa
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Armchair
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Wing Chair
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="hover:text-blue-600 text-blue-600 underline"
//                 >
//                   Desk Chair
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Wooden Chair
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Park Bench
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Support Section */}
//           <div className="flex flex-col items-start mb-6 lg:mb-0 flex-1">
//             <h4 className="text-sm font-medium text-gray-600 mb-4">SUPPORT</h4>
//             <ul className="text-gray-600 space-y-2">
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Help & Support
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Terms & Conditions
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-blue-600">
//                   Help
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter Section */}
//           <div className="flex flex-col items-start flex-1">
//             <h4 className="text-sm font-medium text-gray-600 mb-4">
//               NEWSLETTER
//             </h4>
//             <form className="flex max-[1350px]:flex-col  gap-3 w-full">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="border border-gray-300 p-2 rounded-lg w-full md:flex-1"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#029FAE] text-white py-2 px-4 rounded-lg hover:bg-[#2eb7c4]"
//               >
//                 Subscribe
//               </button>
//             </form>
//             <p className="text-gray-600 mt-4 text-sm max-w-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//               tincidunt erat et enim.
//             </p>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-gray-200 mt-8 pt-4 flex flex-wrap items-center justify-between text-sm text-gray-600">
//           <p>© 2021 - Blogy - Designed & Developed by Zakirsoft</p>
//           <div className="flex space-x-4">
//             <img
//               src="/paymentmethods.png"
//               alt="Payment Methods"
//               className="h-6 w-auto invert"
//             />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-8">
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-8 items-center justify-between">
          {/* Logo and Description */}
          <div className="flex flex-col items-start mb-6 lg:mb-0 flex-1">
            <div className="flex gap-3 max-750:gap-1 items-center justify-start max-750:flex-col">
              <img src="/logo.png" alt="logo" className="h-10 w-auto" />
              <p className="font-medium text-xl">Comforty</p>
            </div>
            <p className="text-gray-600 mt-4 max-w-sm text-base">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex max-440:flex-col-reverse items-center mt-4">
              <div className="flex">
                <Link href="#" className="hover:text-blue-600">
                  <img src="/facebook.png" alt="facebook" className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <img src="/twitter.png" alt="twitter" className="h-6 w-6" />
                </Link>
              </div>
              <div className="flex">
                <Link href="#" className="hover:text-blue-600">
                  <img src="/instagram.png" alt="instagram" className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <img src="/pinterest.png" alt="pinterest" className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <img src="/yt.png" alt="youtube" className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Category Section */}
          <div className="flex flex-col items-start mb-6 lg:mb-0 flex-1">
            <h4 className="text-sm font-medium text-gray-600 mb-4">CATEGORY</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Armchair
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Wing Chair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 text-blue-600 underline"
                >
                  Desk Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Wooden Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Park Bench
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex flex-col items-start mb-6 lg:mb-0 flex-1">
            <h4 className="text-sm font-medium text-gray-600 mb-4">SUPPORT</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-start flex-1">
            <h4 className="text-sm font-medium text-gray-600 mb-4">NEWSLETTER</h4>
            <form className="flex max-1350:flex-col gap-3 w-full">
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 p-2 rounded-lg w-full md:flex-1"
              />
              <button
                type="submit"
                className="bg-[#029FAE] text-white py-2 px-4 rounded-lg hover:bg-[#2eb7c4]"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 mt-4 text-sm max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat et enim.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-4 flex flex-wrap items-center justify-between text-sm text-gray-600">
          <p>© 2021 - Blogy - Designed & Developed by Zakirsoft</p>
          <div className="flex space-x-4">
            <img
              src="/paymentmethods.png"
              alt="Payment Methods"
              className="h-6 w-auto invert"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;