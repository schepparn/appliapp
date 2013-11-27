module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'tests/lib/angular/angular.js',
      'tests/lib/angular/angular-*.js',
      'public/javascripts/**/*.js',
      'tests/unit/**/*.js'
    ],

    exclude : [
      'tests/lib/angular/angular-loader.js',
      'tests/lib/angular/*.min.js',
      'tests/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
