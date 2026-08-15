const C = window.TGC;
const NEWS = window.TGCNews || [];
const text = v => String(v ?? "");
const lines = v => text(v).split("|").join("<br>");

function header(){
return `<div class="topline"><div class="wrap topinner">
<div>Technology that helps you work better.</div>
<div class="toplinks"><a href="mailto:${C.company.email}">${C.company.email}</a><a href="tel:${C.company.phone.replace(/\s/g,'')}">${C.company.phone}</a></div>
</div></div>
<header class="header"><div class="wrap nav">
<a class="brand" href="#home"><img src="${C.branding?.headerLogo || "assets/tgc-logo.png"}" alt="${C.company.name}"></a>
<button class="menu" aria-label="Open menu">☰</button>
<nav>
<a href="#home">Home</a>
<a href="#about">About Us</a>
<a href="#news">News</a>
<div class="dropdown"><a href="#solutions">Solutions <span>⌄</span></a><div class="dropdown-menu">
${C.services.map((s,i)=>`<a href="#service-${i+1}">${s.title}</a>`).join("")}
</div></div>
<a href="#contact" class="nav-cta">Contact Us</a>
</nav></div></header>`;
}

function serviceCard(s,i){
return `<article class="service-card" id="service-${i+1}">
<div class="service-image"><img src="${s.image}" alt="${s.title}" loading="lazy"><a class="photo-credit" href="${s.source}" target="_blank" rel="noopener">Photo</a></div>
<div class="service-body"><span class="service-number">0${i+1}</span><h3>${s.title}</h3>
<p>${s.short}</p><div class="mini-pain"><b>The problem:</b> ${s.pain}</div>
<div class="service-points">${s.bullets.map(x=>`<span>✓ ${x}</span>`).join("")}</div>
<a class="learn" href="#contact">Talk to us about this →</a></div></article>`;
}

function footer(){
return `<footer><div class="wrap footer-grid">
<div><img class="footer-logo" src="${C.branding?.footerLogo || "assets/tgc-logo-footer-white.png"}" alt="${C.company.name}"><p>${C.company.tagline}</p><p class="muted">Simple, useful technology for people and businesses.</p><div class="social-links" aria-label="Social media links">
<a href="${C.social.facebook || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.7.3-1 1-1Z"/></svg></a>
<a href="${C.social.instagram || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2"/></svg></a>
<a href="${C.social.tiktok || '#'}" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4c.5 2.1 1.7 3.5 4 3.8v3.1c-1.5-.1-2.8-.5-4-1.3v6.1c0 3.1-2.2 5.3-5.2 5.3A5.3 5.3 0 1 1 11 10.5v3.3a2.2 2.2 0 1 0 .8 1.7V4H15Z"/></svg></a>
<a href="${C.social.linkedin || '#'}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5A2.5 2.5 0 1 1 5 9a2.5 2.5 0 0 1 0-4.5ZM3 10h4v10H3V10Zm6 0h3.8v1.4h.1c.5-.9 1.7-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V20h-4v-4c0-1 0-2.3-1.5-2.3s-1.8 1.1-1.8 2.2V20H9V10Z"/></svg></a>
</div></div>
<div><h4>On this page</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#news">News</a><a href="#solutions">Solutions</a><a href="#contact">Contact Us</a></div>
<div><h4>Solutions</h4>${C.services.map((s,i)=>`<a href="#service-${i+1}">${s.title}</a>`).join("")}</div>
<div><h4>Contact</h4><a href="tel:${C.company.phone.replace(/\s/g,'')}">${C.company.phone}</a><a href="mailto:${C.company.email}">${C.company.email}</a><span>${C.company.location}</span><a class="whatsapp" href="https://wa.me/${C.company.whatsapp}">WhatsApp us →</a></div>
</div><div class="bottom"><div>© <span id="year"></span> ${C.company.name}. All rights reserved.</div><div>Built for change. Ready for growth.</div></div></footer>`;
}

