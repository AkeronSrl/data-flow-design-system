import React from 'react';
import { DfDataTypeChip } from './DfDataTypeChip.jsx';

/**
 * DfPreviewGrid — tabular data preview for a dataset / query result (Alkyra
 * `dataset-column-selector` preview grid). Sticky header cells show the column
 * caption, an optional actions menu, and a data-type chip (with cast badge);
 * the toolbar carries a selected/total counter and a slot for actions. Numeric
 * columns right-align with tabular figures.
 */
export function DfPreviewGrid({
  columns = [],
  rows = [],
  selectedCount,
  totalCount,
  actions,
  columnMenu = false,
  loading = false,
  emptyText = 'No rows to preview.',
  onColumnMenu,
  className = '',
  ...rest
}) {
  const total = totalCount ?? columns.length;
  const selected = selectedCount ?? columns.length;

  return (
    <div className={['df-preview', className].filter(Boolean).join(' ')} {...rest}>
      <div className="df-preview__toolbar">
        <span className="df-preview__counter"><b>{selected}</b> of <b>{total}</b> columns selected</span>
        {actions && <div className="df-preview__actions">{actions}</div>}
      </div>

      <div className="df-preview__grid" aria-busy={loading || undefined}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: 32 }}><span className="tia-spinner" style={{ width: 32, height: 32 }} /></div>
        ) : (
          <table className="df-table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.field}>
                    <div className="df-th__top">
                      <span className="df-th__caption" title={typeof col.caption === 'string' ? col.caption : undefined}>{col.caption ?? col.field}</span>
                      {columnMenu && (
                        <button type="button" className="df-th__menu" aria-label={`${col.caption ?? col.field} actions`} onClick={() => onColumnMenu?.(col)}>
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </button>
                      )}
                    </div>
                    {col.type && <DfDataTypeChip className="df-th__type" type={col.type} cast={col.cast} />}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr><td colSpan={Math.max(1, columns.length)} className="df-table__muted" style={{ textAlign: 'center', padding: 24 }}>{emptyText}</td></tr>
              ) : (
                rows.map((row, ri) => (
                  <tr key={ri}>
                    {columns.map((col) => {
                      const v = row[col.field];
                      const numeric = col.numeric ?? col.type === 'number';
                      const empty = v == null || v === '';
                      return (
                        <td key={col.field} className={numeric ? 'df-table__num' : undefined}>
                          {empty ? <span className="df-table__muted">—</span> : String(v)}
                        </td>
                      );
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
