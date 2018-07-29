import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {UserListComponent} from './user-list/user-list.component'

export class User{
    Id: number;
    UserName: string;
    Password: string;
    Fname: string;
    Lname: string;
    Phone: string;
    Email: string;
    IsReviewer: boolean;
    IsAdmin: boolean;
    IsActive: boolean;
    

    constructor(){
        this.Id = 0;
        this.IsReviewer = false;
        this.IsAdmin = false;
        this.IsActive = true;
    }
}
export interface UserItem {
    Id: number;
    UserName: string;
    Password: string;
    Fname: string;
    Lname: string;
    Phone: string;
    Email: string;
    IsReviewer:  boolean;
    IsAdmin: boolean;
    IsActive: boolean;
  }

export class UserDataSource extends DataSource<UserItem> {
    users: User[]= []
    EXAMPLE_DATA = this.users;
    data: UserItem[] = this.users;
  
 
    constructor(private paginator: MatPaginator, private sort: MatSort) {
        super();
      }
    
      /**
       * Connect this data source to the table. The table will only update when
       * the returned stream emits new items.
       * @returns A stream of the items to be rendered.
       */
      connect(): Observable<UserItem[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
          observableOf(this.data),
          this.paginator.page,
          this.sort.sortChange
        ];
    
        // Set the paginators length
        this.paginator.length = this.data.length;
    
        return merge(...dataMutations).pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        }));
      }
    
      /**
       *  Called when the table is being destroyed. Use this function, to clean up
       * any open connections or free any held resources that were set up during connect.
       */
      disconnect() {}
    
      /**
       * Paginate the data (client-side). If you're using server-side pagination,
       * this would be replaced by requesting the appropriate data from the server.
       */
      private getPagedData(data: UserItem[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
      }
    
      /**
       * Sort the data (client-side). If you're using server-side sorting,
       * this would be replaced by requesting the appropriate data from the server.
       */
      private getSortedData(data: UserItem[]) {
        if (!this.sort.active || this.sort.direction === '') {
          return data;
        }
    
        return data.sort((a, b) => {
          const isAsc = this.sort.direction === 'asc';
          switch (this.sort.active) {
            case 'Fname': return compare(a.Fname, b.Fname, isAsc);
            case 'Id': return compare(+a.Id, +b.Id, isAsc);
            case 'UserName': return compare(a.UserName, b.UserName, isAsc);
            case 'Email': return compare(a.Email, b.Email, isAsc);
            default: return 0;
          }
        });
      }
    }
    
    /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    