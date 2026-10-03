import type { AppDatabase } from "@/db";

// Fork patch: mailbox sharing is always enabled, with no Team license check.
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
