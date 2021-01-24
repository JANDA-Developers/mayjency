import { Meta } from 'components/common/meta/Meta';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import pageInfoDefault from "info/tourMain.json";
import { getEditUtils } from '../../utils/pageEdit';
import { AppContext } from '../_app';
import { getStaticPageInfo } from '../../utils/page';
import { checkIsExp } from '../../utils/product';
import { useCategoryList } from '../../hook/useCategory';
import { TourMainBoard } from '../../components/tour/TourMainBoard';


export const getStaticProps = getStaticPageInfo("tourMain");
export const TourMain: React.FC<any> = ({ pageInfo: sitePageInfo }) => {
    const isExp = checkIsExp();
    const original = sitePageInfo || pageInfoDefault;
    const { editMode } = useContext(AppContext);
    const [pageInfo, setPageInfo] = useState(original);
    const { items: cats } = useCategoryList();
    const { edit, imgEdit, bg } = getEditUtils(editMode, pageInfo, setPageInfo)

    return <div >
        <Meta />
        <SubTopNav title="temp" desc="temp" >
            <li className="homedeps1">
                {isExp ?
                    <Link href="/tour">
                        <a>Tour</a>
                    </Link> :
                    <Link href="/tour?exp=true">
                        <a>Experience</a>
                    </Link>
                }
            </li>
        </SubTopNav>
        <div className="goods_box">
            <div className="w1200">
                <div className="bn_box line2">
                    <a href="/"><img src={'/img/bn_02.png'} alt="여행할인이벤트" /></a>
                    <a href="/"><img src={'/img/bn_02.png'} alt="여행할인이벤트" /></a>
                </div>
                {cats.map(cat =>
                    <TourMainBoard key={cat._id} cat={cat} />
                )}
            </div>
        </div>
    </div >;
};

export default TourMain;