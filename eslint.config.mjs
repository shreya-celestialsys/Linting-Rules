import js from "@eslint/js";
import pluginImport from "eslint-plugin-import";

export default [
    js.configs.recommended,

    {
        plugins: {
			// For file structure
            import: pluginImport,
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",

            // Length of variables to be min 2 and max 20 (includes properties of objects as well)
            "id-length": [
                "error", {
                    "min": 2,
                    "max": 20,
                    "properties": "always",
                }
            ],

            // Max number of code lines per file
            "max-lines": [
                "error", {
                    "max": 200,
                    "skipBlankLines": true,
                }
            ],
			
			// For same naming convention throughout the project
			camelcase: "error"
        }
    }
];
