/* global React */
// Nyma backoffice screens: Login, Dashboard, OrdersList, OrderDetail.
const DS = window.TiaraDesignSystemNyma_96297e;
const { TiaraButton, TiaraIconButton, TiaraInput, TiaraSelect, TiaraBadge, TiaraStatCard, TiaraCard, TiaraAlert, TiaraTabs, TiaraBreadcrumb, TiaraSeparator } = DS;

// ---- Mock data ----
const STATUS = {
  DRAFT: { label: 'Bozza', color: 'neutral' },
  CONFIRMED: { label: 'Confermato', color: 'green' },
  IN_PREPARATION: { label: 'In preparazione', color: 'amber' },
  SHIPPED: { label: 'Spedito', color: 'blue' },
  CANCELLED: { label: 'Annullato', color: 'red' },
};
const ORDERS = [
  { id: 'ORD-1042', customer: 'Boutique Marlene', type: 'B2B', status: 'CONFIRMED', total: '€ 12.480,00', date: '24 giu 2026', items: 18 },
  { id: 'ORD-1041', customer: 'Anna Lombardi', type: 'B2C', status: 'SHIPPED', total: '€ 318,00', date: '24 giu 2026', items: 3 },
  { id: 'ORD-1040', customer: 'Atelier Nord Srl', type: 'B2B', status: 'IN_PREPARATION', total: '€ 8.940,50', date: '23 giu 2026', items: 11 },
  { id: 'ORD-1039', customer: 'Marco Esposito', type: 'B2C', status: 'CONFIRMED', total: '€ 96,50', date: '23 giu 2026', items: 1 },
  { id: 'ORD-1038', customer: 'Showroom Quattro', type: 'Agente', status: 'DRAFT', total: '€ 24.110,00', date: '22 giu 2026', items: 42 },
  { id: 'ORD-1037', customer: 'La Maison du Lin', type: 'B2B', status: 'SHIPPED', total: '€ 5.220,00', date: '22 giu 2026', items: 9 },
  { id: 'ORD-1036', customer: 'Giulia Ferrari', type: 'B2C', status: 'CANCELLED', total: '€ 142,00', date: '21 giu 2026', items: 2 },
  { id: 'ORD-1035', customer: 'Concept Store 12', type: 'B2B', status: 'CONFIRMED', total: '€ 16.730,00', date: '21 giu 2026', items: 27 },
];

// ===================== LOGIN =====================
function LoginScreen({ onLogin }) {
  return (
    <div style={{ minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-background-alt1)', padding: 24 }}>
      <TiaraCard style={{ width: 380 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <img src="../../assets/logos/nyma-mark.svg" width="48" height="48" alt="Nyma" />
            <div style={{ fontSize: 20, fontWeight: 700 }}>Accedi a Nyma</div>
            <div style={{ fontSize: 13, color: 'var(--color-foreground-alt3)' }}>ERP operations · fashion</div>
          </div>
          <label style={{ fontSize: 13, fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 6 }}>
            Tenant
            <TiaraInput inputSize="md" defaultValue="bottega-aurora" leftIcon={<i className="fa-solid fa-building" />} />
          </label>
          <label style={{ fontSize: 13, fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 6 }}>
            Email
            <TiaraInput inputSize="md" defaultValue="m.rossi@bottega-aurora.it" type="email" />
          </label>
          <label style={{ fontSize: 13, fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 6 }}>
            Password
            <TiaraInput inputSize="md" type="password" defaultValue="········" />
          </label>
          <TiaraButton variant="primary" size="lg" onClick={onLogin} style={{ width: '100%', marginTop: 4 }}>Login</TiaraButton>
          <div style={{ textAlign: 'center', fontSize: 13 }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--color-accent-600)', textDecoration: 'none' }}>Password dimenticata?</a>
          </div>
        </div>
      </TiaraCard>
    </div>
  );
}

// ===================== DASHBOARD =====================
function Dashboard({ onOpenOrders }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Dashboard</h1>
        <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--color-foreground-alt3)' }}>Panoramica operativa · Bottega Aurora</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <TiaraStatCard label="Ordini aperti" value="248" delta="+12%" icon={<i className="fa-solid fa-cart-shopping" />} />
        <TiaraStatCard label="Da spedire" value="63" delta="-4%" icon={<i className="fa-solid fa-truck-fast" />} />
        <TiaraStatCard label="Valore mese" value="€ 184k" delta="+8%" icon={<i className="fa-solid fa-euro-sign" />} />
        <TiaraStatCard label="Stock sotto soglia" value="17" delta="+3" icon={<i className="fa-solid fa-triangle-exclamation" />} />
      </div>
      <TiaraAlert variant="warning" title="17 varianti sotto la soglia minima" action={<TiaraButton size="sm" variant="ghost">Vedi rifornimenti</TiaraButton>}>
        Genera i suggerimenti di riordino per evitare rotture di stock sulle collezioni in corso.
      </TiaraAlert>
      <TiaraCard title="Ordini recenti" headerActions={<TiaraButton size="sm" variant="ghost" rightIcon={<i className="fa-solid fa-arrow-right" />} onClick={onOpenOrders}>Tutti gli ordini</TiaraButton>}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {ORDERS.slice(0, 4).map((o, i) => (
            <div key={o.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderTop: i ? '1px solid var(--color-border-light)' : 0 }}>
              <span style={{ fontWeight: 600, color: 'var(--color-accent-600)', width: 96 }}>{o.id}</span>
              <span style={{ flex: 1, fontSize: 14 }}>{o.customer}</span>
              <TiaraBadge text={STATUS[o.status].label} color={STATUS[o.status].color} type="light" />
              <span style={{ width: 120, textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600, fontSize: 14 }}>{o.total}</span>
            </div>
          ))}
        </div>
      </TiaraCard>
    </div>
  );
}

