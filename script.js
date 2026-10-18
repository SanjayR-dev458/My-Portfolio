/* ===== EDIT YOUR CONTENT HERE (everything on the site reads from DATA) ===== */
const DATA = {
  name: "Sanjay Ragunathan", email: "sanjaysrs9535@gmail.com", loc: "Coimbatore, Tamil Nadu, India",
  github: "", linkedin: "",            // paste your URLs, e.g. "https://github.com/yourname"
  resumePDF: "",                       // put "resume.pdf" here after adding the file next to index.html
  subjects: [
    ["Programming for Problem Solving (PPS)", "C programming and problem solving."],
    ["Digital System Design (DSD)", "Digital logic foundations."],
    ["Web Technology (WT)", "HTML, CSS and JavaScript basics."],
    ["Linear Algebra (LA)", "Mathematics for computing."],
    ["English", "Communication skills."],
    ["Constitution of India (COI)", "Civic and constitutional foundations."]],
  timeline: [["2026", "Started B.Tech CSE at Karunya", "First year begins. Learning programming, logic and web basics."],
    ["Add date", "Add a milestone", "Placeholder: update every semester."]],
  stages: [
    ["Build the Fundamentals", ["Learn C and problem-solving", "Data structures and algorithms", "HTML, CSS, JavaScript", "Maths and CS fundamentals", "Git and GitHub"], 0],
    ["Become a Developer", ["Learn Python", "Explore full-stack web development", "Build real-world projects", "Databases, APIs, engineering practices", "Professional GitHub profile and portfolio"], 0],
    ["Explore Specializations", ["AI and machine learning", "Generative AI and AI agents", "Computer vision", "Cloud computing and deployment", "Cybersecurity fundamentals"], 0],
    ["Industry Readiness", ["Hackathons", "Internships", "Technical interview practice", "Communication and teamwork", "Open-source contributions"], 0],
    ["Long-Term Vision", ["Become an accomplished software engineer", "Work on meaningful products", "Explore opportunities at Google, Microsoft, Amazon", "Keep learning; build original products"], 0]],
  // status: "Currently Learning" | "Exploring" | "Future Goal". level: 0-100 self-reported, or null = not rated
  skills: {
    "Programming": [["C", "Currently Learning", null], ["Python", "Future Goal", null], ["JavaScript", "Currently Learning", null]],
    "Web development": [["HTML", "Currently Learning", null], ["CSS", "Currently Learning", null], ["Responsive design", "Exploring", null], ["JavaScript fundamentals", "Currently Learning", null]],
    "Computer science": [["Data structures and algorithms", "Future Goal", null], ["Digital logic", "Currently Learning", null], ["Problem-solving", "Currently Learning", null], ["Mathematics for computing", "Currently Learning", null]],
    "AI and emerging tech": [["Artificial intelligence", "Exploring", null], ["Machine learning", "Exploring", null], ["Generative AI", "Exploring", null], ["Computer vision", "Future Goal", null], ["AI agents", "Exploring", null]],
    "Tools and workflow": [["Git", "Exploring", null], ["GitHub", "Exploring", null], ["VS Code", "Currently Learning", null], ["Deployment tools", "Future Goal", null]]},
  projects: [
    { name: "Personal Portfolio Website", cat: "Web development", status: "In Progress", stack: ["HTML", "CSS", "JavaScript"], desc: "This site: my personal identity and learning log.", repo: "", demo: "" },
    { name: "Vehicle Parking Slot Management System", cat: "College projects", status: "Planned", stack: ["To be decided"], desc: "A system to manage parking slots. Details to be added.", repo: "", demo: "" },
    { name: "Future AI Project", cat: "AI and machine learning", status: "Planned", stack: ["Python"], desc: "Placeholder for my first AI/ML build.", repo: "", demo: "" },
    { name: "Future Hackathon Project", cat: "Hackathon projects", status: "Planned", stack: ["TBD"], desc: "Placeholder for a hackathon entry.", repo: "", demo: "" }],
  experience: {
    "Hackathons": [], "College technical events": [], "Team projects": [], "Workshops": [], "Internships": [], "Open-source contributions": [], "Leadership and collaboration": []},
  // experience card format: {name, date, role, tech, desc, outcome, repo}
  interests: [
    ["Software engineering", "Designing and building reliable software."], ["Artificial intelligence", "How machines learn and reason."],
    ["Generative AI and agents", "Systems that create and act on goals."], ["Computer vision", "Teaching computers to see."],
    ["Web development", "Interfaces people enjoy using."], ["Hackathons and innovation", "Building fast with a team."],
    ["Gaming and technology", "Games as a window into interactive systems."], ["Creative digital experiences", "Where design meets code."]],
  exploring: ["C programming", "HTML, CSS and JavaScript", "Git and GitHub", "How AI agents work"]
};
const PAGES = [["", "Home"], ["about", "About"], ["education", "Education"], ["goals", "Goals"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["interests", "Interests"], ["resume", "Resume"], ["contact", "Contact"]];
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const link = (u, t, c = "btn") => u ? `<a class="${c}" href="${esc(u)}" target="_blank" rel="noopener">${t}</a>` : `<span class="${c}" aria-disabled="true" title="Add this link in script.js">${t} (not added yet)</span>`;
const head = (t, sub, crumb) => `<div class="crumb"><a href="#/">Home</a> / ${crumb || t}</div><h1 style="font-size:clamp(2.2rem,5vw,3.8rem)">${t}</h1><p style="max-width:60ch;margin:12px 0 40px">${sub}</p>`;
const card = (t, p, x = "") => `<div class="glass card rv"><h3>${t}</h3><p>${p}</p>${x}</div>`;

const views = {
  "": () => `<section class="hero"><div>
    <p class="hero lab" style="display:block;min-height:0">COMPUTER SCIENCE STUDENT • FUTURE SOFTWARE ENGINEER</p>
    <h1>${"Building My Future, One Line of Code at a Time.".split(" ").map((w, i) => `<span style="animation-delay:${.3 + i * .09}s"${["Future,", "Code"].includes(w) || w === "Line" ? "" : ""}>${["Future,", "Line", "Code"].includes(w) ? `<b class="o">${w}</b>` : w}&nbsp;</span>`).join("")}</h1>
    <p style="margin-top:22px;max-width:52ch">I'm Sanjay Ragunathan, a CSE student exploring software engineering, AI, and creative technology. This is my journey from learning the fundamentals to building products that make a difference.</p>
    <div class="row"><a class="btn p" href="#/projects">Explore My Work</a><a class="btn" href="#/about">Discover My Journey</a></div><div class="scroll" aria-hidden="true"></div></div>
    <canvas id="orb" role="img" aria-label="Animated orange particle sphere"></canvas></section>
  <section class="sec"><h2>About me</h2><div class="grid">${card("Who I am", "First-year B.Tech CSE student at Karunya, Coimbatore, curious about how software and AI work.", '<a href="#/about">Read more</a>')}${card("Education", "Karunya Institute of Technology and Sciences, Computer Science and Engineering.", '<a href="#/education">See my studies</a>')}${card("Career goals", "Become a skilled software engineer and work on meaningful products.", '<a href="#/goals">View the roadmap</a>')}</div></section>
  <section class="sec"><h2>Technical interests</h2>${DATA.interests.map(i => `<span class="tag or">${i[0]}</span>`).join("")}</section>
  <section class="sec"><h2>Featured projects</h2><div class="grid">${DATA.projects.slice(0, 2).map(p => card(p.name, p.desc, `<span class="tag or">${p.status}</span>`)).join("")}</div></section>
  <section class="sec"><h2>Currently learning</h2>${DATA.exploring.map(i => `<span class="tag or">${i}</span>`).join("")}</section>
  <section class="sec glass card rv" style="text-align:center"><h2>Let's build something together</h2><p>Open to internships, hackathon teams and conversations.</p><div class="row" style="justify-content:center"><a class="btn p" href="#/contact">Get in touch</a></div></section>`,

  about: () => head("About me", "A student, a builder, and a lifelong learner.", "About") + `<div class="glass card rv" style="display:flex;gap:30px;flex-wrap:wrap;align-items:center"><div class="mono" role="img" aria-label="SR monogram">SR</div><div style="flex:1;min-width:240px"><h3>${DATA.name}</h3><p>18, ${DATA.loc}. First-year B.Tech student in Computer Science and Engineering at Karunya Institute of Technology and Sciences.</p></div></div>
  <div class="grid sec">${card("Why computer science", "Add your own story here: what first got you curious about code?")}${card("What I'm learning", "C, web fundamentals, digital logic and the maths behind computing.")}${card("How I solve problems", "Break it down, try small experiments, learn from errors, repeat.")}${card("Beyond academics", "Gaming, creative technology, hackathons and building useful things.")}${card("Long-term vision", "Become a software engineer and eventually create original products.")}</div>
  <div class="glass card rv" style="text-align:center;padding:50px"><h2 style="margin:0">Learn relentlessly. Build consistently. <span class="o">Improve every day.</span></h2></div>
  <section class="sec"><h2>Growth timeline</h2><div class="tl">${DATA.timeline.map(t => `<div class="it rv"><h3>${t[1]}</h3><p>${t[0]} · ${t[2]}</p></div>`).join("")}</div></section>`,

  education: () => head("Education", "Where I'm studying and what I'm building foundations in.", "Education") + `<div class="glass card rv"><h3>Karunya Institute of Technology and Sciences</h3><p>B.Tech, Computer Science and Engineering · First year · Coimbatore</p></div>
  <section class="sec"><h2>Subjects</h2><div class="grid">${DATA.subjects.map(s => card(s[0], s[1], '<span class="tag">Edit notes in script.js</span>')).join("")}</div></section>
  <section class="sec"><h2>Academic timeline</h2><div class="tl">${DATA.timeline.map(t => `<div class="it rv"><h3>${t[1]}</h3><p>${t[0]} · ${t[2]}</p></div>`).join("")}</div></section>
  <section class="sec"><h2>More to add</h2><div class="grid">${["Semester achievements", "Certifications", "Workshops", "Academic projects", "Future academic goals"].map(x => `<div class="glass card ph rv"><h3>${x}</h3><p>Placeholder: nothing added yet.</p></div>`).join("")}</div></section>`,

  goals: () => head("Career goals", "My roadmap. Progress bars show only what I set myself; they start at 0%.", "Goals") + `<div class="tl">${DATA.stages.map((s, i) => `<div class="it"><div class="glass card rv"><h3>Stage ${i + 1}: ${s[0]}</h3><ul style="color:var(--mu);padding-left:20px">${s[1].map(x => `<li>${x}</li>`).join("")}</ul><div class="bar" role="progressbar" aria-valuenow="${s[2]}" aria-valuemin="0" aria-valuemax="100"><i data-w="${s[2]}"></i></div><p style="font-size:.8rem">${s[2]}% (self-reported)</p></div></div>`).join("")}</div>`,

  skills: () => head("Skills and learning", "These are areas I'm learning, not expert claims.", "Skills") + Object.entries(DATA.skills).map(([c, l]) => `<section class="sec" style="margin:40px 0"><h2 style="font-size:1.6rem">${c}</h2><div class="grid">${l.map(s => `<div class="glass card rv"><h3>${s[0]}</h3><span class="tag or">${s[1]}</span>${s[2] == null ? '<p style="font-size:.8rem;margin-top:10px">Level not rated yet</p>' : `<div class="bar"><i data-w="${s[2]}"></i></div>`}</div>`).join("")}</div></section>`).join(""),

  projects: () => head("Projects", "Things I'm building and planning to build.", "Projects") + `<div class="filters" role="group" aria-label="Filter">${["All", ...new Set(DATA.projects.map(p => p.cat))].map((c, i) => `<button class="btn${i ? "" : " on"}" data-f="${c}">${c}</button>`).join("")}</div><div class="grid" id="pg">${DATA.projects.map((p, i) => `<article class="glass card" data-c="${p.cat}"><div class="prev">Preview coming soon</div><h3>${p.name}</h3><p>${p.desc}</p><span class="tag or">${p.status}</span><span class="tag">${p.cat}</span><div class="row" style="margin-top:14px"><button class="btn" data-m="${i}">Details</button></div></article>`).join("")}</div>`,

  experience: () => head("Hackathons and experience", "Learning through building and teamwork. Nothing is listed until it's verified.", "Experience") + Object.entries(DATA.experience).map(([k, l]) => `<section class="sec" style="margin:40px 0"><h2 style="font-size:1.6rem">${k}</h2><div class="grid">${l.length ? l.map(e => card(e.name, `${e.date} · ${e.role}<br>${e.desc}<br>Outcome: ${e.outcome}`, `${(e.tech || []).map(t => `<span class="tag">${t}</span>`).join("")}${e.repo ? link(e.repo, "Repository", "tag or") : ""}`)).join("") : `<div class="glass card ph rv"><h3>Nothing added yet</h3><p>Add an entry in DATA.experience with name, date, role, tech, desc, outcome, repo.</p></div>`}</div></section>`).join(""),

  interests: () => head("Interests and exploration", "Tap a card to read more.", "Interests") + `<div class="grid">${DATA.interests.map(i => `<details class="glass card rv"><summary>${i[0]}</summary><p>${i[1]}</p></details>`).join("")}</div><section class="sec"><h2>Currently exploring</h2>${DATA.exploring.map(i => `<span class="tag or">${i}</span>`).join("")}</section>`,

  resume: () => head("Resume", "Clean, ATS-friendly and print-ready.", "Resume") + `<div class="row noprint" style="margin:0 0 20px">${DATA.resumePDF ? `<a class="btn p" href="${esc(DATA.resumePDF)}" download>Download Resume PDF</a>` : `<span class="btn" aria-disabled="true">Resume PDF not uploaded yet</span>`}<button class="btn" onclick="print()">Print this page</button></div>
  <div class="resume"><h1 style="font-size:2rem;color:#111">${DATA.name}</h1><p>${DATA.email} · ${DATA.loc}</p>
  <h3>Summary</h3><p>First-year B.Tech CSE student exploring software engineering, AI and web development.</p>
  <h3>Education</h3><p>B.Tech, Computer Science and Engineering, Karunya Institute of Technology and Sciences (in progress, first year)</p>
  <h3>Technical skills (learning)</h3><p>C, HTML, CSS, JavaScript, Python, Git</p>
  <h3>Projects</h3><p>Personal Portfolio Website (in progress)</p>
  <h3>Hackathons and experience</h3><p class="ph">[Add when available]</p><h3>Certifications</h3><p class="ph">[Add when available]</p><h3>Achievements</h3><p class="ph">[Add when available]</p></div>`,

  contact: () => head("Contact", "Say hello. Your message opens as a draft in Gmail.", "Contact") + `<div class="grid"><div class="glass card"><h3>${DATA.name}</h3><p><a href="mailto:${DATA.email}">${DATA.email}</a><br>${DATA.loc}</p><div class="row">${link(DATA.github, "GitHub")}${link(DATA.linkedin, "LinkedIn")}</div></div>
  <form class="glass card" id="cf" novalidate>${["name", "email", "subject"].map(f => `<div><label for="${f}">${f[0].toUpperCase() + f.slice(1)}</label><input id="${f}" name="${f}" ${f == "email" ? 'type="email"' : ""} autocomplete="${f}"><div class="err" id="e-${f}"></div></div>`).join("")}<div><label for="message">Message</label><textarea id="message" rows="5"></textarea><div class="err" id="e-message"></div></div><button class="btn p" type="submit">Open in Gmail</button><div id="st" role="status"></div></form></div>`
};

function render() {
  const key = location.hash.replace(/^#\/?/, "").split("?")[0], v = views[key];
  const t = PAGES.find(p => p[0] === key);
  document.title = v ? (t[1] === "Home" ? "Sanjay Ragunathan | Computer Science & Software Engineering" : `${t[1]} | Sanjay Ragunathan`) : "Page not found | Sanjay Ragunathan";
  $("#app").innerHTML = `<div class="page">${v ? v() : `<div style="text-align:center;padding:80px 0"><h1 class="o">404</h1><p>This page doesn't exist.</p><div class="row" style="justify-content:center"><a class="btn p" href="#/">Back home</a></div></div>`}</div>`;
  $$("#links a,#drawer a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#/" + key));
  scrollTo(0, 0); closeDrawer(); wire(key);
}
function wire(key) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); $$("[data-w]", e.target).forEach(b => b.style.width = b.dataset.w + "%"); io.unobserve(e.target); } }), { threshold: .15 });
  $$(".rv").forEach(el => io.observe(el));
  if (key === "") orb();
  if (key === "projects") {
    $$(".filters .btn").forEach(b => b.onclick = () => { $$(".filters .btn").forEach(x => x.classList.toggle("on", x === b)); $$("#pg article").forEach(a => a.style.display = b.dataset.f === "All" || a.dataset.c === b.dataset.f ? "" : "none"); });
    $$("[data-m]").forEach(b => b.onclick = () => { const p = DATA.projects[b.dataset.m], m = $("#modal"); m.innerHTML = `<h2>${p.name}</h2><p>${p.desc}</p><p style="margin-top:10px">Status: ${p.status} · ${p.cat}</p><div>${p.stack.map(s => `<span class="tag or">${s}</span>`).join("")}</div><div class="row">${link(p.repo, "View source")}${link(p.demo, "Live demo")}<button class="btn" onclick="this.closest('dialog').close()">Close</button></div>`; m.showModal(); });
  }
  if (key === "contact") $("#cf").onsubmit = e => {
    e.preventDefault(); let ok = true; const v = {};
    ["name", "email", "subject", "message"].forEach(f => { v[f] = $("#" + f).value.trim(); let m = ""; if (!v[f]) m = "Enter your " + f + "."; else if (f === "email" && !/^\S+@\S+\.\S+$/.test(v[f])) m = "Enter a valid email address."; else if (f === "message" && v[f].length < 10) m = "Write at least 10 characters."; $("#e-" + f).textContent = m; if (m) ok = false; });
    const st = $("#st"); if (!ok) { st.className = "err"; st.textContent = "Fix the highlighted fields and try again."; return; }
    st.className = "ok"; st.textContent = "Opening Gmail in a new tab. If nothing opens, allow pop-ups or email me at " + DATA.email + ".";
    const gm = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(DATA.email)}&su=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(v.message + "\n\nFrom: " + v.name + " (" + v.email + ")")}`;
    window.open(gm, "_blank", "noopener");
  };
}
function orb() {
  const c = $("#orb"); if (!c) return; const x = c.getContext("2d"), S = 520; c.width = c.height = S;
  const pts = Array.from({ length: 260 }, (_, i) => { const y = 1 - 2 * (i + .5) / 260, r = Math.sqrt(1 - y * y), a = i * 2.39996; return [Math.cos(a) * r, y, Math.sin(a) * r]; });
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches; let t = 0, mx = 0;
  c.onpointermove = e => mx = (e.offsetX / c.clientWidth - .5);
  (function f() {
    if (!document.body.contains(c)) return; x.clearRect(0, 0, S, S); t += still ? 0 : .006; const R = S * .36;
    for (const [px, py, pz] of pts) { const a = t + mx, X = px * Math.cos(a) - pz * Math.sin(a), Z = px * Math.sin(a) + pz * Math.cos(a), k = (Z + 1.6) / 2.6;
      x.fillStyle = `rgba(255,${100 + 60 * k | 0},0,${.15 + .85 * k})`; x.beginPath(); x.arc(S / 2 + X * R, S / 2 + py * R, 1 + 2.2 * k, 0, 6.3); x.fill(); }
    requestAnimationFrame(f);
  })();
}
function closeDrawer() { $("#drawer").classList.remove("open"); $("#burger").setAttribute("aria-expanded", "false"); }
const lk = PAGES.map(p => `<a href="#/${p[0]}">${p[1]}</a>`).join("");
$("#links").innerHTML = lk; $("#drawer").innerHTML = lk; $("#yr").textContent = new Date().getFullYear();
$("#burger").onclick = () => { const o = $("#drawer").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", o); };
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
addEventListener("scroll", () => $("#top").classList.toggle("show", scrollY > 500), { passive: true });
addEventListener("keydown", e => e.key === "Escape" && closeDrawer());
const cur = $("#cursor");
addEventListener("pointermove", e => { cur.style.left = e.clientX + "px"; cur.style.top = e.clientY + "px"; cur.classList.toggle("big", !!e.target.closest("a,button,summary,input,textarea")); });
addEventListener("hashchange", render);
addEventListener("load", () => { render(); setTimeout(() => $("#loader").classList.add("done"), 500); });
