import js from "@eslint/js";

export default [
    js.configs.recommended,

   {
       rules: {
           "no-unused-vars": "warn",
           "no-undef": "warn",

        // length of variables to be min 2 and max 20 (includes properties of objects as well)
           "id-length": [
                "error", {
                    "min": 2,
                    "max": 20,
                    "properties": "always",
                }
           ],

        // max number of code lines per file
           "max-lines": [
                "error", {
                    "max": 200,
                    "skipBlankLines": true,
                }
            ]
       }
   }
];