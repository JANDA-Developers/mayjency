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
    const reservation = () => {
        $('#Popup01').css({
            'display': 'block'
        });
        $('.fade').css({
            'display': 'block'
        });
    }
    const closeiframe = () => {
        $('#Popup01').css({
            'display': 'none'
        });
        $('.fade').css({
            'display': 'none'
        });
    }

    
    return <div className="mdeal_details_in w1200">
                <div className="Document">
                    <div className="boardReadHeader">
                            <div className="titleArea">
                                <a href="" className="category">
                                    체험
                                </a>
                                <a href="" className="title">요트체험</a>
                                <div className="tag">
                                    <span><i className="xi-tag" title="태그"></i></span>
                                    <span><a href="" rel="tag">#요트</a></span>
                                    <span><a href="" rel="tag">#부산</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="Read_box">
                            
                            <div className="boardReadBody">
                                <div className="document_578_4 xe_content">
                                    <div>
                                        <p className="detail_txt">
                                            한강 야경에서<br></br>
                                            럭셔리 요팅 파티를 즐겨 보자!!<br></br>
                                            요팅하는 낭만 고양이<br></br>
                                            환상에 낭만 고양이가 있어 멋질 것이다!!<br></br>
                                            럭셔리 요팅 카페(낭만 고양이)는 토크하고 <br></br>
                                            게임하고,먹고,마시고,자고,씻고,즐기며 <br></br>
                                            오늘 죽어도 될 만큼에 세상 제일 편한 자세로<br></br>
                                            휴식을 취할 수 있는 그런 곳..<br></br>
                                            <br></br>
                                            우리들에 낭만 고양이가 있는 곳...<br></br>
                                            오늘 죽고 내일 다시 태어 날 환희에 그곳...<br></br>
                                            미식의 낭만 고양이와 주당의 낭만 고양이의 핫 플레이스 어디로... <br></br>
                                        </p>
                                        <img src="/img/detail_01.png" alt="20004934-2307.jpg" width="100%" ></img>
                                        <img src="/img/detail_02.png" alt="20004934-2307.jpg" width="100%" ></img>
                                        <img src="/img/detail_03.png" alt="20004934-2307.jpg" width="100%" ></img>
                                        <img src="/img/detail_04.png" alt="20004934-2307.jpg" width="100%" ></img>
                                        <img src="/img/detail_05.png" alt="20004934-2307.jpg" width="100%" ></img>
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
                                                <td>수영만요트경기장</td>
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
                                                    <td><strong>120,000</strong>원</td>
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
                                        <div  onClick={reservation} className="link02">
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
                        
                </div>
                <div id="Popup01" className="popup_bg_full" style={{ display: 'none;' }}>
            <a onClick={closeiframe} className="close_icon">
                <i className="flaticon-multiply"></i>
            </a>
            <div className="in_txt reservation_popup">
            <div className="iframe_box">
                <iframe src="https://booking-app.stayjanda.cloud/#/outpage/reservation/10d10a06-c816-2f24-0153-0a9258723273" ></iframe>
            </div>
            </div>
        </div>
        <div id="fade" className="fade" style={{ display: 'none;' }}></div>
            </div>;
};

export default TourList;