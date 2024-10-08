import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
  'rules': {
        'accessor-pairs': 'error',
        'array-bracket-spacing': [
            'error',
            'always'
        ],
        'array-callback-return': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'callback-return': 'error',
        'camelcase': 'error',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'error',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'comma-style': [
            'error',
            'last'
        ],
        'complexity': 'error',
        'computed-property-spacing': 'off',
        'consistent-return': 'error',
        'consistent-this': 'error',
        'curly': 'off',
        'default-case': 'error',
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'off',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': [
            'error',
            'never'
        ],
        'func-style': 'error',
        'generator-star-spacing': 'error',
        'global-require': 'error',
        'guard-for-in': 'error',
        'handle-callback-err': 'error',
        'id-blacklist': 'error',
        'id-length': 'off',
        'id-match': 'error',
        'indent': 'off',
        'init-declarations': 'off',
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'line-comment-position': 'off',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-comment': 'error',
        'lines-around-directive': 'error',
        'max-depth': 'error',
        'max-len': 'off',
        'max-lines': [
          'error',
          {
            'max': 900,
            'skipBlankLines': true,
            'skipComments': true
          }
        ],
        'max-nested-callbacks': 'error',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'error',
        'multiline-ternary': 'off',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'off',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-catch-shadow': 'error',
        'no-confusing-arrow': 'error',
        'no-continue': 'error',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off',
        'no-floating-decimal': 'error',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': [
            'error',
            'functions'
        ],
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'error',
        'no-mixed-requires': 'error',
        'no-multi-spaces': 'off',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-native-reassign': 'error',
        'no-negated-condition': 'error',
        'no-negated-in-lhs': 'error',
        'no-nested-ternary': 'off',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error',
            {
                'props': false
            }
        ],
        'no-path-concat': 'error',
        'no-plusplus': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-modules': 'error',
        'no-restricted-properties': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-spaced-func': 'error',
        'no-sync': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'off',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'off',
        'no-void': 'error',
        'no-warning-comments': [
            'error',
            {
                'location': 'start'
            }
        ],
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-newline': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-property-newline': [
            'error',
            {
                'allowMultiplePropertiesPerLine': true
            }
        ],
        'object-shorthand': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': [
            'error',
            'always'
        ],
        'operator-linebreak': [
            'error',
            'after'
        ],
        'padded-blocks': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-reflect': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'off',
        'quote-props': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'radix': [
            'error',
            'always'
        ],
        'require-await': 'error',
        'rest-spread-spacing': 'error',
        'semi': 'error',
        'semi-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'sort-imports': 'error',
        'sort-keys': 'off',
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'error',
        'space-in-parens': 'off',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': [
            'error',
            'always'
        ],
        'strict': [
            'error',
            'never'
        ],
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'unicode-bom': [
            'error',
            'never'
        ],
        'vars-on-top': 'off',
        'wrap-iife': 'error',
        'wrap-regex': 'error',
        'yield-star-spacing': 'error',
        'yoda': [
            'error',
            'never'
        ]
    }
  }
];
