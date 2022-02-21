import React from 'react';
import { Link } from 'react-admin';

export const GuideOpenAPI = () => {
    const styles = { color: 'coral' };
    const styles1 = { verticalAlign: 'middle' };

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
                                    <li>오픈 API 플랫폼 가이드</li>
                                    {/*<li><a href="./guideApiKey.html">API KEY 인증</a></li>*/}
                                    {/*<li><a href="./guideOAuth.html">OAuth2.0 인증</a></li>*/}
                                    {/*<li><a href="./guideSignature.html">데이터 무결성(Signature)</a></li>*/}
                                    {/*<li><a href="./guideJWE.html">데이터 암복호화(JWE)</a></li>*/}
                                    <li>
                                        <Link to="guideApiKey">
                                            API KEY 인증
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="guideOAuth">
                                            OAuth2.0 인증
                                        </Link>
                                    </li>
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
                                <h2>오픈 API 플랫폼 가이드</h2>
                                <p>
                                    미래에셋증권 오픈 API 플랫폼은 개발자 포털을
                                    통해 오픈 API 정보와 전문 명세 (Swagger) 를
                                    제공하고, 테스트를 할수 있는 App 정보, 오픈
                                    API Gateway 서버로 구성됩니다.
                                    <br />
                                    운영환경의 개발자 포털은 외부기관에 오픈되지
                                    않으므로, OAuth2.0 을 위한 API Key / Secret
                                    정보는 오픈 API 담당자에게 발급 요청을 해야
                                    합니다.
                                </p>
                                <h3>오픈 API 호출 서버 정보</h3>
                                {/*<p>*/}
                                <ol>
                                    <li>테스트 환경</li>
                                    <ul>
                                        <li>
                                            API 서비스 :
                                            https://dev-openapi.securities.miraeasset.com:8443
                                        </li>
                                        <li>
                                            OAuth2.0 Authorization :
                                            https://dev-openapi.securities.miraeasset.com:7443/auth/oauth/v2/authorize
                                        </li>
                                        <li>
                                            OAuth2.0 Token :
                                            https://dev-openapi.securities.miraeasset.com:8443/auth/oauth/v2/token
                                        </li>
                                    </ul>
                                    <li>운영 환경</li>
                                    <ul>
                                        <li>
                                            API 서비스 :
                                            https://openapi.securities.miraeasset.com:8443
                                        </li>
                                        <li>
                                            OAuth2.0 Authorization :
                                            https://openapi.securities.miraeasset.com:7443/auth/oauth/v2/authorize
                                        </li>
                                        <li>
                                            OAuth2.0 Token :
                                            https://openapi.securities.miraeasset.com:8443/auth/oauth/v2/token
                                        </li>
                                    </ul>
                                </ol>
                                {/*</p>*/}
                                <p>
                                    <span style={styles}>※ 주의사항</span>{' '}
                                    OAuth2.0 Authorization 는 사용자 인증을 위해
                                    모바일 접근이 가능한 <code>7443</code>{' '}
                                    포트로 제공됩니다.
                                </p>
                            </section>

                            <section>
                                <h3>오픈 API 공통 HTTP Header</h3>
                                <p>
                                    오픈 API 호출시 추가적으로 보내야 할 HTTP
                                    Header 들이 있습니다.
                                    <br />
                                    오픈 API 종류에 따라 다를 수 있으므로 각 API
                                    별 명세를 확인하시기 바랍니다.
                                </p>
                                {/*<p>*/}
                                <h4>Request HTTP Header</h4>
                                <div className="table_area">
                                    <table
                                        border="0"
                                        cellSpacing="0"
                                        cellPadding="0"
                                    >
                                        <thead>
                                            <tr className="head">
                                                <th scope="col" width="20%">
                                                    Header Key
                                                </th>
                                                <th scope="col" width="30%">
                                                    value
                                                </th>
                                                <th scope="col">설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">
                                                    Authorization
                                                </td>
                                                <td scope="row">
                                                    Bearer{' '}
                                                    <code>Access Token</code>
                                                </td>
                                                <td className="align-left">
                                                    OAuth 2.0 인증으로 발급된
                                                    Access Token
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    scope="row"
                                                    rowSpan="2"
                                                    style={styles1}
                                                >
                                                    Content-Type
                                                </td>
                                                <td scope="row">text/plain</td>
                                                <td className="align-left">
                                                    Body JWT 적용
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    application/json;
                                                    charset=utf-8
                                                </td>
                                                <td className="align-left">
                                                    Body JWT 미적용
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    x-md-signature
                                                </td>
                                                <td scope="row">
                                                    Signature hash 값
                                                </td>
                                                <td className="align-left">
                                                    HMAC-SHA256 algorithm 기반
                                                    위변조 방지를 위한 Signature
                                                    hash
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">x-md-ctype</td>
                                                <td scope="row">
                                                    <code>json</code>
                                                    <br /> <code>xml</code>
                                                </td>
                                                <td className="align-left">
                                                    Body JWT 적용 API 인 경우,
                                                    요청/응답의 원본 데이터 포맷
                                                    <br />
                                                    Body JWT 미적용 API 인 경우,
                                                    응답 데이터 포맷
                                                    <br />
                                                    default : <code>json</code>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">x-md-txid</td>
                                                <td scope="row">
                                                    Transaction ID
                                                </td>
                                                <td className="align-left">
                                                    Client 에서 API 호출시
                                                    유일값(자체 Unique값, UUID
                                                    등) 생성 (max 36 bytes){' '}
                                                    <br />
                                                    하나의 요청에 대한
                                                    end-to-end 추적을 위해 사용
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">x-md-date</td>
                                                <td scope="row">
                                                    yyyyMMddHHmmss
                                                    <br />
                                                    (KST 기준)
                                                </td>
                                                <td className="align-left">
                                                    위변조방지 대상 API 인 경우,
                                                    서버 요청시간과 다를 경우
                                                    에러 처리 (clock skew : 60
                                                    secs)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    x-md-mandatory
                                                </td>
                                                <td scope="row">
                                                    필수계좌정보(JWT)
                                                </td>
                                                <td className="align-left">
                                                    사용자 인증이 수반된 Access
                                                    Token 발급시 전달된
                                                    mandatory 필드 값(JWT)
                                                    <br />- 사용자정보조회 API{' '}
                                                    <small>
                                                        (/apis/auth/v1/public/user/accounts)
                                                    </small>{' '}
                                                    호출 시 응답 헤더중
                                                    x-md-mandatory 로 획득 가능
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*</p>*/}
                                {/*<p>*/}
                                <h4>Response HTTP Header</h4>
                                <div className="table_area ">
                                    <table
                                        border="0"
                                        cellSpacing="0"
                                        cellPadding="0"
                                    >
                                        <thead>
                                            <tr className="head">
                                                <th scope="col" width="20%">
                                                    Header Key
                                                </th>
                                                <th scope="col" width="30%">
                                                    value
                                                </th>
                                                <th scope="col">설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">
                                                    x-md-requestid
                                                </td>
                                                <td scope="row">Request ID</td>
                                                <td className="align-left">
                                                    오픈 API Gateway 에서
                                                    자동생성된 unique id
                                                    (requestId) 값<br />
                                                    미래에셋증권 서버 기준으로
                                                    Unique 정보이며, 하나의
                                                    요청에 대한 end-to-end
                                                    추적을 위해 사용
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">x-ca-err</td>
                                                <td scope="row">
                                                    OAuth2.0 OTK 에러응답
                                                </td>
                                                <td className="align-left">
                                                    API Gateway 솔루션의
                                                    OAuth2.0 인가 프로세스
                                                    상에서 에러 발생시 솔루션
                                                    자체가 응답헤더로 전달
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*</p>*/}
                            </section>
                            <section>
                                <h2>오픈 API 표준 에러 메시지</h2>
                                <p>
                                    OAuth2.0 과 오픈 API Gateway 서버 내부오류
                                    처리시 다음과 같은 에러 응답 메시지를
                                    전달합니다.
                                    <br />
                                    <span style={styles}>※ 주의사항</span>{' '}
                                    클라이언트 프로그램에서는 HTTP Status Code
                                    를 반드시 확인해야 합니다. API 에 따라
                                    에러응답 또는 메시지 구조가 상이할 수
                                    있습니다.
                                </p>
                                <h3>OAuth2.0 과 API Gateway 에러 메시지</h3>
                                {/*<p>*/}
                                HTTP Status 200 이 아닌 에러 코드는 JSON 구조의
                                에러메지가 응답됩니다.
                                <div className="table_area ">
                                    <table
                                        border="0"
                                        cellSpacing="0"
                                        cellPadding="0"
                                    >
                                        <thead>
                                            <tr className="head">
                                                <th scope="col" width="20%">
                                                    Key
                                                </th>
                                                <th scope="col" width="30%">
                                                    value
                                                </th>
                                                <th scope="col">설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">error</td>
                                                <td scope="row">에러코드</td>
                                                <td className="align-left">
                                                    알파벳 소문자 및 under line
                                                    으로만 구성된 직관적 코드
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    error_descrption
                                                </td>
                                                <td scope="row">에러 메시지</td>
                                                <td className="align-left">
                                                    영문 에러메시지
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*</p>*/}
                                <h4>[예시]</h4>
                                <pre>
                                    <code>
                                        &#123; "error" : "invalid_request",
                                        "error_description" : "Validation error"
                                        &#125;
                                    </code>
                                </pre>
                                {/*<p>*/}
                                대표적인 HTTP Status Code 는 아래와 같습니다.
                                <div className="table_area ">
                                    <table
                                        border="0"
                                        cellSpacing="0"
                                        cellPadding="0"
                                    >
                                        <thead>
                                            <tr className="head">
                                                <th scope="col" width="10%">
                                                    HTTP Status
                                                </th>
                                                <th scope="col" width="20%">
                                                    상태
                                                </th>
                                                <th scope="col">설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">200</td>
                                                <td scope="row">Success</td>
                                                <td className="align-left">
                                                    성공 응답. 업무적인 에러
                                                    응답포함
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">400</td>
                                                <td scope="row">Bad Request</td>
                                                <td className="align-left">
                                                    요청 정보가 잘못되었거나
                                                    필수 헤더 누락 등의
                                                    클라이언트 요청 에러
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">401</td>
                                                <td scope="row">
                                                    Unauthorized
                                                </td>
                                                <td className="align-left">
                                                    잘못된 access token 또는
                                                    client credentials
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">403</td>
                                                <td scope="row">Forbidden</td>
                                                <td className="align-left">
                                                    클라이언트의 IP 가 허용되지
                                                    않았거나, 요청 정보의
                                                    Signature 검증 또는 JWT 검증
                                                    오류
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">404</td>
                                                <td scope="row">Not Found</td>
                                                <td className="align-left">
                                                    요청 URL 에 맞는 API
                                                    서비스가 없음
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">405</td>
                                                <td scope="row">
                                                    Method Not Allowed
                                                </td>
                                                <td className="align-left">
                                                    해당 API 가 허용하지 않는
                                                    HTTP Method임
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">429</td>
                                                <td scope="row">
                                                    Too Many Requests
                                                </td>
                                                <td className="align-left">
                                                    기관별 또는 API별로 할당된
                                                    Quota 또는 Rate Limit 초과
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">500</td>
                                                <td scope="row">
                                                    Internal Server Error
                                                </td>
                                                <td className="align-left">
                                                    내부 서버 오류, 연동 오류,
                                                    API 서버 오류 응답
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
