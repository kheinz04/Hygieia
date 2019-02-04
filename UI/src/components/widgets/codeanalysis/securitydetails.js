(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('SecurityDetailsController', SecurityDetailsController);

    SecurityDetailsController.$inject = ['$scope', '$uibModalInstance', 'securityResult'];
    function SecurityDetailsController($scope, $uibModalInstance, securityResult) {
        /*jshint validthis:true */
        var ctrl = this;
        ctrl.type = securityResult.type;

        ctrl.securityResult = securityResult.data;
        ctrl.close = close;

        function close() {
            $uibModalInstance.dismiss('close');
        }


        $scope.getDashStatus = function getDashStatus(level) {
            switch (level.toLowerCase()) {
                case 'critical':
                    return 'critical';

                case 'high':
                    return 'alert';

                case 'medium':
                    return 'warning';

                case 'low' :
                    return 'ignore';

                default:
                    return 'ok';
            }
        };

        ctrl.getLevelCount = function getLevelCount(level) {
            // var threats;
            // if (!ctrl.libraryPolicyResult || !ctrl.libraryPolicyResult.threats) return (0);
            // if (ctrl.type.toLowerCase() === 'license') {
            //     threats = ctrl.libraryPolicyResult.threats.License;
            // } else {
            //     threats = ctrl.libraryPolicyResult.threats.Security;
            // }
            // for (var i = 0; i < threats.length; ++i) {
            //     if (threats[i].level.toLowerCase() === level.toLowerCase()) {
            //         return threats[i].count;
            //     }
            // }
            return (0);
        };

        ctrl.getDetails = function getDetails(level) {
            // var threats;
            // if (!ctrl.libraryPolicyResult || !ctrl.libraryPolicyResult.threats) return ([]);
            // if (ctrl.type.toLowerCase() === 'license') {
            //     threats = ctrl.libraryPolicyResult.threats.License;
            // } else {
            //     threats = ctrl.libraryPolicyResult.threats.Security;
            // }
            // for (var i = 0; i < threats.length; ++i) {
            //     if (threats[i].level.toLowerCase() === level.toLowerCase()) {
            //         return threats[i].components;
            //     }
            // }
            return ([]);
        }
    }


})();