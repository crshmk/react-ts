export type QueryParams = {
  continue?: string 
}

export type QueryParamsState = Partial<QueryParams>

export const initQueryParamsState: QueryParams = {}