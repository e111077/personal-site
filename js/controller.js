// create app
var personalSite = angular.module('personalSite', []);

// controller for the projects and modules section
personalSite.controller('projectsController', ['$scope', '$sce',
function($scope, $sce) {
  // show modal click function
  $scope.showModal = function (projectName) {
    'use strict';
    $('.' + projectName + '.modal').modal('show');
  }

  // html code for apostrophe
  // &#39;

  // model for my projects section
  // project schema = {
  //   name  : one-word string,
  //   title : string,
  //   img   : url,
  //   link  : url,
  //   head  : html,
  //   desc  : html
  // }
  var projects = [
    {
      name  : 'ShiftShark',
      title : 'ShiftShark Easy Scheduling',
      img   : '/images/shiftshark.png',
      link  : 'http://shiftshark-aandre.rhcloud.com',
      head  : 'MIT <a href="http://student.mit.edu/catalog/m6a.html#6.170">6.170</a> Final Project',
      desc  : '<p>Shiftshark was a 5 week project for my software design class. I worked with my team of 4 to design, present, and implement our idea. ShiftShark is a scheduling application that attempts to focus on ease of use for employers and trading for employees.</p><p>Technologies used in the project are MongoDB, MongooseJS, NodeJS, ExpressJS, PassportJS, HandlebarsJS, Embedded Javascript, MomentJS, fancyBox, and Semantic UI.</p><p>The site can be found <a href="http://shiftshark-aandre.rhcloud.com">here</a> and the source can be found <a href="https://github.com/shiftshark/shiftshark">here</a>.</p>'
    },
    {
      name  : 'Amazejobs',
      title : 'Amazejobs by Team Hashrocket',
      img   : '/images/hashrocket.png',
      link  : 'http://amazejobs-hashrocket.rhcloud.com/',
      head  : 'MIT <a href="http://student.mit.edu/catalog/m6a.html#6.170">6.170</a> Small Project',
      desc  : '<p>Amazejobs was a 4 week project for my software design class. I worked with my team of 4 to design and implement our idea. Amazejobs is a job application task manager that was inspired by intern application season.</p><p>Technologies used in the project are MongoDB, MongooseJS, NodeJS, ExpressJS, HandlebarsJS, Embedded Javascript, MomentJS, Google OAuth, and Semantic UI.</p><p>The site can be found <a href="http://amazejobs-hashrocket.rhcloud.com/">here</a> and the source can be found <a href="https://github.com/TeamHashrocket/AmazeJobs">here</a>.</p>'
    },
    {
      name  : 'Microsoft',
      title : 'Microsoft Summer Internship',
      img   : '/images/microsoft.png',
      link  : 'http://www.bing.com/',
      head  : 'Bing Internship',
      desc  : '<p>During the summer of 2014, I took up an internship with Microsoft&#39;s <a class="link" href="http://www.bing.com/">Bing</a> division. Due to a signed NDA, I cannot disclose the specifics of what I worked on. I worked in a team of 3 to devise and develop a project that used Microsoft&#39;s <a class="link" href="http://www.windowsphone.com/en-us/how-to/wp8/apps/meet-cortana">Cortana</a> and leveraged Bing and drove profits.</p>'
    },
    {
      name  : 'wsiia',
      title : 'What Song is it Anyway Android App',
      img   : '/images/wsiia.png',
      link  : 'https://play.google.com/store/apps/details?id=com.wsiia',
      head  : 'MIT <a class="link" href="http://web.mit.edu/21w.789/www/">21w.789</a> Communicating with Mobile Technology',
      desc  : '<p>I worked in a team to develop an android application for a class on mobile technology. The class mainly focused on project design and human interaction with technology. Our team created a music game Android application. After user studies, we were able to create a game that would not only be enjoyable, but also improve interaction between people in their daily lives. The app is based on Android SDK using SQLite and the Apache Commons Jaro-Winkler distance library.</p><p>The app can be found <a class="link" href="https://play.google.com/store/apps/details?id=com.wsiia">here,</a> and the source can be found <a class="link" href="https://github.com/Bandits789/WhatSongIsItAnyway">here.</a></p>'
    },
    {
      name  : 'mitml',
      title : 'MIT Media Lab Undergraduate Research',
      img   : '/images/mitml.png',
      link  : 'http://media.mit.edu',
      head  : '<a class="link" href="http://resenv.media.mit.edu/">Responsive Environments</a> Group',
      desc  : '<p>I worked in the <a class="link" href="http://media.mit.edu/">MIT Media Lab</a> under a Ph.D student in the Responsive Environments Group. His thesis was based on a more humanly-intuitive way to control lighting that would be used in modern society. My initial goal was to first create a 3D rendition of his idea in the <a class="link" href="http://unity3d.com/">Unity Game Engine</a> that would be of high-enough quality to showcase to current and potential sponsors on the Media Lab sponsor day.</p><p>The next goal was to take the research to the physical space and to create a system and mobile interface. The mobile interface was created on <a class="link" href="http://hexler.net/software/touchosc">Touch OSC</a> for iPhone and Android. I worked with a state-of-the-art <a class="link" href="http://www.colorkinetics.com/">Color Kinetics</a> system sponsored by Royal Philips, and created a reliable, research application that would accurately record user input and implement his research algorithms efficiently and effectively.</p><p>Source code is not publicly available for this project.</p>'
    },
    {
      name  : 'vSafe',
      title : 'vSafe VEGetariAN Helper Web App',
      img   : '/images/vsafe.png',
      link  : 'http://aandre.scripts.mit.edu/vsafe/',
      head  : 'MIT <a href="http://student.mit.edu/catalog/m6a.html#6.170">6.170</a> Final Project',
      desc  : '<p>I created this website for a user interface and design class. The class was based on user-centered design, user testing, idea/project generation, and design iteration. The site was built on Django, MySQL, and uses jQuery and Semantic UI. The basis of the site is to give a starting point and quick reference to vegans and vegetarians, so that they can quickly tell what is vegan or vegetarian. The content on the site is not completely accurate, because the site was more proof-of-concept and to give an intuitive UI.</p><p>The site can be found <a class="link" href="http://aandre.scripts.mit.edu/vsafe/">here,</a> and the source can be found <a class="link" href="https://github.com/aboolean/vSafe">here.</a></p>'
    },
    {
      name  : 'Github',
      title : 'View My Github',
      img   : '/images/github.png',
      link  : 'https://www.github.com/e111077',
      head  : 'E111077',
      desc  : '<p>This is <a class="link" href="https://www.github.com/e111077">my Github account.</a> The source of this website can be found as a public repository. You may also find code for related projects that I have worked on.</p><p>This site uses <a href="https://angularjs.org/">AngularJS</a>, <a href="http://semantic-ui.com/">Semantic-UI</a>, <a href="http://jquery.com/">jQuery</a>, some Google fonts, MIT SIPB&#39;s <a href="http://scripts.mit.edu">Scripts</a> hosting service, and lots of love and procrastination. &lt;3.</p>'
    },
    {
      name  : 'labs',
      title : 'My Experimentation Site',
      img   : '/images/labs.png',
      link  : 'http://everypushisprod.mit.edu',
      head  : 'Elliott Labs',
      desc  : '<p>Take a look at what I&#39;m currently working on. <a href="http://everypushisprod.mit.edu">This</a> is the site that I use as my online playspace. It may be very broken, boring, or cool.</p><p><b>Proceed with caution!</b></p>'
    }
  ];

  $scope.projects = [];

  // goes through each project and deems it as injectable HTML and adds it to scope
  for (var i in projects) {
    var project = projects[i];

    project.head = $sce.trustAsHtml(project.head);
    project.desc = $sce.trustAsHtml(project.desc);

    $scope.projects.push(project);
  }
}]);