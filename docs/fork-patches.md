# Fork patches

This repository follows hieunc229/mailflare and carries a small patch on top of it. Keep the patch small so upstream merges stay clean. Each changed spot is marked with a `Fork patch:` comment.

- **Every feature is unlocked.** `getLicenseEntitlements` (`src/lib/licenses/service.ts`) always grants branding, account management and forwarding, and `getLicenseStatus` always reports an active Team plan. `isTeamMailboxSharingEnabled` (`src/lib/mailboxes/access-utils.ts`) always allows shared mailboxes.
- **Paymug is never contacted.** `callPaymugLicenseApi` (`src/lib/licenses/paymug.ts`) throws instead of calling the Paymug API.
- **The Licenses page is hidden** from the admin nav and the admin overview. The page and its API routes still exist so upstream changes to them merge without conflicts.
- **The Dashboard Update workflow merges.** `.github/workflows/deploy-update.yml` runs `git merge` on the upstream default branch instead of replacing the tree, so this patch survives updates. If upstream conflicts with it, the workflow stops and the merge has to be done locally.

When resolving a conflict in one of these files, take upstream's version and re-apply the marked change.
