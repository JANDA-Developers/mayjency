import React, { useContext, useEffect, useLayoutEffect } from 'react';
import $ from "jquery";
import Link from "next/link";

import { AppContext } from "pages/_app";

interface IProp { }

export const Footer: React.FC<IProp> = () => {

    const { isLogin } = useContext(AppContext);

    const handleFadeClick = () => {
        $('family_site_select').css("display", 'none');
        $('fade1').css("display", 'none');
    }


    return <footer className="footer" id="footer">
        <div id="gotop" className="">
            <Link href="#header">
                <a className="top"><i className="jandaicon-arr4-top" /></a>
            </Link>
            {isLogin && <Link href="/mypage/basket">
                <a className="basket"><object type="image/svg+xml" data="/img/svg/basket.svg">현재 브라우저는 iframe을 지원하지 않습니다.</object><button /></a>
            </Link>}
            <Link href="#footer">
                <a className="down"><i className="jandaicon-arr4-bottom" /></a>
            </Link>
        </div>
        <div className="footer_in">
            <div className="bottom_nav">
                <ul className="w1200">
                    {/* <li><Link href="/site-info"><a>회사소개</a></Link></li> */}
                    <li><Link href="/member/rule"><a>이용약관</a></Link></li>
                    {/* <li><Link href="/member/kr-terms"><a>국내여행약관</a></Link></li> */}
                    <li><Link href="/member/privacy-policy"><a>개인정보처리방침</a></Link></li>
                    <li className="sns">
                        <div>
                            <Link href="https://www.facebook.com/stayjanda/"><a target="_blank"><i className="jandaicon-facebook"></i></a></Link>
                            {/*<Link href="https://twitter.com/PinkRoader"><a target="_blank"><i className="jandaicon-twitter"></i></a></Link>*/}
                            <Link href="https://www.instagram.com/janda__official/"><a target="_blank"><i className="jandaicon-instagram2"></i></a></Link>
                            <Link href="https://blog.naver.com/janda_dev"><a target="_blank"><i>N</i></a></Link>
                        </div>
                    </li>
                    <li className="cs"> <Link href="mailto:support@stayjanda.com"><a>CONTACT</a></Link></li>
                </ul>
            </div>
            <div className="f_detail_wrap">
                <div className="ft_left">
                    <div className="magency logo_bottom">
                        <img src="/img/logo_2_sj.png" alt="logo" />
                    </div>
                </div>
                <div className="copyright">
                    <ul className="footer_homepage_info">
                        <li>
                            <strong className="name">메이전시</strong>
                        </li>
                        <li>
                            <strong>대표</strong>
                            <span>김화현</span>
                        </li>

                        <li>
                            <strong>사업자등록번호</strong>
                            <span>592-55-00270<a href="http://www.ftc.go.kr/www/bizCommList.do?key=232" className="url" target="_blank" title="사업자정보확인확인 새창띄우기">사업자정보확인</a></span>
                        </li>
                        <li>
                            <strong>통신판매업신고번호</strong>
                            <span>2020-부산남구-0471</span>
                        </li>
                        {/* <li>
                            <strong>영업보증보험</strong>
                            <span>5천만원 가입</span>
                        </li> */}
                        <li className="bottom_txt">
                            Copyright ⓒ 2010-2020 JANDA All Rights Reserved
                         </li>
                    </ul>
                    <ul className="footer_homepage_info mt">
                        <li>
                            <strong>이메일</strong>
                            <span>support@stayjanda.com</span>
                        </li>
                        <li>
                            <strong>전화번호</strong>
                            <span>1833-4157 Am 10:00 ~ pm 6:00</span>
                        </li>

                        <li>
                            <strong>주소</strong>
                            <span>부산시 남구 전포대로 133 WEWORK BIFC 11층<a target="_blank" href="https://map.naver.com/v5/entry/address/14367523.344390843,4184054.8415952306,%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EB%AC%B8%ED%98%84%EB%8F%99%201227-2,jibun?c=14367455.8058275,4184075.8629424,18,0,0,0,dh" className="icon" title="지도로 새창띄우기"><object type="image/svg+xml" data="/img/svg/map.svg">현재 브라우저는 iframe을 지원하지 않습니다.</object><button /></a></span>
                        </li>
                        <li>
                            <strong>계좌번호</strong>
                            <span>우리은행 1006-101-493013/예금주:김화현</span>
                        </li>
                    </ul>
                    <div className="bottom_bn">
                        <div className="partner">
                            <span className="link" style={{ width: "114px" }}><img src="/img/ft_logo01.png" alt="중소벤처기업로고" /></span>
                            <span className="link" style={{ width: "90px" }}><img src="/img/ft_logo02.png" alt="부산관광공사로고" /></span>
                            <span className="link" style={{ width: "90px" }}><img src="/img/ft_logo03.png" alt="나이스페이로고" /></span>
                            <span className="link"><img src="/img/ft_logo04.png" alt="기술보증기금로고" /></span>
                            <span className="link" style={{ width: "88px" }}><img src="/img/ft_logo05.png" alt="부산광역시로고" /></span>
                            <span className="link" style={{ width: "88px" }}><img src="/img/ft_logo06.png" alt="아마존로고" /></span>
                            <span className="link" style={{ width: "88px" }}><img src="/img/ft_logo07.png" alt="디라이트로고" /></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div id="fade1" onClick={handleFadeClick} />
        <div className="footer-area-bottom">
            <div className="container">
                <div className="janda_txt">
                    <p>
                        <a href="https://stayjanda.com/" target="_blank" rel="noopener">
                            <i className="jandaicon-janda"></i>
                            대한민국 1등 온·오프라인 숙소운영 및 통합예약 솔루션
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div>
        </div>
    </footer>;
};
