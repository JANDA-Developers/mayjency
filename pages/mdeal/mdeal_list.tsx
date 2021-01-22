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

    return <div className="mdeal_box">
                <div className="w1200">
                    <div className="top_deal">
                        <ul>
                            <li className="top_01">
                                <span className="title">#공유오피스</span>
                            </li>
                            <li className="top_02">
                                <span className="title">#카라반</span>
                            </li>
                            <li className="top_03">
                                <span className="title">#함께운동하자</span>
                            </li>
                            <li className="top_04">
                                <span className="title">#보컬트레이닝</span>
                            </li>
                            <li className="top_05">
                                <span className="title">#공유키친</span>
                            </li>
                            <li className="top_06">
                                <span className="title">#인생공연</span>
                            </li>
                        </ul>
                    </div>
                    <div className="deal_list">
                        <h4>#국내여행</h4>
                        <ul className="list_ul">
                            <a href="/mdeal/mdeal_details_01">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#요트</a> <a href="/">#부산</a></div>
                                    <div className="title">요트체험</div>
                                    <div className="cash"><strong>30,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#진해</a><a href="/">#뚜벅이여행</a><a href="/">#소풍</a></div>
                                    <div className="title">진해로 소풍 가실분들 모집중</div>
                                    <div className="cash"><strong>30,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#1박2일</a><a href="/">#제주도</a><a href="/">#제주도</a></div>
                                    <div className="title">제주도 꽃구경 가실분?!</div>
                                    <div className="cash"><strong>230,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#경주여행</a> <a href="/">#야경투어</a></div>
                                    <div className="title">경주야경투어</div>
                                    <div className="cash"><strong>120,000</strong>원</div>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="deal_list">
                        <h4>#추천상품</h4>
                        <ul className="list_ul">
                            <a href="/mdeal/mdeal_details_01">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#요트</a> <a href="/">#부산</a></div>
                                    <div className="title">요트체험</div>
                                    <div className="cash"><strong>30,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#진해</a><a href="/">#뚜벅이여행</a><a href="/">#소풍</a></div>
                                    <div className="title">진해로 소풍 가실분들 모집중</div>
                                    <div className="cash"><strong>30,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details_01">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#1박2일</a><a href="/">#제주도</a><a href="/">#제주도</a></div>
                                    <div className="title">제주도 꽃구경 가실분?!</div>
                                    <div className="cash"><strong>230,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#경주여행</a> <a href="/">#야경투어</a></div>
                                    <div className="title">경주야경투어</div>
                                    <div className="cash"><strong>120,000</strong>원</div>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="deal_list">
                        <div className="search">
                            <ul>
                                <li className="on">ALL</li>
                                <li>#티켓</li>
                                <li>#공간</li>
                                <li>#숙박</li>
                                <li>#투어</li>
                                <li>#렌탈</li>
                                <li>#체험</li>
                            </ul>
                        </div>
                        <div className="alignment">
                            <div className="left_div">총 <strong>22,222</strong>개</div>
                            <div className="right_div">
                                <select className="sel01">
                                    <option>추천수</option>
                                    <option>예약수</option>
                                    <option>조회수</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                                <ul className="al_02">
                                    <li> <a href="#" className="view_icon"><svg><rect width="4" height="2"  /><rect x="7" width="13" height="2"  /><rect y="7" width="4" height="2"  /><rect x="7" y="7" width="13" height="2"  /><rect y="15" width="4" height="2" /><rect x="7" y="15" width="13" height="2" /></svg></a></li>
                                    <li><a href="#" className="view_icon on"><svg><rect width="9" height="8"  /><rect x="11" width="9" height="8"  /><rect y="10" width="9" height="8"  /><rect x="11" y="10" width="9" height="8"  /></svg></a></li>
                                </ul>
                            </div>
                        </div>
                        <ul className="list_ul">
                            <a href="/mdeal/mdeal_details_01">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#요트</a> <a href="/">#부산</a></div>
                                    <div className="title">요트체험</div>
                                    <div className="cash"><strong>30,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#진해</a><a href="/">#뚜벅이여행</a><a href="/">#소풍</a></div>
                                    <div className="title">진해로 소풍 가실분들 모집중</div>
                                    <div className="cash"><strong>30,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#1박2일</a><a href="/">#제주도</a><a href="/">#제주도</a></div>
                                    <div className="title">제주도 꽃구경 가실분?!</div>
                                    <div className="cash"><strong>230,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#경주여행</a> <a href="/">#야경투어</a></div>
                                    <div className="title">경주야경투어</div>
                                    <div className="cash"><strong>120,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#서울</a> <a href="/">#궁궐</a></div>
                                    <div className="title">궁궐에서의 사진 모델 투어</div>
                                    <div className="cash"><strong>70,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#한강공원</a> <a href="/">#서울</a></div>
                                    <div className="title">한강공원에서 피크닉 즐기기</div>
                                    <div className="cash"><strong>35,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#전주</a> <a href="/">#한옥마을</a></div>
                                    <div className="title">전주한옥마을 한복체험&사진촬영</div>
                                    <div className="cash"><strong>100,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#서울</a> <a href="/">#하이킹</a></div>
                                    <div className="title">서울 성곽을 따라 즐기는 하이킹</div>
                                    <div className="cash"><strong>39,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#부산</a> <a href="/">#인생사진</a></div>
                                    <div className="title">멋진 부산의 야경구경&인생사진 남기기</div>
                                    <div className="cash"><strong>25,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#북한산</a> <a href="/">#하이킹</a></div>
                                    <div className="title">북한산, 도봉산, 인왕산 하이킹</div>
                                    <div className="cash"><strong>39,900</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#투어</a> <a href="/">#부산</a></div>
                                    <div className="title">부산의 진정한 아름다운</div>
                                    <div className="cash"><strong>55,000</strong>원</div>
                                </li>
                            </a>
                            <a href="/mdeal/mdeal_details">
                                <li className="list_in">
                                    <div className="img">상품이미지</div>
                                    <div className="tag"><a href="/">#경주</a> <a href="/">#문화유산</a></div>
                                    <div className="title">유네스코 세계문화유산 경주 투어</div>
                                    <div className="cash"><strong>80,000</strong>원</div>
                                </li>
                            </a>
                        </ul>
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

                </div>
            </div>;
};

export default TourList;