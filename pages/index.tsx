import React, { useState, useContext, useEffect } from 'react';
import pageInfoDefault from 'info/main.json';
import { getEditUtils } from 'utils/pageEdit';
import { AppContext } from './_app'
import { Meta } from 'components/common/meta/Meta';
import { Upload } from 'components/common/Upload';
import Link from 'next/link';
import { HiddenSubmitBtn } from 'components/common/HiddenSubmitBtn';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useProductList } from 'hook/useProduct';
import { useRouter } from 'next/router';
import { getStaticPageInfo } from '../utils/page';
import { useBookingList } from '../hook/useBooking';

export const Main: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ pageInfo }) => {
  const { items } = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
  const { editMode } = useContext(AppContext);
  const original = pageInfo || pageInfoDefault;
  const [page, setPage] = useState(original);
  const { edit, imgEdit, bg } = getEditUtils(editMode, page, setPage)
  const router = useRouter()
  const bookingListHook = useBookingList();


  const toProductBoard = (id: string) => {
    router.push(id);
  }


  return <div className="body main" id="main" >
    <Meta title="메인페이지" description="ㅁㄴㅇㄴ" />
    <div className="main_con_box1">
      <div
        className="main_top_images"
        // style={{ ...bg("mainBg") }}
      >
        <Upload onUpload={imgEdit("mainBg")} />
        <div className="ovj"></div>
        <div className="w1200">
          {/* <strong {...edit("title")} /> */}
          <strong>
            메이전시와<br></br>함께 시작하는 집테크
          </strong>
          {/* <span {...edit('subtitle')}> */}
          <span>
            메이전시는 잔다에서 제공하는 예약솔루션 상품을<br></br>홍보하는 마케팅 플랫폼 입니다
          </span>
          <div className="btn_list">
            <Link href="/mdeal/mdeal_list">
              {/* <a className="tourLink" {...edit("mainLink1")} /> */}
              <a className="tourLink">
                M딜
              </a>
            </Link>
            <Link href="/influencer/list">
              {/*<a  {...edit("mainLink2")} />*/}
              <a>
                인플루언서
              </a>
            </Link>
          </div>
        </div>

      </div>
    </div>
    <div className="main_con_box2">
      <div className="w1200">
        <div className="top_txt">
          {/* <h2 {...edit("purposeTitle")} /> */}
          <h2>
            When Where What
          </h2>
          {/* <span {...edit("purposeSubTitle")}></span> */}
          <span>
            언제 어디서나 어떤 상품도 판매할 수 있습니다. 
          </span>
        </div>
        <ul>
          <li>
            <i className="icon_01"></i>
            <strong>
              시간의<br></br>제약이 없음
            </strong>
            <span>
              There is no time limit
            </span>
            {/*<strong  {...edit("purposeCircle1")} />
            <span {...edit("purposeCircle1_en")} />*/}
          </li>
          <li>
            <i className="icon_02"></i>
            <strong>
              장소의<br></br>제약이 없음
            </strong>
            <span>
              Anywhere can do it
            </span>
             {/*<strong {...edit("purposeCircle2")} />
            <span {...edit("purposeCircle2_en")} />*/}
          </li>
          <li>
            <i className="icon_03"></i>
            <strong>
              다양한<br></br>종류의 제화
            </strong>
            <span>
              Have a variety of goods
            </span>
             {/*<strong {...edit("purposeCircle3")} />
            <span {...edit("purposeCircle3_en")} />*/}
          </li>
        </ul>
      </div>
    </div>
    <div className="main_con_box3">
      <div className="w1200">
        <div className="top_txt">
          {/*<h2 {...edit("busi_area_title")} />*/}
          <h2></h2>
        </div>
        <ul>
          <li className="img01">
            <i></i>
            <strong>
              Anytime Marketer
            </strong>
            <span>
              시간 제약이 없습니다. 내가 활동하는 시간이 바로 근무시간이 될 수 있습니다.
            </span>
            {/* <strong {...edit("busi_area1_title")} />
            <span {...edit("busi_area1_desc")} /> */}
          </li>
          <li className="img02">
            <i></i>
            <strong>
              Anyone Marketer
            </strong>
            <span>
              나이의 제약이 없습니다. SNS에 글을 업로드 할 수 있으면 연령에 상관없이 마케팅 활동을 할 수 있습니다.
            </span>
            {/*<strong {...edit("busi_area2_title")} />
            <span {...edit("busi_area2_desc")} />*/}
          </li>
          <li className="img03">
            <i></i>
            <strong>
              Everybody Marketer
            </strong>
            <span>
              마케터의 조건 제약이 없습니다. 상품의 이해도만 갖고 있다면 홍보활동을 시작할 수 있습니다.
            </span>
            {/*<strong {...edit("busi_area3_title")} />
            <span {...edit("busi_area3_desc")} />*/}
          </li>
          <li className="img04">
            <i></i>
            <strong>
              Everywhere Marketer
            </strong>
            <span>
              장소의 제약이 없습니다. SNS를 업로드 할 수 있는 스마트폰이나 PC가 있다면 장소에 상관없이 활동 할 수 있습니다.
            </span>
            {/*<strong  {...edit("busi_area4_title")} />
            <span {...edit("busi_area4_desc")} />*/}
          </li>
        </ul>
      </div>
    </div>
    <div className="main_con_box4">
      <div className="w100">
        <div className="photo_box">
          <ul className="photo_ul line3 main_photo_ul">
            <li className="top_txt">
              {/*<h2 {...edit("valuable_exp")} />*/}
              <h2>
                Anyone can be a<br></br>Marketer
              </h2>
              {/*<span className="txt" {...edit("valuable_exp_sub")} />*/}
              <span className="txt">
                개인 SNS만 있다면 나도 마케터
              </span>
              <div className="btn_list">
                <span><Link href="/mdeal/mdeal_list"><a>M딜</a></Link></span>
                <span><Link href="/influencer/list"><a>인플루언서</a></Link></span>
              </div>
              <i><svg><polygon points="69.22 12.71 0 12.71 0 10.71 64.33 10.71 54.87 1.43 56.27 0 69.22 12.71" /></svg></i>
            </li>
            {items.map((item) =>
              <Link key={item._id} href={`/tour/view/${item._id}`}>
                <li className="list_in">
                  <div className="img" onClick={() => { toProductBoard(item._id) }} style={{
                    backgroundImage: `url(${item.images[0]?.uri})`
                  }}></div>
                  <div className="box">
                    <div className="category"><span>{item.category?.label}</span></div>
                    <div className="title">{item.title}</div>
                    <div className="subTitle">
                      {item.subTitle}
                    </div>
                  </div>
                </li >
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
    <div className="main_con_box5">
      <div className="txt">
        {/*<h2 {...edit('bottom_title')} />
        <p {...edit('bottom_desc')} />*/}
        <h2>
          누구나 간편하게 마케터가 될 수 있는 마케팅 플랫폼 'MAGENCY'
        </h2>
        <p>
          Platform 'magency' for anyone to be a marketer anytime, anywhere
        </p>
      </div>
      {/*<div
        className="main_bg_img"
        style={{ ...bg("bottom_bg_img") }}
      />*/}
      <div
        className="main_bg_img"
      />
      <Upload onUpload={imgEdit("bottom_bg_img")} />
    </div>
    <HiddenSubmitBtn original={original} setData={setPage} path="main" data={page} />
  </div >
};


interface IGetProps {
  pageInfo: typeof pageInfoDefault | "",
}
export const getStaticProps: GetStaticProps<IGetProps> = getStaticPageInfo("tourMain");
export default Main;