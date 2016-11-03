(function () {
    angular
        .module('cakedesigner')
        .config(routes);

        function routes($routeProvider) {
            $routeProvider
                .when('/',{
                    template:`<landing-component></landing-component>`
                })
                .when('/cakes',{
                    template:`<catalogo-component></catalogo-component>`
                })
                /*.when('/contacto',{
                     template: `<contacto-component></contacto-component>`
                })
                .when('/accesorios',{
                     template: `<accesorios-component></accesorios-component>`
                })*/
                
        }

})();