function Footer(): JSX.Element {
  return (
    <>
      <div className="footer border-y-4 border-black bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Benko</h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://twitter.com/MatijaBenko_" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.instagram.com/benzby/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/MatijaBenko" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCDWwfmz-xKo0uuImx3Bn6mA"
              target="_blank" rel="noreferrer"
            >
              <i className="fa-brands fa-youtube border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
