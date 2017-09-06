import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { gridData } from './data';
import { Grid } from '@syncfusion/ej2-grids';
import { ToolbarService, FilterService } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'my-app',
    template: `<ej-grid #grid id='Grid' [allowFiltering]= 'true' [dataSource]='data' [toolbar]='toolbar' 
     (created)='onCreate($event)' gridLines='both' (dataBound)='ondataBound()'>
                    <e-columns>
                        <e-column field='LastName' headerText='Last Name' width='140'></e-column>
                        <e-column field='FirstName' headerText='First Name' width='170' format= 'C2'></e-column>
                        <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign="center"></e-column>
                        <e-column field='Title' headerText='Title' width='180' ></e-column>
                        <e-column field='City' headerText='City' width='120' ></e-column>
                    </e-columns>
                </ej-grid>`,
    styleUrls: ['app/app.style.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, FilterService]
})
export class AppComponent implements OnInit {

    public data: Object[];
    public toolbar;
    @ViewChild('grid')
    public grid: Grid;
    ngOnInit(): void {
        this.data = gridData;
        this.toolbar = ['search', { template: '<div id="rowcount"></div>', cssClass: 'rowcount' }];
    }

    ondataBound() {
        document.getElementById('rowcount').innerHTML = 'Row Count: ' + this.grid.currentViewData.length;
    }

    onCreate(args) {
        (<any>this.grid.toolbarModule).getItems()[0].align = 'left';
        (<any>this.grid.toolbarModule.getToolbar()).ej2_instances[0].refresh();
    }

}
