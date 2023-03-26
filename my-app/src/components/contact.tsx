import React, { useState, useEffect } from "react";
import img from "../assets/images/contact_img.png";

const Contact: React.FC = () => {

  const [inputValueFirstName, setInputValueFirstName] = useState('');
  const [inputValueLastName, setInputValueLastName] = useState('');
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [inputValueSubject, setInputValueSubject] = useState('');

  function containsOnlyLetters(input: string): boolean {
    const regex = /^[a-zA-Z\s]*$/; // regular expression to match only letters (upper and lowercase) and spaces
    return regex.test(input);
  }

  function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const firstName = event.target.value;
    if (containsOnlyLetters(firstName)) {
      setInputValueFirstName(firstName);
    }
  }

  function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const lastName = event.target.value;
    if (containsOnlyLetters(lastName)) {
      setInputValueLastName(lastName);
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const email = event.target.value;
    setInputValueEmail(email);
  }

  function handleSubjectChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const subject = event.target.value;
    setInputValueSubject(subject);
  }

  function handleClear() {
    setInputValueEmail('');
    setInputValueFirstName('');
    setInputValueLastName('');
    setInputValueSubject('');
  }

  useEffect(() => {
    return () => {
      handleClear();
    };
  }, []);

  return (
    <>
      <div className={"contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full"}>
        <div className={"wrapper flex justify-center py-16 gap-60 lg:py-12"}>
          <div style={{ transform: "translateX(-100px) translateY(-45px)" }} className={"imgbox lg:hidden"}>
            <img className={"w-[525px] h-full"} src={img} alt={""} />
          </div>
          <div className={"content-box"}>
            <h1 className={"text-white font-bold text-4xl"}>Reach me through here !</h1>
            <form action={"https://api.web3forms.com/submit"} method={"POST"} id="contactForm" className={"flex flex-col"}>
              <div className={"flex gap-4 py-3"}>
                <input type={"hidden"} name="access_key" value={"aef181bc-6336-4b43-837e-4ed31cb0313a"} />
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Web3Forms"
                />
                <input
                  type="hidden"
                  name="redirect"

                  value="https://web3forms.com/success"
                />
                <input type="hidden" name="from_name" value="Portfolio Website Reaching Out"></input>
                <input type="hidden" name="User Overview" value={`Name: ${inputValueFirstName} ${inputValueLastName}\nEmail: ${inputValueEmail}\n\nSubject:\n${inputValueSubject}`} />
                <input type="checkbox" name="botcheck" id="" hidden />
                <input
                  className={"bg-transparent h-16 rounded-2xl  border-[2px] border-white pl-4 text-white placeholder-white lg:w-36"}
                  type={"text"}
                  placeholder={"First Name"}
                  id={"userFirstName"}
                  value={inputValueFirstName}
                  onChange={handleFirstNameChange}
                  required
                />
                <input
                  className={"bg-transparent h-16  rounded-2xl  border-[2px] border-white pl-4 text-white placeholder-white  lg:w-36"}
                  type={"text"}
                  placeholder={"Last Name"}
                  id={"userLastName"}
                  value={inputValueLastName}
                  onChange={handleLastNameChange}
                  required
                />
              </div>
              <div className="flex  py-4  ">
                <input
                  className={"bg-transparent h-16 container rounded-2xl  border-[2px] border-white pl-4 text-white placeholder-white  lg:w-36"}
                  type="email"
                  placeholder="you@company.com"
                  id="userEmail"
                  value={inputValueEmail}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <textarea
                className="bg-transparent max-h-40 rounded-2xl border-[2px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                placeholder="Message"
                id="userMessage"
                value={inputValueSubject}
                onChange={handleSubjectChange}
                maxLength={275}
                required
              ></textarea>
              <button className="bg-[linear-gradient(180deg,#b004b0,#38097a)] text-white border-white border-[3px] py-[16px] rounded-lg px-8 my-8 w-42 font-bold " type="submit">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