document.getElementById("site").innerHTML = header()+`
<main>
<section class="hero" id="home"><div class="hero-image" style="background-image:url('${C.photos?.hero || "assets/pain-section-bg.jpg"}')"></div><div class="hero-overlay"></div><div class="wrap hero-content">
<div class="hero-copy"><span class="eyebrow">${C.home?.eyebrow || "TGC TECHNOLOGY LTD"}</span>
<h1>${text(C.home?.title || "Technology should make work easier.")}</h1>
<p>${text(C.home?.description || "We build websites, fix IT problems, connect offices, add AI and help businesses grow online.")}</p>
<div class="actions"><a class="btn primary" href="#solutions">See Our Solutions</a><a class="btn light" href="#contact">Talk to Us</a></div>
</div></div></section>

<section class="intro"><div class="wrap intro-grid"><div><span class="eyebrow">${C.home?.introEyebrow || "WHY TGC TECH?"}</span><h2>${text(C.home?.introTitle || "We solve everyday technology problems.")}</h2></div>
<p>${text(C.home?.introText || "We keep technology simple. Tell us what is not working, what is taking too much time, or where your business needs to grow. We help you find a practical solution.")}</p></div></section>

<section class="section" id="solutions"><div class="wrap"><div class="section-head">
<span class="eyebrow">OUR SOLUTIONS</span><h2>Seven things we do really well.</h2><p>Focused services. Clear language. Real business problems.</p>
</div><div class="service-grid">${C.services.map(serviceCard).join("")}</div></div></section>

<section class="pain" style="background-image:url('${C.home?.painImage || "assets/pain-section-bg.jpg"}')"><div class="wrap pain-grid"><div><span class="eyebrow">${C.home?.painEyebrow || "DOES THIS SOUND FAMILIAR?"}</span>
<h2>${lines(C.home?.painTitle || "“My computer is slow.”|“Customers cannot find us.”|“We do this work by hand.")}</h2></div>
<div><p>${text(C.home?.painText || "These are not just technology problems. They cost time, money and customers.")}</p><p class="strong">${text(C.home?.painStrong || "TGC Tech helps you fix them.")}</p><a class="btn primary" href="#contact">Tell Us Your Problem →</a></div></div></section>

<section class="news-section" id="news" style="--news-bg:url("${C.news?.background || "assets/news-section-bg.jpg"}")"><div class="wrap">
<div class="section-head news-head"><span class="eyebrow">${text(C.news?.eyebrow || "TGC NEWS & UPDATES")}</span><h2>${text(C.news?.title || "Technology, company news & opportunities.")}</h2><p>${text(C.news?.description || "A simple place to share what is happening at TGC Technology Ltd — useful technology updates, company announcements and new job opportunities.")}</p></div>
<div class="news-toolbar"><div class="news-filters" role="tablist" aria-label="News categories"><button class="news-filter active" data-filter="all" type="button">All Updates</button><button class="news-filter" data-filter="technology" type="button">Technology</button><button class="news-filter" data-filter="company" type="button">Company</button><button class="news-filter" data-filter="jobs" type="button">Jobs</button></div><div class="news-note">Add and manage updates from the website manager.</div></div>
<div class="news-slider" aria-label="News image preview"><div class="news-slides">${NEWS.filter(n=>n.published!==false).slice(0,6).map((n,i)=>`<div class="news-slide ${i===0?'active':''}"><img src="${text(n.image)}" alt="${text(n.title)}"><div class="news-slide-caption"><span>${text(n.category)}</span><strong>${text(n.title)}</strong></div></div>`).join('')}</div><button class="news-slide-prev" type="button" aria-label="Previous news image">‹</button><button class="news-slide-next" type="button" aria-label="Next news image">›</button><div class="news-slide-dots" role="tablist" aria-label="Choose news image">${NEWS.filter(n=>n.published!==false).slice(0,6).map((n,i)=>`<button class="${i===0?'active':''}" type="button" aria-label="Show news image ${i+1}"></button>`).join('')}</div></div>
<div class="news-grid">${NEWS.filter(n=>n.published!==false).map(n=>`<article class="news-card" data-category="${text(n.category)}"><img class="news-card-image" src="${text(n.image)}" alt="${text(n.title)}" loading="lazy"><div class="news-card-body"><div class="news-card-top"><span class="news-tag ${text(n.category)}">${text(n.category)}</span><span class="news-date">${text(n.date||'')}</span></div><div class="news-icon">✦</div><h3>${text(n.title)}</h3><p>${text(n.excerpt)}</p><a href="${text(n.link||'#contact')}" class="news-read">Read update →</a></div></article>`).join('')}</div>
<div class="news-bottom"><div><span class="eyebrow">STAY INFORMED</span><h3>Useful updates without the complicated language.</h3><p>Come back regularly for practical technology tips, company news and opportunities.</p></div><a class="btn primary" href="#contact">Contact TGC Tech →</a></div>
</div></section>

<section class="section about-preview" id="about"><div class="wrap split">
<div><span class="eyebrow">${C.home?.aboutEyebrow || "ABOUT TGC"}</span><h2>${text(C.home?.aboutTitle || "A technology partner you can talk to.")}</h2>
<p>${text(C.home?.aboutText || "We work with individuals, small businesses and larger organizations. Our goal is simple: give you technology that works and help your people use it.")}</p>
<div class="checklist"><span>✓ Simple to understand</span><span>✓ Practical to use</span><span>✓ Built around your needs</span><span>✓ Ready to grow with you</span></div></div>
<div class="image-frame"><img src="${C.home?.aboutImage || C.photos.about}" alt="Business team working together" loading="lazy"><a class="photo-credit" href="https://unsplash.com/" target="_blank" rel="noopener">Photo</a></div>
</div></section>

<section class="section contact-section" id="contact"><div class="wrap contact-grid">
<div><span class="eyebrow">${C.contact?.eyebrow || "CONTACT US"}</span><h2>${text(C.contact?.title || "Tell us what you need help with.")}</h2><p class="contact-lead">${text(C.contact?.lead || "You do not need to know the technology. Just tell us the problem.")}</p>
<div class="contact-items"><a href="tel:${C.company.phone.replace(/\s/g,'')}"><b>Phone</b>${C.company.phone}</a>
<a href="mailto:${C.company.email}"><b>Email</b>${C.company.email}</a>
<a href="https://wa.me/${C.company.whatsapp}"><b>WhatsApp</b>Chat with TGC Tech</a><span><b>Location</b>${C.company.location}</span></div></div>
<form action="mailto:${C.company.email}" method="post" enctype="text/plain">
<label>Name<input name="Name" required></label>
<label>Phone / WhatsApp<input name="Phone"></label>
<label>What do you need help with?<select name="Service">${C.services.map(s=>`<option>${s.title}</option>`).join("")}</select></label>
<label>Message<textarea name="Message" rows="6" placeholder="Tell us the problem in your own words..." required></textarea></label>
<button class="btn primary" type="submit">Send Message →</button>
</form></div></section>
</main>
<a class="whatsapp-float" href="https://wa.me/${C.company.whatsapp}" target="_blank" rel="noopener" aria-label="Chat with TGC Tech on WhatsApp">
  <span class="wa-icon">◉</span><span>Chat on WhatsApp</span>
</a>${footer()}`;

