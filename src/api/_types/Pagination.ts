export type Pagination<
  K extends string,
  D extends Record<string, unknown>,
> = {
  [P in K]: D[];
} & {
  total: number;
  skip: number;
  limit: number;
};
