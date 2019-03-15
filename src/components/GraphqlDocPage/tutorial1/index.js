import React from 'react';

import Wrapper from './Wrapper';

const tutorial1 = () => (
    <Wrapper>
        <div className='head'>
            GraphQL + Node.js 튜토리얼 1
            <br />
            <hr />
            들어가기에 앞서...
            <br /> GraphQL은 백엔드 기술 중 하나로 급격히 떠오르고있는 기술 중
            하나입니다! 기존의 REST 방식의 API 디자인 패러다임을 대체하고 서버의
            기능과 데이터 노출에 새로운 표준이 되어가고있습니다.
            <br />
            독자분들은 어떻게 자신만의 독특한 GraphQL 서버를 구축할 수 있는지에
            대해 기초부터 배워나가게되며 아래의 기술들을 사용하게됩니다.
            <br />
            ⬇︎⬇︎⬇︎
            <hr />
            <ul>
                <li>
                    <p>
                        <b>graphql-yoga</b>: Express.js와 apollo-server,
                        graphql-js etc...를 기반으로 만들어진 쉬운 구축과 성능 &
                        개발자의 경험에 포커스를 맞춘 Fully-Featured GraphQL서버
                        라이브러리입니다.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Prisma</b>: 전통적인 ORM(Object-Relational Mapping)을
                        대체한 Prisma 라이브러리입니다.
                        <br /> GraphQL Resolver와 DB 접근을 간단히하기위해
                        Prisma 클라이언트를 사용하여 구축합니다.
                    </p>
                </li>
                <li>
                    <p>
                        <b>GraphQL Playground</b>: Mutation과 Query를 보냄으로
                        GraphQL API의 기능 상호적이게 탐험할 수 있게 도와주는
                        GraphQL IDE 입니다. 물론 어떻게보면 우리가 익히 알고있는
                        Rest API 테스트를 위해 많이 사용하는 PostMan과
                        유사합니다만,
                    </p>
                    <div className='option1'>
                        <ul>
                            <ol>
                                <p>
                                    -사용가능한 API 작동에 대한 포괄적인 문서를
                                    자동 생성해줍니다.
                                </p>
                            </ol>
                            <ol>
                                <p>
                                    -Query, Mutation, Subscription을 작성할 수
                                    있는 에디터를 <b>자동 완성</b> 기능과
                                    <b>문법 하이라이트</b> 기능을 제공합니다!!
                                </p>
                            </ol>
                            <ol>
                                <p>-API 작동을 쉽게 공유할 수 있게 해줍니다!</p>
                            </ol>
                        </ul>
                    </div>
                </li>
            </ul>
            <hr />
            <div>
                <h4> What to expect</h4>
                <p>
                    자, 우리는 간단한 뉴스 앱을 만들어보려고합니다.
                    <br />
                    일단, GraphQL Server가 어떻게 작동하는지 간단히 서버를 위한
                    GraphQL Schema를 정의해보고 부합하는 Resolver 기능을
                    작성해보자합니다.
                    <br />
                    초기에는 In-Memory에 저장된 데이터로만 Resolver를 구현해보고
                    추후에 DB Layer를 추가할 예정입니다.
                    <br />
                    <b>DB Layer</b>
                    는 Prisma에서 제공하며 GraphQL 서버와 Prisma 클라이언트를
                    통해 연결됩니다.
                    <br />
                    DB에 연결한 후 부터는 고급 API 특징을 더해보고자합니다.
                    <br />
                    사용자가 API를 통해 인증할 수 있는 로그인 , 가입 기능을
                    구현해볼 예정입니다. <br />더 나아가, 특정 API 동작에 대해
                    사용자에 대한 권한 검사도 구현하고자합니다.
                </p>
            </div>
        </div>
    </Wrapper>
);

export default tutorial1;
