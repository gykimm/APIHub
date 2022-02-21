import React from 'react';
import { Link } from 'react-admin';

export const GuideOAuth = () => {
    const styles1 = { borderSpacing: '0em', border: '0em' };
    const styles2 = { width: '50%' };

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

            <section id="main" className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="2u">
                            <section className="left_nav">
                                <ul className="alt">
                                    {/*<li><a href="./guideOpenAPI.html">오픈 API 플랫폼 가이드</a></li>*/}
                                    {/*<li><a href="./guideApiKey.html">API KEY 인증</a></li>*/}
                                    {/*<li>OAuth2.0 인증</li>*/}
                                    {/*<li><a href="./guideSignature.html">데이터 무결성(Signature)</a></li>*/}
                                    {/*<li><a href="./guideJWE.html">데이터 암복호화(JWE)</a></li>*/}
                                    <li>
                                        <Link to="guideOpenAPI">
                                            오픈 API 플랫폼 가이드
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="guideApiKey">
                                            API KEY 인증
                                        </Link>
                                    </li>
                                    <li>OAuth2.0 인증</li>
                                    <li>
                                        <Link to="guideSignature">
                                            데이터 무결성(Signature)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="guideJWE">
                                            데이터 암복호화(JWE)
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="8u skel-cell-important">
                            <section>
                                <h2>OAuth2.0 인증</h2>
                                <p>
                                    미래에셋증권 오픈 API 는 OAuth2.0 스펙을
                                    기반으로 구축되었으므로, API 클라이언트는
                                    이를 수용하여 개발되어야 합니다.
                                    <br />
                                    <br />
                                    OAuth2.0 표준스펙{' '}
                                    <a
                                        target="_blank"
                                        href="https://tools/ietf.org/html/rfc6749"
                                        rel="noopener noreferrer"
                                    >
                                        [RFC6749]
                                    </a>
                                </p>
                            </section>

                            <section>
                                <h2>OAuth2.0 Authorization Code Grant Type</h2>
                                <p>
                                    오픈 API 접근에 사용되는 Access Token 을
                                    발급받기 위해, 미래에셋증권의 사용자
                                    인증(로그인)을 수행하는 흐름입니다.
                                    <br />
                                    사용자는 미래에셋증권 고객으로서
                                    아이디/패스워드 방식 또는 모바일 인증
                                    방식등의 로그인 방식을 제공합니다.
                                    <br />
                                    사용자 인증관련 플로우를 제외한 모든 오픈
                                    API 는 이용기관 서버와 직접 연동됩니다.
                                    (서버 to 서버 통신 기반으로 IP 검증)
                                    <br />
                                </p>
                                <h4>전체 흐름</h4>
                                {/*<strong>전체 흐름</strong><br/>*/}
                                <span className="image">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/content_oauth_001.png'
                                        }
                                        alt=""
                                    />
                                </span>

                                <p>
                                    ※ Authorization Code 요청은 사용자
                                    브라우저를 통해서 실행되어야 합니다. <br />
                                    Code 를 받기 전에 사용자 로그인 화면과
                                    사용자 동의 화면으로 전환되고, 인증 실패로
                                    인한 에러 화면이 출력될 수 있습니다.
                                </p>
                                {/*<p>*/}
                                <h3>Authorization Code 요청</h3>
                                <div className="table_area ">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">Method</th>
                                                <th scope="col">URL</th>
                                                <th scope="col">
                                                    요청 Content-Type
                                                </th>
                                                <th scope="col">
                                                    응답 Content-Type
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>GET</td>
                                                <td>
                                                    /auth/oauth/v2/authorize
                                                </td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Paramters</h4>
                                <div className="table-table_area">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">필드명</th>
                                                <th scope="col">필수여부</th>
                                                <th scope="col">값</th>
                                                {/*<th scope="col" style="width:50%">설명</th>*/}
                                                <th scope="col" style={styles2}>
                                                    설명
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>response_type</td>
                                                <td>Y</td>
                                                <td>"code"</td>
                                                <td className="left">고정값</td>
                                            </tr>
                                            <tr>
                                                <td>client_id</td>
                                                <td>Y</td>
                                                <td>
                                                    발급받은 App의 Client ID
                                                </td>
                                                <td className="left">
                                                    (=API Key) 개발자 포털에서
                                                    앱 등록 시 생성된 key
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>redirect_uri</td>
                                                <td>Y</td>
                                                <td>이용기관의 Redirect URL</td>
                                                <td className="left">
                                                    이용기관 서버에 구현된 OAuth
                                                    callback 주소로써, 사용자
                                                    인증이 성공하면 code가
                                                    전달되는 주소
                                                    <br />
                                                    개발자 포털에서 App 등록 시
                                                    입력한 값과 일치해야함
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>scope</td>
                                                <td>Y</td>
                                                <td>
                                                    app user.read user.write
                                                </td>
                                                <td className="left">
                                                    API 접근 권한 범위로
                                                    구분자는 공백으로 다중 scope
                                                    <br />
                                                    APP 등록시 입력한 scope
                                                    중에서 필요한 scope 으로
                                                    요청
                                                    <br />- app (일반정보)
                                                    <br />- user.read (사용자
                                                    정보 조회)
                                                    <br />- user.write (사용자
                                                    정보 거래)
                                                    <br />
                                                    사용자 로그인 방법 및
                                                    권한처리와 밀접함
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>state</td>
                                                <td>N</td>
                                                <td>이용기관 지정값</td>
                                                <td className="left">
                                                    CSRF(cross-site request
                                                    forgery) 공격에 대응하기
                                                    위해 사용
                                                    <br />
                                                    authorization code 요청의
                                                    응답이 클라이언트 서버로
                                                    redirect 되었을때 어느
                                                    사용자의 authorization
                                                    code인지를 구분하기 위해
                                                    사용 (클라이언트 사용자
                                                    세션정보 등으로 설정)
                                                    <br />
                                                    요청에 전송했던 값이 그대로
                                                    응답에 반환됨
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>media_type</td>
                                                <td>N</td>
                                                <td>
                                                    mobile
                                                    <br />
                                                    pc
                                                </td>
                                                <td className="left">
                                                    PC 인증인지 모바일 인증인지
                                                    여부(default: mobile)
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Responses (status 200)</h4>
                                <div className="table-table_area">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">필드명</th>
                                                <th scope="col">위치</th>
                                                <th scope="col">값</th>
                                                {/*<th scope="col" style="width:50%">설명</th>*/}
                                                <th scope="col" style={styles2}>
                                                    설명
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>code</td>
                                                <td>
                                                    Redirect URL Path 파라미터
                                                </td>
                                                <td>authorization code</td>
                                                <td className="left">
                                                    access_token을 발급받기 위한
                                                    authorization code
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>state</td>
                                                <td>
                                                    Redirect URL Path 파라미터
                                                </td>
                                                <td>
                                                    authorize 요청 파라미터
                                                    state
                                                </td>
                                                <td className="left">
                                                    클라이언트가
                                                    /auth/oauth/v2/authorize
                                                    요청시 전달한 state 값
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*</p>*/}

                                <p>&nbsp;</p>
                                {/*<p>*/}
                                <h3>Access Token 요청</h3>
                                <div className="table_area ">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">Method</th>
                                                <th scope="col">URL</th>
                                                <th scope="col">
                                                    요청 Content-Type
                                                </th>
                                                <th scope="col">
                                                    응답 Content-Type
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>POST</td>
                                                <td>/auth/oauth/v2/token</td>
                                                <td>
                                                    application/x-www-form-urlencoded
                                                </td>
                                                <td>
                                                    application/json;
                                                    charset=utf-8
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Paramters</h4>
                                <div className="table-table_area">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">필드명</th>
                                                <th scope="col">필수여부</th>
                                                <th scope="col">값</th>
                                                {/*<th scope="col" style="width:50%">설명</th>*/}
                                                <th scope="col" style={styles2}>
                                                    설명
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>grant_type</td>
                                                <td>Y</td>
                                                <td>
                                                    "authorization_code_ext"
                                                </td>
                                                <td className="left">
                                                    고정값 (미래에셋증권 Custom
                                                    Grant Type)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>code</td>
                                                <td>Y</td>
                                                <td>
                                                    발급받은 authorization code
                                                </td>
                                                <td className="left">
                                                    redirect_uri 를 통해
                                                    전달받은 인가 key
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>client_id</td>
                                                <td>Y</td>
                                                <td>
                                                    발급받은 App의 Client ID
                                                </td>
                                                <td className="left">
                                                    (=API Key) 개발자 포털에서
                                                    앱 등록 시 생성된 key
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>client_secret</td>
                                                <td>Y</td>
                                                <td>
                                                    발급받은 App의 Shared Secret
                                                </td>
                                                <td className="left">
                                                    개발자 포털에서 앱 등록 시
                                                    생성된 시크릿
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>redirect_uri</td>
                                                <td>Y</td>
                                                <td>이용기관의 Redirect URL</td>
                                                <td className="left">
                                                    이용기관 서버에 구현된 OAuth
                                                    callback 주소로써, 사용자
                                                    인증이 성공하면 code가
                                                    전달되는 주소
                                                    <br />
                                                    개발자 포털에서 App 등록 시
                                                    입력한 값과 일치해야함
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Responses (status 200)</h4>
                                <div className="table-table_area">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">필드명</th>
                                                <th scope="col">위치</th>
                                                <th scope="col">값</th>
                                                {/*<th scope="col" style="width:50%">설명</th>*/}
                                                <th scope="col" style={styles2}>
                                                    설명
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>access_token</td>
                                                <td>Body</td>
                                                <td>access token</td>
                                                <td className="left">
                                                    오픈 API 호출시 사용할 토큰
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>token_type</td>
                                                <td>Body</td>
                                                <td>"Bearer"</td>
                                                <td className="left">
                                                    고정 응답
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>expires_in</td>
                                                <td>Body</td>
                                                <td>토큰 유효시간</td>
                                                <td className="left">
                                                    access token의 token
                                                    lifetime in seconds
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>refresh_token</td>
                                                <td>Body</td>
                                                <td>refresh token</td>
                                                <td className="left">
                                                    access token 을 재발급 받기
                                                    위한 refresh token
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>scope</td>
                                                <td>Body</td>
                                                <td>granted scope</td>
                                                <td className="left">
                                                    승인된 scope
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>userinfo</td>
                                                <td>Body</td>
                                                <td>JWE 사용자 정보</td>
                                                <td className="left">
                                                    JSON 사용자 정보 (App의
                                                    shared secret 으로 암호화)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>mandatory</td>
                                                <td>Body</td>
                                                <td>JWE 계좌 필수 정보</td>
                                                <td className="left">
                                                    Client 에서 오픈 API 호출시
                                                    받은 값 그대로 Header 로
                                                    전달
                                                    <br />
                                                    Gateway 내부 암호화키로
                                                    암호화되어 있음
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Responses (status 3xx 4xx)</h4>
                                <div className="table-table_area">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">필드명</th>
                                                <th scope="col">위치</th>
                                                <th scope="col">값</th>
                                                <th scope="col">설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>error</td>
                                                <td>Body</td>
                                                <td>에러코드</td>
                                                <td className="left">
                                                    OAuth2.0 스펙 정의에 따른
                                                    에러코드
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>error_description</td>
                                                <td>Body</td>
                                                <td>에러메시지</td>
                                                <td className="left">
                                                    OAuth2.0 스펙 정의에 따른
                                                    에러 메시지
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*</p>*/}
                            </section>
                            <br />
                            <section>
                                <h2>OAuth2.0 Client Credentials Grant Type</h2>
                                <p>
                                    오픈 API 접근에 사용되는 Access Token 을
                                    발급받기 위한 흐름입니다.
                                    <br />
                                    사용자에 대한 인증 없이 Client ID (API Key)
                                    와 Shared Secret 으로 Access Token을 발급
                                    받습니다.
                                    <br />
                                    모든 오픈 API 는 이용기관 서버와 직접
                                    연동됩니다. (서버 to 서버 통신 기반으로 IP
                                    검증)
                                    <br />
                                </p>
                                <h4>전체 흐름</h4>
                                {/*<span>전체 흐름</span>*/}
                                <span className="image">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/content_oauth_003.png'
                                        }
                                        alt=""
                                    />
                                </span>
                                {/*</p>*/}
                                <p>
                                    ※ 이용기관(3rd Party) 서버와 개발된 앱이
                                    완전히 신뢰할 수 있을 경우에 사용합니다.
                                    노출될 수 있는 Client ID 와 Secret 에 대한
                                    관리책임은 이용기관에 있습니다.
                                </p>
                                {/*<p>*/}
                                <h3>Access Token 요청</h3>
                                <div className="table_area ">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">Method</th>
                                                <th scope="col">URL</th>
                                                <th scope="col">
                                                    요청 Content-Type
                                                </th>
                                                <th scope="col">
                                                    응답 Content-Type
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>POST</td>
                                                <td>/auth/oauth/v2/token</td>
                                                <td>
                                                    application/x-www-form-urlencoded
                                                </td>
                                                <td>
                                                    application/json;
                                                    charset=utf-8
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Paramters</h4>
                                <div className="table-table_area">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">필드명</th>
                                                <th scope="col">필수여부</th>
                                                <th scope="col">값</th>
                                                {/*<th scope="col" style="width:50%">설명</th>*/}
                                                <th scope="col" style={styles2}>
                                                    설명
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>grant_type</td>
                                                <td>Y</td>
                                                <td>"client_credentials"</td>
                                                <td className="left">
                                                    고정값 (미래에셋증권 Custom
                                                    Grant Type)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>client_id</td>
                                                <td>Y</td>
                                                <td>
                                                    발급받은 App의 Client ID
                                                </td>
                                                <td className="left">
                                                    (=API Key) 개발자 포털에서
                                                    앱 등록 시 생성된 key
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>client_secret</td>
                                                <td>Y</td>
                                                <td>
                                                    발급받은 App의 Shared Secret
                                                </td>
                                                <td className="left">
                                                    개발자 포털에서 앱 등록 시
                                                    생성된 시크릿
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>scope</td>
                                                <td>N</td>
                                                <td>포탈등록 scope</td>
                                                <td className="left">
                                                    개발자 포털에서 앱 등록 시
                                                    입력한 “SCOPE” 중 하나와
                                                    일치해야함 parameter key 가
                                                    없을 경우 gateway 는 default
                                                    scope (=oob) 을 적용함
                                                    parameter key 만 있고 value
                                                    가 없을 경우 scope data로
                                                    “”(empty string) 을
                                                    취급하며, 일반적으로
                                                    일치하는 scope 이 없다고
                                                    에러를 응답
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Responses (status 200)</h4>
                                <div className="table-table_area">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">필드명</th>
                                                <th scope="col">위치</th>
                                                <th scope="col">값</th>
                                                {/*<th scope="col" style="width:50%">설명</th>*/}
                                                <th scope="col" style={styles2}>
                                                    설명
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>access_token</td>
                                                <td>Body</td>
                                                <td>access token</td>
                                                <td className="left">
                                                    오픈 API 호출시 사용할 토큰
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>token_type</td>
                                                <td>Body</td>
                                                <td>"Bearer"</td>
                                                <td className="left">
                                                    고정 응답
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>expires_in</td>
                                                <td>Body</td>
                                                <td>토큰 유효시간</td>
                                                <td className="left">
                                                    access token의 token
                                                    lifetime in seconds
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>scope</td>
                                                <td>Body</td>
                                                <td>granted scope</td>
                                                <td className="left">
                                                    승인된 scope
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Responses (status 3xx 4xx)</h4>
                                <div className="table-table_area">
                                    {/*<table border="0" cellSpacing="0" cellPadding="0">*/}
                                    <table>
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">필드명</th>
                                                <th scope="col">위치</th>
                                                <th scope="col">값</th>
                                                <th scope="col">설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>error</td>
                                                <td>Body</td>
                                                <td>에러코드</td>
                                                <td className="left">
                                                    OAuth2.0 스펙 정의에 따른
                                                    에러코드
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>error_description</td>
                                                <td>Body</td>
                                                <td>에러메시지</td>
                                                <td className="left">
                                                    OAuth2.0 스펙 정의에 따른
                                                    에러 메시지
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*</p>*/}
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
