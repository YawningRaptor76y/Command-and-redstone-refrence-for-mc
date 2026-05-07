// ─── SECTION REGISTRY ────────────────────────────────────────────────────────
const SECTIONS = (() => {
  const registry = {};
  let activeId = null;

  return {
    register(section) {
      registry[section.id] = section;
      if (activeId === null) activeId = section.id;
    },
    get(id) {
      return registry[id] || null;
    },
    getActive() {
      return registry[activeId] || null;
    },
    setActive(id) {
      if (registry[id]) {
        activeId = id;
        return true;
      }
      return false;
    },
    all() {
      return Object.values(registry);
    }
  };
})();

// ─── STATE ───────────────────────────────────────────────────────────────────
let activeFilter = 'all';
let searchTerm   = '';

// ─── ACCENT THEMING ──────────────────────────────────────────────────────────
function applyAccent(section) {
  const root = document.documentElement;
  root.style.setProperty('--blue',      section.accent['--blue']);
  root.style.setProperty('--blue-dim',  section.accent['--blue-dim']);
  root.style.setProperty('--blue-glow', section.accent['--blue-glow']);
}

// ─── BADGE ───────────────────────────────────────────────────────────────────
function applyBadge(section) {
  document.getElementById('section-badge').textContent = section.badge;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function hl(text, term) {
  if (!term || !text) return text || '';
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(escaped, 'gi'), m => `<mark>${m}</mark>`);
}

function renderSyntax(raw) {
  return raw
    .replace(/<s>(.*?)<\/s>/g,    '<span class="s-cmd">$1</span>')
    .replace(/<r>(.*?)<\/r>/g,    '<span class="s-req">$1</span>')
    .replace(/<o>(.*?)<\/o>/g,    '<span class="s-opt">$1</span>')
    .replace(/<l>(.*?)<\/l>/g,    '<span class="s-lit">$1</span>')
    .replace(/<sub>(.*?)<\/sub>/g,'<span class="s-sub">$1</span>');
}

function tagHTML(cmd) {
  let h = '';
  if (cmd.alias) h += `<span class="tag tag-alias">≡ ${cmd.alias}</span>`;
  if (cmd.tags.includes('edu')) h += `<span class="tag tag-edu">EDU</span>`;
  if (cmd.tags.includes('dev')) h += `<span class="tag tag-dev">DEV</span>`;
  if (cmd.tags.includes('srv')) h += `<span class="tag tag-srv">SRV</span>`;
  if (cmd.tags.includes('exp')) h += `<span class="tag tag-exp">EXP</span>`;
  return h;
}

// ─── TRUTH TABLE RENDERER ────────────────────────────────────────────────────
// truthTable schema per entry:
//   truthTable: {
//     label:   string,           // optional override for section label
//     columns: string[],         // column headers
//     rows:    (string|number)[][] // each row matches columns length
//   }
//
// Cell values that equal 0 get class .tt-0 (dim red)
//                          1 get class .tt-1 (accent blue/green/etc)
//                          'X' get class .tt-x (don't-care, purple)
//                          anything else gets .tt-val (text-mid)

