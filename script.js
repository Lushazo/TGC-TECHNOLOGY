const C = window.TGC;

const icons = ["◉","▣","✦","⌁","☎","◎","◈"];

function header() {
  return `
  <div class="topline"><div class="wrap topinner">
    <div>Technology that helps you work better.</div>
    <div class="toplinks"><a href="mailto:${C.company.email}">${C.company.email}</a><a href="tel:${C.company.phone.replace(/\s/g,'')}">${C.company.phone}</a></div>
  </div></div>
  <header class="header"><div class="wrap nav">
    <a class="brand" href="index.html"><img src="assets/tgc-logo.png" alt="${C.company.name}"></a>
    <button class="menu" aria-label="Open menu">☰</button>
    <nav>
      <a href="index.html">Home</a><a href="about.html">About Us</a>
      <div class="dropdown"><a href="solutions.html">Solutions <span>⌄</span></a><div class="dropdown-menu">
        ${C.services.map(s=>`<a href="${s.slug}.html">${s.title}</a>`).join("")}
      </div></div>
      <a href="contact.html" class="nav-cta">Contact Us</a>
    </nav>
  </div></header>`;
}

function footer() {
 return `<footer><div class="wrap footer-grid">
   <div><img class="footer-logo" src="assets/tgc-logo-footer-white.png" alt="${C.company.name}"><p>${C.company.tagline}</p><p class="muted">Simple, useful technology for people and businesses.</p><div class="social-links" aria-label="Social media links">
<a href="${C.social.facebook || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.7.3-1 1-1Z"/></svg></a>
<a href="${C.social.instagram || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2"/></svg></a>
<a href="${C.social.tiktok || '#'}" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4c.5 2.1 1.7 3.5 4 3.8v3.1c-1.5-.1-2.8-.5-4-1.3v6.1c0 3.1-2.2 5.3-5.2 5.3A5.3 5.3 0 1 1 11 10.5v3.3a2.2 2.2 0 1 0 .8 1.7V4H15Z"/></svg></a>
<a href="${C.social.linkedin || '#'}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5A2.5 2.5 0 1 1 5 9a2.5 2.5 0 0 1 0-4.5ZM3 10h4v10H3V10Zm6 0h3.8v1.4h.1c.5-.9 1.7-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V20h-4v-4c0-1 0-2.3-1.5-2.3s-1.8 1.1-1.8 2.2V20H9V10Z"/></svg></a>
</div></div>
   <div><h4>Quick Links</h4><a href="index.html">Home</a><a href="about.html">About Us</a><a href="solutions.html">Solutions</a><a href="contact.html">Contact Us</a></div>
   <div><h4>Solutions</h4>${C.services.slice(0,4).map(s=>`<a href="${s.slug}.html">${s.title}</a>`).join("")}</div>
   <div><h4>Contact</h4><a href="tel:${C.company.phone.replace(/\s/g,'')}">${C.company.phone}</a><a href="mailto:${C.company.email}">${C.company.email}</a><span>${C.company.location}</span><a class="whatsapp" href="https://wa.me/${C.company.whatsapp}">WhatsApp us →</a></div>
 </div><div class="bottom"><div>© <span id="year"></span> ${C.company.name}. All rights reserved.</div><div>Built for change. Ready for growth.</div></div></footer>`;
}

function shell(main) {
 document.getElementById("site").innerHTML = header()+main+footer();
 document.getElementById("year").textContent = new Date().getFullYear();
 const menu=document.querySelector(".menu"), nav=document.querySelector("nav");
 menu.addEventListener("click",()=>nav.classList.toggle("open"));
}

function serviceCard(s,i){
 return `<article class="service-card">
   <div class="service-image"><img src="${s.image}" alt="${s.title}" loading="lazy"><a class="photo-credit" href="${s.source}" target="_blank" rel="noopener">Photo</a></div>
   <div class="service-body"><span class="service-number">0${i+1}</span><h3>${s.title}</h3><p>${s.short}</p><a class="learn" href="${s.slug}.html">See how we help →</a></div>
 </article>`;
}

function home(){
 shell(`<main>
  <section class="hero"><div class="hero-image"></div><div class="hero-overlay"></div><div class="wrap hero-content">
    <div class="hero-copy"><span class="eyebrow">TGC TECHNOLOGY LTD</span><h1>Technology should make work <em>easier.</em></h1>
    <p>We build websites, fix IT problems, connect offices, add AI and help businesses grow online.</p>
    <div class="actions"><a class="btn primary" href="solutions.html">See Our Solutions</a><a class="btn light" href="contact.html">Talk to Us</a></div></div>
  </div></section>

  <section class="intro"><div class="wrap intro-grid"><div><span class="eyebrow">WHY TGC TECH?</span><h2>We solve everyday technology problems.</h2></div><p>We keep technology simple. Tell us what is not working, what is taking too much time, or where your business needs to grow. We help you find a practical solution.</p></div></section>

  <section class="section"><div class="wrap"><div class="section-head"><span class="eyebrow">OUR SOLUTIONS</span><h2>Seven things we do really well.</h2><p>Focused services. Clear language. Real business problems.</p></div><div class="service-grid">${C.services.map(serviceCard).join("")}</div></div></section>

  <section class="pain"><div class="wrap pain-grid"><div><span class="eyebrow">DOES THIS SOUND FAMILIAR?</span><h2>“My computer is slow.”<br>“Customers cannot find us.”<br>“We do this work by hand.”</h2></div><div><p>These are not just technology problems. They cost time, money and customers.</p><p class="strong">TGC Tech helps you fix them.</p><a class="btn primary" href="contact.html">Tell Us Your Problem →</a></div></div></section>

  <section class="section about-preview"><div class="wrap split"><div><span class="eyebrow">ABOUT TGC</span><h2>A technology partner you can talk to.</h2><p>We work with individuals, small businesses and larger organizations. Our goal is simple: give you technology that works and help your people use it.</p><a class="text-link" href="about.html">More about TGC →</a></div><div class="image-frame"><img src="${C.photos.about}" alt="Business team working together" loading="lazy"><a class="photo-credit" href="https://unsplash.com/photos/people-sitting-beside-table-with-laptop-computer-e3b97375f902" target="_blank" rel="noopener">Photo</a></div></div></section>

  <section class="cta"><div class="wrap cta-inner"><div><span class="eyebrow">HAVE A PROBLEM?</span><h2>Let's find a simple solution.</h2><p>Call, email or WhatsApp us. We will listen first.</p></div><a class="btn primary" href="contact.html">Contact TGC Tech →</a></div></section>
 </main>`);
}

