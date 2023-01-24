import React from 'react'

const Spinner = () => {
  return (
      <div className="fixed left-[50%] right-[50%] top-[50%] bottom-[50%] items-center bg-white-500 w-screen  h-screen">
        <div className="w-24 h-24 border-8 rounded-full border-blue-500 border-t-8 border-t-green-500 fixed  animate-spin">
        </div>
      </div>
  )
}
// @keyframes spinner {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
//   .loading-spinner {
//     width: 50px;
//     height: 50px;
//     border: 10px solid #f3f3f3; /* Light grey */
//     border-top: 10px solid #383636; /* Black */
//     border-radius: 50%;
//     animation: spinner 1.5s linear infinite;
//   }

export default Spinner