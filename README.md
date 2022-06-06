# NodeJS란
  - Browser 밖에서 사용할 수 있는 JavaScript
  - Javascript는 브라우저에 Interactivity를 주기 위해 고안됨
  - Javascript는 브라우저와 함께 배포되었으며, 프론트엔드에서 사용되는 유일하게 주된 프로그래밍 언어임
  - NodeJS를 기초해 다양한 프레임워크들이 생겨났다
    - ReactJS: Facebook이 만든 VirtualDom방식으로 보다 Interactive한 웹을 만들 수 있게 됨
    - ElectronJS: HTML/CSS/JS로 데스크톱 앱을 만들 수 있음. ex) VSCODE
    - ReactNative: JavaScript로 Android, iOS 어플을 만들 수 있음

## NPM이란
  - JavaScript Package Manager
  - 커뮤니티의 유용한 NodeJS 코드를 끌어쓸 수 있음.
  - nodeJS와 함께 설치되므로 별도로 설치할 필요가 없음.
  - `npm install [패키지이름]` 또는 `npm i ~`
  - `--save-dev` 또는 `-D`를 추가하면 `devDependencies`에 저장함

# NodeJS 프로젝트 시작하기
  - 프로젝트 Folder 만들기
    - `mkdir [PROJECT_NAME]`
	- src 폴더로 파일관리하기
	  - `mkdir src/`
	- `npm init -y`

  - Git 설정하기
    - `git init`
	- `touch .gitignore`
	- `GitHub`에서 새로운 `Repository` 만들기
	- `git remote add origin https://github.com/[계정이름]/[프로젝트이름]`
	- `git push origin master`
	- 프로젝트 `commit`하기

  - `.gitignore`
    - `.goorm.manifest`(GoormIDE)
	- `node_modules/`

## NodeJS 실행하기
  1. `Node` 명령어 이용하기
     - `node [JS파일경로]`
  2. `package.json`의 `script` 이용하기
     - `script` 안에 `"dev": "node index.js"` 추가하기
	 - `npm run [SCRIPT]`
	 - run 생략가능한 command
	   - `npm start` / `npm build`
  3. `Babel` + `Nodemon`
     - `Babel`: 최신 Javascript문을 호환성 있는(안정성 있는) 코드로 변환함
	   - [Link](https://babeljs.io/setup#installation)
	   - `npm i -D @babel/core @babel/preset-env @babel/node`
	   - `touch babel.config.json`
	   - `{"presets": ["@babel/preset-env"]}`
	   - `script`: `babel-node [JS파일명].js`
	 - `Nodemon`: 파일저장할 때마다 서버 새로고침함
	   - `npm i -D nodemon`
	   - `script`: `nodemon --exec` + `[BABEL-NODE]`
	   - `touch nodemon.json`
	   - `{"exec": "babel-node src/init.js"}`

## NodeJS 프로젝트 구조 살펴보기
  - `package.json`
    - NodeJS 프로젝트에 대한 설명을 내용으로 함.
    - `npm i`로 프로젝트에 필요한 패키지를 자동 설치한다.
    - `scripts`
      - 간단한 항목명(entry)으로 명령어들을 일괄 실행함
      - "[항목명]": "[명령어들]"
      - `npm run [항목명]`으로 실행한다
    - `dependencies`
      - 프로젝트가 작동하기 위해 필요한 패키지들
    - `devDependencies`
      - 프로젝트 개발에만 사용되는 패키지들(배포할 때 제외됨)
      - 패키지를 설치할 때 `--save-dev` 또는 `-D` 추가하기
    - `node_modules/`
      - npm으로 설치한 프로젝트의 패키지들을 저장하는 폴더.
      - 패키지간 위계는 package.json에서 기술하며, 파일 경로상 위계는 동등하다
    - `package-lock.json`
      - 패키지 버전관리하는 파일
  - `src/`

## NodeJS Package를 Import & Export하기
  - NodeJS 파일은 환경독립적이다
    - 각 파일마다 import와 export를 개별적으로 해야한다
  - Import하기
    - 구JS 코드: `const [변수명] = require("[패키지명]");`
    - `import [변수명] = "[패키지명]";`
  - Export하기
    - 무언가 import하기 전에 export를 해야 한다
  - `Export Default`
    - js파일의 대표 variable을 export할 때,
    - js파일 마지막문에 export default [variable명];라 쓴다
    - 이를 import하려면 `import [임의명] from "[파일 경로]";`
  - `Export`
    - js파일의 여러 variable을 export할 때 적합함
    - variable마다 맨앞에 export를 붙인다
    - 이를 import하려면 `import { ... } from "[파일 경로]"`
	
# Express로 Server 구동하기
  1. Express 설치하기
     - `npm i express`
	 - `import express from "express";`
  2. Express Application을 Variable에 저장하기
     - `const app = express();`
  3. Express가 request에 listen하게 하기(서버 시작)
     - `app.listen(PORT, CALLBACK)`
	   - `PORT`: 컴퓨터와 서버간 접속을 관리하는 일종의 문.
	   - `CALLBACK`함수: PORT에 listen 이벤트 발생시 실행되는 함수.

  * GoormIDE에서 PORT 설정하기
    - 로컬PC: `http://localhost:${PORT}/`
	- GoormIDE: `[프로젝트]` - `[실행URL과_포트]`

## HTTP 방식으로 Server에게 웹페이지 Request하기
  - `HTTP 방식`: 서버와 브라우저간 데이터를 주고받는 방식
  - `GET Request`: 웹페이지 관련된 데이터를 요청하는 것
    - `app.get("URL", CONT)`
	- CONTROLLER 함수: 특정 URL으로 접속할 때 실행되는 함수.
	  - `req(request)`, `res(response)` object를 argument로 받는다.
	  - `req` object에서 웹페이지에 대한 정보를 얻고,
	  - `res` object를 사용해 request를 완료한다
	
  * `req`: request가 가진 정보를 담은 object
    - `req.url`(원본) 또는 `req.path`
	- `req.method`: GET / POST여부
	- `req.params`: Route의 Parameter
	- `req.query`: GET 방식으로 받는 Query(?)
	- `req.body`: POST 방식으로 받는 `<form>` 데이터
	- `req.headers`
  * `res`: request에 대해 서버가 응답하는 방식
    - `res.end`: 빈화면 return함
	- `res.send(~)`: 텍스트나 짧은 HTML문 반환
	- `res.render(~)`: View Engine으로 웹페이지를 만듬
	  - Pug와 같은 View Engine을 설정한 후 사용함.
	- `res.locals`: 웹페이지를 render할 때 사용가능한 객체
	- `res.redirect`: 다른 웹페이지로 이동
	- `res.status(CODE).~`: HTML 응답코드를 설정한다
	  - Browser에게 올바르지 못한 웹페이지임을 알린다.
	  - 예시) 200(잘못됨) / 404(존재하지 않음)
	- `res.sendStatus`: HTML 응답코드를 보낸다
	  - API 설계에 사용된다
	  
  * `/`: Server의 Root 페이지
  
