import React from "react";

const Career = () => {
  return (
    <section className="services-section bg-white">
      <div className="container-fluid mt-5 bg-light bg-gradient shadow">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{ backgroundColor: "#29a469" }}
        >
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center">Career</h1>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
        <h1 className="text-5xl text-success font-bold text-primary mb-3">
          Find a better job for you
        </h1>
        <p className="text-lg text-black/70 mb-8">
          Doloremque debitis assumenda porro! Repudiandae voluptas possimus
          quisquam
        </p>
        <form>
          <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
            <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset md:w-1/3 w-full">
              <input
                type="text"
                name="title"
                placeholder="What position are you looking for?"
                id="title"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset md:w-1/2 w-full">
              <input
                type="text"
                name="title"
                placeholder="Location"
                id="title"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              />
            </div>

            <button
              type="submit"
              className="py-2 px-8 md:rounded-s-none rounded primaryBtn"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Career;