function renderTruthTable(tt, term) {
  const label = tt.label || 'Truth Table';
  let html = `<div class="slabel">${label}</div>`;
  html += `<div class="tt-wrap"><table class="tt-table"><thead><tr>`;
  tt.columns.forEach(col => {
    html += `<th>${hl(col, term)}</th>`;
  });
  html += `</tr></thead><tbody>`;
  tt.rows.forEach(row => {
    html += `<tr>`;
    row.forEach(cell => {
      const s = String(cell);
      let cls = 'tt-val';
      if (s === '0')  cls = 'tt-0';
      else if (s === '1') cls = 'tt-1';
      else if (s === 'X' || s === 'x') cls = 'tt-x';
      html += `<td class="${cls}">${hl(s, term)}</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody></table></div>`;
  return html;
}

function groupCommands(cmds, filter, section) {
  const out = {};
  for (const g of section.groupOrder) {
    const list = cmds.filter(c =>
      c.groups.includes(g) &&
      (filter === 'all' || c.groups.includes(filter))
    );
    if (list.length) out[g] = list;
  }
  return out;
}

function getFilteredCommands(section, term, filter) {
  return section.commands.filter(cmd => {
    const matchFilter = filter === 'all' || cmd.groups.includes(filter);
    if (!matchFilter) return false;
    if (!term) return true;
    const searchable = [
      cmd.name, cmd.alias, cmd.summary,
      cmd.notes,
      ...(cmd.syntaxes || []),
      ...(cmd.params   || []).flat(),
      // include truth table column headers and cell values in search
      ...(cmd.truthTable ? [
        ...(cmd.truthTable.columns || []),
        ...(cmd.truthTable.rows    || []).flat().map(String)
      ] : [])
    ].join(' ').toLowerCase();
    return searchable.includes(term);
  });
}

// ─── DROPDOWN ────────────────────────────────────────────────────────────────
function buildDropdown() {
  const select = document.getElementById('section-select');
  select.innerHTML = '';
  SECTIONS.all().forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = s.label;
    select.appendChild(opt);
  });
  select.value = SECTIONS.getActive().id;

  select.addEventListener('change', e => {
    SECTIONS.setActive(e.target.value);
    activeFilter = 'all';
    searchTerm   = '';
    document.getElementById('search').value = '';
    const section = SECTIONS.getActive();
    applyAccent(section);
    applyBadge(section);
    buildFilters();
    buildSidebar();
    renderMain();
  });
}

// ─── FILTER PILLS ────────────────────────────────────────────────────────────
function buildFilters() {
  const section   = SECTIONS.getActive();
  const filterRow = document.getElementById('filter-row');
  filterRow.innerHTML = '';
  section.filters.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'pill' + (f.key === activeFilter ? ' active' : '');
    btn.dataset.f = f.key;
    btn.textContent = f.label;
    filterRow.appendChild(btn);
  });
}

// ─── SIDEBAR ────────────────────────────────────────────────────────────────
function buildSidebar() {
  const section = SECTIONS.getActive();
  const aside   = document.getElementById('aside');
  if (typeof section.renderSidebar === 'function') {
    section.renderSidebar(aside);
    return;
  }

  aside.querySelectorAll('.snav-group, .ilink').forEach(el => el.remove());

  // commandPrefix: use exactly what the section defines — '' is valid (redstone/tools)
  // DO NOT fall back to '/' — that breaks non-command sections
  const prefix = (section.commandPrefix != null) ? section.commandPrefix : '/';

  const grouped = groupCommands(section.commands, 'all', section);
  for (const [gKey, cmds] of Object.entries(grouped)) {
    const lbl = document.createElement('div');
    lbl.className = 'snav-group';
    lbl.textContent = section.groupMeta[gKey] || gKey;
    aside.appendChild(lbl);

    cmds.forEach(cmd => {
      const a = document.createElement('div');
      a.className = 'ilink';
      a.textContent = prefix + cmd.name;
      a.dataset.id = cmd.id;
      a.onclick = () => {
        aside.querySelectorAll('.ilink').forEach(l => l.classList.remove('active'));
        a.classList.add('active');
        const card = document.getElementById('card-' + cmd.id);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (!card.classList.contains('open')) card.classList.add('open');
        }
      };
      aside.appendChild(a);
    });
  }
}

