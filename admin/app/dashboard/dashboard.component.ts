import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {LoginService} from '../login/login.service';
declare var $:any;
declare var jQuery:any;

@Component({
  moduleId:module.id,
  selector: 'app-dashboard',
  templateUrl:'./dashboard.component.html',
})
export class DashboardComponent{

constructor( private route: ActivatedRoute,private router: Router){
  $(document).on("click" , ".left-panel .main-list .toggle-cat" , function(){
	$(this).next(".nav-fly").slideToggle(200);
});

$(document).on("click" , ".work-panel .top-header .admin-name .toggle-btn" , function(){
	$(".left-panel").toggle();
	$(".work-panel").toggleClass("set-full");
});

/* select all btn */
$(".check-all-btn").change(function(){
  $(".check-btn").prop('checked', $(this).prop("checked"));
});

/* pagination */
jQuery(document).ready(function(){
	for (var i = 1; i <= 150; i++) {
	}

	$('.list-group').paginathing({
    perPage: 5,
    limitPagination: 2,
    containerClass: 'panel-footer'
	})

});

$(".data-sort .sort-well .list .link").click(function(){
	$(this).parents(".sort-well").prev(".sort-by").children(".get-data").html(this.innerHTML);
});
}
}