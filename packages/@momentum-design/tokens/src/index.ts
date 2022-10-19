// eslint-disable-next-line
import StyleDictionary from 'style-dictionary';

const styleDictionary = StyleDictionary.extend({
  source: ['./dist/json/core.json'], // TODO: use wildcards
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: './dist/scss/',
      files: [{
        destination: 'core.scss', // TODO: use wildcards and loop
        format: 'scss/variables',
      }],
    },
    css: {
      transformGroup: 'css',
      buildPath: './dist/css/',
      files: [{
        destination: 'core.css', // TODO: use wildcards and loop
        format: 'css/variables',
      }],
    },
    android: {
      transformGroup: 'android',
      buildPath: './dist/android/',
      files: [{
        destination: 'core.xml',
        format: 'android/colors',
      }],
    },
    'ios-swift': {
      transformGroup: 'ios-swift',
      buildPath: './dist/ios-swift/',
      files: [{
        destination: 'core.swift',
        format: 'ios-swift/class.swift',
      }],
    },
  },
});

styleDictionary.buildAllPlatforms();
