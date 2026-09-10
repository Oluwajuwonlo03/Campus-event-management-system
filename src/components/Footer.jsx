function Footer(){
    const discoverLinks = ["International Conferences", "Seminars", "Workshops", "Webinars", "Event Calendar"]
    const particpantLinks = ["create Account", "Sign-in", "Verify Certificate", "Privacy and my Data"]

    return(
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h3>FUOYE Events Management System</h3>
                    <p>A secure university-wide platform for events, conferences, seminars, workshops, webinars, attendance, engagement and verifiable digital credentials.</p>
                    <div className="footer-button">
                        <button className="footer-btn">Explore Events</button>
                        <button className="footer-btn">Academic Events</button>
                    </div>
                </div>
                <div className="footer-column">
                    <p className="footer-heading">DISCOVER</p>
                    <ul>{discoverLinks.map((link, index) => (
                        <li key={index}><a href = "#">{link}</a></li>
                        ))}</ul>
                </div>
                <div className="footer-column">
  <p className="footer-heading">PARTICIPANTS</p>
  <ul>
    {particpantLinks.map((link, index) => (
      <li key={index}><a href="#">{link}</a></li>
    ))}
  </ul>
</div>



                <div className="footer-column">
                    <p className="footer-heading">UNIVERSITY EVENTS OFFICE</p>
                    <p className="footer-text">admin@fuoye.edu.ng</p>
                    <p className="footer-text">Online . Physical . Hybrid</p>
                    <p className="footer-text">Accessible on desktop, tablet and mobile.</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>2026 FUOYE Events Management System.</p>
                <p>University Events, Attendance, Engagement and digital Credential Management System . v1.1.5</p>

            </div>
        </footer>
    )
}

export default Footer;