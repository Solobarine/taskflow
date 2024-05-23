const Footer = () => {
  return (
    <div className="w-full px-3 sm:px-20 flex items-start gap-10 justify-between font-semibold flex-wrap py-10 bg-white">
      <h2 className="text-2xl font-bold text-blue-500">tasKFlow</h2>
      <ul className="grid gap-2">
        <li>Features</li>
        <li>Pricing</li>
        <li>Company</li>
        <li>Integration</li>
      </ul>
      <ul className="grid gap-2">
        <li>Contact</li>
        <li>FAQ</li>
        <li>Privacy Policy</li>
        <li>Terms and Condition</li>
      </ul>
      <ul className="grid gap-2">
        <li className="text-lg">Stay in Touch</li>
        <li>(345) 555-0234</li>
        <li>support@taskflow.com</li>
        <li>3433 Dellview, California, USA</li>
      </ul>
      <div className="grid gap-5">
        <p className="font-semibold text-lg">Subscribe to Our Newsletter</p>
        <div className="grid relative">
          <input
            type="text"
            className="p-1 px-3 rounded-full border-2 border-zinc-300 outline-zinc-300"
          />
          <button className="absolute right-0.5 px-3 py-1 top-1 rounded-full font-semibold bg-cyan-100 shadow-sm text-sm">
            Join
          </button>
        </div>
        <div className="flex items-center gap-3 p-2">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
