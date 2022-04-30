import './ContactForm.scss';
export default function ContactForm() {
    return (
        <div className='contact-form'>
            <form>
                <input placeholder="Your Name" type="text" />
                <input placeholder="Your Phone Number" type="text" />
                <input placeholder="Your Message" type="text" />

                <div class="btn-container">
                    <button type="submit">Just Do It</button>
                </div>

            </form>
        </div>
    )
}
