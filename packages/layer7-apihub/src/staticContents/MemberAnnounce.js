import React from 'react';
import { Link } from 'react-admin';

export const MemberAnnounce = () => {
    return (
        <div>
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/skel.css"/>*/}
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/style.css"/>*/}
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/style-xlarge.css"/>*/}
            <link
                rel="stylesheet"
                href={process.env.PUBLIC_URL + '/css/skel.css'}
            />
            <link
                rel="stylesheet"
                href={process.env.PUBLIC_URL + '/css/style.css'}
            />
            <link
                rel="stylesheet"
                href={process.env.PUBLIC_URL + '/css/style-xlarge.css'}
            />

            <section className="wrapper style3 special">
                <div className="container">
                    <header className="major">
                        <h2>회원 가입 안내</h2>
                        <p>
                            오픈 API 개발자 포탈을 사용하기 위해 이용기관
                            개발자는 반드시 아래 절차에 따라 가입을 진행합니다.
                        </p>
                    </header>
                </div>
                <div className="container">
                    <div className="tab_area">
                        <ul className="col03">
                            <li className="on">
                                <a title="선택됨">회원 가입 안내</a>
                            </li>
                            <li>
                                {/*<a href="./processAnnounce.html">플랫폼 이용 절차</a>*/}
                                <Link to="/processAnnounce">
                                    플랫폼 이용 절차
                                </Link>
                            </li>
                            <li>
                                {/*<a href="./apiAnnounce.html">제공 API</a>*/}
                                <Link to="/apiAnnounce">제공 API</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="process_area">
                        <ul>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">01</span>
                                    <span className="ico_process ico_num_01"></span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>이용기관 업무협의</dt>
                                        <dd>
                                            업무적인 사전 협의 및 필요한 정보를
                                            주고 받습니다.
                                        </dd>
                                        <dd>
                                            개발자 포털 및 서버 정보 전달,
                                            방화벽 오픈 등
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">02</span>
                                    <span className="ico_process ico_num_02"></span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>
                                            개발자 포털 가입 - 이용기관 관리자
                                            (Org Admin)
                                        </dt>
                                        <dd>
                                            이용기관의 대표 개발자(담당자)로,
                                            직접 가입 또는 오픈 API 개발자 포털
                                            관리자의 초대 메일을 받아 가입을
                                            진행합니다.
                                        </dd>
                                        <dd>
                                            직접 가입시 조직(Organization)
                                            정보가 신규로 생성되므로, 기 가입된
                                            이용기관일 경우 아래 3번 일반 개발자
                                            가입 절차를 진행해야 합니다.
                                        </dd>
                                        <dd>&nbsp;</dd>
                                        <dt>
                                            개발자 포털 가입 - 이용기관 일반
                                            개발자 (Developer)
                                        </dt>
                                        <dd>
                                            이용기관 관리자가 사용자를 추가하여
                                            초대 메일 받아 가입을 진행합니다.
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">03</span>
                                    <span className="ico_process ico_num_05"></span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>
                                            개발자 포털 가입 - 미래에셋증권 내부
                                            API Owner
                                        </dt>
                                        <dd>
                                            미래에셋증권 오픈 API 개발자 포털의
                                            관리자가 사용자 생성후 초대 메일을
                                            받아 가입을 진행합니다.
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};
