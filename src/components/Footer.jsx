import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <p>Web54 Dev Co© 2023</p>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </div>
  )
}