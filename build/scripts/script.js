/**
* Main AngularJS Web Application
*/
var app = angular.module('siteWebdevabq', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
// Home
.when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
// Pages
.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
.when("/projects", {templateUrl: "partials/portfolio.html", controller: "PageCtrl"})
.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
.when("/payment", {templateUrl: "partials/payment.html", controller: "PageCtrl"})
//.when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
/* etc routes to other pages */
// Blog
.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
// else 404
.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
* Controls the Blog
*/
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
console.log("Blog Controller reporting for duty.");
});

/**
* Controls all other Pages
*/
app.controller('PageCtrl', function ($scope /* $scope, $location, $http */) {
	
	$scope.projects = [
    {
      key: 'equiseq',
      name: 'EquiSeq',
	  client: 'Dr. Paul Szauter',
	  role: 'Web Developer',
	  url: 'http://equiseq.com',
	  year: '2015, 2016',
	  skills: 'HTML5, CSS3, LESS, PHP, MySQL, JavaScript, jQuery, Bootstrap, Gulp, GitHub, Amazon Web Services (AWS), PayPal API',
	  image: 'projects/equiseq.jpg'
    },
	{
      key: '501c3go',
      name: '501c3GO',
	  client: 'David Marmon',
	  role: 'Web Developer',
	  url: 'http://501c3go.com',
	  year: '2012, 2013, 2014, 2015, 2016',
	  skills: 'HTML, CSS3, PHP, JavaScript, jQuery, WordPress, WordPress theme customization, PayPal API, Google Adwords, Google Analytics, Search Engine Optimization',
	  image: 'projects/501c3go.jpg'
    },
	{
      key: 'afx',
      name: 'AFX',
	  client: 'David Marmon II',
	  role: 'Project Manager',
	  url: '',
	  year: '2015',
	  skills: 'HTML5, CSS3, WordPress, WordPress theme customization, Project Management',
	  image: 'afx_cropped.jpg'
    },
	{
      key: 'courtbuzz',
      name: 'CourtBuzz',
	  client: 'David Marmon II',
	  role: 'Project Manager',
	  url: 'http://courtbuzz.marmondesigns.com',
	  year: '2016',
	  skills: 'WordPress, Wordpress theme customization, Project Management',
	  image: 'courtbuzz_cropped.jpg'
    },
	{
      key: 'daytradingpsychology',
      name: 'DayTradingPsychology',
	  client: 'Dr. Kenneth Reid',
	  role: 'Web Developer',
	  url: 'http://daytradingpsychology.com',
	  year: '2012',
	  skills: 'HTML, CSS3, PHP, WordPress, WordPress Theme Customization, Search Engine Optimization',
	  image: 'projects/daytradingpsychology.jpg'
    },
	{
      key: 'evergrande',
      name: 'Chicago Evergrande',
	  client: 'David Marmon II',
	  role: 'Project Manager',
	  url: 'http://chicagoevergrande.com',
	  year: '2016',
	  skills: 'Project Management, WordPress, WPresidence, dsIDXpress, AutoBlog, WPML Language Switcher',
	  image: 'projects/evergrande.jpg'
    },
	{
      key: 'frec',
      name: 'FreeRealEstateCoupons',
	  client: 'David Marmon II',
	  role: 'Project Manager',
	  url: 'http://frec.marmondesigns.com',
	  year: '2016',
	  skills: 'Project Management, WordPress, WPresidence, IDXBroker, HTML5, CSS3, PHP',
	  image: 'frec_cropped.jpg'
    },
	{
      key: 'kanatara',
      name: 'Kanatara',
	  client: 'David Marmon',
	  role: 'Web Developer',
	  url: 'http://kanatara.com',
	  year: '2014, 2015, 2016',
	  skills: 'HTML5, CSS3, PHP, MySQL, PayPal API, JavaScript, jQuery, Bootstrap, GitHub, WordPress, WordPress Theme Customization, Web and Mobile Design',
	  image: 'projects/kanatara.jpg'
    },
	{
      key: 'manadigital',
      name: 'Mana Digital',
	  client: 'Dennis Harroun',
	  role: 'Web Developer',
	  url: 'http://manadigitalanddesign.com',
	  year: '2014, 2015',
	  skills: 'HTML5, CSS3, WordPress, WordPress Theme Customization, Web and Mobile Design, Adobe Photoshop',
	  image: 'projects/manadigital.jpg'
    },
	{
      key: 'tropicair',
      name: 'Tropic Air',
	  client: 'Robert Buckland',
	  role: 'Web Developer',
	  url: 'http://tropicair.com',
	  year: '2014',
	  skills: 'HTML, CSS, PHP, JavaScript, jQuery, WordPress, Custom WordPress Theme',
	  image: 'projects/tropicair.jpg'
    },
	{
      key: 'unmevents',
      name: 'Lobo Events',
	  client: 'UNM Mobile App Contest',
	  role: 'App Developer',
	  url: 'http://unmevents.com',
	  year: '2013',
	  skills: 'HTML5, CSS3, PHP, UNM Open Data, XML, Android Java and Eclipse IDE',
	  image: 'projects/unmevents.jpg'
    },
	{
      key: 'zappy',
      name: 'Zap Charging',
	  client: 'David Marmon II',
	  role: 'Project Manager',
	  url: 'http://zapcharging.com',
	  year: '2016',
	  skills: 'HTML5, CSS3, WordPress, WordPress Theme Customization, Project Management',
	  image: 'zappy_cropped.jpg'
    }
	];
	
	
console.log("Page Controller reporting for duty.");
});