function about(){
 shell(`<main><section class="page-hero"><div class="wrap"><span class="eyebrow">ABOUT US</span><h1>Technology should help people, not confuse them.</h1><p>That is the idea behind TGC Technology LTD.</p></div></section>
 <section class="section"><div class="wrap split"><div><span class="eyebrow">WHO WE ARE</span><h2>Practical technology for real people.</h2><p>TGC Technology LTD helps individuals and organizations use technology to work better, communicate better and grow.</p><p>We do not believe every business needs a complicated system. We listen to the problem first, then recommend what is useful.</p><div class="checklist"><span>✓ Simple to understand</span><span>✓ Practical to use</span><span>✓ Built around your needs</span><span>✓ Ready to grow with you</span></div></div><div class="image-frame tall"><img src="${C.photos.about}" alt="People working together" loading="lazy"></div></div></section>
 <section class="dark-section"><div class="wrap three"><div><b>Listen</b><p>We understand your problem before recommending anything.</p></div><div><b>Solve</b><p>We choose the simplest useful technology for the job.</p></div><div><b>Support</b><p>We stay available when you need help after setup.</p></div></div></section></main>`);
}

function solutions(){
 shell(`<main><section class="page-hero"><div class="wrap"><span class="eyebrow">SOLUTIONS</span><h1>What problem are you trying to solve?</h1><p>Choose a service below and see how TGC Tech can help.</p></div></section>
 <section class="section"><div class="wrap"><div class="solution-list">${C.services.map((s,i)=>`<a class="solution-row" href="${s.slug}.html"><span class="big-number">0${i+1}</span><div><h2>${s.title}</h2><p>${s.short}</p></div><strong>→</strong></a>`).join("")}</div></div></section></main>`);
}

function servicePage(){
 const slug=location.pathname.split("/").pop().replace(".html","");
 const s=C.services.find(x=>x.slug===slug);
 if(!s){location.href="solutions.html";return;}
 shell(`<main><section class="page-hero service-hero"><div class="wrap"><span class="eyebrow">TGC SOLUTION</span><h1>${s.title}</h1><p>${s.short}</p></div></section>
 <section class="section"><div class="wrap split"><div><span class="eyebrow">THE PROBLEM</span><h2>${s.pain}</h2><div class="service-points">${s.bullets.map(x=>`<span>✓ ${x}</span>`).join("")}</div><a class="btn primary" href="contact.html">Ask TGC About This →</a></div><div class="image-frame tall"><img src="${s.image}" alt="${s.title}" loading="lazy"><a class="photo-credit" href="${s.source}" target="_blank" rel="noopener">Photo source</a></div></div></section></main>`);
}

function contact(){
 shell(`<main><section class="page-hero"><div class="wrap"><span class="eyebrow">CONTACT US</span><h1>Tell us what you need help with.</h1><p>You do not need to know the technology. Just tell us the problem.</p></div></section>
 <section class="section"><div class="wrap contact-grid"><div><span class="eyebrow">GET IN TOUCH</span><h2>Let's talk.</h2><div class="contact-items"><a href="tel:${C.company.phone.replace(/\s/g,'')}"><b>Phone</b>${C.company.phone}</a><a href="mailto:${C.company.email}"><b>Email</b>${C.company.email}</a><a href="https://wa.me/${C.company.whatsapp}"><b>WhatsApp</b>Chat with TGC Tech</a><span><b>Location</b>${C.company.location}</span></div></div>
 <form action="mailto:${C.company.email}" method="post" enctype="text/plain"><label>Name<input name="Name" required></label><label>Phone / WhatsApp<input name="Phone"></label><label>What do you need help with?<select name="Service">${C.services.map(s=>`<option>${s.title}</option>`).join("")}</select></label><label>Message<textarea name="Message" rows="6" placeholder="Tell us the problem in your own words..." required></textarea></label><button class="btn primary" type="submit">Send Message →</button></form></div></section></main>`);
}

const file=location.pathname.split("/").pop()||"index.html";
if(file==="index.html") home();
else if(file==="about.html") about();
else if(file==="solutions.html") solutions();
else if(file==="contact.html") contact();
else servicePage();
