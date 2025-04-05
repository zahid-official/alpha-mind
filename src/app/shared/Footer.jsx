const Footer = () => {
  return (
    <div className="px-5 pt-10 pb-32">
      <footer className="footer justify-around sm:footer-horizontal container mx-auto ">
        <nav>
          <h6 className="footer-title text-base">Contact Info</h6>
          <a className="link link-hover">Call Us: +8801816986263</a>
          <a className="link link-hover">Address: Rajshahi, Bangladesh</a>
          <a className="link link-hover">Mail Us: eshan@hablu-programmer.com</a>
        </nav>
        <nav>
          <h6 className="footer-title text-base">Important Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>
        <nav>
          <h6 className="footer-title text-base">Follow Us</h6>
          <a className="link link-hover">Github</a>
          <a className="link link-hover">Youtube</a>
          <a className="link link-hover">Linkedin</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
