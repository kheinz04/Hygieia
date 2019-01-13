/**
 * Standard delete directive for various components
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .directive('hideEmpty', function () {
            return {
                restrict: 'A',

                link: function(scope,element, attrs, ctrl, $compile, $document) {
                    attrs.$observe('hideEmpty', function(newValue, oldValue){
                       // Assume the widget should be visible
                       //  var hideWidget = false;
                        var dataList = scope.$eval(attrs.hideEmpty);
                        // scope.data = dataList;

                        var hideWidget = dataList.every(x => (!x && x != '0'));

                        //if true (if widget is empty), hide the widget
                        if(hideWidget) {
                            // element.hide();
                            element.children().first().hide();
                            scope.testElement = document.getElementById('noDataMsg');
                            // if "no data found" already added, make sure it is shown. Otherwise, append it to the HTML
                            if (document.getElementById('noDataMsg')){
                                angular.element(document.getElementById('noDataMsg')).show();
                            } else {
                                element.append('<div id="noDataMsg" class="row"><div class="col-md-12"><div class="widget-body"><br>No data found.</div></div></div>');

                            }
                            scope.result = "hide";

                        }
                        else {
                            scope.result = "show";
                            element.children().first().show();
                            angular.element(document.getElementById('noDataMsg')).hide();
                        }
                    }, true);
                }
            };
        });
})();