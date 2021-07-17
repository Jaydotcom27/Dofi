import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
// import { IconContext } from "react-icons";
// import {
//   IoIosArrowUp,
//   IoLogoBitcoin,
//   IoIosHome,
//   IoIosCard,
//   IoIosSettings,
// } from "react-icons/io";
// import { GrTransaction } from "react-icons/gr";

function App() {
  return (
    <div>
      <div className="font-Montserrat p-10">
        <h1 className="text-5xl font-bold">$254,107.22</h1>
        <h2 className="text-sm font-light text-gray-400">
          Total available balance
        </h2>
        <div className="flex mt-5 mb-3 text-2xl font-semibold">
          <h1 className="mr-3">Accounts</h1>
          <span>+</span>
        </div>
        <div className="px-3 flex justify-items-stretch overflow-auto">
          <div className="account bg-pink-400 rounded-lg p-5 mr-4 ">
            <h2 className="text-xl text-white font-medium">Savings</h2>
            <h2 className="text-2xl text-white font-bold">112,564.20</h2>
          </div>
          <div className="account bg-pink-400 rounded-lg p-5 mr-4 ">
            <h2 className="text-xl text-white font-medium">Savings</h2>
            <h2 className="text-2xl text-white font-bold">112,564.20</h2>
          </div>
          <div className="account bg-pink-400 rounded-lg p-5 mr-4">
            <h2 className="text-xl text-white font-medium">Savings</h2>
            <h2 className="text-2xl text-white font-bold">112,564.20</h2>
          </div>
        </div>
        <h1 className="mr-3 mt-5 mb-3 text-2xl font-semibold">
          Recent Transactions
        </h1>
        <div>
          <div className="transaction flex w-full justify-start items-center mb-2 pb-3 border-b-2">
            <div className="flex items-center">
              <img
                className="rounded-full h-7 w-7 mr-2 "
                src="http://placecorgi.com/260/180"
                alt="logo"
              />
              <h2>Starbucks Coffe</h2>
            </div>
            <h3 className="ml-auto text-green-500">6.99$</h3>
          </div>
          <div className="transaction flex w-full justify-start items-center mb-2 pb-3 border-b-2">
            <div className="flex items-center">
              <img
                className="rounded-full h-7 w-7 mr-2 "
                src="http://placecorgi.com/260/180"
                alt="logo"
              />
              <h2>asdss Coffe</h2>
            </div>
            <h3 className="ml-auto text-red-500">6.99$</h3>
          </div>
          <div className="transaction flex w-full justify-start items-center mb-2 pb-3 border-b-2">
            <div className="flex items-center">
              <img
                className="rounded-full h-7 w-7 mr-2 "
                src="http://placecorgi.com/260/180"
                alt="logo"
              />
              <h2>Starbucks Coffe</h2>
            </div>
            <h3 className="ml-auto text-green-500">6.99$</h3>
          </div>
        </div>
        <div className="flex mt-5  text-2xl font-semibold">
          <h1 className="mr-3">Your Cashflow</h1>
          <span>^</span>
        </div>
        <h2 className="text-sm font-light text-gray-400 mb-4">
          In the last month
        </h2>
        <div className="space-y-4 ml-3">
          <div>
            <h4 className="my-1 font-regular text-sm">Income</h4>
            <ProgressBar
              baseBgColor="#fff"
              bgColor="#A0DEA4"
              completed={60}
              height="16px"
              labelSize="10px"
            />
          </div>
          <div>
            <h4 className="my-1 font-regular text-sm">Expenses</h4>
            <ProgressBar
              baseBgColor="#fff"
              bgColor="#ED969D"
              completed={40}
              height="16px"
              labelSize="10px"
            />
          </div>
          <div>
            <h4 className="my-1 font-regular text-sm">Expenses</h4>
            <ProgressBar
              baseBgColor="#fff"
              bgColor="#8CB8E2"
              completed={50}
              height="16px"
              labelSize="10px"
            />
          </div>
          <div className="flex">
            <h2 className="font-bold mr-1">$254,107.22</h2>
            <h3 className="text-gray-400 font-light">above</h3>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 h-16 w-full fixed bottom-0 flex justify-around items-center">
        <div className="bg-gray-200 h-3 w-3 rounded-md p-5 flex items-center "></div>
        <div className="bg-gray-200 h-3 w-3 rounded-md p-5 flex items-center "></div>
        <div className="bg-pink-200 h-3 w-3 rounded-md p-5 flex items-center "></div>
        <div className="bg-gray-200 h-3 w-3 rounded-md p-5 flex items-center "></div>
        <div className="bg-gray-200 h-3 w-3 rounded-md p-5 flex items-center "></div>
      </div>
    </div>
  );
}

