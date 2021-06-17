module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        //'prettier',
        //'prettier@typescript-eslint',
        //'plugin:prettier/recommended',
    ],

    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-var-requires': 0,
        // 'prettier/prettier': [
        //     'error',
        //     {
        //         singleQuote: true,
        //         semi: true,
        //         useTabs: false,
        //         tabWidth: 4,
        //         printWidth: 80,
        //         bracketSpacing: false,
        //         arrowParens: 'avoid',
        //         endOfLine: 'auto',
        //     },
        // ],
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
};
