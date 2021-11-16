module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@Components': './src/components',
          '@Assets': './src/assets',
          '@Interfaces': './src/interfaces',
          '@Helper': './src/helper',
          '@Constants': './src/constants',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
