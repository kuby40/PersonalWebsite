const ContactForm: React.FC = () => {
  return (
    <form action="/programming" method="POST">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Your Email Address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows={3}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-info mb-5">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
