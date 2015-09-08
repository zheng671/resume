(function() {
    angular.module('resume').filter('orderObjectBy', function() {
        return function(items, reverse) {
            var filtered = [];
            angular.forEach(items, function(item, key) {
                filtered.push({key: key, value: item});
            });
            filtered.sort(function(a, b) {
                return (a.value > b.value ? 1 : -1);
            });
            if(reverse) filtered.reverse();
            return filtered;
        };
    });
})();