/* test mode: the mobile suite saves through the demo stand-ins with the column names as written (no SharePoint column lookup) */
(function () { const M = window.MOBA; if (!M) return; const clean = o => { const f = {}; Object.entries(o || {}).forEach(([k, v]) => { if (v !== undefined) f[k] = v; }); return f; };
  M.add = (l, o) => createItem('demo', l, clean(o)); M.upd = (l, id, o) => updateItem('demo', l, id, clean(o)); M.attach = async () => true; })();
orbMobile.on(); setTimeout(() => sectionToast('Test mode: demo data — saves stay on this phone, not in SharePoint', 'info'), 600);
