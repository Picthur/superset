interface SidebarCountsProps {
	attention: number;
	total: number;
}

/** "2 · 12": workspaces waiting on the user, then the total. */
export function SidebarCounts({ attention, total }: SidebarCountsProps) {
	return (
		<span className="tabular-nums">
			{attention > 0 ? (
				<>
					<span className="text-orange-400">{attention}</span>
					<span className="mx-1 opacity-60">·</span>
				</>
			) : null}
			{total}
		</span>
	);
}
