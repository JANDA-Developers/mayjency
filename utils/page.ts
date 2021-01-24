import { usePageInfo } from "../hook/usePageInfo";
import { Fpage } from "../types/api"
import { TPageKeys } from "../types/interface";

export const getQueryIndex = (inPageIndex:number,pageInfo:Fpage) => {
    const {remainder,cntPerPage,totalPageSize} = pageInfo;
    const diff = cntPerPage - remainder;
    const inPageReverse = cntPerPage - inPageIndex; 
    return ((pageInfo.totalPageSize -2 ) * pageInfo.cntPerPage) + inPageReverse + diff;  
}

export const getStaticPageInfo = (key:TPageKeys) => async () => {
    return {
        revalidate: 1,
        props: {
            pageInfo: "",
        }, // will be passed to the page component as props
    }
}