// ─── MAIN RENDER ────────────────────────────────────────────────────────────
function renderMain() {
  const section = SECTIONS.getActive();
  const main    = document.getElementById('main');
  const noRes   = document.getElementById('no-results');

  // Always purge any existing tool-panel before deciding what to render.
  // If we skip this when switching away from a renderTool section, the panel
  // stays in #main permanently because the normal .group cleanup below won't
  // touch it.
  const existingPanel = main.querySelector('.tool-panel');
  if (existingPanel) existingPanel.remove();

  // Reset no-results visibility — tools.js hides it unconditionally.
  // If we don't reset here, switching to a command section with no results
  // would leave #no-results hidden permanently.
  if (noRes) noRes.style.display = 'none';

  if (typeof section.renderTool === 'function') {
    section.renderTool(main);
    return;
  }
  main.querySelectorAll('.group').forEach(el => el.remove());

  // commandPrefix: same null-check as buildSidebar
  const prefix = (section.commandPrefix != null) ? section.commandPrefix : '/';

  const term     = searchTerm.toLowerCase().trim();
  const filtered = getFilteredCommands(section, term, activeFilter);
  const grouped  = groupCommands(filtered, 'all', section);
  let total      = 0;

  for (const [gKey, cmds] of Object.entries(grouped)) {
    total += cmds.length;

    const group = document.createElement('div');
    group.className = 'group';
    group.dataset.group = gKey;

    const gt = document.createElement('div');
    gt.className = 'gtitle';
    gt.innerHTML = `<span>${section.groupMeta[gKey] || gKey} <span style="color:var(--text-dim);font-weight:300">(${cmds.length})</span></span><span class="chevron">▼</span>`;
    gt.onclick = () => group.classList.toggle('collapsed');
    group.appendChild(gt);

    const gb = document.createElement('div');
    gb.className = 'gbody';

    cmds.forEach(cmd => {
      const card = document.createElement('div');
      card.className = 'cmd';
      card.id = 'card-' + cmd.id;

      const hdr = document.createElement('div');
      hdr.className = 'cmd-hdr';
      hdr.innerHTML = `
        <span class="cname">${hl(prefix + cmd.name, term)}</span>
        <span class="csum">${hl(cmd.summary, term)}</span>
        <span class="tags-inline">${tagHTML(cmd)}</span>
        <span class="xi">▶</span>`;
      hdr.onclick = () => card.classList.toggle('open');
      card.appendChild(hdr);

      const body = document.createElement('div');
      body.className = 'cbody';

      // ── tags
      const tagsRow = tagHTML(cmd);
      if (tagsRow) body.innerHTML += `<div style="padding-top:10px">${tagsRow}</div>`;

      // ── syntax
      if (cmd.syntaxes && cmd.syntaxes.length > 0) {
        body.innerHTML += `<div class="slabel">Syntax</div>`;
        cmd.syntaxes.forEach(s => {
          body.innerHTML += `<div class="sblock">${renderSyntax(s)}</div>`;
        });
      }

      // ── params
      if (cmd.params && cmd.params.length > 0) {
        body.innerHTML += `<div class="slabel">Parameters</div>`;
        let pt = `<table class="ptable"><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody>`;
        cmd.params.forEach(([p, t, d]) => {
          pt += `<tr><td class="pname">${hl(p, term)}</td><td class="ptype">${t}</td><td class="pdesc">${hl(d, term)}</td></tr>`;
        });
        pt += `</tbody></table>`;
        body.innerHTML += pt;
      }

      // ── truth table (after params, before gamerules/notes)
      if (cmd.truthTable) {
        body.innerHTML += renderTruthTable(cmd.truthTable, term);
      }

      // ── gamerules
      if (cmd.gamerules) {
        body.innerHTML += `<div class="slabel">Bedrock Game Rules</div>`;
        let gt2 = `<table class="gr-table"><thead><tr><th>Rule</th><th>Type</th><th>Default</th><th>Effect</th></tr></thead><tbody>`;
        cmd.gamerules.forEach(([r, t, d, desc]) => {
          gt2 += `<tr><td class="gr-name">${hl(r, term)}</td><td class="gr-type">${t}</td><td class="gr-def">${d}</td><td class="gr-desc">${desc}</td></tr>`;
        });
        gt2 += `</tbody></table>`;
        body.innerHTML += gt2;
      }

      // ── notes
      if (cmd.notes && cmd.notes.trim()) {
        const notesHL = hl(cmd.notes.replace(/`([^`]+)`/g, '<code>$1</code>'), term);
        body.innerHTML += `<div class="nlabel">Notes</div><div class="notes">${notesHL}</div>`;
      }

      card.appendChild(body);
      gb.appendChild(card);
    });

    group.appendChild(gb);
    main.appendChild(group);
  }

  const countEl = document.getElementById('result-count');
  countEl.textContent = term || activeFilter !== 'all'
    ? `${total} result${total !== 1 ? 's' : ''}`
    : `${section.commands.length} commands`;

  noRes.style.display = total === 0 ? 'block' : 'none';
}

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const section = SECTIONS.getActive();
  if (!section) {
    console.error('No sections registered. Check data file load order.');
    return;
  }

  applyAccent(section);
  applyBadge(section);
  buildDropdown();
  buildFilters();
  buildSidebar();
  renderMain();

  document.getElementById('search').addEventListener('input', e => {
    searchTerm = e.target.value;
    renderMain();
  });

  document.getElementById('filter-row').addEventListener('click', e => {
    if (!e.target.classList.contains('pill')) return;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    e.target.classList.add('active');
    activeFilter = e.target.dataset.f;
    renderMain();
  });
});
