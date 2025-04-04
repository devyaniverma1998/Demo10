import '../css/style.css';
import '../css/bootstrap.min.css';
function Support() {
  return (
    <div className="container my-5 bg-light p-4">
      <h2 className="text-center mb-4">Customer Support</h2>

      <h4>1. How can I contact support?</h4>
      <p>
        You can reach our support team via email at <strong>support@example.com</strong> or call us at <strong>+1 234 567 890</strong>.
      </p>

      <h4>2. What are your support hours?</h4>
      <p>
        Our support team is available 24/7 to assist you with any inquiries.
      </p>

      <h4>3. How do I report a technical issue?</h4>
      <p>
        If you encounter any technical problems, please submit a ticket via our <a href="/contact">Contact Us</a> page or email us directly.
      </p>

      <h4>4. Do you offer refunds?</h4>
      <p>
        Refunds are processed based on our <a href="/terms">Terms & Conditions</a>. Please review our refund policy for more details.
      </p>

      <h4>5. Can I request a callback?</h4>
      <p>
        Yes, you can request a callback by filling out our <a href="/contact">Contact Form</a>, and one of our representatives will get back to you.
      </p>
    </div>
  );
}

export default Support;
