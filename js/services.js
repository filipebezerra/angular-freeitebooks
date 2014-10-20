/* Services */

angular.module('freeItEbooksServices', [
        'ngResource'
    ]
)

    .factory('EbookSearchFactory',
        function($resource){
            return $resource(
                'http://it-ebooks-api.info/v1/search/:query',
                {},
                {
                    query :
                    {
                        isArray : false
                    }
                }
            );
        }
    )

;