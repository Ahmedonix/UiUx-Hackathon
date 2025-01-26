import Services from '@/Components/Services';
import React from 'react'
import Image from 'next/image'

const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bf0c2746b722cca988e153eb79f0242a5480f5f075590ead7f1e0e234a196d7?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
      title: "Address",
      details: ["236 5th SE Avenue, New York NY10000, United States"]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/965f940ccf0f9d743d9a86a6bacc9c20ea4888179449f49b69195f878b92859f?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
      title: "Phone",
      details: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6820743577a1d855241b800728c731a56ed866e3ff7e2f2b6342dd94211de69?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
      title: "Working Time",
      details: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"]
    }
  ];

  const formInputs = [
    { label: "Your name", type: "text", placeholder: "Abc", id: "name" },
    { label: "Email address", type: "email", placeholder: "Abc@def.com", id: "email" },
    { label: "Subject", type: "text", placeholder: "This is an optional", id: "subject" },
    { label: "Message", type: "textarea", placeholder: "Hi! i'd like to ask about", id: "message" }
  ];

const page = () => {
  return (
    <div className="flex flex-col rounded-none">
    <div className="flex flex-col items-center px-20 pt-24 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1058px] max-md:max-w-full">
        <h1 className="text-4xl font-semibold text-black text-center max-md:text-3xl">Get In Touch With Us</h1>
        <p className="mt-2 text-base text-center text-neutral-400 w-[644px] max-md:max-w-full max-md:px-5">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <div className="self-stretch mt-3.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[38%] max-md:w-full max-md:mb-8">
              <div className="flex flex-col items-start px-12 pt-12 pb-24 mx-auto mt-16 w-full text-black bg-white max-md:px-5 max-md:mt-10">
                {contactData.map((info, index) => (
                  <div key={index} className="flex gap-8 mt-14 max-md:mt-10 max-md:ml-2">
                    <Image
                      src={info.icon}
                      alt=""
                      className="object-contain shrink-0 self-start aspect-square w-[30px]"
                      width={500}
          height={500}
                    />
                    <div className="flex flex-col">
                      <div className="self-start text-2xl font-medium">{info.title}</div>
                      <div className="text-base">
                        {info.details.map((detail, index) => (
                          <React.Fragment key={index}>
                            {detail}
                            <br />
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <form className="flex flex-col grow items-start px-14 pt-28 pb-16 w-full text-base text-black bg-white max-md:px-5 max-md:pt-24 max-md:mt-8 max-md:max-w-full">
                {formInputs.map((input, index) => (
                  <div key={index} className="mb-6 w-full">
                    <label htmlFor={input.id} className="font-medium block mb-2">{input.label}</label>
                    {input.type === "textarea" ? (
                      <textarea
                        id={input.id}
                        className="self-stretch px-8 pt-7 pb-16 mt-2 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:mr-1 max-md:max-w-full"
                        placeholder={input.placeholder}
                      />
                    ) : (
                      <input
                        type={input.type}
                        id={input.id}
                        className="self-stretch px-8 py-7 mt-2 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"
                        placeholder={input.placeholder}
                      />
                    )}
                  </div>
                ))}
  
                <button type="submit" className="px-16 pt-3.5 pb-7 mt-12 max-w-full text-white whitespace-nowrap bg-cyan-600 rounded-md border border-yellow-600 border-solid w-[237px] max-md:px-5 max-md:mt-10 max-md:w-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Services/>
  </div>
  
  )
}

export default page