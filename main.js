/* ================================================================
   Nurse Jeanie Legal — Main JavaScript
   Handles: nav toggle, smooth scroll, form submission (mailto),
   sticky CTA visibility, role pre-fill, contact/apply forms
   Built by: L.Finesse Humxn | finessehumxn.github.io
================================================================= */

function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }
  function closeMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

  function setContactAndScroll(val, role) {
    // Pre-fill the "You are a" dropdown
    const s = document.getElementById('c-track');
    for (let i = 0; i < s.options.length; i++) {
      if (s.options[i].text.toLowerCase().includes(val.toLowerCase().split(' ')[0])) { s.selectedIndex = i; break; }
    }
    // Pre-fill the role/service dropdown if provided
    if (role) {
      const r = document.getElementById('c-svc');
      for (let i = 0; i < r.options.length; i++) {
        if (r.options[i].text.toLowerCase().includes(role.toLowerCase())) { r.selectedIndex = i; break; }
      }
    }
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function engageRole(roleNum) {
    const r = document.getElementById('c-svc');
    for (let i = 0; i < r.options.length; i++) {
      if (r.options[i].text.includes('Role ' + roleNum)) { r.selectedIndex = i; break; }
    }
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  function submitContact() {
    const fn = document.getElementById('c-fn').value.trim();
    const em = document.getElementById('c-em').value.trim();
    if (!fn || !em) { alert('Please enter your name and email to continue.'); return; }
    const name  = fn + ' ' + document.getElementById('c-ln').value.trim();
    const firm  = document.getElementById('c-firm').value.trim();
    const ph    = document.getElementById('c-ph').value.trim();
    const track = document.getElementById('c-track').value;
    const ct    = document.getElementById('c-casetype').value;
    const svc   = document.getElementById('c-svc').value;
    const msg   = document.getElementById('c-msg').value.trim();
    const sub   = encodeURIComponent('LNC Inquiry — ' + name + (firm ? ' (' + firm + ')' : ''));
    const body  = encodeURIComponent(
      'Name: ' + name + '\nFirm: ' + firm + '\nPhone: ' + ph + '\nEmail: ' + em +
      '\n\nClient type: ' + track + '\nCase type: ' + ct + '\nEngagement role: ' + svc +
      '\n\nCase description:\n' + (msg || 'Not provided')
    );
    window.location.href = 'mailto:contact@nursejeanielegal.com?subject=' + sub + '&body=' + body;
    document.getElementById('contact-form-inner').style.display = 'none';
    document.getElementById('contact-success').style.display = 'block';
  }

  // Sticky CTA visibility
  window.addEventListener('scroll', function() {
    const cta = document.getElementById('stickyCta');
    if (window.scrollY > 400) { cta.classList.add('visible'); }
    else { cta.classList.remove('visible'); }
  });

  function submitApply() {
    const fn = document.getElementById('a-fn').value.trim();
    const em = document.getElementById('a-em').value.trim();
    if (!fn || !em) { alert('Please enter your name and email to apply.'); return; }
    const name = fn + ' ' + document.getElementById('a-ln').value.trim();
    const ph   = document.getElementById('a-ph').value.trim();
    const lic  = document.getElementById('a-lic').value.trim();
    const yrs  = document.getElementById('a-yrs').value;
    const spec = document.getElementById('a-spec').value;
    const lnc  = document.getElementById('a-lnc').value;
    const why  = document.getElementById('a-why').value.trim();
    const sub  = encodeURIComponent('LNC Team Application — ' + name);
    const body = encodeURIComponent(
      'Applicant: ' + name + '\nEmail: ' + em + '\nPhone: ' + ph +
      '\nLicense state(s): ' + lic + '\nYears experience: ' + yrs +
      '\nSpecialty: ' + spec + '\nLNC experience: ' + lnc +
      '\n\nWhy legal nursing:\n' + (why || 'Not provided')
    );
    window.location.href = 'mailto:contact@nursejeanielegal.com?subject=' + sub + '&body=' + body;
    document.getElementById('apply-form-inner').style.display = 'none';
    document.getElementById('apply-success').style.display = 'block';
  }