// News image slider preview
(function(){
  var slides=[].slice.call(document.querySelectorAll(".news-slide"));
  var dots=[].slice.call(document.querySelectorAll(".news-slide-dots button"));
  var current=0, timer;
  function show(i){
    current=(i+slides.length)%slides.length;
    slides.forEach(function(slide,n){slide.classList.toggle("active",n===current);});
    dots.forEach(function(dot,n){dot.classList.toggle("active",n===current);});
  }
  function start(){timer=setInterval(function(){show(current+1);},5000);}
  function reset(){clearInterval(timer);start();}
  document.querySelector(".news-slide-prev")?.addEventListener("click",function(){show(current-1);reset();});
  document.querySelector(".news-slide-next")?.addEventListener("click",function(){show(current+1);reset();});
  dots.forEach(function(dot,n){dot.addEventListener("click",function(){show(n);reset();});});
  var slider=document.querySelector(".news-slider");
  if(slider){slider.addEventListener("mouseenter",function(){clearInterval(timer);});slider.addEventListener("mouseleave",start);}
  show(0); start();
})();

// News category filters
document.querySelectorAll(".news-filter").forEach(function(button){
  button.addEventListener("click", function(){
    document.querySelectorAll(".news-filter").forEach(function(b){ b.classList.remove("active"); });
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".news-card").forEach(function(card){
      card.style.display = (filter === "all" || card.dataset.category === filter) ? "flex" : "none";
    });
  });
});

