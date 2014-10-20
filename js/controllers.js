/* Controllers */

var _navLinks = [
    {
        name : 'AngularJS',
        tag : 'angularjs'
    },
    {
        name : 'Spring Framework',
        tag : 'spring'
    },
    {
        name : 'Android Framework',
        tag : 'android'
    }
];

var _androidEbooks = {
    "Error": "0",
    "Time": 0.00082,
    "Total": "154",
    "Page": 1,
    "Books": [
        {
            "ID": 3014878333,
            "Title": "Developing Android Applications with Adobe AIR",
            "SubTitle": "An ActionScript Developer's Guide to Building Android Applications",
            "Description": "Put your ActionScript 3 skills to work building mobile apps. This book shows you how to develop native applications for Android-based smartphones and tablets from the ground up, using Adobe AIR. You learn the entire development process hands-on, from ...",
            "Image": "http://s.it-ebooks-api.info/3/developing_android_applications_with_adobe_air.jpg",
            "isbn": "9781449394820"
        },
        {
            "ID": 1539580363,
            "Title": "Developing Android Applications with Flex 4.5",
            "SubTitle": "Building Android Applications with ActionScript",
            "Description": "Ready to put your ActionScript 3 skills to work on mobile apps? This hands-on book walks you through the process of creating an Adobe AIR application from start to finish, using the Flex 4.5 framework. Move quickly from a basic Hello World applicatio ...",
            "Image": "http://s.it-ebooks-api.info/3/developing_android_applications_with_flex_4.5.jpg",
            "isbn": "9781449305376"
        },
        {
            "ID": 3563242492,
            "Title": "Learning Android",
            "SubTitle": "Building Applications for the Android Market",
            "Description": "Want to build apps for Android devices? This book is the perfect way to master the fundamentals. Written by an expert who's taught this mobile platform to hundreds of developers in large organizations, this gentle introduction shows experienced objec ...",
            "Image": "http://s.it-ebooks-api.info/3/learning_android.jpg",
            "isbn": "9781449390501"
        },
        {
            "ID": 342449840,
            "Title": "Head First Android Development",
            "SubTitle": "A Learner's Guide to Creating Applications for Android Devices",
            "Description": "Android devices are stealing market share from the iPhone with dramatic speed, and you have a killer app idea. Where to begin? Head First Android Development will help you get your first application up and running in no time with the Android SDK and ...",
            "Image": "http://s.it-ebooks-api.info/3/head_first_android_development.jpg",
            "isbn": "9781449393304"
        },
        {
            "ID": 3204520782,
            "Title": "Beginning Android Web Apps Development",
            "SubTitle": "Develop for Android using HTML5, CSS3, and JavaScript",
            "Description": "With Beginning Android Web Apps Development, you'll learn how to apply HTML5, CSS3, JavaScript, Ajax and other Web standards for use on the Android mobile platform, by building a variety of fun and visually stimulating games and other web application ...",
            "Image": "http://s.it-ebooks-api.info/6/beginning_android_web_apps_development.jpg",
            "isbn": "9781430239574"
        },
        {
            "ID": 260942284,
            "Title": "Learning Android Application Programming for the Kindle Fire",
            "SubTitle": "A Hands-On Guide to Building Your First Android Application",
            "Description": "In this book, bestselling Android programming authors Lauren Darcey and Shane Conder teach you every skill and technique you need to write production-quality apps for Amazon Kindle Fire, the world's hottest Android tablet. You'll learn the very best ...",
            "Image": "http://s.it-ebooks-api.info/10/learning_android_application_programming_for_the_kindle_fire.jpg",
            "isbn": "9780321833976"
        },
        {
            "ID": 1000326478,
            "Title": "Android 4: New Features for Application Development",
            "SubTitle": "Develop Android applications using the new features of Android Ice Cream Sandwich",
            "Description": "Learn new APIs in Android 4. Get familiar with the best practices in developing Android applications. Step-by-step approach with clearly explained sample codes. ...",
            "Image": "http://s.it-ebooks-api.info/14/android_4_new_features_for_application_development.jpg",
            "isbn": "9781849519526"
        },
        {
            "ID": 3086941036,
            "Title": "Pro Android Web Apps",
            "SubTitle": "Develop for Android using HTML5, CSS3 & JavaScript",
            "Description": "Developing applications for Android and other mobile devices using web technologies is now well within reach. When the capabilities of HTML5 are combined with CSS3 and JavaScript, web application developers have an opportunity to develop compelling m ...",
            "Image": "http://s.it-ebooks-api.info/6/pro_android_web_apps.jpg",
            "isbn": "9781430232766"
        },
        {
            "ID": 1773000760,
            "Title": "Spring for Android Starter",
            "SubTitle": "Leverage Spring for Android to create RESTful and OAuth Android apps",
            "Description": "Learn something new in an Instant! A short, fast, focused guide delivering immediate results. Learn what Spring for Android adds to the Android developer toolkit. Learn how to debug your Android communication layer observing HTTP requests and respons ...",
            "Image": "http://s.it-ebooks-api.info/14/instant_spring_for_android_starter.jpg",
            "isbn": "9781782161905"
        },
        {
            "ID": 3266507330,
            "Title": "Learning Android Game Programming",
            "SubTitle": "A Hands-On Guide to Building Your First Android Game",
            "Description": "The book starts with an up-to-the-minute overview of today's Android mobile games marketplace, reviews each leading genre, and teaches you the foundational concepts of game development. You'll design a simple game, then master every step of game deve ...",
            "Image": "http://s.it-ebooks-api.info/10/learning_android_game_programming.jpg",
            "isbn": "9780321769626"
        }
    ]
};


angular.module('freeItEbooksControllers', ['freeItEbooksServices'])
    .controller('NavBarLinksController', ['$scope', 'EbookSearchFactory',
        function($scope, EbookSearchFactory){
            $scope.navLinks = _navLinks;

            $scope.selectedNavLink = $scope.navLinks[0];

            $scope.mockEbooks = _androidEbooks.Books;

            $scope.isSelectedNavLink = function (navLink) {
                return $scope.selectedNavLink === navLink;
            };

            $scope.selectNavLink = function (navLink) {
                $scope.selectedNavLink = navLink;
                $scope.query($scope.selectedNavLink.tag);
            };

            $scope.query = function(searchQuery){
                var books = EbookSearchFactory.query({query : searchQuery}, function() {
                    console.log(books);

                    $scope.mockEbooks = books.Books;

                    $scope.searchQuery = '';
                });
            };
        }
    ])

;