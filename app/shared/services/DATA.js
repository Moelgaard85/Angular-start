angular.module('app')
.service('DATA', ['Flash', '$log', '$q', '$http', '$timeout',
  function (Flash, $log, $q, $http, $timeout) {
    'use strict';

    $log.debug('DATA: DATA ready...');

    // var fetchActivities = function(){
    //   $log.debug('DATA: fetchActivities called');
    //   var defer = $q.defer();

    //   $http.get(SERVER_URL_API + '/getActivities')
    //   .then(function(response) {
    //     // success
    //     $log.debug('DATA: fetchActivities: response:', response);
    //     defer.resolve(response.data);
    //   }, function(response) {
    //     // error
    //     $log.debug('DATA: fetchActivities: response:', response);
    //     Flash.create('danger', 'Fejl: Nødvendig data kunne ikke læses fra serveren!');
    //     defer.reject(response);
    //   });

    //   return defer.promise;
    // };

    var response = [
    {
      "_id": "58a325850dccf494121ba02f",
      "index": 0,
      "guid": "88ab2377-7da2-4ca2-8ec2-86622b3dcc71",
      "isActive": false,
      "balance": "$1,297.60",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": "Alma Macdonald",
      "gender": "female",
      "company": "FORTEAN",
      "email": "almamacdonald@fortean.com",
      "phone": "+1 (899) 578-2922",
      "address": "929 Bond Street, Outlook, Puerto Rico, 6466",
      "about": "Nostrud irure labore quis id id officia officia enim in commodo ad ut exercitation amet. In qui incididunt quis deserunt consectetur duis dolor eu dolor. Ad reprehenderit occaecat amet pariatur dolor ipsum anim labore consectetur veniam tempor.\r\n",
      "registered": "2016-10-02T03:46:24 -02:00",
      "latitude": -88.247571,
      "longitude": 142.613578,
      "tags": [
      "in",
      "irure",
      "eiusmod",
      "fugiat",
      "minim",
      "culpa",
      "nostrud"
      ],
      "friends": [
      {
        "id": 0,
        "name": "Kim Lawson"
      },
      {
        "id": 1,
        "name": "Freeman Mathis"
      },
      {
        "id": 2,
        "name": "Diane Graves"
      }
      ],
      "greeting": "Hello, Alma Macdonald! You have 1 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "58a32585ec1e518174e7a25a",
      "index": 1,
      "guid": "cd63ee5d-ece9-424d-873e-a32922016a26",
      "isActive": true,
      "balance": "$3,737.04",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "green",
      "name": "Fischer Le",
      "gender": "male",
      "company": "DANJA",
      "email": "fischerle@danja.com",
      "phone": "+1 (927) 450-3697",
      "address": "182 Sharon Street, Jugtown, Wisconsin, 9589",
      "about": "Quis officia occaecat mollit sunt qui in consectetur dolor anim veniam consectetur culpa cupidatat amet. Irure dolore anim aliquip veniam voluptate nisi voluptate cillum ex commodo ullamco deserunt aliqua dolore. Culpa amet ea velit ullamco sunt non non laboris enim. Proident incididunt incididunt sit consequat velit exercitation ex consequat minim. Ex exercitation occaecat pariatur laborum. Reprehenderit consectetur nostrud id proident ea laboris anim consequat sint duis irure.\r\n",
      "registered": "2014-05-11T03:59:27 -02:00",
      "latitude": -86.704011,
      "longitude": -174.262955,
      "tags": [
      "amet",
      "officia",
      "ad",
      "irure",
      "incididunt",
      "anim",
      "commodo"
      ],
      "friends": [
      {
        "id": 0,
        "name": "Gentry Riggs"
      },
      {
        "id": 1,
        "name": "Gonzales Marquez"
      },
      {
        "id": 2,
        "name": "Rosella Rush"
      }
      ],
      "greeting": "Hello, Fischer Le! You have 2 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "58a3258513176e4269479c9a",
      "index": 2,
      "guid": "c33e7640-b666-410b-ac9f-524f691d145e",
      "isActive": false,
      "balance": "$3,663.31",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": "Phelps Booker",
      "gender": "male",
      "company": "SCENTRIC",
      "email": "phelpsbooker@scentric.com",
      "phone": "+1 (940) 446-3199",
      "address": "524 Metrotech Courtr, Newry, Montana, 5199",
      "about": "Exercitation magna aliqua non magna laborum anim Lorem mollit sint incididunt officia do in. Est aute adipisicing do consectetur pariatur incididunt sit. Et dolor laborum cupidatat irure sunt sit ipsum. Enim nulla sint laboris cillum. Incididunt reprehenderit officia et reprehenderit.\r\n",
      "registered": "2014-05-11T11:42:19 -02:00",
      "latitude": -62.811994,
      "longitude": -68.787422,
      "tags": [
      "sint",
      "aliqua",
      "pariatur",
      "eiusmod",
      "consectetur",
      "deserunt",
      "in"
      ],
      "friends": [
      {
        "id": 0,
        "name": "Lee Bonner"
      },
      {
        "id": 1,
        "name": "Lorrie Gallagher"
      },
      {
        "id": 2,
        "name": "Shepard Hudson"
      }
      ],
      "greeting": "Hello, Phelps Booker! You have 7 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "58a32585c5084169b6638f3b",
      "index": 3,
      "guid": "e0c8c6d9-cb69-4635-b3cc-788dbde72fda",
      "isActive": true,
      "balance": "$1,237.83",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "blue",
      "name": "Allison Harrison",
      "gender": "female",
      "company": "STREZZO",
      "email": "allisonharrison@strezzo.com",
      "phone": "+1 (903) 573-2244",
      "address": "992 Estate Road, Glenville, Louisiana, 9125",
      "about": "Nisi dolor Lorem veniam sunt. Eu enim exercitation deserunt et nulla pariatur deserunt laboris enim aliquip. Cillum anim irure culpa quis proident ut cillum ut. Ut commodo magna ullamco aliqua id eiusmod nostrud nisi laborum sunt et eu ad dolore. Do duis nulla excepteur tempor dolore pariatur elit. Sit reprehenderit consectetur elit cupidatat consequat reprehenderit dolor occaecat consectetur fugiat nostrud veniam irure.\r\n",
      "registered": "2014-11-17T08:35:37 -01:00",
      "latitude": 86.587785,
      "longitude": 49.459637,
      "tags": [
      "esse",
      "deserunt",
      "cillum",
      "tempor",
      "aute",
      "cillum",
      "excepteur"
      ],
      "friends": [
      {
        "id": 0,
        "name": "Concepcion Hurst"
      },
      {
        "id": 1,
        "name": "Miriam Johnston"
      },
      {
        "id": 2,
        "name": "Laura Mckenzie"
      }
      ],
      "greeting": "Hello, Allison Harrison! You have 7 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "58a32585ca0a63c8ed954d53",
      "index": 4,
      "guid": "7dddc013-08ce-46e2-9435-225716e489ce",
      "isActive": false,
      "balance": "$1,515.27",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "blue",
      "name": "Flossie Harvey",
      "gender": "female",
      "company": "SENMEI",
      "email": "flossieharvey@senmei.com",
      "phone": "+1 (949) 489-2698",
      "address": "854 Whitty Lane, Mappsville, Minnesota, 8917",
      "about": "Aute amet ex Lorem non eu sunt velit. Elit irure pariatur incididunt est cillum laborum nulla nostrud culpa non proident officia excepteur. Incididunt cillum mollit reprehenderit officia officia veniam nisi. Eiusmod qui laborum enim voluptate in cillum et sunt elit non reprehenderit ad. Anim voluptate nostrud fugiat velit ullamco exercitation sint eiusmod. Pariatur elit dolore nisi sit exercitation excepteur nisi sunt ad labore. Eu nostrud tempor voluptate magna eiusmod excepteur laborum irure officia.\r\n",
      "registered": "2014-04-02T01:54:56 -02:00",
      "latitude": 89.594819,
      "longitude": -161.799567,
      "tags": [
      "consectetur",
      "Lorem",
      "laboris",
      "velit",
      "officia",
      "est",
      "ea"
      ],
      "friends": [
      {
        "id": 0,
        "name": "Addie Todd"
      },
      {
        "id": 1,
        "name": "Claudette Gould"
      },
      {
        "id": 2,
        "name": "French Buck"
      }
      ],
      "greeting": "Hello, Flossie Harvey! You have 10 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "58a32585a4372bff3278471d",
      "index": 5,
      "guid": "06ce1ec3-acb4-42de-9690-70cf8aa1d598",
      "isActive": true,
      "balance": "$2,538.13",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": "Greene Young",
      "gender": "male",
      "company": "MEGALL",
      "email": "greeneyoung@megall.com",
      "phone": "+1 (891) 531-2855",
      "address": "141 Nostrand Avenue, Chestnut, New Mexico, 4379",
      "about": "Irure labore est exercitation elit sunt mollit eu magna. Laborum ut in reprehenderit ullamco eiusmod elit minim nulla enim dolore reprehenderit velit cupidatat sunt. Irure nulla exercitation excepteur aute nostrud cillum aute. Esse commodo est eu veniam culpa. Nisi pariatur Lorem duis commodo ex non.\r\n",
      "registered": "2016-12-06T06:20:30 -01:00",
      "latitude": 85.920388,
      "longitude": 90.749784,
      "tags": [
      "et",
      "tempor",
      "velit",
      "minim",
      "dolor",
      "ex",
      "est"
      ],
      "friends": [
      {
        "id": 0,
        "name": "Lucille Leonard"
      },
      {
        "id": 1,
        "name": "Simone Pope"
      },
      {
        "id": 2,
        "name": "Burton Dixon"
      }
      ],
      "greeting": "Hello, Greene Young! You have 4 unread messages.",
      "favoriteFruit": "apple"
    }
    ];

    var fetchPeople = function(){
      var defer = $q.defer();

      $timeout(function(){
        defer.resolve(response);
      }, 200);

      return defer.promise;
    };

    return {
      // fetchActivities: fetchActivities,
      fetchPeople: fetchPeople
    };
  }
]); /*DATA*/