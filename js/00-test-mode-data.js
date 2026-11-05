/* ===== TEST MODE stubs: demo data, nothing goes to SharePoint ===== */
const LS_BASE = 'orbit_mtest';
var currentUser = { username: 'nader.alnajjar', displayName: 'Nader Alnajjar', role: 'Admin', jobTitle: 'W/L Operations', locationId: '7' };
const locIds = u => ['7'], locWhName = u => 'Al Ain DC', locScoped = () => true;
const getGlobalAccessToken = () => 'demo', getGlobalSiteUrl = () => 'https://demo.sharepoint.com/sites/orbit';
const escapeHtml = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function sectionToast(t, k) { let w = document.getElementById('tw'); if (!w) { w = document.createElement('div'); w.id = 'tw'; document.body.appendChild(w); } const d = document.createElement('div'); d.className = 'tt ' + (k || 'success'); d.textContent = t; w.appendChild(d); setTimeout(() => d.classList.add('out'), 3200); setTimeout(() => d.remove(), 3700); }
const today = new Date(), iso = d => d.toISOString(), daysAgo = n => new Date(Date.now() - n * 864e5);
const DB = {
  Vehicles_Dtls_tbl: ['AD 1 23456', 'AD 1 77881', 'AD 5 30412', 'DXB K 90210'].map(v => ({ Vehicles_Plate_Nr: v })),
  Vehicle_Mngmnt_tbl: [{ Vehicle_Nr: 'AD 1 23456', ODO_Reading: 84210, ODO_Reading_Type: 'Parking', Reading_TimeStamp: '11/04/2026 06:10 PM', User_Name: 'nader.alnajjar', Reading_Date: iso(daysAgo(1)) },
    { Vehicle_Nr: 'AD 1 77881', ODO_Reading: 152377, ODO_Reading_Type: 'Start', Reading_TimeStamp: '11/04/2026 07:02 AM', User_Name: 'nader.alnajjar', Reading_Date: iso(daysAgo(1)) },
    { Vehicle_Nr: 'AD 5 30412', ODO_Reading: 40990, ODO_Reading_Type: 'Parking', Reading_TimeStamp: '11/03/2026 05:41 PM', User_Name: 'someone.else', Reading_Date: iso(daysAgo(2)) }],
  WHs_Assigment_tbl: [{ Assigned_Staff: 'nader.alnajjar', WHs_ID: 3, WHs_Desc: 'Chiller Store A' }, { Assigned_Staff: 'nader.alnajjar', WHs_ID: 4, WHs_Desc: 'Dry Store B' }, { Assigned_Staff: 'nader.alnajjar', WHs_ID: 9, WHs_Desc: 'Frozen Store C' }],
  Stores_Locations_tbl: [{ Store_Desc: 'Chiller Store A', STR_Mini_Temp: 8, Mini_Humdty_Level: 0.65, Nr_of_Daily_Temp_Reading: 4 }, { Store_Desc: 'Dry Store B', STR_Mini_Temp: 25, Mini_Humdty_Level: 0.6, Nr_of_Daily_Temp_Reading: 3 }, { Store_Desc: 'Frozen Store C', STR_Mini_Temp: -18, Mini_Humdty_Level: 0.8, Nr_of_Daily_Temp_Reading: 6 }],
  WHs_Temperature_Reading_tbl: [{ WHs_Desc: 'Chiller Store A', Trans_Date: iso(today), Temperature_Degree: 6.2, Humidity_Reading: 55, Trans_Time: '08:02:11 AM' }],
  LoginUserList: []
};
const resolveIds = async (s, n) => ({ siteId: 'demo', listId: n });
const fetchColumns = async () => [];
const fetchAllItems = async (s, l) => { await new Promise(r => setTimeout(r, 250)); return (DB[l] || []).map((f, i) => ({ id: i + 1, fields: f })); };
const exp_fetchFilteredItems = fetchAllItems;
const spCoerceFields = (l, f) => f;
let askedAt = 0; document.addEventListener('pointerdown', e => { if (!e.target.closest('.cf')) askedAt = 0; }, true);
function ask(title, body) { return new Promise(res => { const o = document.createElement('div'); o.className = 'cf';
  o.innerHTML = `<div class="cfb"><div class="cfh"><i></i>${escapeHtml(title)}</div><div class="cfs">${body}</div><div class="cfa"><button data-a="0">Cancel</button><button data-a="1" class="p">Yes, save</button></div></div>`;
  o.addEventListener('click', e => { const b = e.target.closest('button'); if (!b && e.target !== o) return; o.remove(); res(!!(b && b.dataset.a === '1')); }); document.body.appendChild(o); }); }
async function gate(list, f) { if (Date.now() - askedAt < 4000) return; const ok = await ask('Confirm save', `<div><span>Goes to</span><b>${escapeHtml(list)}</b></div><div><span>By</span><b>${escapeHtml(currentUser.displayName)} · ${new Date().toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}</b></div><div class="tm">TEST MODE — saved on this phone only, not in SharePoint</div>`);
  if (!ok) throw new Error('Cancelled'); askedAt = Date.now(); }
