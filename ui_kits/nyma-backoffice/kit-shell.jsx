/* global React */
// Nyma backoffice shell — dark sidebar + sticky top bar.
// Recreation of NymaSidebar / NymaTopBar from apps/web (Tiara migration).
const { TiaraAvatar, TiaraBadge } = window.TiaraDesignSystemNyma_96297e;

const NAV_SECTIONS = [
  {
    label: null,
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'fa-gauge-high' },
      { id: 'orders', label: 'Ordini', icon: 'fa-cart-shopping', badge: 6 },
      { id: 'purchase-orders', label: 'Ordini fornitore', icon: 'fa-file-invoice' },
      { id: 'companies', label: 'Aziende', icon: 'fa-building' },
      { id: 'pricing', label: 'Listini', icon: 'fa-tags' },
    ],
  },
  {
    label: 'Catalogo',
    items: [
      { id: 'products', label: 'Prodotti', icon: 'fa-shirt' },
      { id: 'collections', label: 'Collezioni', icon: 'fa-layer-group' },
      { id: 'seasons', label: 'Stagioni', icon: 'fa-calendar-days' },
      { id: 'colors', label: 'Colori', icon: 'fa-palette' },
    ],
  },
  {
    label: 'Magazzino',
    items: [
      { id: 'stock', label: 'Giacenze', icon: 'fa-boxes-stacked' },
      { id: 'picking', label: 'Task picking', icon: 'fa-hand' },
      { id: 'returns', label: 'Resi cliente', icon: 'fa-rotate-left' },
    ],
  },
];

function NavItem({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%',
        padding: '8px 12px', borderRadius: 8, border: 0, cursor: 'pointer',
        background: active ? 'var(--sidebar-active-bg)' : 'transparent',
        color: active ? 'var(--sidebar-active-fg)' : 'var(--sidebar-fg)',
        font: 'inherit', fontSize: 14, fontWeight: active ? 600 : 400, textAlign: 'left',
        transition: 'background 150ms',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'var(--sidebar-hover)'; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
    >
      <i className={`fa-solid ${item.icon}`} style={{ width: 18, textAlign: 'center', color: active ? 'var(--color-accent-400)' : 'var(--sidebar-fg-muted)' }} />
      <span style={{ flex: 1 }}>{item.label}</span>
      {item.badge && <TiaraBadge mode="number" count={item.badge} />}
    </button>
  );
}

function NymaSidebar({ active, onNavigate }) {
  return (
    <aside style={{
      width: 240, flexShrink: 0, height: '100%', display: 'flex', flexDirection: 'column',
      background: 'var(--sidebar-bg)', color: 'var(--sidebar-fg)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', borderBottom: '1px solid var(--sidebar-border)' }}>
        <img src="../../assets/logos/nyma-mark.svg" width="28" height="28" alt="Nyma" />
        <span style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc' }}>Nyma</span>
      </div>
      <div className="kit-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 8px 16px' }}>
        {NAV_SECTIONS.map((section, si) => (
          <div key={si} style={{ marginTop: si ? 12 : 0 }}>
            {section.label && (
              <div style={{ padding: '8px 12px 2px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--sidebar-section)' }}>
                {section.label}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {section.items.map((item) => (
                <NavItem key={item.id} item={item} active={active === item.id} onClick={() => onNavigate(item.id)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function NymaTopBar({ tenant = 'Bottega Aurora', onLogout }) {
  const [menu, setMenu] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30, display: 'flex', alignItems: 'center', gap: 12,
      height: 56, padding: '0 20px', background: 'var(--appbar-bg)',
      borderBottom: '1px solid var(--appbar-border)',
    }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-foreground)' }}>{tenant}</span>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-foreground-alt3)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '4px 8px' }}>IT</span>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setMenu((m) => !m)} style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 0 }}>
            <TiaraAvatar initials="MR" size="sm" />
          </button>
          {menu && (
            <div style={{ position: 'absolute', right: 0, top: 40, width: 200, background: 'var(--color-flyout-bg)', border: '1px solid var(--color-border-light)', borderRadius: 10, boxShadow: 'var(--shadow-panel)', padding: 6, zIndex: 40 }}>
              <div style={{ padding: '6px 10px', fontSize: 12, color: 'var(--color-foreground-alt3)' }}>m.rossi@bottega-aurora.it</div>
              <div style={{ height: 1, background: 'var(--color-border-light)', margin: '4px 0' }} />
              <button onClick={onLogout} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '8px 10px', border: 0, borderRadius: 6, background: 'transparent', cursor: 'pointer', font: 'inherit', fontSize: 14, color: 'var(--color-danger-600)' }}>
                <i className="fa-solid fa-right-from-bracket" /> Esci
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { NymaSidebar, NymaTopBar });
