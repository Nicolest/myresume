(function(){
	var myResumeServices = angular.module('myResumeServices', []);
	
	/**************************************
	* Data service
	***************************************/
	
	myResumeServices.factory('myResumeData', function(utility){
		return {
			getProfile : function() {
				var profileData = {
					title            : 'Ingénieur développement web Java J2EE !',
					name             : 'Nicolas Huguet',
					birthDate        : '01/01/1986',
					startWorkingDate : '01/01/2009',
					experience       : "$1 ans, $2 ans d'expérience"
				};
				var age = utility.getDurationInYears(false, profileData.birthDate);
				var workExperience = utility.getDurationInYears(true, profileData.startWorkingDate);
				var experience = utility.replaceParameters(profileData.experience, [age, workExperience]);
				var profile = {
					title      : profileData.title,
					name  	   : profileData.name,
					experience : experience
				};
				return profile;
			},
			getTagCloud : function() {
				var tagCloud = [
					{label:'HTML5', level:0}, {label:'AJAX', level:1}, {label:'Java/J2EE', level:2}, {label:'CSS3', level:0}, {label:'SONAR', level:0}, 
					{label:'CSS', level:0}, {label:'Shell', level:1}, {label:'Scrum', level:2}, {label:'Unix', level:0}, {label:'SQL', level:1}, {label:'REST', level:0},
					{label:'Javascript', level:1}, {label:'JQuery', level:2}, {label:'Tomcat', level:0}, {label:'Oracle', level:0}, {label:'AngularJS', level:0}, {label:'JSON', level:1},
					{label:'Spring', level:2}, {label:'JSP', level:0}, {label:'Maven', level:2}, {label:'UML', level:0}, {label:'Apache', level:1}, {label:'TDD', level:1}
				];
				return tagCloud;
			},
			getSkills : function() {
				var skills = [
					{
					 title:'Web',
					 specificSkills:['JAVA/J2EE (JSP, Spring, JSF)', 'REST', 'Javascript', 'JQuery', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'AngularJS', 'Twitter Bootstrap', 'LESS', 'PHP', 'Velocity', 'Mustache', 'Extjs', 'Joomla', 'Webpshere Portal']
					},
					{
					 title:'Langages et outils',
					 specificSkills:['JAVA', 'Spring', 'Junit', 'Hibernate/JDBC', 'Maven', 'Eclipse', 'Jenkins', 'Sonar', 'Jira', 'Bazaar', 'CVS', 'SVN', 'Git', 'Jmeter', 'Selenium', 'Fitnesse', 'Quality Center', 'Clearcase', 'Clearquest', 'shell Unix']
					},
					{
					 title:'Serveurs',
					 specificSkills:['Apache', 'Tomcat', 'Jboss', 'NodeJS (lab)']
					},
					{
					 title:'Base de donnees',
					 specificSkills:['Oracle', 'MySql', 'SQL', 'PL/SQL', 'PL/SQL Developer']
					},
					{
					 title:'Méthodologies ',
					 specificSkills:['Agile Scrum', 'TDD', 'XP', 'Merise', 'UML']
					},
					{
					 title:'Systèmes',
					 specificSkills:['Windows', 'Linux Debian']
					}
				];
				return skills;
			},
			getHobbies : function() {
				var hobbies = {
					hobby1 : {
						title : 'Sport',
						desc1 : 'Adepte du sport et plus particulièrement du football, je pratique cette discipline en club depuis mon plus jeune âge.',
						desc2 : 'J\'ai également entrainé une équipe de jeunes ainsi que l\'équipe de mon école Polytech\' qui a remporté cette année là le tournoi inter Polytech.'
					},
					hobby2 : {
						title : 'Voyage',
						desc1 : 'De nature curieux, je voyage régulièrement dans le but de découvrir de nouvelles cultures.',
						desc2 : 'J\'ai notamment été fasciné par mes séjours en Asie du Sud (Hong-Kong, Malaisie, Singapour, Thailande, Sri-Lanka).'
					},
					hobby3 : {
						title : 'Art',
						desc1 : 'Je me passionne pour les arts modernes et les arts urbains. Je vais régulièrement voir des expositions (Warhol, Dali, Keith Haring, Banksy ...).',
						desc2 : 'De plus j\'assiste à des représentations théâtrales, les comédies de boulevard me plaisent particulièrement.'
					}
				};
				return hobbies;
			},
			getContact : function() {
				var contact = {
					form : {
						error   : 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.',
						name    : 'Nom',
						email   : 'Email',
						message : 'Message',
						send    : 'Envoyer',
						confirm : {
							part1 : 'Merci pour votre message !',
							part2 : 'A bientôt',
							back  : 'Retour au formulaire »'
						}
					},
					address : {
						city    : 'Paris',
						zipCode : '75005',
						email   : 'nicolas.huguet34[@]gmail.com'
					}
				};
				return contact;
			},
			getNavigation : function(){
				var nav = {
					profile : 'Profil',
					skills  : 'Competences',
					career  : 'Experience',
					hobbies : 'Hobbies',
					contact : 'Contact'
				};
				return nav;
			},
			getTimeline : function(){
				var timeline = {
					lang    : 'fr',
					content : 'https://docs.google.com/spreadsheet/pub?key=0Aj1DRa-P1mk8dExmZUxzY2VzbzFUWm1jMnZJS09oZ0E&output=html' 
				}
				return timeline;
			},
			getLinks : function(){
				var links = {
					github   : 'https://github.com/nicolest',
					linkedin : 'http://fr.linkedin.com/pub/nicolas-huguet/42/544/851',
					twitter  : 'https://twitter.com/NicolasHuguet',
					resume   : '/data/nicolas_huguet_cv.pdf'
				}
				return links;
			},
			getTechnos : function(){
				var technos = {
					img : [
						{
							src   : '/img/technos/angularjs.png',
							title : 'AngularJS'
						},
						{
							src   : '/img/technos/html5.png',
							title : 'HTML5'
						},
						{
							src   : '/img/technos/css3.png',
							title : 'CSS3'
						},
						{
							src   : '/img/technos/bootstrap.jpg',
							title : 'Twitter Bootstrap'
						},
						{
							src   : '/img/technos/ascensorjs.jpg',
							title : 'AscensorJS'
						}
					],
					source : {
						text     : 'Sources du site sur ',
						link     : 'https://github.com/Nicolest/myresume'
					}				
				}
				return technos;
			}
		};
	});
	
	/**************************************
	* Mail service
	***************************************/
	
	myResumeServices.factory('mailManager', function($http){
		return {
			getContactTemplates : function(){
				return {contactForm:'views/contactForm.html', contactConfirm:'views/contactConfirmation.html'};
			},
			submitContactForm : function(data, callbackSuccess, callbackError){
				$http.post('/application/email.php', {name:data.name, email:data.email, message:data.message})
				.success(function(){
					callbackSuccess();
				})
				.error(function(){
					callbackError();
				});
			}
		};
	});
	
	/**************************************
	* Timeline service
	***************************************/
	
	myResumeServices.factory('timelineManager', function(){
		return {
			launchTimeline : function(dataUrl, lang){
				MY_RESUME.launchTimeline(dataUrl, lang);
			}
		};
	});
	
	/**************************************
	* Utility service
	***************************************/
	
	myResumeServices.factory('utility', function(){
		return {
			contains : function(value1, value2){
				return MY_RESUME.contains(value1, value2);
			},
			getDurationInYears : function(greater, startDate, endDate){
				return MY_RESUME.getDurationInYears(greater, startDate, endDate);
			},
			replaceParameters : function(string, values){
				return MY_RESUME.replaceParameters(string, values);
			}
		};
	});
	
	/**************************************
	* Loader management
	***************************************/
	
	// http method for which we want to display a spinner 
	var httpMethodWithSpinner = 'POST';
	// intercept http methods to add treatment
	myResumeServices.factory('myHttpInterceptor', function($q, $rootScope){
		return {
			'request': function(config) {
				if(config.method == httpMethodWithSpinner){
					// show loader
					$rootScope.$broadcast("show_loader");
				}
				return config || $q.when(config);
			},
			'response': function(response) {
				if(response.config.method == httpMethodWithSpinner){
					$rootScope.$broadcast("hide_loader");
				}
				return response || $q.when(response);
			},
			'responseError': function (rejection) {
				if(rejection.config.method == httpMethodWithSpinner){
					$rootScope.$broadcast("hide_loader");
				}
				return $q.reject(rejection);
			}
		};
	});
	myResumeServices.config(function($httpProvider){
		$httpProvider.interceptors.push('myHttpInterceptor');
	});
	myResumeServices.directive("loader", function(){
		return {
			link : function($scope, element){
				// hide the element initially
				element.hide();
				$scope.$on("show_loader", function () {
					element.show();
				});
				$scope.$on("hide_loader", function () {
					element.hide();
				});
			}
		};
	});
	
})();
