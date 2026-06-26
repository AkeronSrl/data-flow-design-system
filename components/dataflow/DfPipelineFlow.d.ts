import * as React from 'react';

export interface DfFlowNode {
  /** Stable id (referenced by connections). */
  id: string;
  /** Dataset name. */
  name: React.ReactNode;
  /** Muted description line. */
  description?: React.ReactNode;
  /** Connector label (shown for source datasets). */
  connector?: React.ReactNode;
  /** Role — drives the left rail colour and default badge. */
  type?: 'source' | 'join' | 'derived' | string;
  /** Badge text (defaults to the role). */
  badge?: React.ReactNode;
  /** Icon: a logo URL (contains "/"), a Font Awesome name, or a node. */
  icon?: React.ReactNode;
  /** Explicit column index; computed from connections if omitted. */
  level?: number;
}

export interface DfFlowConnection {
  /** Source node id. */
  from: string;
  /** Target node id. */
  to: string;
  /** Operation label shown on the link (join, union, subset…). */
  operation?: React.ReactNode;
}

/**
 * Visual pipeline DAG: dataset nodes laid out in dependency columns, joined by
 * curved SVG links with operation labels. Node columns are derived from the
 * connection graph unless `level` is set per node.
 */
export interface DfPipelineFlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  nodes?: DfFlowNode[];
  connections?: DfFlowConnection[];
  /** Highlighted node id. */
  selectedId?: string;
  onSelect?: (node: DfFlowNode) => void;
  /** Header action nodes. */
  actions?: React.ReactNode;
  emptyText?: React.ReactNode;
}

export declare function DfPipelineFlow(props: DfPipelineFlowProps): React.JSX.Element;
