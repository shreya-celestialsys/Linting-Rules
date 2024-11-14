import js from "@eslint/js";
import sonarjs from "eslint-plugin-sonarjs";
import noInlineFunctionRule from "./eslint-rules/index.js";

export default [
    js.configs.recommended,
   {
        linterOptions: {
            noInlineConfig: true,
        },
        plugins: {
            sonarjs,
            'inline-functions': noInlineFunctionRule
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",

            //no inline functions 
            "arrow-body-style": ["error", "always"],
            "inline-functions/no-inline-functions": "error", 

            //for redundancy
            "no-duplicate-imports":"error",
            "no-redeclare": "error",
            "no-self-assign": "error",
            "no-useless-return": "error",
            "no-useless-concat": "error",
            "sonarjs/no-duplicate-string":"error",
            "sonarjs/no-redundant-boolean":"error",
            "sonarjs/no-redundant-assignments":"error",
            "sonarjs/no-identical-functions":"error",

            //variable naming convention
            "new-cap": "error",
            "id-length": ["error", { "min": 3 }],
            "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"]
       }
   }
];