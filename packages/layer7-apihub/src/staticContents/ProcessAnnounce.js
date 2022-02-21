import React from 'react';
import { Link } from 'react-admin';

export const ProcessAnnounce = () => {
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
                        <h2>플랫폼 이용 절차</h2>
                        <p>
                            오픈 API는 미래에셋증권와의 협약에 의해 사용가능
                            합니다.
                        </p>
                    </header>
                </div>

                <div className="container">
                    <div className="tab_area">
                        <ul className="col03">
                            <li>
                                {/*<a href="./memberAnnounce.html">회원 가입 안내</a>*/}
                                <Link to="/memberAnnounce">회원 가입 안내</Link>
                            </li>
                            <li className="on">
                                <a title="선택됨">플랫폼 이용 절차</a>
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
                                            이용기관에서 구축하고자 하는
                                            서비스에 대한 적합성이 검증 되어야
                                            합니다.
                                        </dd>
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
                                            개발자 포털 가입 -
                                            이용기관(Organization)/사용자 등록
                                        </dt>
                                        {/*<dd><a href="./memberAnnounce.html">회원 가입 안내</a></dd>*/}
                                        <dd>
                                            <Link to="/memberAnnounce">
                                                회원 가입 안내
                                            </Link>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">03</span>
                                    <span className="ico_process ico_num_04"></span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>
                                            [테스트환경] 개발자 포털 - APP 등록
                                        </dt>
                                        <dd>
                                            이용기관 관리자 (Org Admin) 또는
                                            개발자 포털 관리자가 App 을
                                            등록하고, 사용할 오픈 API 를
                                            선택합니다.
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">04</span>
                                    <span className="ico_process ico_num_07"></span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>[테스트환경] API 테스트</dt>
                                        <dd>
                                            이용기관 개발자가 개발자 포털에서
                                            사용하고자 하는 API 명세를 확인하고
                                            필요시 Swagger 파일을 다운받습니다.
                                        </dd>
                                        <dd>
                                            개발자 포털 또는 Postman, SoapUI
                                            등의 API 테스팅 툴을 통해 API
                                            테스트를 수행합니다. (JWE, Signature
                                            등의 보안기능이 적용되지 않은
                                            API경우)
                                        </dd>
                                        <dd>
                                            오픈 API 개발 가이드에 따라
                                            클라이언트 프로그램을 작성후
                                            테스트를 수행합니다.
                                        </dd>
                                        <dd>
                                            미래에셋증권 오픈API 플랫폼 담당자와
                                            함께 정상 테스트 수행 여부를 반드시
                                            확인합니다.
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">05</span>
                                    <span className="ico_process ico_num_06"></span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>서비스 적정성 및 보안성 검증</dt>
                                        <dd>
                                            테스트 환경을 통해 서비스의 적정성
                                            및 보안성 검증 결과를 확인합니다.
                                        </dd>
                                        <dd></dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">06</span>
                                    <span className="ico_process ico_num_04"></span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>
                                            [운영환경] 조직 및 App 생성 (by
                                            오픈API 플랫폼 관리자)
                                        </dt>
                                        <dd>
                                            현재 운영환경 개발자 포털은 외부
                                            오픈이 되어 있지 않아 플랫폼
                                            관리자가 수행합니다.
                                        </dd>
                                        <dd>
                                            개발환경에서 테스트가 정상적으로
                                            이루어졌을 경우, 플랫폼 관리자에게
                                            API Key 및 secret 정보를 발급
                                            받습니다.
                                        </dd>
                                        <dd></dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">07</span>
                                    <span className="ico_process ico_num_07"></span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>[운영환경] API 테스트</dt>
                                        <dd>
                                            이용기관의 클라이언트 프로그램 또는
                                            서버와 미래에셋증권 오픈 API Gateway
                                            간의 연동 테스트를 진행합니다.
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
