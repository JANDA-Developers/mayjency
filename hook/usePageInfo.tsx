import { useQuery } from "@apollo/client"
import { pageInfoRead, pageInfoReadVariables, pageInfoRead_PageInfoRead_data } from "types/api"
import { TPageKeys } from "types/interface"


// export const usePageInfo = async (key: TPageKeys) => {
//     const { PageInfoRead } = await request<pageInfoRead, pageInfoReadVariables>(SERVER_URI, PAGE_INFO_READ, { key });
//     const { data } = PageInfoRead;
//     return { data };
// }

export type TUsePageInfo = {
    data: pageInfoRead_PageInfoRead_data;
}
export const usePageInfo = async (key: TPageKeys) => {
    return { };
}