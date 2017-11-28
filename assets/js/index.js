angular.module("portfolio",[]);

//removing debug stuff since i'm not debugging right now...
angular.module("portfolio").config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);

angular.module("portfolio").controller("mainController",function($scope){
  $scope.fullName = "Francisco Ari Josino Junior";
  $scope.devTitle = "FullStack Developer"
  $scope.linkedinProfile = "https://linkedin.com/in/francisco-ari-josino-junior-89a07621"
  $scope.githubProfile = "https://github.com/arijosino"
  $scope.email = "arijr@outlook.com"
  $scope.aboutMe = ["I am a developer who got back to school after graduating in Computer Engineering in Brazil. After all I've been through as a student and a developer, I'd recently call myself a FullStack developer, although I do not limit myself to web systems since I worked with mobile and embedded software for a considerable amount of time.","I enjoy coding, gaming and Netflix."];
  $scope.projects = [
    {
      name:"Warship",
      link:"https://play.google.com/store/apps/details?id=com.ririari.warship&hl=en",
      image:"assets/images/projects/project-warship.png",
      summary:"A small android shoot-em-up game",
      description:[
        "This is a game I created as a result of a Unity3D game development course using Unity's 2D features. The game is a simple shoot-em-up where the player automatically shoots bullets at endless waves of enemies.",
        "I plan to improve this game to a professional level when I have enough time to dedicate to it."
      ],
    }];
    $scope.jobs = [
      {
        title:"Project Lead",
        company:"CSTT Sport-Travel",
        year:"09/2017 - 10/2017",
        link:"http://tournkey.ca/",
        description:["Redevelop a PHP tournament management system in VueJS and NodeJS",
                    "Assist on selecting and training new developers in building the new system",
                  "Migrate database from current system",]
      },
      {
        title:"Web Developer",
        company:"CSTT Sport-Travel",
        year:"05/2017 - 08/2017",
        link:"http://tournkey.ca/",
        description:["Redevelop a PHP tournament management system in VueJS and NodeJS",]
      },
      {
        title:"Peer Mentor",
        company:"Fanshawe College",
        year:"01/2017 - 04/2017",
        link:"https://www.fanshawec.ca/",
        description:["Tutored students, helping them with course material and difficulties",
                    ]
      },
      {
        title:"Intermediate Programmer",
        company:"Intrapoint AS",
        year:"03/2016 - 08/2016",
        link:"https://www.intrapoint.com/",
        description:["Developed end-user modules for the company’s customizable resource management system with javascript.",
                    "Assisted other team members with the development of the mobile port of the company’s internal store for its multiple application and services.",
                    "Debugged and improved code for Intrapoint’s crisis management system."]
      },
      {
        title:"Freelance Programmer",
        company:"Ambbi",
        year:"12/2015 - 02/2016",
        link:"https://play.google.com/store/apps/details?id=br.com.roundabout.appcondomino",
        description:["Developed a distributed system that manages condo matters such as safe entrance, guest list management/synchronization, event scheduling, etc. The system consists of 2 hybrid applications using Apache Cordova and a server-side NodeJS application."]
      },
      {
        title:"Systems Analyst",
        company:"GREat - UFC",
        year:"10/2014 - 12/2015",
        link:"http://www.great.ufc.br/",
        description:["Developed exclusive Windows Phone and Android end user applications for LG Electronics including the official camera application for the LG Lancet."]
      },
      {
        title:"Volunteer Researcher",
        company:"Western University",
        year:"05/2014 - 08/2014",
        link:"http://www.uwo.ca/",
        description:["Studied a persistent AI approach using Minecraft’s reverse engineered source code for prototyping."]
      },
      {
        title:"Freelance Contract",
        company:"Instituto Iracema",
        year:"11/2012 - 08/2013",
        link:"https://www.linkedin.com/company/instituto-iracema",
        description:["Developed an e-book reading Android application for visually impaired people using a wireless braille output device and also text to speech (TTS) to improve braille learning."]
      },
      {
        title:"Junior Programming Analyst",
        company:"Infokey Informatics Services",
        year:"07/2012 - 10/2012",
        link:"https://it.linkedin.com/company/infokey",
        description:["Developed a health care sales supervision application for Android devices, solving a problem related to illegal healthcare sales."]
      },
      {
        title:"Software Developer",
        company:"Daruma Commercial automation - ITIC",
        year:"04/2010 - 09/2011",
        link:"http://daruma.com.br/",
        description:["Defined the architecture and created a remote surveillance system using an embedded system equipped with a GSM module, published as the official built-in application for end-users and as a documented example for software developing partners."]
      },
    ];

    $scope.skills = [
      {
        title:"Javascript + VueJS/AngularJS + Node",
        levelLabel:"Pro",
        levelPercentage:"100%"
      },
      {
        title:"Java (Android)",
        levelLabel:"Pro",
        levelPercentage:"90%"
      },
      {
        title:"Java EE + Spring",
        levelLabel:'Intermediate',
        // observation:"",
        levelPercentage:"60%"
      },
      {
        title:"Unity3D + C#",
        levelLabel:"Intermediate",
        levelPercentage:"50%"
      },
    ];

    // $scope.codingNetwork = {
    //   title:"CodinGame",
    //   link:"https://www.codingame.com/profile/56df37f61628297d3ecd56499c6b2eb14357911"
    // }

    $scope.education = [
      {
        title:"Internet Applications and Web Development",
        school:"Fanshawe College",
        year:"09/2016 - Present"
      },
      {
        title:"Computer Engineering",
        school:"Federal Institute of Education, Science and Technology of Ceará (IFCE)",
        year:"Graduation 07/2015"
      },
      {
        title:"Computer Engineering [Exchange student from Science Without Borders (SWB) Program]",
        school:"Western University",
        year:"09/2013 - 08/2014"
      },
    ];

    $scope.languages = [
      {
        title:"Portuguese",
        levelLabel:"Native Speaker",
        level:5
      },
      {
        title:"English",
        levelLabel:"Advanced",
        level:4.5
      },
      {
        title:"French",
        levelLabel:"Beginner",
        level:2
      },
    ];

    $scope.songs = [
      {
        artist:"Pixelhunters",
        title:"Cave Story",
        link:"https://open.spotify.com/track/5Q4dXJZHsZrWKwCzmSygi9"
      },
      {
        artist:"Will Pisani",
        title:"Phendrana Drifts",
        link:"https://open.spotify.com/track/2sATcQeB9e9H0tulHzwxPJ"
      },
      {
        artist:"Will Pisani",
        title:"Title Theme (Metroid Prime2: Echoes)",
        link:"https://open.spotify.com/track/3IckuAjka2LqrAfinBUgez"
      },
      {
        artist:"Scattle",
        title:"Knock Knock",
        link:"https://open.spotify.com/track/6cthJIumjsMpJBeDJ2w6Dn"
      },
      {
        artist:"The Prodigy",
        title:"Stand Up",
        link:"https://open.spotify.com/track/15mSSDkDMCsZTnBlqm0S41"
      },
      {
        artist:"Slash",
        title:"Automatic Overdrive",
        link:"https://open.spotify.com/track/5rVS6AXCDIGoC9x2JkNEka"
      },
    ];

    $scope.levelRange = function(level){
      var range = [];
      for (var i = 0; i < parseInt(level,10); i++) {
        range.push(i);
      }
      return range;
    }

    $scope.conferences = [
      {
        title:"Microsoft Tech·Ed North America 2011",
        location:"Atlanta, GA",
        link:"https://channel9.msdn.com/events/teched/northamerica/2011"
      },
    ];
});
