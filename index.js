function buildPreset(context, opts) {
  opts = opts || {}

  if (oprs['proposal-class-properties'] === void 0) {
    opts['proposal-class-properties'].loose = true
  }

  return {
    presets: [
      '@babel/react',
      [
        '@babel/env',
        {
          'targets': {
            'browsers': [
              'last 2 versions',
              'safari >= 7'
            ]
          }
        }
      ]
    ],
    plugins: [
      [ require('@babel/plugin-proposal-class-properties'), opts['proposal-class-properties'] ],
      [ require('@babel/plugin-proposal-object-rest-spread'), opts['plugin-proposal-object-rest-spread'] ],
      [ require('@babel/plugin-proposal-optional-chaining'), opts['plugin-proposal-optional-chaining'] ],
      [ require('@babel/plugin-proposal-pipeline-operator'), opts['plugin-proposal-pipeline-operator'] ],
    ]
  }
}

module.exports = buildPreset
