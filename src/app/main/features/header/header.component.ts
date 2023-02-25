import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Observable, of, Subject } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  options$: Observable<any[]> = of([]);
  selectedProductInfo = '';
  searchBox!: string;
  private readonly serachQuerySubject: Subject<string> = new Subject<string>();
  readonly searchQueryAction = this.serachQuerySubject.asObservable();
  ngOnInit(): void {
    // if (this.formControl.value) {
    // this._customerReport
    //   .customerReporterApiCustomerReportAutoCompleteGet(
    //     this.formControl.value
    //   )
    //   .pipe(
    //     map((customer) => {
    //       return {
    //         ...customer[0],
    //         fullInfo: `${customer[0].name} - ${customer[0].uniqueidentifier}`,
    //       };
    //     }),
    //     tap((d) => {
    //       this.onCustomerSelect(d);
    //       return this.formControl.setValue(d);
    //     })
    //   )
    //   .subscribe();
    // }
    // this.options$ = this.searchQueryAction.pipe(
    //   switchMap((queryString) => {
    // return this._customerReport
    //   .customerReporterApiCustomerReportAutoCompleteGet(queryString)
    //   .pipe(
    //     map((customers) => {
    //       return customers.map((customer) => {
    //         return {
    //           ...customer,
    //           fullInfo: `${customer.name} - ${customer.uniqueidentifier}`,
    //         };
    //       });
    //     })
    //   );
    //     return EMPTY;
    //   })
    // );
  }
  onSelect(value: any) {
    this.selectedProductInfo = value.name + ' - ' + value.uniqueidentifier;
  }
  filter(event: any) {
    this.serachQuerySubject.next(event.query);
  }
}
