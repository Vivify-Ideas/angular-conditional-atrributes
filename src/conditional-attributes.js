(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('angular'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.angular);
    }
}(this, function (angular) {
    var moduleName = 'vivify-ideas.angular-on-load';
    var mod = angular.module(moduleName, []);
    mod.directive('viConditionalAttributes', ['$compile', function($compile) {
        return {
            restrict: 'A',
            scope: {
                viCondition: '&'
            },
            link: function(scope, element, attrs) {
                if (scope.viCondition()) {
                    var conditionedAttrs = Object.keys(attrs).find( function (attr) {
                        return ~attr.indexOf("vi-attr-");
                    });
                    for (var attr in conditionedAttrs) {
                        element.attr(attr.substring(8), conditionedAttrs[attr]);
                        element.removeAttr(attr);
                    }
                    element.removeAttr('vi-conditional-attributes');
                    element.removeAttr('vi-condition');
                    $compile(element)(scope);
                }
            }
        }
    }]);

    return moduleName;
}));