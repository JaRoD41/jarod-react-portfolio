import ContactIntro from './ContactIntro/ContactIntro'
import ContactInfo from './ContactInfo/ContactInfo'
import ContactForm from './ContactForm/ContactForm'
import Location from './Location/Location'

const Contact = () => {
	return (
		<div className='contact'>
			<ContactIntro />
			<ContactInfo />
			<ContactForm />
			<Location />
		</div>
	)
}
export default Contact
