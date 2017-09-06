"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = data_1.gridData;
        this.toolbar = ['search', { template: '<div id="rowcount"></div>', cssClass: 'rowcount' }];
    };
    AppComponent.prototype.ondataBound = function () {
        document.getElementById('rowcount').innerHTML = 'Row Count: ' + this.grid.currentViewData.length;
    };
    AppComponent.prototype.onCreate = function (args) {
        this.grid.toolbarModule.getItems()[0].align = 'left';
        this.grid.toolbarModule.getToolbar().ej2_instances[0].refresh();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", ej2_grids_1.Grid)
], AppComponent.prototype, "grid", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<ej-grid #grid id='Grid' [allowFiltering]= 'true' [dataSource]='data' [toolbar]='toolbar' \n     (created)='onCreate($event)' gridLines='both' (dataBound)='ondataBound()'>\n                    <e-columns>\n                        <e-column field='LastName' headerText='Last Name' width='140'></e-column>\n                        <e-column field='FirstName' headerText='First Name' width='170' format= 'C2'></e-column>\n                        <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign=\"center\"></e-column>\n                        <e-column field='Title' headerText='Title' width='180' ></e-column>\n                        <e-column field='City' headerText='City' width='120' ></e-column>\n                    </e-columns>\n                </ej-grid>",
        styleUrls: ['app/app.style.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [ej2_ng_grids_1.ToolbarService, ej2_ng_grids_1.FilterService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
