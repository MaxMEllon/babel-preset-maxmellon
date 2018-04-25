export default function buildPreset(context, opts) {
  opts = opts || {}

  opts['proposal-class-properties'] = opts['proposal-class-properties'] || {}

  if (opts['proposal-class-properties'].loose === void 0) {
    opts['proposal-class-properties'].loose = true
  }

  return {
    presets: [
      [
        '@babel/env',
        {
          'targets': {
            'node': '6.x'
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
