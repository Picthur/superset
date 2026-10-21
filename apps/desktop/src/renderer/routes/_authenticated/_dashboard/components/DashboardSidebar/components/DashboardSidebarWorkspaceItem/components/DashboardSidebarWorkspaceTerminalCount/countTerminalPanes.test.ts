import { expect, test } from "bun:test";
import type { WorkspaceState } from "@superset/panes";
import { countTerminalPanes } from "./countTerminalPanes";

function layoutWith(kindsPerTab: string[][]): WorkspaceState<unknown> {
	return {
		version: 1,
		activeTabId: null,
		tabs: kindsPerTab.map((kinds, tabIndex) => ({
			id: `tab-${tabIndex}`,
			panes: Object.fromEntries(
				kinds.map((kind, paneIndex) => [
					`pane-${tabIndex}-${paneIndex}`,
					{ id: `pane-${tabIndex}-${paneIndex}`, kind, data: {} },
				]),
			),
		})),
	} as unknown as WorkspaceState<unknown>;
}

test("counts terminal panes across every tab and ignores other kinds", () => {
	expect(
		countTerminalPanes(layoutWith([["terminal"], ["terminal", "browser"], []])),
	).toBe(2);
});

test("a missing or empty layout has no terminals", () => {
	expect(countTerminalPanes(undefined)).toBe(0);
	expect(countTerminalPanes(layoutWith([]))).toBe(0);
});
