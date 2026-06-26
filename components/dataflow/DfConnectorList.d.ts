import * as React from 'react';

export interface DfConnector {
  /** Stable id, matched against the selected value. */
  id: string;
  /** Connector display name. */
  name: React.ReactNode;
  /** Muted second line (host, region, type…). */
  meta?: React.ReactNode;
  /** Logo image URL (takes priority over `icon`). */
  logo?: string;
  /** Font Awesome name (without `fa-` prefix) or an icon node. */
  icon?: React.ReactNode;
}

/**
 * Vertical list of selectable connector cards with a coloured left accent rail.
 */
export interface DfConnectorListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  connectors?: DfConnector[];
  /** Controlled selected connector id (`null` for none). */
  value?: string | null;
  /** Initial selection in uncontrolled mode. */
  defaultValue?: string | null;
  onSelect?: (connector: DfConnector) => void;
}

export declare function DfConnectorList(props: DfConnectorListProps): React.JSX.Element;
