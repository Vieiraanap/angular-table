import { PageEvent } from "@angular/material/paginator";

export class Pagination {
  public static pageConfig(): PageEvent {
    return {
      length: 0,
      pageIndex: 0,
      pageSize: 0
    };
  }

  public static pageSizeDefault: number[] = [10, 25, 50, 100];
}
