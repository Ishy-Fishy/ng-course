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
            }
        ];
        
        return{
            AddItem : function(params) {
                itemArr.push(params);//add item logic here
            },
            ListItems : itemArr,
            DelItem : function () {
                return // list delete logic
            },
        }
    })
