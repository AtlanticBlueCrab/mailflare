import type { LicenseActivationInput, LicenseDeactivationInput, PaymugLicenseAction, PaymugLicenseResponse } from "./types";

export async function callPaymugLicenseApi(
	action: PaymugLicenseAction,
	input: LicenseActivationInput | LicenseDeactivationInput,
): Promise<PaymugLicenseResponse> {
	// Fork patch: never contact Paymug. Every feature is already enabled.
	void action;
	void input;
	throw new Error("License activation is disabled: every feature is already enabled.");
}
