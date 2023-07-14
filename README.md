![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=원티드%20프리온보딩%2011차%203주차%20과제&fontSize=45)

![3주차 과제 시연영상](./3week-assignment.gif)

<br/>

# 목차

[1. 배포](#배포)
<br/>
[2. 팀 소개](#13팀-소개)
<br/>
[3. 과제 진행 방식](#과제-진행-방식)
<br/>
[4. 프로젝트 실행 방법](#프로젝트-실행-방법)
<br/>
[5. 기술 스택과 폴더 구조](#기술-스택)
<br/>
[6. 개인 과제 수행](#개인-과제-수행)
<br/>
[7. 기능별 Best Practice 선정](#기능별-코드-공유-및-best-practice-선정)
<br/>
[8. 회고](#회고)

<br/>

# 배포

### [원티드 프리온보딩 인턴십 3주차 과제 - 13팀 배포 링크](https://pre-onboarding-11th-3-13.vercel.app/)

<br/>

## 13팀 소개

> 팀원

| [<img src="https://avatars.githubusercontent.com/u/84329979?s=400&u=88239052b0bc310a6dd2aa67894134272f49498d&v=4" width="120px"/> ](https://www.github.com/gamangee) | [<img src="https://avatars.githubusercontent.com/u/69967974?s=96&v=4" width="120px" /> ](https://www.github.com/als982001) | [<img src="https://avatars.githubusercontent.com/u/109938280?s=96&v=4" width="120px" /> ](https://www.github.com/5wintaek) | [<img src="https://avatars.githubusercontent.com/u/117294002?s=96&v=4" width="120px" /> ](https://www.github.com/www-r) | [<img src="https://avatars.githubusercontent.com/u/119585339?s=96&v=4" width="120px" /> ](https://www.github.com/dalkey23) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|                                                                              **장문정**                                                                              |                                                         **주재민**                                                         |                                                         **오승택**                                                         |                                                       **김영은**                                                        |                                                         **박재희**                                                         |

👉 이미지 클릭 시 개인 깃허브로 이동합니다.

<br/>

## 프로젝트 기간

2023.7.11 ~ 2023.7.14 (4일)

<br/>

## 과제 진행 방식

1. 과제를 보고 개인별로 기술 스택을 정한다.
2. 자신이 선택한 기술 스택을 바탕으로 과제를 구현한다.
3. 13일(목) 12시에 1차 코드리뷰를 진행하여 서로의 의견을 공유한다.
4. 14일(금) 5시에 2차 코드리뷰를 진행하여 서로의 코드를 더 심도있게 살펴본다.
5. Github Discussions에 필수 구현 항목별로 자신의 코드와 구현 설명을 올린다.
6. 최종 회고 후, Best Practice를 선정한다.

<br/>

## 프로젝트 실행 방법

1. 프로젝트 clone

```bash
    $ git clone https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13.git
```

2. 프로젝트 directory로 이동

```bash
 $ cd pre-onboarding-11th-1-13
```

3. root directory에 .env 파일 생성 후 아래 내용 추가

```bash
VITE_GITHUB_BASE_URL=https://api.github.com/repos
VITE_GITHUB_API_KEY="your github access token key"
```

4. 프로젝트 관련 라이브러리 다운로드

```bash
$ npm install
```

5. 프로젝트 실행

```bash
$ npm start
```

<br/>

## 기술 스택

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![javascript](https://img.shields.io/badge/typescript-5.0.2-3178C6?logo=typescript)
![emotion](https://img.shields.io/badge/emotion-11.11.1-F43059?logo=emotion)
![reactrouter](https://img.shields.io/badge/react--router--dom-6.14.1-CA4245?logo=reactrouter)
![axios](https://img.shields.io/badge/axios-1.4.0-5A29E4?logo=axios)
![eslint](https://img.shields.io/badge/eslint-8.44.0-A100FF?logo=eslint)
![prettier](https://img.shields.io/badge/prettier-3.0.0-F7B93E?logo=prettier)
![reactMarkdown](https://img.shields.io/badge/react--markdown-8.0.6-00A98F?logo=reactMarkdown)

<br/>

## 📂 폴더 구조

```bash
src
 ┣ api
 ┃ ┗ GithubIssueApi.tsx
 ┣ assets
 ┃ ┗ icons.tsx
 ┣ components
 ┃ ┣ IssueDetail
 ┃ ┃ ┗ Markdown.tsx
 ┃ ┗ IssueList
 ┃ ┃ ┣ Ad.tsx
 ┃ ┃ ┣ Filter.tsx
 ┃ ┃ ┗ ListItem.tsx
 ┣ context
 ┃ ┗ IssueContext.tsx
 ┣ pages
 ┃ ┣ IssueDetail
 ┃ ┃ ┣ IssueDetail.tsx
 ┃ ┃ ┗ IssueDetailCSS.tsx
 ┃ ┗ IssueList
 ┃ ┃ ┣ IssueList.tsx
 ┃ ┃ ┗ IssueListCSS.tsx
 ┣ types
 ┃ ┣ IssueDetailTypes.tsx
 ┃ ┣ IssueFilterTypes.tsx
 ┃ ┗ IssueListTypes.tsx
 ┣ App.tsx
 ┣ NotFound.tsx
 ┣ main.tsx
 ┗ vite-env.d.ts

```

<br/>

## 개인 과제 수행

👉 이미지 클릭시 개인별 과제 레포지토리로 이동합니다.

| [<img src="https://avatars.githubusercontent.com/u/84329979?s=400&u=88239052b0bc310a6dd2aa67894134272f49498d&v=4" width="120px"/> ](https://github.com/gamangee/pre-onboarding-11th-3-13) | [<img src="https://avatars.githubusercontent.com/u/69967974?s=96&v=4" width="120px" /> ](https://github.com/als982001/pre-onboarding-11th-3-13) | [<img src="https://avatars.githubusercontent.com/u/109938280?s=96&v=4" width="120px" /> ](https://github.com/5wintaek/pre-onboarding-11th-3-13) |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                        **장문정**                                                                                         |                                                                   **주재민**                                                                    |                                                                   **오승택**                                                                    |

1️⃣ pre-onboarding-11th-3-13 team repository를 fork한 후, 먼저 개별적으로 과제를 구현하였습니다.
<br />
2️⃣ 총 두 번에 걸쳐 작업한 코드를 기반으로 코드 리뷰를 진행하면서 의견을 나눴습니다.
<br />
3️⃣ 개인별 구현한 다양한 코드를 기능별로 나누어 [Github Discusions](https://github.com/wanted-11th-team13/pre-onboarding-11th-3-13/discussions)에 올려 공유하였습니다.

<br />

# 기능별 코드 공유 및 Best Practice 선정

- [이슈 목록 및 상세 화면 기능 구현](https://github.com/wanted-11th-team13/pre-onboarding-11th-3-13/discussions/6)
- [Context API를 활용한 API 연동](https://github.com/wanted-11th-team13/pre-onboarding-11th-3-13/discussions/7)
- [인피니트 스크롤](https://github.com/wanted-11th-team13/pre-onboarding-11th-3-13/discussions/5)
- [이슈 목록 5번째 마다 광고 이미지 삽입](https://github.com/wanted-11th-team13/pre-onboarding-11th-3-13/discussions/10)
- [데이터 요청 중 로딩 표시](https://github.com/wanted-11th-team13/pre-onboarding-11th-3-13/discussions/8)
- [에러 화면 구현](https://github.com/wanted-11th-team13/pre-onboarding-11th-3-13/discussions/9)

<br />

## 회고

### 🐻 주재민

1. 무한 스크롤을 구현해보는 게 이번이 처음이라 굉장히 겁을 먹은 상태였습니다. 하지만 구현하면서 관련 글을 찾아보며 적용을 해보니 생각보다 쉬웠습니다. 이번 기회를 통해 Intersection Observer API를 이용해볼 수 있어서 좋았습니다.

2. 개인적으로 메모이제이션 기법을 이용해보려 했는데, 이 부분이 어려웠습니다. 예를 들어, 이슈 목록 페이지에서 이슈 상세 페이지를 들어간 후, 뒤로가기를 하면 다시 전체 데이터를 받아왔습니다. 그래서 이를 useMemo를 이용하여 해결할 수 있을 거라 생각했지만, async/await이 적용된 곳에 이것을 어떻게 적용해야 할지 많이 고민을 했습니다. 그래서 수많은 시도 끝에 if문을 이용해 데이터를 가져오는 조건을 설정하였습니다. 그래서 결과적으로는 목적을 달성하긴 했지만, 배웠던 메모이제이션을 활용해보지 못한 점이 너무 아쉽습니다.
3. 관심사 분리를 배워서 이를 적용해보는 것이 좋았습니다. 평소에 한 컴포넌트에 로직과 UI를 같이 집어넣는 경우가 많았습니다. 그래서 커스텀 훅을 만들어서 로직과 UI를 분리하였고 이는 유익한 경험이 되었습니다.

### 🐯오승택

1. 무한 스크롤을 구현을 완벽하게 해내지 못해서 너무 아쉽습니다. 개념부터 시작해서 모르는것들이 많아 시간이 오래 걸리기두 하였고, 또한 일정이 짧다보니 구현을 구현을 해내지 못했습니다. 리펙토링을 통해 꼭 한번 성공해보겠습니다.

2. useContext 를 배운것을 처음 써보았습니다. 개념은 어느정도 알고 있었지만 이번 프로젝트를 통해서 처음 적용해보았습니다. 처음 적용해 보는거라 조금 처음엔 어려웠지만 쓰다보니 조금은 익숙해져서 좋았습니다.

3. api 를 처음으로 분리하여 사용해 해보았습니다. Todo를 구현했을 땐 컴포넌트를 분리하지 않고 한곳에 몰아썼는데 이번에는 관심사의 분리를 이용하여 유틸함수로 가져와 사용을 해보았습니다. 개인적으로 axios 부분도 따로 뺀 후에 가져와서 쓰는것도 조금 어려워 시간이 오래 걸리긴 하였지만 사용을 하여 뿌듯하였습니다.

4. query parameter 를 알지 못하여 Github issue API 연동을 할 때 많이 애먹었습니다. 평소에 써보지 못한 로직을 알게 되어 어려움이 있었지만, 그래도 성공한 후 연동을 하니 좋은 경험이 되었습니다.

5. useParams() 라는 것을 처음으로 사용해 보았습니다. IssueList에서 클릭 후 그에 맞는 파라미터 정보를 가져오기 위해 사용하였는데, 이 훅도 처음 사용해 보아서 Detail 페이지를 띄우는데 많은 어려움이 있었습니다.

### 🐰 장문정

> 🤦🏻‍♀️ **어이없는 실수가 원인을 찾기 더 어렵다**

이번 과제는 무한스크롤 기능에 대해서 고민해보는 시간을 가져보라는 의미가 아니였나 예상해봅니다. 무한스크롤 기능을 구현하는 여러 가지 방식 중에서도 브라우저 성능을 고려하여 스크롤 위치를 감지하는 방식 보다 root영역에 target이 교차할 때를 감지하는 intersection observer API를 사용해 보았습니다. observe함수가 target 즉 li의 마지막 요소에 도달했을 때 새로운 데이터를 불러오면 되겠다고 생각했습니다.

그러던 중 지정해 놓은 target에 스크롤이 도달하면 전체 리스트 페이지가 새로 랜더링되는 치명적인 현상을 발견하였습니다. 도대체 왜 저의 코드에서만 이런 현상이 일어난 것인지 데이터의 흐름을 파악하기 위해 콘솔도 여러 번 찍어보고 다른 사람들이 한 코드도 찾아 읽어보고 했지만 이틀을 디버깅해도 원인을 찾을 수가 없었습니다. 그래서 새로운 마음으로 처음부터 다시 코드를 쳐보자 마음을 먹었습니다. 페이지가 마운트되서 언마운트될 때 까지를 상상하며 코드를 살펴보던 그 때 비로소 발견했습니다.

원인은 데이터 요청 중 로딩 표시하는 범위였습니다. 과제 필수 요구 사항에 데이터를 받아올 때 로딩 표시를 해야하는 조건이 있었습니다. 제가 이 조건을 보자마자 react-query가 허용이 안되기 때문에 useState로 loading을 만들어서 코드 전체에 걸어두었던 것입니다.

```js
<div>
  {loading && <div>Data Loading...</div>}
  {!loading && <IssueList />}
</div>
```

위의 조건을 없애고 나니 기존 데이터에서 새로운 데이터가 추가되는 방식으로 제대로 작동하는 것을 확인했습니다.

마치 의식적으로 걸어두었던 조건문이 저의 발목을 잡았을 거라고는 전혀 예상하지 못했습니다. 그래도 다른 사람은 어떻게 구현했는지 찾아보고 코드 한줄 한줄 꼼꼼히 비교하며 읽어볼 수 있는 경험을 하게 되어 좋았습니다. 또 스스로 문제를 파악하고 이를 해결하려고 노력해보니 뿌듯한 마음이 드네요😁
