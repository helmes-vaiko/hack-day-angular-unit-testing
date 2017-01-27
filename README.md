# Preconditons: 
nodejs and npm are installed.

# Run angular application
npm start

# Install Karma:
npm install karma --save-dev

# Install plugins that your project needs:
npm install karma-jasmine jasmine-core --save-dev
npm install karma-chrome-launcher --save-dev
npm install karma-phantomjs-launcher jasmine-core --save-dev

# Install Karma Commandline Interface
npm install -g karma-cli

# Install Angular Mock
bower install angular-mocks --save-dev

# Init karma conf (not runningin git bash -> run in windows cmd)
karma init 
jasmine -> no -> PhantomJS -> -> ->yes

# Update karma.conf.js
    files: [
        'app/bower_components/jquery/dist/jquery.js',
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/lodash/dist/lodash.js',
        'app/bower_components/restangular/dist/restangular.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/js/**/*.module.js',
        'app/js/**/*.!(module).js',
        'test/unit/**/*.spec.js'
    ],

# Install coverage and configure coverage
npm install karma-coverage --save-dev

# Update karma.conf.js
	preprocessors: {
        'app/js/**/*.js' : ['coverage']
    },

    reporters: ['progress', 'coverage'],
    coverageReporter : {
		reporters : [
			{
				type: 'html',
				dir: 'coverage-html/'
			}
		]
    },

# Running tests
karma start karma.conf.js --single-run