// ===================== ORDERS LIST =====================
function OrdersList({ onOpenOrder }) {
  const [q, setQ] = React.useState('');
  const [status, setStatus] = React.useState('');
  const rows = ORDERS.filter((o) =>
    (!q || o.customer.toLowerCase().includes(q.toLowerCase()) || o.id.toLowerCase().includes(q.toLowerCase())) &&
    (!status || o.status === status)
  );
  const TH = { textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--color-foreground-alt3)', padding: '0 16px', height: 40, whiteSpace: 'nowrap' };
  const TD = { padding: '0 16px', height: 52, fontSize: 14, borderTop: '1px solid var(--color-border-light)' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Ordini</h1>
          <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--color-foreground-alt3)' }}>Gestisci ordini cliente B2B e B2C</p>
        </div>
        <TiaraButton variant="primary" leftIcon={<i className="fa-solid fa-plus" />}>Nuovo ordine</TiaraButton>
      </div>
      <TiaraCard flat style={{ overflow: 'hidden' }} bodyClassName="kit-grid-body">
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <div style={{ width: 280 }}>
            <TiaraInput value={q} onChange={(e) => setQ(e.target.value)} clearable onClear={() => setQ('')} placeholder="Cerca per N. ordine o cliente…" leftIcon={<i className="fa-solid fa-magnifying-glass" />} />
          </div>
          <div style={{ width: 200 }}>
            <TiaraSelect value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Tutti gli stati" options={Object.keys(STATUS).map((k) => ({ value: k, label: STATUS[k].label }))} />
          </div>
          {(q || status) && <TiaraButton size="sm" variant="ghost" onClick={() => { setQ(''); setStatus(''); }}>Resetta filtri</TiaraButton>}
        </div>
        <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 10, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: 'var(--color-background-alt1)' }}>
              <tr>
                <th style={TH}>N. Ordine</th>
                <th style={TH}>Cliente</th>
                <th style={TH}>Canale</th>
                <th style={TH}>Stato</th>
                <th style={{ ...TH, textAlign: 'right' }}>Totale</th>
                <th style={TH}>Data</th>
                <th style={{ ...TH, textAlign: 'center' }}>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((o) => (
                <tr key={o.id} style={{ cursor: 'pointer' }} onClick={() => onOpenOrder(o)}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-table-bg-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--color-accent-600)' }}>{o.id}</td>
                  <td style={TD}>{o.customer}</td>
                  <td style={{ ...TD, color: 'var(--color-foreground-alt3)' }}>{o.type}</td>
                  <td style={TD}><TiaraBadge text={STATUS[o.status].label} color={STATUS[o.status].color} type="light" /></td>
                  <td style={{ ...TD, textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{o.total}</td>
                  <td style={{ ...TD, color: 'var(--color-foreground-alt3)' }}>{o.date}</td>
                  <td style={{ ...TD, textAlign: 'center' }}>
                    <TiaraIconButton icon={<i className="fa-solid fa-eye" />} aria-label={`Apri ${o.id}`} onClick={(e) => { e.stopPropagation(); onOpenOrder(o); }} />
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={7} style={{ ...TD, textAlign: 'center', color: 'var(--color-foreground-alt3)', height: 80 }}>Nessun ordine corrisponde ai filtri.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, fontSize: 13, color: 'var(--color-foreground-alt3)' }}>
          <span>{rows.length} di {ORDERS.length} ordini</span>
          <div style={{ display: 'flex', gap: 6 }}>
            <TiaraButton size="sm" variant="secondary" disabled>Precedente</TiaraButton>
            <TiaraButton size="sm" variant="secondary">Successivo</TiaraButton>
          </div>
        </div>
      </TiaraCard>
    </div>
  );
}

