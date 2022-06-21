import './ContactForm.scss';
export default function ContactForm() {
    return (
        <div className="contact-form">
            <form action="https://formspree.io/f/xvolnkrg" method="POST">
                <input required name="Name" placeholder="Your Name" type="text" />
                <input required name="Email" placeholder="Email" type="text" />
                <textarea required name="Message" placeholder="Message"></textarea>

                <div className="btn-container">
                    <button type="submit">Send It Bro</button>
                </div>

            </form>
        </div>
    )
}
