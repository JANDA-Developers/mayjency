import React, { useContext, useState } from 'react';
import { getEditUtils } from '../utils/pageEdit';
import { AppContext } from "./_app";
import pageInfoDefault from 'info/siteInfo.json';
import { HiddenSubmitBtn } from 'components/common/HiddenSubmitBtn';
import { Upload } from 'components/common/Upload';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { usePageInfo } from 'hook/usePageInfo';
import { UserRole } from 'types/api';
import { getStaticPageInfo } from '../utils/page';

type TGetProps = {
    pageInfo: typeof pageInfoDefault | "",
}

export const getStaticProps: GetStaticProps<TGetProps> = getStaticPageInfo("site-info");
export const StieInfo: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ pageInfo }) => {
    const original = pageInfo || pageInfoDefault;
    const { editMode, role } = useContext(AppContext)
    const [page, setPage] = useState<typeof pageInfoDefault>(original)
    const [open, setOpen] = useState(true);
    const [addInfo, setAddInfo] = useState({
        alt: "",
        img: "",
        link: "",
    })

    const { edit, ulEdit, imgEdit, editArray, addArray, removeArray, bg } = getEditUtils(editMode, page, setPage);
    const { partners } = page;

    const changePartner = (key: string) => (e: any) => {
        const value = e.currentTarget.value;
        setAddInfo({ ...addInfo, alt: value })
    }

    const openPopup = (element: string | null) => {
        let popupElement = document.getElementById(`${element}`) as HTMLElement;
        popupElement!.style.display = 'block';
        document!.getElementById('fade')!.style.display = 'block';
    }

    const closePopup = (element: string | null) => {
        let popupElement = document.getElementById(`${element}`) as HTMLElement;
        popupElement!.style.display = 'none';
        document!.getElementById('fade')!.style.display = 'none';
    }



    return <div className="siteInfo_in">
    <div className="top_bg w100">
        <div className="w1200">
            <h3>예약+마케팅=메이전시<br />마케팅이 쉬워진다</h3>
            <p>마케팅이 어려우셨죠? 영향력이 있는 인플루언서들과 예약상품들을 이어드립니다.</p>
            <ul>
                <li>인플루언서 지원하기</li>
                <li>광고문의하기</li>
            </ul>
        </div>
    </div>
    <div className="w1200 con01 con_block">
        <h4>함께하는 인플루언서들</h4>
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
    <div className="w1200 con02 con_block">
        <h4>마케팅에 최적화된 메이전시</h4>
        <ul>
            <li>
                <img src="/img/p_icon.png" alt="icon1" />
                <h3>마케팅을 찾아 다닐 필요 없어요.</h3>
                <p>메이전시에서 마케팅상품을 찾으세요. 언제까지 알아서 일이 들어오길 기다려야 하나요? 이제는 내가 마케팅상품을 골라서 올리면 됩니다.</p>
            </li>
            <li>
                <img src="/img/p_icon.png" alt="icon1" />
                <h3>계약건수 만큼 정산 받으세요.</h3>
                <p>더 이상 글 한개당 정산 받지마세요. 글을 한개를 써도 나를 통해 이루어진 계약건수 만큼 수수료가 지급됩니다. 더 이상 피곤하게 옛날방식으로 정산받지마세요.</p>
            </li>
            <li>
                <img src="/img/p_icon.png" alt="icon1" />
                <h3>에디에 글을 홍보하든 상관없어요.</h3>
                <p>팔로워수를 걱정하고 계시나요? 팔로워수 걱정없이 인플루언서로 지원하세요. 중요한건 실제로 성사되는 계약이니까. 어디에 해당페이지를 홍보하든 상관없어요. 내가 등록한 상품페이지에서 계약만 이루어지면 됩니다.</p>
            </li>
        </ul>
    </div>
    <div className="w100 con03 con_block">
            <div className="w1200 box">
                <input id="tab-1" type="radio" name="radio-set" className="tab-selector-1" checked="checked"/>
                <label for="tab-1" className="tab-label-1"><b>인플루언서 등록</b></label>
                <input id="tab-2" type="radio" name="radio-set" className="tab-selector-2"/>
                <label for="tab-2" className="tab-label-2"><b>활동방법</b></label>
                <input id="tab-3" type="radio" name="radio-set" className="tab-selector-3"/>
                <label for="tab-3" className="tab-label-3"><b>실적확인</b></label>
                <input id="tab-4" type="radio" name="radio-set" className="tab-selector-4"/>
                <label for="tab-4" className="tab-label-4"><b>정산방법</b></label>
                <div className="sbox content-1" id="dtText01">
                    <div className="left">
                        <img src="/img/site-info_img01.png" alt="icon1"/>
                    </div>
                    <div className="right">
                        <h4>인플루언서 등록은 어떻게 하나요?</h4>
                        <p>인플루언서는 메이전시 홈페이지로 회원가입을 통해 신청할 수 있습니다. 승인제로 진행되고 있으며, 24시간 이내에 가입완료 이메일을 발송드립니다.</p>
                    </div>
                </div>
                <div className="sbox content-2" id="dtText01">
                    <div className="left">
                        <img src="/img/site-info_img01.png" alt="icon1"/>
                    </div>
                    <div className="right">
                        <h4>활동은 어떻게 해야하나요?</h4>
                        <p>인플루언서는 메이전시 내에서 상품을 등록을 할 수있습니다. <br className="no"/>상품을 등록하면서 예약상품과 연결이 되고 해당 글로 예약이 들어오게 되면 정산이 이루어지게 됩니다. 인플루언서님이 등록한 해당 글의 고유주소를 SNS에 올려서 홍보해주세요. 글을 1개만 써도 신규계약이 들어온 만큼 정산받는 새로운 방식의 마케팅시스템입니다.</p>
                    </div>
                </div>
                <div className="sbox content-3" id="dtText01">
                    <div className="left">
                        <img src="/img/site-info_img01.png" alt="icon1"/>
                    </div>
                    <div className="right">
                        <h4>나의 실적은 어디서 확인하나요?</h4>
                        <p>나의 실적은 [나의메이전시]안에 [정산]메뉴에서 확인이 가능합니다.</p>
                    </div>
                </div>
                <div className="sbox content-4" id="dtText01">
                    <div className="left">
                        <img src="/img/site-info_img01.png" alt="icon1"/>
                    </div>
                    <div className="right">
                        <h4>정산은 어떻게 받나요?</h4>
                        <p>정산은 한달에 2번 이루어지며 매달 15일, 28일에 정산을 신청해주신 순서대로 진행이 됩니다. 정산신청 가능한 최소 금액은 10,000원입니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w100 con04 con_block">
            <div className="w1200">
                <h4>메이전시에서 활동할 에이전시를 상시 모집합니다.</h4>
                <span>인플루언서 지원하기</span>
            </div>

        </div>
    </div>;
};

export default StieInfo