export default App;

// <div className="flex font-Montserrat">
//   <div className="h-screen w-3/12 flex flex-col items-center bg-white">
//     <img
//       className="my-4"
//       src="https://i.imgur.com/Ms0mprS.png"
//       alt="Dofi"
//     ></img>
//     <IconContext.Provider value={{ color: "black" }}>
//       <div className="bg-gray-100 rounded-lg p-5 mb-4">
//         <IoIosHome />
//       </div>
//       <div className="bg-gray-100 rounded-lg p-5 mb-4">
//         <IoIosCard />
//       </div>
//       <div className="bg-gray-100 rounded-lg p-5 mb-4">
//         <GrTransaction />
//       </div>
//       <div className="bg-gray-100 rounded-lg p-5 mb-4">
//         <IoIosSettings />
//       </div>
//       <div className="bg-gray-100 rounded-lg p-5 mb-4">
//         <IoLogoBitcoin />
//       </div>
//       <div className="mt-auto mb-4">
//         <img
//           className="rounded-full"
//           src="http://placecorgi.com/60/60"
//           alt="profile"
//         />
//       </div>
//     </IconContext.Provider>
//   </div>
//   <div className="p-4 w-9/12 h-screen overflow-scroll bg-gray-100">
//     <h1 className="text-gray-800 font-semibold text-xl">
//       Banking Dashboard
//     </h1>
//     <h4 className="mt-5 text-gray-400 font-regular text-sm">
//       Total avaliable balance
//     </h4>
//     <h1 className="text-gray-800 font-bold text-4xl">$859,568.0</h1>
//     <h3 className="mt-5 mb-3 text-gray-600 font-semibold text-m">
//       Accounts
//     </h3>
//     <div className="space-y-4 ml-2">
//       <div className="p-3 flex flex-col bg-white rounded-xl shadow-md">
//         <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
//         <span className="text-gray-800">Account #1</span>
//         <span className="text-2xl font-bold text-gray-800">$439,568.0</span>
//       </div>
//       <div className="p-3 flex flex-col bg-white rounded-xl shadow-md">
//         <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
//         <span className="text-gray-800">Account #1</span>
//         <span className="text-2xl font-bold text-gray-800">$439,568.0</span>
//       </div>
//     </div>
//     <h3 className="mt-5 mb-3 text-gray-600 font-semibold text-m">
//       Recent Transactions
//     </h3>
//     <div className="space-y-4 ml-2">
//       <div className="p-3 space-x-2 flex flex-row items-center bg-white rounded-xl shadow-md">
//         <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
//         <div className="flex flex-col">
//           <span className="text-gray-800 font-bold">Starbucks</span>
//           <span className="text-gray-700 text-sm font-light">
//             Food/Beverages
//           </span>
//           <div className="text-gray-800 text-xs font-medium">3.99$</div>
//         </div>
//       </div>
//       <div className="p-3 space-x-2 flex flex-row items-center bg-white rounded-xl shadow-md">
//         <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
//         <div className="flex flex-col">
//           <span className="text-gray-800 font-bold">Starbucks</span>
//           <span className="text-gray-700 text-sm font-light">
//             Food/Beverages
//           </span>
//           <div className="text-gray-800 text-xs font-medium">3.99$</div>
//         </div>
//       </div>
//     </div>
//     <div className="flex items-center space-x-2">
//       <h3 className="mt-5 mb-3 text-gray-600 font-semibold text-m">
//         Your Cashflow
//       </h3>
//       <IconContext.Provider value={{ color: "green" }}>
//         <IoIosArrowUp />
//       </IconContext.Provider>
//     </div>
//     <div className="space-y-4 ml-2">
//       <div>
//         <h4 className="my-2 text-gray-400 font-regular text-sm">Income</h4>
//         <ProgressBar baseBgColor="#fff" bgColor="green" completed={60} />
//       </div>
//       <div>
//         <h4 className="my-2 text-gray-400 font-regular text-sm">
//           Expenses
//         </h4>
//         <ProgressBar baseBgColor="#fff" bgColor="red" completed={40} />
//       </div>
//     </div>
//   </div>
// </div>
