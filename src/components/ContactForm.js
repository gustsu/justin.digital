import './ContactForm.scss';
export default function ContactForm() {
    return (
        <div className="contact-form">
            <form>
                <input placeholder="Your Name" type="text" />
                <input placeholder="Email" type="text" />
                <textarea  placeholder="Message"></textarea>

                <div className="btn-container">
                    <button type="submit">Send It Bro</button>
                </div>

            </form>
        </div>
    )
}
