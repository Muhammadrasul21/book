import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#fcf2e7]">
      <div className="container mx-auto max-w-[1140px] p-4">
        <div className="flex flex-col items-center mb-8">
          <p className="font-medium text-[#DC780B] pt-[115px] tracking-[20%]">
            CONTACT{" "}
          </p>
          <h2 className="font-bold text-3xl w-[600px] text-center mt-4 mb-[47px]">
            Food Stalls with Persons but also specialized equipment, Skills to
            manage.
          </h2>
          <div className="flex bg-white w-[750px] h-[75px] mb-[100px] rounded-md ">
            <input
              className="bg-inherit px-5 flex-1 outline-none rounded-md"
              type="text"
              placeholder="Enter your message"
            />
            <button className="w-[156px] h-[75px] rounded-md bg-[#DC780B] text-white hover:bg-white hover:text-[#DC780B] hover:border hover:border-[#dc780b] transition-all duration-300 ease-in-out">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
