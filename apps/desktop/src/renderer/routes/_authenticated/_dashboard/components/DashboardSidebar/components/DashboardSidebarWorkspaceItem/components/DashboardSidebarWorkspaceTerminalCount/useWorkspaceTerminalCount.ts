import { eq, useLiveQuery } from "@tanstack/react-db";
import { useMemo } from "react";
import { useCollections } from "renderer/routes/_authenticated/providers/CollectionsProvider";
import { countTerminalPanes } from "./countTerminalPanes";

/** Terminal panes currently open in a workspace's tabs. */
export function useWorkspaceTerminalCount(workspaceId: string): number {
	const collections = useCollections();
	const { data = [] } = useLiveQuery(
		(q) =>
			q
				.from({ localState: collections.v2WorkspaceLocalState })
				.where(({ localState }) => eq(localState.workspaceId, workspaceId))
				.select(({ localState }) => ({ paneLayout: localState.paneLayout })),
		[collections, workspaceId],
	);
	return useMemo(() => countTerminalPanes(data[0]?.paneLayout), [data]);
}
