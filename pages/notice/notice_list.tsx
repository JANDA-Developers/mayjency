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

    return <div className="notice_in board_list w1200">
            <div className="w100">
                    <div className="board_title">
                        <h3>공지사항</h3>
                        <span>메이전시에서 이루어지는 모든 소식을 확인해 보세요!</span>
                    </div>
                    <div className="alignment">
                        <div className="left_div">총 <strong>22,222</strong>개</div>
                        <div className="right_div">
                            <select className="sel01">
                                <option>최신순&uarr;</option>
                                <option>최신순&darr;</option>
                                <option>조회수&uarr;</option>
                                <option>조회수&darr;</option>
                            </select>
                            <select className="sel02">
                                <option>10개 보기</option>
                                <option>50개 보기</option>
                                <option>100개 보기</option>
                            </select>
                        </div>
                    </div>
                    <div className="list_lightbox">
                        <div className="boardListForm">
                            <ul className="list_ul">
                                <li className="fix">
                                    <div className="number">1</div>
                                    <div className="category"><span className="red">공지</span></div>
                                    <div className="subj">이번달 시스템<span className="file"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.69 20.44"><title>Untitled-3</title><path d="M541.08,566.12a5.42,5.42,0,0,1-3.49-1.43,4.59,4.59,0,0,1-1.77-3.31,5.6,5.6,0,0,1,1.62-4c1-1,10.78-10,11.19-10.42,1.39-1.13,4.84-2.4,8.31.57a7,7,0,0,1,2.56,5.07,5.58,5.58,0,0,1-1.59,3.8l-9.53,9.2a1,1,0,0,1-1.41,0,1,1,0,0,1,0-1.42l9.53-9.2a3.6,3.6,0,0,0,1-2.39,5.19,5.19,0,0,0-1.9-3.56c-3-2.53-5.4-.75-5.66-.54-.05,0-10.08,9.29-11.06,10.3a3.63,3.63,0,0,0-1.07,2.52,2.64,2.64,0,0,0,1.06,1.88c2.16,1.8,3.47.55,3.52.49.43-.4,10.08-9.48,10.77-10.08a1.54,1.54,0,0,0,.53-1,1.38,1.38,0,0,0-.54-1,1.15,1.15,0,0,0-1.71.24l-.07.07-8,7.83a1,1,0,1,1-1.4-1.42l8-7.8a3.16,3.16,0,0,1,4.51-.44,3.35,3.35,0,0,1,1.24,2.52,3.54,3.54,0,0,1-1.21,2.5c-.53.47-7.23,6.76-10.7,10A3.89,3.89,0,0,1,541.08,566.12Z" transform="translate(-535.81 -545.68)" /></svg></span></div>
                                    <div className="date">2020.09.08</div>
                                    <div className="check"><input type="checkbox" /></div>
                                </li>
                                <li className="">
                                    <div className="number">2</div>
                                    <div className="category"><span className="blue">업데이트</span></div>
                                    <div className="subj">이번달 시스템 </div>
                                    <div className="date">2020.09.08</div>
                                    <div className="check"><input type="checkbox" /></div>
                                </li>    
                                <li className="">
                                    <div className="number">3</div>
                                    <div className="category"><span className="blue">업데이트</span></div>
                                    <div className="subj">이번달 시스템 </div>
                                    <div className="date">2020.09.08</div>
                                    <div className="check"><input type="checkbox" /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pagenate">
                        <div className="page">
                            <a href="/kor/view.do?no=170" className="page_btn first">처음</a>
                            <a href="/kor/view.do?no=170" className="page_btn prev">이전</a>
                            <a href="#none" className="on">1</a>
                            <a href="/kor/view.do?no=170" className="off">2</a>
                            <a href="/kor/view.do?no=170" className="off">3</a>
                            <a href="/kor/view.do?no=170" className="off">4</a>
                            <a href="/kor/view.do?no=170" className="off">5</a>
                            <a href="/kor/view.do?no=170" className="off">6</a>
                            <a href="/kor/view.do?no=170" className="off">7</a>
                            <a href="/kor/view.do?no=170" className="off">8</a>
                            <a href="/kor/view.do?no=170" className="off">9</a>
                            <a href="/kor/view.do?no=170" className="off">10</a>
                            <a href="/kor/view.do?no=170" className="page_btn next">다음</a>
                            <a href="/kor/view.do?no=170" className="page_btn end">마지막</a>
                        </div>
                    </div>
                    <div className="tl list_bottom">
                        <div className="btn_footer">
                            <span className="xet_btn medium gray">상품 등록하기</span>
                        </div>
                        <div className="search_mini">
                            <div className="in">
                                <input type="text" placeholder="검색 내용을 입력해주세요."></input>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.94 31.44">
                                    <path className="cls-5" d="M313.17,433.49l-4.86-5.31a14.48,14.48,0,0,0-1-19.41,14.55,14.55,0,0,0-10.24-4.21,14.47,14.47,0,0,0,0,28.94,14.17,14.17,0,0,0,1.72-.1,1.5,1.5,0,1,0-.35-3,11.47,11.47,0,1,1-1.38-22.86h0a11.48,11.48,0,0,1,8.14,19.56,1.49,1.49,0,0,0,0,2.12.91.91,0,0,0,.13.08,1.2,1.2,0,0,0,.15.24l5.45,5.95a1.46,1.46,0,0,0,1.1.49,1.53,1.53,0,0,0,1-.39A1.5,1.5,0,0,0,313.17,433.49Z" transform="translate(-282.62 -404.56)"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
};

export default TourList;