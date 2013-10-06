(function(){
	var myResume = angular.module('myResume', ['myResumeServices']);
		
	myResume.filter('skillsFilter', function($filter, utility){
		return function(skills, query, title){
			var filteredSkills = $filter('filter')(skills, query);

			// if the query corresponds to the title and the filtered skills are empty, we return all the skills
			if(utility.contains(title, query) && filteredSkills.length == 0){
				return skills;
			}
			return filteredSkills;
		};
	});
	
	myResume.controller('MyCtrl', function($scope, myResumeData, mailManager, timelineManager){
		
		// Data mangement
		$scope.links = myResumeData.getLinks();
		$scope.nav = myResumeData.getNavigation();
		$scope.profile = myResumeData.getProfile();	
		$scope.tagCloud = myResumeData.getTagCloud();
		$scope.skills = myResumeData.getSkills();
		$scope.hobbies = myResumeData.getHobbies();
		$scope.contact = myResumeData.getContact();
		$scope.technos = myResumeData.getTechnos();
		
		// Style management
		var labelClassName = ['', 'label-success', 'label-warning', 'label-inverse', 'label-info', 'label-important'];
		var textColorClassName = ['muted', 'text-warning', 'text-info', 'text-success', 'text-error'];
		var tagSizeClassName = ['small-tag', 'medium-tag', 'big-tag'];
		
		$scope.labelClass = function(index){
			var labelClass = 'label';
			if(typeof labelClassName[index] !== undefined){
				labelClass += ' ' + labelClassName[index];
			}
			return labelClass;
		};
		
		$scope.tagClass = function(index, level){
			var tagClass;
			var colorClassNameId = index % 5;
			
			if(typeof textColorClassName[colorClassNameId] === undefined){
				colorClassNameId = 0;
			}
			tagClass = textColorClassName[colorClassNameId];

			if(typeof tagSizeClassName[level] === undefined){
				level = 0;
			}
			tagClass += ' ' + tagSizeClassName[level];

			return tagClass;			
		};
		
		// launch timeline
		var timelineData = myResumeData.getTimeline();
		timelineManager.launchTimeline(timelineData.content, timelineData.lang);
		
		// mail management	
		var contactTemplates = mailManager.getContactTemplates();
		var mailSendingSuccess = function(){
			$scope.emailSent = true;
			$scope.contactTemplate = contactTemplates.contactConfirm;
		}
		var mailSendingError = function(){
			$scope.emailSent = false;
		}
		
		$scope.mail = {name:'', email:'', message:''};
		$scope.contactTemplate = contactTemplates.contactForm;
		$scope.emailSent = true;
		$scope.submitContactForm = function(){
			mailManager.submitContactForm($scope.mail, mailSendingSuccess, mailSendingError)
		};
		$scope.backToContactForm = function(){
			for(key in $scope.mail){
				$scope.mail[key] = '';
			}
			$scope.contactTemplate = contactTemplates.contactForm;
		}
	});
	
})();
