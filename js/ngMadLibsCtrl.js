myapp = angular.module('MyApp', []);
myapp.controller('ngMadLibsCtrl', ['$scope', function($scope) {

    $scope.keywords = [

        {
            ph: 'adjective#1',
            type: 'text',
            name: 'adjective#1',
            value: ''
        }, {
            ph: 'adjective#2',
            type: 'text',
            name: 'adjective#2',
            value: ''
        }, {
            ph: 'adverb',
            type: 'text',
            name: 'adverb',
            value: ''
        }, {
            ph: 'noun#1',
            type: 'text',
            name: 'noun#1',
            value: ''
        }, {
            ph: 'noun#2',
            type: 'text',
            name: 'noun#2',
            value: ''
        }, {
            ph: 'noun#3',
            type: 'text',
            name: 'noun#3',
            value: ''
        }, {
            ph: 'Part of the Body #1',
            type: 'text',
            name: 'Part of the Body #1',
            value: ''
        }, {
            ph: 'Part of the Body #2',
            type: 'text',
            name: 'Part of the Body #2',
            value: ''
        }, {
            ph: 'Part of the Body #3',
            type: 'text',
            name: 'Part of the Body #3',
            value: ''
        }, {
            ph: 'Plural Noun #1',
            type: 'text',
            name: 'Plural Noun #1',
            value: ''
        }, {
            ph: 'Plural Noun #2',
            type: 'text',
            name: 'Plural Noun #2',
            value: ''
        }, {
            ph: 'Plural Noun #3',
            type: 'text',
            name: 'Plural Noun #3',
            value: ''
        }, {
            ph: 'Verb #1',
            type: 'text',
            name: 'Verb #1',
            value: ''
        }, {
            ph: 'Verb #2',
            type: 'text',
            name: 'Verb #2',
            value: ''
        }, {
            ph: 'Verb #3',
            type: 'text',
            name: 'Verb #3',
            value: ''
        }, {
            ph: 'Verb Ending in ING',
            type: 'text',
            name: 'Verb Ending in ING',
            value: ''
        }
    ];

    $scope.save = function() {

        var result;
        if ($scope.keywords == '') {
            console.log($scope.keywords.value);
            $scope.myVar = $scope.myVar;
        } else {
            $scope.myVar = !$scope.myVar;
        }

    }



    $scope.save();
}]);