const SAVED = [];
async function createItem(s, l, f) { await gate(l, f); await new Promise(r => setTimeout(r, 400)); (DB[l] = DB[l] || []).push(f); SAVED.push({ list: l, op: 'add', f }); console.log('TEST save →', l, f); return { id: 1000 + SAVED.length }; }
async function updateItem(s, l, id, f) { await gate(l, f); await new Promise(r => setTimeout(r, 400)); SAVED.push({ list: l, op: 'update #' + id, f }); console.log('TEST update →', l, id, f); return { id }; }
window.orbProg = { expect() {} };
window.srRenew = () => sectionToast('Test mode — no Microsoft session needed', 'info');
/* racks + stock */
const SRK = { rows: [], map: new Map(), ok: true };
[['A', 'Chiller Store A', 'Aisle A'], ['B', 'Dry Store B', 'Aisle B']].forEach(([a, loc, area]) => { for (let r = 1; r <= 6; r++) { const code = `AAN-${a}-R0${r}`; const row = { code, loc, area, whs: 'Al Ain DC', cap: a === 'A' ? 6 : 10, locId: '7' }; SRK.rows.push(row); SRK.map.set(code, row); } });
const srkLoad = async () => SRK, srkFind = c => SRK.map.get(String(c || '').trim().toUpperCase()) || null;
const SKUS = [['10010234', 'Al Ain Water 500ml x 24', 'CTN', 100], ['10010567', 'Al Ain Water 1.5L x 6', 'CTN', 80], ['20030011', 'Laban Full Cream 1L x 12', 'CTN', 60], ['20030088', 'Fresh Milk 2L x 6', 'CTN', 72], ['30050120', 'Orange Juice 200ml x 24', 'CTN', 90]];
const hist = { sku: new Map() }; let rid = 1;
function put(code, batch, prod, exp, lc, pos, qty) { const s = hist.sku.get(code); const b = s.batches.get(batch) || { batch, prod, exp, bal: 0, locs: new Map(), lf: new Map(), pp: new Map(), first: 1e15 }; const pm = b.pp.get(lc) || new Map(); pm.set(pos, { qty, vol: 100, first: rid++ }); b.pp.set(lc, pm); b.locs.set(lc, (b.locs.get(lc) || 0) + qty); b.bal += qty; s.batches.set(batch, b); }
SKUS.forEach(([code, dtls, uom, upp]) => hist.sku.set(code, { code, dtls, uom, base: '1', upp, batches: new Map() }));
put('20030011', 'B2611A', '2026-11-01', '2026-11-15', 'AAN-A-R01', 1, 60); put('20030011', 'B2611A', '2026-11-01', '2026-11-15', 'AAN-A-R01', 2, 60); put('20030088', 'M2610C', '2026-10-30', '2026-11-08', 'AAN-A-R01', 3, 72);
put('20030088', 'M2611A', '2026-11-03', '2026-11-11', 'AAN-A-R02', 1, 72); put('10010234', 'W2609', '2026-09-12', '2027-09-11', 'AAN-B-R01', 1, 100); put('10010234', 'W2609', '2026-09-12', '2027-09-11', 'AAN-B-R01', 2, 100); put('10010567', 'W2610', '2026-10-05', '2027-10-04', 'AAN-B-R01', 4, 80); put('30050120', 'J2610', '2026-10-20', '2027-04-18', 'AAN-B-R03', 1, 90);
window.WMVX = { S: { hist, loading: false }, load() {} };
window.rackBal = function (code) { const r = srkFind(code); if (!r) return null; const lc = r.code, used = new Set(); hist.sku.forEach(s => s.batches.forEach(b => { const pm = b.pp.get(lc); if (pm) pm.forEach((e, p) => { if (e.qty > 0) used.add(p); }); }));
  const free = []; for (let i = 1; i <= r.cap; i++) if (!used.has(i)) free.push(i); const lane = { code: r.code, cap: r.cap, known: true, free: free.length, freeList: free, lanePal: 0 }; return { r, lane, known: true }; };
/* keep the demo stock in step after put away / move */
const _c = createItem; createItem = async function (s, l, f) { const r = await _c(s, l, f); if (l === 'SKUs_Movements_Batch_tbl' && f.Storage_Location) { const sk = hist.sku.get(f.SKU_Code); if (sk) put(f.SKU_Code, f.Batch_Code, f.Prod_Date || '', f.Expiry_Date || '', f.Storage_Location, f.PLT_Position || 0, f.Qty_Rcvd); } return r; };
const _u = updateItem; updateItem = async function (s, l, id, f) { const r = await _u(s, l, id, f); if (l === 'SKUs_Movements_Batch_tbl') { let P = null; hist.sku.forEach((sk, code) => sk.batches.forEach(b => b.pp.forEach((pm, lc) => pm.forEach((e, pos) => { if (e.first === id && e.qty > 0) P = { code, batch: b.batch, from: lc, pos, qty: e.qty }; })))); if (P) { const b = hist.sku.get(P.code).batches.get(P.batch), pm = b.pp.get(P.from); pm.delete(P.pos); const tm = b.pp.get(f.Storage_Location) || new Map(); tm.set(f.PLT_Position || 0, { qty: P.qty, vol: 100, first: id }); b.pp.set(f.Storage_Location, tm); } } return r; };