## Middleware 알아보기
  - `Middleware`: Request와 Response 사이에 작동하는 Controller
  - `Controller`: Express 서버를 이루는 Function
  - `Middleware`는 `req`, `res`외에 `next`라는 argument를 가진다
    - argument는 목적에 따라 생략이 가능하다
	- 예시) req가 필요없다면 `(_, res)`
  - `app.get`로 Middleware 만들기
    - `app.get(ROUTE, CALLBACKs)`
	- `CALLBACKs`: 여러 함수 중 마지막은 Controller, 가운데는 Middleware가 된다
	  - 마지막 Controller는 response를 해야 한다
	- `app.get`은 특정 URL에 한정해 작동하는 Middleware에 적합함.
  - `app.use`로 Middleware 만들기
    - `app.use(MIDDLEWARE명);`
	- `app.use`는 공통적으로 작동하는 Middlware에 적합함.
	- 코드 순서상 `app.get`보다 앞서야 함

### Middleware 활용하기
  - 웹페이지 접속 감시하기(Morgan)
    - `npm i morgan`
	- `morgan("dev")`
  - `middleware.js` 분리하기
  - `login` 여부에 따라 웹사이트 접속 통제하기

# Router 구상하기
  - `Router`: URL과 Controller 관리를 도와줌.
    - Router는 URL의 공통부분을 묶어 중복을 줄일 수 있다
  - Project에 어떤 종류의 데이터가 주가 될지(Domain) 구상하기
    - Wetube = Video + User
  - 데이터를 다룰 때 어떤 기능이 필요한지 구상하기(CRUD)
    - `User`: join / login / logout / edit-prfile / delete-profile
	- `Video`: upload / search / watch / edit / delete
  - 어떤 집단으로 묶을지 생각하고 각각을 Router로 정한다
    - Global Router
	  - `/`(루트 URL)을 기준으로 하는 URL의 집합
	- User Router
	- Video Router

## Router 계획하기
  - Global Router
    - `/`: Home
	- `/join`
	- `/login`
	- `/search`
  - User Router
    - `/users/:id`
	- `/users/edit`
	- `/users/logout`
	- `/users/delete`
  - Video Router
	- `/videos/upload`
    - `/videos/:id`
	- `/videos/:id/edit`
	- `/videos/:id/delete`
	
## Router 구축하기
  - Router로 Route 관리하기
    - router 만들기
      - `const [Router명] = express.Router();`
	- router를 이용해 route 만들기
      - `[Router명].get([Route], [CONT])`
	- app에 router 연결하기
	  - `app.use([Route], [ROUTER]);`
  - Router 파일별로 분리하기
    - `mkdir src/routers`
	- server에 router를 import하기
	- `import [Router명] from "./routers/[Router명].js;`
	- `touch src/routers/[router명].js`
	  - `import express from "express";`
	  - `export default [Router명];`
  - Controller 파일별로 분리하기
    - `mkdir src/controllers`
    - `touch src/controllers/[controller명].js`
    - Controller마다 맨 앞에 export 넣기
	  - `export const [CONT명] = ...`
	- router에 controller를 import하기
	  - `import { [CONT명], ... } from "../controllers/[CONT명].js"`

## URL Parameter 사용해 Route를 표현하기
  - URL Parameter: URL에 변수를 사용하게 함
  - URL에 변수를 사용하려면 `:[변수명]` 형식을 지키기
  - `req.params`로 변수들이 담긴 object를 return함
  - 변수가 포함된 route는 아랫줄에 두기(코드 진행순서 고려)
  - 변수의 형태를 제한하려면 Regular Expression을 사용한다
    - 예시) `:id(\\d+)`
    - Express Reg: `?` / `+` / `*`
	- JavaScript Reg: `\\d`