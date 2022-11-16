module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  globals: {
    __PRODUCTION_STAND_TYPE__: 'readonly',
    __STAGING_STAND_TYPE__: 'readonly',
    __DEVELOP_STAND_TYPE__: 'readonly',
    __LOCAL_STAND_TYPE__: 'readonly',
    __DEV__: 'readonly',
    __COMMIT__: 'readonly',
    __VERSION__: 'readonly',
    __PIPELINE_URL__: 'readonly',
    __RELEASE_TIME__: 'readonly',
    __STAND_TYPE__: 'readonly'
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
