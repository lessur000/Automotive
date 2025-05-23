const AppointmentForm = () => {
  return (
    <div className="bg-white max-w-[500px] mx-auto rounded-xl">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 m-5 p-5">
        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-black">FULL NAME</label>
            <input
              type="text"
              className="w-full  text-white p-3 border border-gray-600 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 text-black">PHONE NUMBER</label>
            <input
              type="tel"
              className="w-full  text-white p-3 border border-gray-600 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 text-black">YEAR AND MODEL</label>
            <input
              type="text"
              className="w-full  text-white p-3 border border-gray-600 rounded"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-black">EMAIL ADDRESS</label>
            <input
              type="email"
              className="w-full  text-white p-3 border border-gray-600 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 text-black">LOCATION</label>
            <input
              type="text"
              className="w-full  text-white p-3 border border-gray-600 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 text-black">CAR ODOMETER</label>
            <input
              type="text"
              className="w-full  text-white p-3 border border-gray-600 rounded"
            />
          </div>
        </div>

        {/* Full width textarea */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-black">
            LEAVE ANY EXTRA INFORMATION...
          </label>
          <textarea className="w-full  text-white p-3 border border-gray-600 rounded h-32"></textarea>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded transition-colors"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
