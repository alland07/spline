import {useState} from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  }
  return(
    <section id='contact'>
      <h2>Contact Us</h2>
      <div className='contactForm'>
        <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
