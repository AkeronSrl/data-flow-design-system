/* global React */
// Nyma backoffice — interactive app shell tying screens together.
const { NymaSidebar, NymaTopBar, LoginScreen, Dashboard, OrdersList, OrderDetail } = window;

function NymaApp() {
  const [authed, setAuthed] = React.useState(false);
  const [nav, setNav] = React.useState('dashboard');
  const [order, setOrder] = React.useState(null);

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  const openOrder = (o) => { setOrder(o); setNav('orders'); };
  const goto = (id) => { setNav(id); setOrder(null); };

  let content;
  if (nav === 'orders' && order) content = <OrderDetail order={order} onBack={() => setOrder(null)} />;
  else if (nav === 'orders') content = <OrdersList onOpenOrder={openOrder} />;
  else if (nav === 'dashboard') content = <Dashboard onOpenOrders={() => goto('orders')} />;
  else content = <Placeholder nav={nav} />;

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
      <NymaSidebar active={nav} onNavigate={goto} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <NymaTopBar onLogout={() => { setAuthed(false); setNav('dashboard'); setOrder(null); }} />
        <main style={{ flex: 1, overflowY: 'auto', background: 'var(--color-background)' }}>{content}</main>
      </div>
    </div>
  );
}

const LABELS = {
  'purchase-orders': 'Ordini fornitore', companies: 'Aziende', pricing: 'Listini',
  products: 'Prodotti', collections: 'Collezioni', seasons: 'Stagioni', colors: 'Colori',
  stock: 'Giacenze', picking: 'Task picking', returns: 'Resi cliente',
};
function Placeholder({ nav }) {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>{LABELS[nav] || nav}</h1>
      <p style={{ margin: '4px 0 24px', fontSize: 14, color: 'var(--color-foreground-alt3)' }}>Modulo del backoffice Nyma.</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '64px 0', color: 'var(--color-foreground-alt3)', border: '1px dashed var(--color-border)', borderRadius: 12 }}>
        <i className="fa-solid fa-layer-group" style={{ fontSize: 36, opacity: 0.4 }} />
        <span style={{ fontSize: 14 }}>Schermata dimostrativa — apri <b style={{ color: 'var(--color-foreground)' }}>Dashboard</b> o <b style={{ color: 'var(--color-foreground)' }}>Ordini</b> per il flusso completo.</span>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NymaApp />);
