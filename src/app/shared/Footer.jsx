const Footer = () => {
  return (
    <div className="px-5 py-32 border-t border-[#e4e8ec] dark:border-[#292e43]">
      <footer className="flex sm:justify-around justify-center flex-wrap gap-10 sm:footer-horizontal container mx-auto ">
        <nav className="max-w-80 flex flex-col gap-1.5">
          <h6 className="uppercase font-semibold text-base dark:text-white">Contact Info</h6>
          <a className="link link-hover">Call Us: +880 1869618216</a>
          <a className="link link-hover">Address: Uttara, Dhaka, Bangladesh</a>
          <a className="link link-hover">Mail Us: alpha.mind@outlook.com</a>
        </nav>

        <nav className="max-w-80 flex flex-col gap-1.5">
          <h6 className="uppercase font-semibold text-base dark:text-white">Important Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>

        <nav className="max-w-80 flex flex-col gap-1.5">
          <h6 className="uppercase font-semibold text-base dark:text-white">Follow Us</h6>
          <a className="link link-hover">Github</a>
          <a className="link link-hover">Youtube</a>
          <a className="link link-hover">Linkedin</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