// ===================== ORDER DETAIL =====================
function OrderDetail({ order, onBack }) {
  const [tab, setTab] = React.useState('lines');
  const o = order || ORDERS[0];
  const lines = [
    { sku: 'BLZ-001 / 42 / Navy', name: 'Blazer lana', qty: 4, price: '€ 320,00' },
    { sku: 'BLZ-001 / 44 / Navy', name: 'Blazer lana', qty: 3, price: '€ 320,00' },
    { sku: 'SHR-220 / M / Avorio', name: 'Camicia popeline', qty: 6, price: '€ 96,00' },
    { sku: 'TRS-118 / 46 / Antracite', name: 'Pantalone sartoriale', qty: 5, price: '€ 180,00' },
  ];
  const TH = { textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--color-foreground-alt3)', padding: '0 16px', height: 40 };
  const TD = { padding: '0 16px', height: 48, fontSize: 14, borderTop: '1px solid var(--color-border-light)' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 24 }}>
      <TiaraBreadcrumb items={[{ label: 'Ordini', href: '#' }, { label: o.id }]} />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <TiaraIconButton icon={<i className="fa-solid fa-arrow-left" />} aria-label="Indietro" variant="secondary" onClick={onBack} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>{o.id}</h1>
              <TiaraBadge text={STATUS[o.status].label} color={STATUS[o.status].color} />
            </div>
            <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--color-foreground-alt3)' }}>{o.customer} · {o.type} · {o.date}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <TiaraButton variant="secondary" leftIcon={<i className="fa-solid fa-print" />}>Proforma</TiaraButton>
          <TiaraButton variant="primary" leftIcon={<i className="fa-solid fa-check" />}>Conferma ordine</TiaraButton>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, alignItems: 'start' }}>
        <TiaraCard>
          <TiaraTabs value={tab} onChange={setTab} tabs={[{ value: 'lines', label: 'Righe ordine' }, { value: 'ship', label: 'Spedizioni' }, { value: 'docs', label: 'Documenti' }]} />
          {tab === 'lines' && (
            <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 10, overflow: 'hidden', marginTop: 16 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'var(--color-background-alt1)' }}>
                  <tr><th style={TH}>SKU</th><th style={TH}>Prodotto</th><th style={{ ...TH, textAlign: 'center' }}>Qtà</th><th style={{ ...TH, textAlign: 'right' }}>Prezzo</th></tr>
                </thead>
                <tbody>
                  {lines.map((l, i) => (
                    <tr key={i}>
                      <td style={{ ...TD, fontFamily: 'monospace', fontSize: 12.5, color: 'var(--color-foreground-alt2)' }}>{l.sku}</td>
                      <td style={TD}>{l.name}</td>
                      <td style={{ ...TD, textAlign: 'center' }}>{l.qty}</td>
                      <td style={{ ...TD, textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{l.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab !== 'lines' && (
            <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--color-foreground-alt3)', fontSize: 14 }}>
              <i className={`fa-solid ${tab === 'ship' ? 'fa-truck' : 'fa-file-lines'}`} style={{ fontSize: 32, opacity: 0.4, display: 'block', marginBottom: 10 }} />
              {tab === 'ship' ? 'Nessuna spedizione registrata.' : 'Nessun documento generato.'}
            </div>
          )}
        </TiaraCard>
        <TiaraCard title="Riepilogo">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <Row k="Articoli" v={`${o.items} pezzi`} />
            <Row k="Imponibile" v="€ 10.229,51" />
            <Row k="IVA 22%" v="€ 2.250,49" />
            <TiaraSeparator />
            <Row k="Totale" v={o.total} strong />
          </div>
        </TiaraCard>
      </div>
    </div>
  );
}

function Row({ k, v, strong }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ color: 'var(--color-foreground-alt3)' }}>{k}</span>
      <span style={{ fontWeight: strong ? 700 : 500, fontSize: strong ? 16 : 14, fontVariantNumeric: 'tabular-nums' }}>{v}</span>
    </div>
  );
}

Object.assign(window, { LoginScreen, Dashboard, OrdersList, OrderDetail });
