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

angular.module('freeItEbooksControllers', [
        'freeItEbooksServices'
    ]
)

    .controller('NavBarLinksController', [
        '$scope',
        'EbookSearchFactory',

            function($scope, EbookSearchFactory){
                $scope.navLinks = _navLinks;
                //$scope.selectedNavLink = $scope.navLinks[0];
                //$scope.mockEbooks = _androidEbooks.Books;

                $scope.search = '';

                $scope.isSelectedNavLink = function (navLink) {
                    return $scope.selectedNavLink === navLink;
                };

                $scope.selectNavLink = function (navLink) {
                    $scope.selectedNavLink = navLink;
                    $scope.search = '';
                    $scope.query();
                };

                $scope.query = function(){
                    var queryText = '';

                    if ($scope.search == '') {
                        queryText = $scope.selectedNavLink.tag;
                    } else {
                        queryText = $scope.search;
                        $scope.selectedNavLink = null;
                    }
                    console.log('Search query: ' + queryText);

                    var books = EbookSearchFactory.query({query : queryText}, function() {
                        if (books.Books == null) {
                            console.log('No books found');

                            $scope.mockEbooks = null;
                        } else {
                            console.log('Books found: ' + books.Books.length);

                            $scope.mockEbooks = books.Books;
                        }

                        $scope.search = '';
                    });
                };

                $scope.selectNavLink($scope.navLinks[0]);
            }
        ]
    )

;