function Hero(){
    const cards = [
        {
        title: "Create Account",
        subtitle: "Join university events",
        },

        {
             title: "Verify Certificate",
        subtitle: "Check credential authenticity",
        },

        {
             title: "Academic Events",
        subtitle: "Conference and webinars",
        },

        {
             title: "Get Support",
        subtitle: "Participant assistance",
        }
    ];


    return(
        <section className="hero-section">
            <div className="hero-left">
                <p className="hero-label">TRUSTED DIGITAL PARTICIPATION</p>
                <h1>From registration to attendance and verified credentials</h1>
                <p className="hero-description">Use one secure university account to register for events, access live sessions, record attendance, complete assesments, provide feedback and recieve verifiable Certificates.</p>
            </div>

            <div className="hero-cards">
                {cards.map((card, index) => (
                    <div className="hero-card" key={index}>
                        <h4>{card.title}</h4>
                        <p>{card.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Hero;