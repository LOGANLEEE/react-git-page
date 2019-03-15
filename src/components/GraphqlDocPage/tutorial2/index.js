import React from 'react';

import Wrapper from './Wrapper';

const template = () => (
    <Wrapper>
        <div>
            <h3>실습</h3>
            <p>
                자, 이제 이론보다는 키보드에 손가락을 한번 올려봅시다. <br />
                우선 늘 그렇듯이 프로젝트를 생성해줍니다.
            </p>

            <pre>
                <code className='language-javascript'>
                    {`
                    mkdir nodeQL
                    cd nodeQL
                    yarn init -y

                    $ nodeQL/package.json
                    // 1
                    "main": "src/index.js",
                    // 2
                    "scripts": {
                        "start": "nodemon"
                        }
                `}
                </code>
            </pre>
            <div>
                <p>
                    패키지 관리자로는 npm 보다는 yarn을 선호하는 편이므로 yarn을
                    사용합니다.
                    <br />
                    물론 희망한다면 npm을 사용하셔도 전혀 문제가 되지않습니다.
                    <br />
                    우리는 방금 <b>nodeQL</b>이라는 폴더를 만들었고, yarn으로
                    프로젝트를 초기화했습니다.
                    <br />이 nodeQL이란 이름은 사용자가 정하기 나름이니,
                    부담갖지마시고 편하신대로 작성해주세요.
                    <br />
                    마지막으로 생성된 package.json을 수정해주세요!
                    <br />
                    1. src/index.js를 메인으로 설정하겠다는 의미입니다. <br />
                    자바의 main()과 유사하게 생각하시면 편하실듯합니다.
                    <br />
                    2. nodemon을 이용할겁니다. Spring에 Devtools같은
                    라이브러리입니다. <br />
                </p>
            </div>
            <hr />
            <div>
                <h3>쌩(?) GraphQL Server만들어보기.</h3>
                <pre>
                    <code className='language-javascript'>
                        {`
                        $ root location of project folder
                            yarn add graphql-yoga
                            mkdir src 
                            touch src/index.js

                        `}
                    </code>
                </pre>
                <p>
                    <b>graphql-yoga를 라이브러리를 다운받아줍시다.</b>
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
                    간략하게만 알아보았습니다. 자, 이제 본격적으로 코딩을
                    해봅시다!
                    <pre>
                        <code className='language-javascript'>
                            {`
                        $ src/index.js

                        const { GraphQLServer } = require('graphql-yoga')

                        // 1
                        const typeDefs = \`
                        type Query {
                            info: String!
                        }
                        \`

                        // 2
                        const resolvers = {
                        Query: {
                            info: () => \`This is the API of a Hackernews Clone\`
                        }
                        }

                        // 3
                        const server = new GraphQLServer({
                            typeDefs,
                            resolvers,
                        })
                        server.start(() => console.log(\`Server is running on http://localhost:4000\`))
                        `}
                        </code>
                    </pre>
                    처음보는 구조에 당황하실수도있습니다만, 걱정마시고 찬찬히
                    하나씩 뜯어봅시다.
                    <br />
                    <hr />
                    1. typeDefs는 변수의 이름 그대로 GraphQL Schema에 대한
                    타입을 정의합니다.
                    <br />
                    그렇다면 위 코드의 의미는 Query라는 타입을 정의했고,
                    info라는 field를 가지고있다! 라고 할 수 있습니다.
                    <br />
                    2. resolovers 객체는 GraphQL Schema의 실제 구현체입니다.
                    <br />
                    구조는 typeDefs와 동일하고 동일해야합니다.
                    <br />
                    3. 마지막으로 Schema와 Resolver를 GraphQLServer에
                    전달해줍니다.
                    <br />
                    이 부분은 서버에 무슨 API 동작을 받아들어야하며, 어떻게
                    풀어야하는지에 대해 알려줍니다.
                    <br />
                    <hr />자 이제 실행시켜봅시다!
                    <pre>
                        <code className='language-javascript'>
                            {`
                                $ ../nodeQL/
                                yarn start
                            `}
                        </code>
                    </pre>
                    localhost:4000으로 접속해보신다면 아래와 같은 화면을 보실 수
                    있습니다. <br />
                    앞서 설명했던 GraphQL Playground(GraphQL IDE)입니다.
                </p>
            </div>
        </div>
    </Wrapper>
);

export default template;
