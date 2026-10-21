import { Trans } from "@lingui/react/macro";
import { Tooltip, TooltipContent, TooltipTrigger } from "@superset/ui/tooltip";
import { LuSquareTerminal } from "react-icons/lu";
import { useWorkspaceTerminalCount } from "./useWorkspaceTerminalCount";

interface DashboardSidebarWorkspaceTerminalCountProps {
	workspaceId: string;
}

/** Open terminals in a workspace; hidden for the usual single one. */
export function DashboardSidebarWorkspaceTerminalCount({
	workspaceId,
}: DashboardSidebarWorkspaceTerminalCountProps) {
	const count = useWorkspaceTerminalCount(workspaceId);
	if (count < 2) return null;
	return (
		<Tooltip delayDuration={300}>
			<TooltipTrigger asChild>
				<span className="flex shrink-0 items-center gap-0.5 text-[11px] tabular-nums text-muted-foreground">
					<LuSquareTerminal className="size-3" strokeWidth={1.5} />
					{count}
				</span>
			</TooltipTrigger>
			<TooltipContent side="right" sideOffset={8}>
				<Trans>Terminals</Trans>
			</TooltipContent>
		</Tooltip>
	);
}
