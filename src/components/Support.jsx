function Support() {
  return (
    <section className="support" id="support">
      <div className="support-content">
        <span>06 / GET SUPPORT</span>

        <h2>Let's build something smarter.</h2>

        <form
          action="https://formsubmit.co/vijaymotekar91@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="business"
            placeholder="Business / Startup Name"
            required
          />

          <textarea
            name="message"
            placeholder="What do you need?"
            required
          ></textarea>

          {/* Email settings */}
          <input
            type="hidden"
            name="_subject"
            value="New Technology Support Request"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <button type="submit" className="primary-btn">
            Send Request →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Support;