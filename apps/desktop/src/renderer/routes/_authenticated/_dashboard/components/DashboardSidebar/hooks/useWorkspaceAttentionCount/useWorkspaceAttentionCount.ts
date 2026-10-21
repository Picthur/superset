import { useMemo } from "react";
import type { ActivePaneStatus } from "shared/tabs-types";
import { useSidebarWorkspaceStatuses } from "../../providers/DashboardSidebarWorkspaceStatusProvider";

const ATTENTION_STATUSES: ReadonlySet<ActivePaneStatus> = new Set([
	"permission",
	"failed",
	"review",
]);

/** How many of the given workspaces are waiting on the user. */
export function useWorkspaceAttentionCount(
	workspaceIds: readonly string[],
): number {
	const statuses = useSidebarWorkspaceStatuses();
	return useMemo(
		() =>
			workspaceIds.filter((id) => {
				const status = statuses.get(id)?.status;
				return status != null && ATTENTION_STATUSES.has(status);
			}).length,
		[statuses, workspaceIds],
	);
}
