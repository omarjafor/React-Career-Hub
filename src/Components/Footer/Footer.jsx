const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside className="text-left">
                <h2 className="font-bold text-3xl text-black">CareerHub</h2>
                <p className="my-5">There are many variations of passages <br></br>
                of Lorem Ipsum , but the majority have <br></br>
                suffered alteration in some form.</p>
                
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <header className="footer-title">Contact</header>
                <a className="link link-hover">524 Broadway , NYC</a>
                <a className="link link-hover">+1 777 - 978 - 5570</a>
            </nav>
        </footer>
    );
};

export default Footer;