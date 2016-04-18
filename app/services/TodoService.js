'use strict';

angular.module('myApp')
    .factory('TodoService', function(){

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
                title: 'test',
                description: 'test'
            }
        ];
        return{
            AddItem : function(params) {
                var copy = angular.copy(params);
                itemArr.push(copy);
                //add item logic here
            },
            ListItems : itemArr,
            DelItem : function (params) {
                itemArr.splice(params , 1);
                // list delete logic
            },
        }
    })
