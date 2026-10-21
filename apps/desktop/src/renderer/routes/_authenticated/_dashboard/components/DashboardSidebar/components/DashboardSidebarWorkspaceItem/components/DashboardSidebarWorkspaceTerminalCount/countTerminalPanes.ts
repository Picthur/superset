import type { WorkspaceState } from "@superset/panes";

/** Terminal panes across every tab of a persisted pane layout. */
export function countTerminalPanes(
	layout: WorkspaceState<unknown> | undefined,
): number {
	if (!layout) return 0;
	let count = 0;
	for (const tab of layout.tabs) {
		for (const pane of Object.values(tab.panes)) {
			if (pane.kind === "terminal") count += 1;
		}
	}
	return count;
}
