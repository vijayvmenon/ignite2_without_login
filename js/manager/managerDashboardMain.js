angular.module('ignite2.managerDashboard', ['LocalStorageModule','nvd3','isteven-omni-bar','angular-svg-round-progressbar','fmp-card','nvd3ChartDirectives','ui.calendar','n3-pie-chart','ui.bootstrap'])

.controller(function($watch,$scope){
console.log(platform);	
$watch('platform',function(){
	console.log('reached here');
});
})