'use strict';

angular.module('myApp')
    .factory('TodoService', function($window){
        var itemArr = [
            {
                title: 'Item #1',
                description: 'Item description #1'
            },
            {
                title: 'Item #2',
                description: 'Item description #2'
            },
            {
                title: 'foo',
                description: 'bar'
            }
        ];
        return{
            AddItem : function(params) {
                if (params.title.length > 2) {
                    var copy = angular.copy(params);
                    itemArr.unshift(copy);
                }
                else {
                    $window.alert("Description too short");
                }
                //add item logic here
            },
            ListItems : function () {
                return itemArr;
            },
            DelItem : function (params) {
                itemArr.splice(params , 1);
                // list delete logic
            }
        }
    })
