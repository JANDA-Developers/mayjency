import { QueryHookOptions, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { PAYMENT_LIST, SETTLEMENT_CAL } from "../apollo/gql/payment";
import { Fpage,  Fpayment, paymentList, paymentListVariables, settlementCal, settlementCalVariables, _PaymentFilter, _PaymentSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { useListQuery, ListInitOptions, IListHook } from "./useListQuery";

interface IuseItemListProp extends Partial<ListInitOptions<_PaymentFilter, _PaymentSort>> {
    options?: QueryHookOptions<paymentList, paymentListVariables>
}
export interface IusePaymentList extends IListHook<_PaymentFilter, _PaymentSort> {
    items: Fpayment[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const usePaymentList = ({
    initialPageIndex = 0,
    initialSort = [_PaymentSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}: IuseItemListProp = {}): IusePaymentList => {
    const { variables: overrideVariables, ...ops } = options;
    const { filter, setPage, setFilter, setSort, setViewCount, sort, viewCount, integratedVariable } = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    })

    const { data, loading: getLoading } = useQuery<paymentList,paymentListVariables>(PAYMENT_LIST,{
        fetchPolicy: "network-only",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })

    const items: Fpayment[] = data?.PaymentList.data || [];
    const pageInfo: Fpage = data?.PaymentList.page || DEFAULT_PAGE;

    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items } as any
}

export const useSettlementCal = ({
    initialFilter
}: {
    initialFilter?:_PaymentFilter
}) => {
    const [filter, setFilter] = useState<_PaymentFilter>(initialFilter || {});
    const {data} = useQuery<settlementCal,settlementCalVariables>(SETTLEMENT_CAL,{
        variables: {
            filter
        }
    });
    const amt = data?.SettlementCal.amt || 0;

    return {setFilter,amt}
}