(async function(){
  try {
    const [siteRes, newsRes] = await Promise.all([fetch("content/site.json", {cache:"no-store"}), fetch("content/news.json", {cache:"no-store"})]);
    const site = await siteRes.json(); const news = await newsRes.json();
    window.TGC = Object.assign({}, window.TGC || {}, site); window.TGCNews = Array.isArray(news) ? news : (news.posts || []);
    const root=document.documentElement, theme=window.TGC.theme||{}; Object.keys(theme).forEach(k=>root.style.setProperty("--"+k,theme[k]));
    if(window.TGC.branding?.favicon) document.getElementById("site-favicon").href=window.TGC.branding.favicon;
  } catch(e){ console.warn("Using built-in TGC defaults",e); window.TGCNews=window.TGCNews||[]; }
  const script=document.createElement("script"); script.src="one-page.js"; document.body.appendChild(script);
})();
