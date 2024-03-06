import { bal_OrderDirection, bal_Pool_orderBy, uni_OrderDirection, uni_Pool_orderBy } from "~~/.graphclient";

export type TGetPoolQuery = {
  first: number;
  skip: number;
  balOrderBy: bal_Pool_orderBy;
  balOrderDirection: bal_OrderDirection;
  uniOrderBy: uni_Pool_orderBy;
  uniOrderDirection: uni_OrderDirection;
};
