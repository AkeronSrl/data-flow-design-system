import * as React from 'react';

/**
 * KPI tile for dashboards — label over a large value, optional leading icon
 * and a trend delta (green for positive, red for a leading "-").
 *
 * @startingPoint section="Display" subtitle="Dashboard KPI tile" viewport="700x150"
 */
export interface TiaraStatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small caption above the value. */
  label: React.ReactNode;
  /** The headline metric. */
  value: React.ReactNode;
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Trend string, e.g. "+12%" or "-3%". */
  delta?: string;
}

export declare function TiaraStatCard(props: TiaraStatCardProps): React.JSX.Element;
