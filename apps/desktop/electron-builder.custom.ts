/**
 * Electron Builder Configuration - personal fork build.
 * Installs side-by-side with the official release; auto-update is disabled
 * at runtime for the "Superset Custom" product name (see auto-updater.ts).
 */

import type { Configuration } from "electron-builder";
import baseConfig from "./electron-builder";

const productName = "Superset Custom";

const config: Configuration = {
	...baseConfig,
	appId: "com.superset.desktop.custom",
	productName,
	extraMetadata: { productName },
	publish: null,
	mac: {
		...baseConfig.mac,
		notarize: false,
		identity: null,
		artifactName: `Superset-Custom-\${version}-\${arch}.\${ext}`,
		extendInfo: {
			...baseConfig.mac?.extendInfo,
			CFBundleName: productName,
			CFBundleDisplayName: productName,
		},
	},
};

export default config;
