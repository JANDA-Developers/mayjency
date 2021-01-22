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

    return <div className="influencer_details_in">
            <div className="in">
                <div className="top_bg w100">

                </div>
                <div className="bottom_con w1200">
                    <div className="con01">
                        <div className="photo">
                            <span> 프로필사진</span>
                        </div>
                        <div className="id">
                            stayyolo
                        </div>
                        <ul className="tag">
                            <li>#부산</li>
                            <li>#뷰티</li>
                            <li>#맛집</li>
                            <li>#인스타</li>
                            <li>#유튜브</li>
                        </ul>

                    </div>
                    <div className="con02 self_info">
                        <div className="txt">
                            여행과 사랑의 공통점은 가슴이 두근 거리는 것! 길을 잃을 때 가슴이 두근거리고 사랑에 빠집니다. 맛있은 음식을 하면 나누어 먹고 싶듯, 재밌는 여행을 하면 이야기를 나누고 싶습니다. 여행과 일상을 기록합니다.
                        </div>
                    </div>
                    <div className="con03">
                        <h4 className="title">활동채널</h4>
                        <div className="txt">
                            <span className="on"><i className="jandaicon-instagram1"></i>인스타</span>
                            <span><i className="jandaicon-facebook"></i>페이스북</span>
                            <span><i className="jandaicon-blog"></i>블로그</span>
                            <span><i className="jandaicon-youtube"></i>유튜브</span>
                            <span><i className="jandaicon-twitter"></i>트위터</span>
                        </div>
                    </div>
                    <div className="con04">

                        <div className="alignment">
                            <div className="left_div">
                                <h4 className="title">등록한 M딜<strong>334</strong></h4>
                            </div>
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
                                    <li> <a href="#" className="view_icon"><svg><rect width="4" height="2" /><rect x="7" width="13" height="2"  /><rect y="7" width="4" height="2"  /><rect x="7" y="7" width="13" height="2"  /><rect y="15" width="4" height="2"/><rect x="7" y="15" width="13" height="2" /></svg></a></li>
                                    <li><a href="#" className="view_icon on"><svg><rect width="9" height="8" /><rect x="11" width="9" height="8"  /><rect y="10" width="9" height="8" /><rect x="11" y="10" width="9" height="8"  /></svg></a></li>
                                </ul>
                            </div>
                        </div>
                        <ul className="list_ul">
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#요트 #부산</div>
                                <div className="title">요트체험</div>
                                <div className="cash">30,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#진해 #뚜벅이여행 #소풍</div>
                                <div className="title">진해로 소풍가실분들 모집중</div>
                                <div className="cash">30,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#1박2일 #제주도</div>
                                <div className="title">제주도 꽃구경 가실분?!</div>
                                <div className="cash">230,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#경주여행 #야경투어</div>
                                <div className="title">경주야경투어</div>
                                <div className="cash">120,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#서울 #궁궐</div>
                                <div className="title">궁궐에서의 사진 모델 투어</div>
                                <div className="cash">70,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#한강공원 #서울</div>
                                <div className="title">한강공원에서 피크닉 즐기기</div>
                                <div className="cash">35,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#전주 #한옥마을</div>
                                <div className="title">전주한옥마을 한복체험&사진촬영</div>
                                <div className="cash">100,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#서울 #하이킹</div>
                                <div className="title">서울 성곽을 따라 즐기는 하이킹</div>
                                <div className="cash">39,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#부산 #인생사진</div>
                                <div className="title">멋진 부산의 야경구경&인생사진 남기기</div>
                                <div className="cash">25,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#북한산 #하이킹</div>
                                <div className="title">북한산, 도봉산, 인왕산 하이킹</div>
                                <div className="cash">39,900원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#투어 #부산</div>
                                <div className="title">부산의 진정한 아름다움</div>
                                <div className="cash">55,000원</div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="tag">#경주 #문화유산</div>
                                <div className="title">유네스코 세계문화유산 경주 투어</div>
                                <div className="cash">80,000원</div>
                            </li>
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
            </div>
        </div>;
};

export default TourList;