// Mobile navigation toggle
const mobileMenu = document.querySelector(".menu");
const mobileNav = document.querySelector("nav");
if (mobileMenu && mobileNav) {
  mobileMenu.setAttribute("aria-expanded", "false");
  mobileMenu.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("open");
    mobileMenu.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close the mobile menu after selecting a navigation link.
  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("open");
      mobileMenu.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-label", "Open menu");
    });
  });
}

/* TGC Tech Assistant — isolated from the main page renderer */
(function(){
  const wrap = document.createElement("div");
  wrap.className = "tgc-chat";
  wrap.innerHTML = `
    <button class="tgc-chat-launch" type="button" aria-label="Open TGC Tech Assistant">
      <span class="chat-icon">✦</span><span>Ask TGC Tech</span>
    </button>
    <section class="tgc-chat-panel" aria-label="TGC Tech Assistant">
      <div class="tgc-chat-head">
        <div><strong>TGC Tech Assistant</strong><small>Ask us about TGC and our services</small></div>
        <button class="tgc-chat-close" type="button" aria-label="Close">×</button>
      </div>
      <div class="tgc-chat-messages">
        <div class="bot-msg">Hello 👋 I’m the TGC Tech Assistant. Ask me about our services, websites, IT, AI, networking, business phones, social media or photography.</div>
      </div>
      <div class="tgc-quick">
        <button type="button" data-q="What services do you offer?">Services</button>
        <button type="button" data-q="How can you help my business?">How can you help?</button>
        <button type="button" data-q="How do I contact TGC Tech?">Contact</button>
      </div>
      <form class="tgc-chat-form">
        <input class="tgc-chat-input" autocomplete="off" placeholder="Type your question..." required>
        <button type="submit" aria-label="Send">➤</button>
      </form>
      <div class="chat-privacy">For your privacy, never send passwords, OTPs, card numbers or PINs.</div>
    </section>`;
  document.body.appendChild(wrap);

  const launch = wrap.querySelector(".tgc-chat-launch");
  const panel = wrap.querySelector(".tgc-chat-panel");
  const close = wrap.querySelector(".tgc-chat-close");
  const form = wrap.querySelector(".tgc-chat-form");
  const input = wrap.querySelector(".tgc-chat-input");
  const messages = wrap.querySelector(".tgc-chat-messages");

  let personalPending = false;
  let personalQuestion = "";

  function add(text, who){
    const d = document.createElement("div");
    d.className = who === "user" ? "user-msg" : "bot-msg";
    d.textContent = text;
    messages.appendChild(d);
    messages.scrollTop = messages.scrollHeight;
  }

  function isPersonal(q){
    return /my account|my payment|my invoice|my order|my password|my login|my contract|my salary|my private|personal data|private information|customer details|complaint|refund|transaction|billing issue|account issue/.test(q.toLowerCase());
  }

  function answer(q){
    const s = q.toLowerCase();
    if(/hello|hi|hey|good morning|good afternoon/.test(s)) return "Hello 👋 How can I help you with TGC Technology?";
    if(/service|services|what do you do|offer/.test(s)) return "We offer 7 practical services: Website Design & Building, Computer & IT Solutions, AI Integration, Networking Services, Telephony & Communication, Social Media Specialist, and Creative, Design, Printing & Media.";
    if(/website|web|hosting|domain/.test(s)) return "We design, build and host powerful business websites that work alongside your social media.";
    if(/computer|it|repair|laptop|cyber|security|maintenance/.test(s)) return "We build, repair and maintain computers and IT systems, and help protect systems against common cyber threats.";
    if(/ai|automation|agent|artificial intelligence/.test(s)) return "We help businesses use AI and automation to increase productivity and business efficiency.";
    if(/network|wifi|internet|router|connectivity/.test(s)) return "We build computer networks and internet connectivity, and provide basic staff training.";
    if(/phone|telephone|pbx|intercom|extension|communication/.test(s)) return "We build small and mid-size business telephone and intercom systems, locally or in the cloud.";
    if(/social|facebook|instagram|linkedin|tiktok|youtube|branding|content/.test(s)) return "We build and maintain social media accounts, create preliminary content and help businesses build a strong digital presence.";
    if(/photo|photography|video|videography|advert|promotion/.test(s)) return "We create professional photos and videos, design business materials, provide 2D and 3D design, and handle printing for individuals and businesses.";
    if(/price|cost|quote|quotation|how much/.test(s)) return "Pricing depends on what you need. Tell us the service and what you want done, and the TGC team can prepare the right quotation.";
    if(/contact|reach|phone|email|whatsapp/.test(s)) return "You can contact TGC through the phone, email or WhatsApp details on this website. For a personal issue, I can connect you to the TGC team.";
    if(/about|company|who are you|tgc/.test(s)) return "TGC Technology LTD helps individuals, small businesses and larger organizations use practical technology to work better, communicate better and grow.";
    return "I can help with TGC services, websites, IT, AI, networking, business phones, social media, photography, pricing and contact details. What would you like to know?";
  }

  async function handover(phone){
    const company = (window.TGC && window.TGC.company) ? window.TGC.company : {};
    const wa = String(company.whatsapp || "").replace(/\D/g,"");
    const endpoint = company.adminLeadEndpoint || "";

    if(endpoint){
      try{
        await fetch(endpoint,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            phone:phone,
            question:personalQuestion,
            source:"TGC Website Assistant",
            createdAt:new Date().toISOString()
          })
        });
      }catch(e){ console.warn("Admin handover endpoint unavailable.",e); }
    }

    if(wa){
      const msg = encodeURIComponent(
        'Hello TGC Tech. I need help with a personal/account-specific issue. Question: "' +
        personalQuestion + '" Please contact me on ' + phone + '.'
      );
      window.open("https://wa.me/"+wa+"?text="+msg,"_blank","noopener");
      add("I’ve prepared the WhatsApp handover for the TGC team. Please press Send in WhatsApp to complete it.","bot");
    } else {
      add("Please use the Contact section to reach the TGC team directly.","bot");
    }

    personalPending = false;
    personalQuestion = "";
    input.placeholder = "Type your question...";
    input.dataset.mode = "";
  }

  launch.addEventListener("click", function(){
    panel.classList.add("show");
    input.focus();
  });
  close.addEventListener("click", function(){
    panel.classList.remove("show");
  });

  form.addEventListener("submit", function(e){
    e.preventDefault();
    const q = input.value.trim();
    if(!q) return;
    add(q,"user");
    input.value = "";

    if(personalPending && input.dataset.mode === "phone"){
      handover(q);
      return;
    }

    if(personalPending && /^(yes|y|ok|okay|sure|please|connect|send)$/i.test(q)){
      input.dataset.mode = "phone";
      input.placeholder = "Your phone / WhatsApp number";
      add("Okay. Please enter only your phone or WhatsApp number. Do not send passwords, OTPs, card numbers or PINs.","bot");
      input.focus();
      return;
    }

    if(isPersonal(q)){
      personalPending = true;
      personalQuestion = q;
      add("This looks like a personal or account-specific question. For your privacy, I should not collect private details here. Would you like me to connect you with the TGC team on WhatsApp? Reply YES.","bot");
      return;
    }

    setTimeout(function(){ add(answer(q),"bot"); },180);
  });

  wrap.querySelectorAll(".tgc-quick button").forEach(function(button){
    button.addEventListener("click",function(){
      const q = button.getAttribute("data-q");
      add(q,"user");
      setTimeout(function(){ add(answer(q),"bot"); },180);
    });
  });
})();
