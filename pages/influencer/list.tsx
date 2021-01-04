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

    return <div className="influencer_in">
                <div className="top_bg w100">
                    <div className="w1200">
                        <h3>영향력이 있는 사람들이<br></br>모여있습니다</h3>
                        <p>이젠 더 이상 마케팅을 고민하지 마세요!</p>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="content w100">
                    <div className="con01 w1200">
                        <h4>등록된 인플루언서<br /><strong>3342</strong></h4>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="con02 w1200">
                        <div className="deal_list">
                            <h4>이달의 인플루언서</h4>
                            <ul className="profile_ul">
                                <a href="/influencer/influencer_details">
                                    <li className="profile_in">
                                        <div className="profile" >프로필 사진</div>
                                        <div className="tag">#전시정보 #사진전</div>
                                        <div className="name">photoshot</div>
                                        <div className="number">+266</div>
                                    </li>
                                </a>
                                <a href="/influencer/influencer_details">
                                    <li className="profile_in">
                                        <div className="profile" >프로필 사진</div>
                                        <div className="tag">#공연정보 #문화생활</div>
                                        <div className="name">goculture</div>
                                        <div className="number">+127</div>
                                    </li>
                                </a>
                                <a href="/influencer/influencer_details">
                                    <li className="profile_in">
                                        <div className="profile" >프로필 사진</div>
                                        <div className="tag">#강릉볼거리 #익선동한옥거리</div>
                                        <div className="name">stayyolo</div>
                                        <div className="number">+213</div>
                                    </li>
                                </a>
                                <a href="/influencer/influencer_details">
                                    <li className="profile_in">
                                        <div className="profile" >프로필 사진</div>
                                        <div className="tag">#힐리여행 #숙소추천</div>
                                        <div className="name">goodtour</div>
                                        <div className="number">+48</div>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className="con03 w1200">
                        <div className="rank_list">
                            <div className="search">
                                <ul>
                                    <li className="on">#ALL</li>
                                    <li>#맛집</li>
                                    <li>#렌트</li>
                                    <li>#렌탈</li>
                                    <li>#대관</li>
                                    <li>#티켓</li>
                                    <li>#일상</li>
                                    <li>#뷰티</li>
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
                                        <li> <a href="#" className="view_icon"><svg><rect width="4" height="2"  /><rect x="7" width="13" height="2" /><rect y="7" width="4" height="2" /><rect x="7" y="7" width="13" height="2" /><rect y="15" width="4" height="2" /><rect x="7" y="15" width="13" height="2"/></svg></a></li>
                                        <li><a href="#" className="view_icon on"><svg><rect width="9" height="8"  /><rect x="11" width="9" height="8" /><rect y="10" width="9" height="8" /><rect x="11" y="10" width="9" height="8" /></svg></a></li>
                                    </ul>
                                </div>
                            </div>
                            <table>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>순위</th>
                                        <th className="id">인플루언서</th>
                                        <th>총 판매실적</th>
                                        <th>등록된 상품</th>
                                        <th>운영중인 SNS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="td01">1 <span>(+2)</span></td>
                                        <td className="id td02">
                                            <ul>
                                                <li className="img">프로필 사진</li>
                                                <li className="name">Yoondodo</li>
                                            </ul>
                                        </td>
                                        <td className="td03">+3425</td>
                                        <td className="td04">22</td>
                                        <td className="td05">5</td>
                                    </tr>
                                    <tr>
                                        <td className="td01">2 <span>(-)</span></td>
                                        <td className="id td02">
                                            <ul>
                                                <li className="img">프로필 사진</li>
                                                <li className="name">Yoondodo</li>
                                            </ul>
                                        </td>
                                        <td className="td03">+3425</td>
                                        <td className="td04">22</td>
                                        <td className="td05">5</td>
                                    </tr>
                                    <tr>
                                        <td className="td01">3 <span>(-)</span></td>
                                        <td className="id td02">
                                            <ul>
                                                <li className="img">프로필 사진</li>
                                                <li className="name">Yoondodo</li>
                                            </ul>
                                        </td>
                                        <td className="td03">+3425</td>
                                        <td className="td04">22</td>
                                        <td className="td05">5</td>
                                    </tr>
                                    <tr>
                                        <td className="td01">4 <span>(-)</span></td>
                                        <td className="id td02">
                                            <ul>
                                                <li className="img">프로필 사진</li>
                                                <li className="name">Yoondodo</li>
                                            </ul>
                                        </td>
                                        <td className="td03">+3425</td>
                                        <td className="td04">22</td>
                                        <td className="td05">5</td>
                                    </tr>
                                    <tr>
                                        <td className="td01">5 <span>(-)</span></td>
                                        <td className="id td02">
                                            <ul>
                                                <li className="img">프로필 사진</li>
                                                <li className="name">Yoondodo</li>
                                            </ul>
                                        </td>
                                        <td className="td03">+3425</td>
                                        <td className="td04">22</td>
                                        <td className="td05">5</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <ul className="rank_ul">
                                <li className="rank_in">
                                    <div className="profile" >프로필 사진</div>
                                    <div className="right">
                                        <div className="name">Yoondodo</div>
                                        <div className="tag">#맛집 #부산</div>
                                        <div className="number"><strong>실적</strong> +3456</div>
                                    </div>
                                </li>
                            </ul> */}
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
            </div>
};

export default TourList;