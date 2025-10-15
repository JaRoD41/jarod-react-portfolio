import { useState } from 'react'
import './contactForm.css'

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null)

	const validateForm = () => {
		let valid = true
		const newErrors = { name: '', email: '', message: '' }

		// Validation du nom
		if (!formData.name.trim()) {
			newErrors.name = 'Name is required'
			valid = false
		}

		// Validation de l'email
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
			valid = false
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email'
			valid = false
		}

		// Validation du message
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required'
			valid = false
		} else if (formData.message.length < 10) {
			newErrors.message = 'Message must be at least 10 characters'
			valid = false
		}

		setErrors(newErrors)
		return valid
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!validateForm()) {
			return
		}

		setIsSubmitting(true)

		try {
			// Envoi des données à une API (ex: Formspree, Firebase, ou ton backend)
			const response = await fetch('https://ton-api.com/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setSubmitStatus('success')
				setFormData({ name: '', email: '', message: '' })
			} else {
				setSubmitStatus('error')
			}
		} catch {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className='contact-form-section'>
			<h2 className='section-title'>Send a Message</h2>
			<form onSubmit={handleSubmit} className='contact-card'>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						placeholder='Your name'
						className={errors.name ? 'error' : ''}
					/>
					{errors.name && <span className='error-message'>{errors.name}</span>}
				</div>

				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='your.email@example.com'
						className={errors.email ? 'error' : ''}
					/>
					{errors.email && <span className='error-message'>{errors.email}</span>}
				</div>

				<div className='form-group'>
					<label htmlFor='message'>Message</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						placeholder='Tell me about your project or just say hello!'
						className={errors.message ? 'error' : ''}
					/>
					{errors.message && <span className='error-message'>{errors.message}</span>}
				</div>

				<button type='submit' className='submit-button' disabled={isSubmitting}>
					{isSubmitting ? 'Sending...' : 'Send Message'}
				</button>

				{submitStatus === 'success' && <p className='success-message'>Message sent successfully!</p>}
				{submitStatus === 'error' && <p className='error-message'>Failed to send message. Please try again.</p>}
			</form>
		</section>
	)
}

export default ContactForm
