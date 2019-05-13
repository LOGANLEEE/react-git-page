import React from 'react';
import Highlight from 'react-highlight';

import s1 from './images/1.png';
import s2 from './images/2.png';
import Wrapper from './Wrapper';

const template = () => (
    <Wrapper>
        <div>
            <h3>실습1</h3>
            <div className='para'>
                자, 그럼 이제 백문이불여일견이라고! <br />
                이론보다는 키보드에 손가락을 한번 올려봅시다. <br />
                바닥부터 시작해봅시다. :D
            </div>

            <Highlight className='js'>
                {`
                    mkdir nodeQL
                    cd nodeQL
                    //1
                    yarn init -y

                    $ nodeQL/package.json
                    // 2
                    "main": "src/index.js",
                    // 3
                    "scripts": {
                        "start": "nodemon"
                        }
                `}
            </Highlight>
            <div>
                <div className='para'>
                    필자는 패키지 관리자로써는 'npm' 보다는 'yarn'을 더 선호하는
                    편이므로 yarn을 사용합니다.
                    <br />
                    하지만 독자의 취향대로 npm을 사용하셔도 무방합니다.
                    <br />
                    <br />
                    1. 우리는 방금 <b>nodeQL</b>이라는 폴더를 만들었고, yarn으로
                    프로젝트를 초기화했습니다.
                    <br />이 nodeQL이란 이름은 사용자가 정하기 나름이니,
                    부담갖지마시고 편하신대로 작성해주세요.
                    <br />
                    마지막으로 생성된 package.json을 수정해주세요!
                    <br />
                    <br />
                    2. src/index.js를 메인(엔트리 포인트)으로 설정하겠다는
                    의미입니다. <br />
                    자바의 main메소드와 유사하게 엔트리 포인트라고 생각해주세요.
                    <br />
                    <br />
                    3. node말고 nodemon을 이용합니다. SpringBoot에서
                    Devtools같이 라이브러리입니다.
                    <br />
                    소스가 변경되면 자동으로 감지해 서버를 재시작해줍니다.
                </div>
            </div>
            <hr />
            <div>
                <h3>쌩(?) GraphQL Server만들어보기.</h3>
                <Highlight className='js'>
                    {`
                        $ ../nodeQL
                        
                            yarn add graphql-yoga
                            mkdir src 
                            touch src/index.js

                        `}
                </Highlight>
                <div className='para'>
                    <b>
                        <a href='https://github.com/prisma/graphql-yoga'>
                            graphql-yoga
                        </a>
                    </b>
                    를 라이브러리를 다운받아줍시다.
                    <br />이 라이브러리에 대해 설명드리자면, GraphQL 서버의
                    기능을 모두 갖춘 고마운 녀석입니다.
                    <br /> Express.js를 포함한 다른 라이브러리를 기반으로
                    만들어졌으며 아래와 같은 특징을 가지고 있습니다.
                    <ul>
                        <li>GraphQL 구격을 준수합니다.</li>
                        <li>파일 업로드 지원</li>
                        <li>GraphQL Subscription으로 실시간 작동 지원</li>
                        <li>타입스크립트 타이핑 지원</li>
                        <li>
                            내장 GraphQL Playground 지원 (별다른 설치과정 X)
                        </li>
                        <li>Express.js를 통해 확장가능</li>
                        <li>
                            사용자의 GraphQL schema에 사용자 지정 지시문
                            해석가능
                        </li>
                        <li>Query 실행 추적가능</li>
                        <li>application/json과 application/graphql 지원</li>
                        <li>
                            now,up,AWS Lambda, Heroku 등등에 별다른 제약없이
                            작동가능.
                        </li>
                    </ul>
                    간략하게만 알아보았습니다만, 뭔가 천군만마를 얻은듯 이
                    라이브러리 하나면 "graphQL은 다 끝났구나" 하는 느낌을 준다고
                    생각합니다
                    <br />
                    자, 그럼 각설하고 이제 본격적으로 코딩을 해봅시다!
                    <Highlight className='js'>
                        {`
    $ src/index.js

    const { GraphQLServer } = require('graphql-yoga');

    // 1
    const typeDefs = \`
    type Query {
    info: String!
    }
    \`;

    // 2
    const resolvers = {
    Query: {
    info: () => \`this is your first call!\`,
    },
    };

    // 3
    const server = new GraphQLServer({
    typeDefs,
    resolvers,
    });

    //4
    const option = {
    port: 4040,
    };
    server.start(option, () =>
    console.log(\`Server is running on http://localhost:\${option.port}\`),
    );

                        `}
                    </Highlight>
                    처음보는 구조에 당황하실수도있습니다만, 걱정마시고 찬찬히
                    하나씩 뜯어봅시다.
                    <br />
                    <hr />
                    1. typeDefs는 변수의 이름 그대로 GraphQL Schema에 대한
                    타입을 정의합니다.
                    <br />
                    그렇다면 위 코드의 의미는 "Query라는 타입을 정의했고,
                    info라는 field를 가지고있다!" 라고 할 수 있습니다.
                    <br />
                    그리고 타입뒤에 !는 null이 될 수 없음을 의미합니다!
                    <br />
                    <br />
                    2. resolovers 객체는 GraphQL Schema의 실제 구현체입니다.
                    <br />
                    구조는 typeDefs와 동일하고 동일해야합니다.
                    <br />
                    <br />
                    3.Schema와 Resolver를 GraphQLServer에 전달해줍니다.
                    <br />
                    <br />
                    4. option을 넘겨줄 수 있습니다만, 지금은 port만
                    설정해줍니다.
                    <br />
                    해당 소스는 서버에 무슨 API Operation을 받아들어야하며,
                    어떻게 풀어야(resolve)하는지에 대해 알려줍니다.
                    <br />
                    <br />
                    <hr />
                    실행시켜봅시다!
                    <Highlight className='js'>
                        {`
                                $ ../nodeQL/
                                yarn start
                            `}
                    </Highlight>
                    localhost:4000으로 접속해보신다면 아래와 같은 화면을 보실 수
                    있습니다. <br />
                    앞서 설명했던 GraphQL Playground(GraphQL IDE)입니다.
                    <img src={s1} alt='your first query' />
                    축하합니다! 처음으로 GraphQL 서버도 띄워보고 쿼리까지
                    날려보았습니다. 아까 타입 뒤에 !가 붙으면 null이 될 수
                    없다고했었죠? 한번 테스트해봅시다!
                    <Highlight className='js'>
                        {`
// 2
const resolvers = {
    Query: {
        // info: () => \`this is your first call!\`,
        info: () => null,
    },
};
`}
                    </Highlight>
                    기존의 Stirng에서 null로 리턴값을 변경했습니다.
                    <img src={s2} alt='your first query' />
                    에러 메세지까지 친절하게 노출해줍니다.! <br />
                    거의 뭐.."개발자님 로직만 짜십쇼, 검수는 저한테
                    맡기시지요!"" 하는 기분이지만 이렇기 때문에 graphQL-js의
                    참조함으로써 graphQL schema는 API Operation과 데이터
                    설계쪽에서는 항상 100% 신뢰가 보장된다고 할 수 있는
                    부분입니다.
                </div>
                <hr />
                <hr />
                <div>
                    <h3>A word on the GraphQL Schema</h3>
                    모든 핵심 GraphQL API Operation에는 graphQL Schema가
                    있습니다.
                    <br />
                    그래프큐엘 스키마는 그래프큐엘 에스디엘로 작성되어있습니다.
                    <br />
                    "Java, TypeScript,Swift, GO" 처럼 강력히 타입을 지헝해
                    데이터 구조를 정의할 수 있는 타입 시스템을 말합니다.
                    <br />
                    하지만 그래프큐엘 서버를 위한 API 정의에는 무슨 도움이
                    될까요?
                    <br />
                    모든 GraphQL Schema는 <b>Query</b>, <b>Mutation</b>,
                    <b>Subscription</b>
                    으로 3가지 특별한 Root 타입을 가지고 있습니다.
                    <br />
                    위의 3가지 타입은 GraphQL에서 제공하는 <b>Query</b>,
                    <b>Mutation</b>,<b>Subscription</b>3가지 Operation 타입에
                    부합합니다.
                    <br />
                    3가지 root 타입들은 root 필드라 불리며 사용가능한 API
                    Operation을 정의합니다.
                    <br />
                    <Highlight className='js'>
                        {`
    type Query{
        info: String!
    }
    `}
                    </Highlight>
                    위 Schem는 info라고 불리는 단일 root 필드만을
                    가지고있습니다.
                    <br />
                    GraphQL API로
                    <b>Queries,</b>,<b>Mutations</b>,<b>Subscription</b>
                    를 보낼 때, 항상 root field로 시작해야합니다. <br />
                    이런 경우에, 단일 root 필드 밖에 가지고있지않기 때문에
                    GraphQL API는 딱 하나의 쿼리만을 받아들입니다.
                    <br />
                    <br />
                    자 그럼 이제 조금 더 복잡한 예제를 살펴봅시다.
                    <Highlight className='js'>
                        {`
    type Query {
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation {
        createUser(name: String!): User!
    }

    type User {
        id: ID!
        name: String!
    }     
                        `}
                    </Highlight>
                    이 경우에 우리는
                </div>
            </div>
        </div>
    </Wrapper>
);

export default template;
