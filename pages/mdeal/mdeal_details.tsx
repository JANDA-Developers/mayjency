import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SubTopNav from 'layout/components/SubTop';
import { ProductPhotoBlock } from '../../components/list/ProductPhoto';
import BoardList from '../../components/board/List';
import { ProductListBlock } from '../../components/list/ProductList';
import { useProductList } from '../../hook/useProduct';
import { getTypeFilterByUrl, checkIsExp } from '../../utils/product';
import { useCategoryList } from '../../hook/useCategory';

interface IProp { }

export const TourList: React.FC<IProp> = () => {
    const isExp = checkIsExp()
    const { initialFilter } = getTypeFilterByUrl(isExp);
    const { items: cats } = useCategoryList();
    const [view, setView] = useState<"line" | "gal">("line");
    const {
        items,
        pageInfo,
        setFilter,
        setSort,
        sort,
        filter,
        viewCount,
        setViewCount,
        setPage
    } = useProductList({ initialFilter });
    const { totalCount } = pageInfo;

    const router = useRouter();

    const handleWrite = () => {
        router.push("/tour/write")
    }

    const handleCatFilter = (catId: string) => () => {
        setFilter({
            ...filter,
            categoryId_eq: catId
        })
    }

    return <div className="mdeal_details_in w1200">
                <div className="Document">
                    <div className="boardReadHeader">
                            <div className="titleArea">
                                <a href="" className="category">
                                    행사
                                </a>
                                <a href="" className="title">이십세기 이승환 +</a>
                                <div className="tag">
                                    <span><i className="xi-tag" title="태그"></i></span>
                                    <span><a href="" rel="tag">#입장권</a></span>
                                    <span><a href="" rel="tag">#티켓</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="Read_box">
                            
                            <div className="boardReadBody">
                                <div className="document_578_4 xe_content">
                                    <div>
                                        <img src="/img/mdeal_detail_img01.jpg" alt="20004934-2307.jpg" width="100%" ></img>
                                    </div>
                                </div>
                            </div>
                            <div className="boardReadFooter">
                            </div>
                            <div className="boardNavigation">
                                <div className="float_left">
                                    <a href="" className="xet_btn medium light">
                                        <span>목록</span>
                                    </a>
                                </div>
                                <div className="float_right">
                                    <a href="" className="xet_btn medium gray"><i className="xi-eraser"></i> 수정</a>
                                    <a href="" className="xet_btn medium pomegrante"><i className="xi-trash"></i> 삭제</a>
                                </div>
                            </div>
                        </div>
                        <div id="viewControl">
                            <div className="control_box">
                                <div className="box">
                                    <table  summary="Extra Form" className="option_tb">
                                        <tbody>
                                            <tr>
                                                <th>장소</th>
                                                <td>부산시민아트홀</td>
                                            </tr>
                                            <tr>
                                                <th>판매기간</th>
                                                <td>2020.01.16 ~ 2020.09.30</td>
                                            </tr>
                                            <tr>
                                                <th>사용기간</th>
                                                <td>2020.01.16 ~ 2020.09.30</td>
                                            </tr>
                                            <tr>
                                                <th>판매방식</th>
                                                <td>티켓</td>
                                            </tr>
                                        </tbody>
                                    </table>            
                                    <div className="chash_box">
                                        <table summary="Extra Form" className="chash_tb">
                                            <tbody>
                                                <tr>
                                                    <th>1인</th>
                                                    <td><strong>60,000</strong>원</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="btn_box">
                                    <div className="links_wrap">
                                        <div className="link05">
                                            <a href="javascript:void(0)" >
                                                예약확인
                                            </a>
                                        </div>
                                        <div className="link02">
                                            <a href="javascript:void(0)">
                                                예약하기
                                            </a>
                                        </div>
                                    </div>
                                    <div className="link03">
                                        판매완료
                                    </div>
                                    <div className="link04">
                                        <a href="mdeal">
                                            목록으로
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div id="Reservation_check" >
                                <div className="iframe_box">
                                    <a className="close_icon">
                                        <i className="flaticon-multiply" ></i>
                                    </a>
                                    <iframe src="" ></iframe>
                                </div>
                            </div>
                            <div id="Reservation" >
                                <div className="iframe_box">
                                    <a className="close_icon">
                                        <i className="flaticon-multiply" ></i>
                                    </a>
                                    <iframe src="" ></iframe>
                                </div>
                            </div>
                        </div>
                        <div id="fade"></div>
                </div>
            </div>;
};

export default TourList;