function App() {
  return (
      <div className="flex">
        <div className="h-screen w-3/12 bg-white">
          <img className="mx-auto mt-4" src="https://i.imgur.com/Ms0mprS.png" alt="Dofi"></img>
        </div>
        <div className="p-4 h-screen w-9/12 bg-gray-100">
          <h1 className="text-gray-800 font-semibold text-xl">Banking Dashboard</h1>
          <h4 className="mt-5 text-gray-400 font-regular text-sm">Total avaliable balance</h4>
          <h1 className="text-gray-800 font-bold text-4xl">$859,568.0</h1>
          <h3 className="mt-5 mb-3 text-gray-600 font-semibold text-m">Accounts</h3>
          <div className="space-y-4 ml-2">
            <div className="p-3 flex flex-col bg-white rounded-xl">
              <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
              <span className="text-gray-800">Account #1</span>
              <span className="text-2xl font-bold text-gray-800">$439,568.0</span>
            </div>
            <div className="p-3 flex flex-col bg-white rounded-xl">
              <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
              <span className="text-gray-800">Account #1</span>
              <span className="text-2xl font-bold text-gray-800">$439,568.0</span>
            </div>
          </div>
          <h3 className="mt-5 mb-3 text-gray-600 font-semibold text-m">Recent Transactions</h3>
          <div className="space-y-4 ml-2">
          <div className="p-3 space-x-2 flex flex-row items-center bg-white rounded-xl">
              <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-bold">Starbucks</span>
                <span className="text-gray-700 text-sm font-light">Food/Beverages</span>
                <div className="text-gray-800 text-xs font-medium">3.99$</div>
              </div>
            </div>
            <div className="p-3 space-x-2 flex flex-row items-center bg-white rounded-xl">
              <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-bold">Starbucks</span>
                <span className="text-gray-700 text-sm font-light">Food/Beverages</span>
                <div className="text-gray-800 text-xs font-medium">3.99$</div>
              </div>
            </div>
          </div>
          <h3 className="mt-5 mb-3 text-gray-600 font-semibold text-m">Your Cashflow</h3>
        </div>
      </div>
  );
}

export default App;
