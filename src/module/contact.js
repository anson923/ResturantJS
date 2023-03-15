import '../styles/contact.css';

function InitContact() {
  const floater = document.querySelector('.floater');

  const contactContainer = document.createElement('div');
  contactContainer.className = 'ContactContainer';
  
  contactContainer.innerHTML = 
  `
  <div id="ContactTitle">Contact us</div>
  <div id="OpeningHours"><strong>Opening Hours</strong>: Monday - Friday 11:00- 23:00</div>
  <div id="ContactPhoneNumber"><strong>Phone</strong>: 666-555-2333</div>
  <div id="ContactEmail"><strong>Email</strong>: <a href="mailto:info@spicyisland.can">info@spicyisland.can</a></div>
  <div id="ContactLocation"><strong>Address</strong>: 698 Seymour St, Vancouver, BC V6B 3K6</div>
  `;
  const map = document.createElement('div');
  map.className = 'MapContainer';
  map.innerHTML = `<iframe id="ContactMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10410.846296229049!2d-123.1335381017199!3d49.28186226433007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f203b6f31%3A0xf23f57143c180126!2s698%20Seymour%20St%20%23302%2C%20Vancouver%2C%20BC%20V6B%203K6!5e0!3m2!1sen!2sca!4v1678858816617!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  floater.appendChild(contactContainer);
  floater.appendChild(map);
  
}
export default InitContact;