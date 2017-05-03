/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global angular */

var app = angular.module("tutorialApp", ["ngRoute", "tutorialCtrlModule"]);

app.config(function($routeProvider){
    $routeProvider
            .when("/index", {
                    templateUrl: "/views/tutorial.html",
                    controller: "TutorialCtrl" 
                })
                        .otherwise ({
                            redirectTo: "/"
                        })
            
});

