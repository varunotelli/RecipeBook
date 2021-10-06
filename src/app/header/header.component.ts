import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Output() selectedChanged:EventEmitter<string> = new EventEmitter<string>(); 
	constructor() { }

	ngOnInit(): void {
	}

	onSelected(choice:string){
		this.selectedChanged.emit(choice);
	}

}
