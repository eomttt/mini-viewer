# EPUB webviewer @ridi 

## Structure
### Run Develope
> $ npm install  
> $ npm run dev

### Project stack
- TypeScript
- Next JS
- Express JS
- Style-component
- Redux
- GraphQL
- React Apollo

### Reference
- [with-typescript-styled-components in Next](https://github.com/zeit/next.js/tree/canary/examples/with-typescript-styled-components)
- [with-redux-wrapper](https://github.com/zeit/next.js/tree/canary/examples/with-redux-wrapper)
- [react-viewer](https://github.com/ridi/react-viewer)
- [epub-parser](https://github.com/ridi/content-parser/tree/master/packages/epub-parser)
- [drag-and-drop-article](https://github.com/siffogh/drag-and-drop-article)
- [epub 이란](http://www.tta.or.kr/data/androReport/ttaJnal/136-6.pdf)

### Project design
- [PPT link](https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/RIDI+mini-vewer/RIDI+%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8C%E1%85%A1+%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A6.pdf)

## Viewer

### Reducer 및 viewer 구조
- [PPT link](https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/RIDI+mini-vewer/RIDI+%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8C%E1%85%A1+%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A6++-+%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB+%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB+%E1%84%85%E1%85%B5%E1%84%87%E1%85%B2+(Viewer).pdf)
- Viewer 를 변경시키는 방법은 총 3가지이다.
  1. 목차에서 변경
  2. 왼쪽 또는 오른쪽 클릭으로 인한 변경
  3. 하단 슬라이더를 이용한 변경
- 따라서 다음과 같은 변경이 있을 시에 store 내에 **viewerPageCount** 를 변경시킨다.
- **viewerPageCount** 변경됨에 따라서 **viewerSpineIndex**, **viewerSpinePosition** 를 변경시켜주어 그에 맞는 page 를 찾아서 viewer 와 슬라이더 카운트를 맞게 변경해준다.

> 그림에서 각각 **viewerSpineIndex** 는 **Spine Index** 로, **viewerSpinePosition** 는 **column count** 로 표현하였다.

![](https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/RIDI+mini-vewer/viewer-store-change-diagram.png)

## Library

### API
- ***POST /upload-epub***
- ***GET /book?fileName=${fileName}***

### GraphQL
- /graphql
- [react-apollo public docs](https://www.apollographql.com/docs/)
- [express-graphql](https://yuddomack.tistory.com/entry/expressgraphql-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0Hello-World-Guide)
- [react-apollo](https://www.daleseo.com/graphql-react-apollo-client/)
- ***Schema***
  - Query: bookList
  - Mutation: deleteBookListItem(fileName: string)

### 구현 완료
[PPT link](https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/RIDI+mini-vewer/RIDI+%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8C%E1%85%A1+%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A6++-+%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB+%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%85%E1%85%AD.pdf)

## Deploy
- Using Heroku
  - Git push master
  - Deploy in heroku
  - Logs: $heroku logs --tail
- [Demo](https://mini-viewer.herokuapp.com/)

## Structure
### pages
```
├── _app.tsx
├── _document.tsx
├── _error.tsx
├── index.tsx
└── viewer.tsx
```
- index.tsx: Library page
- viewer.tsx: Viewer page

### Components
```
├── Layout.tsx
├── books
│   ├── BookList.tsx
│   ├── NoBookList.tsx
│   ├── UploadBook.tsx
│   └── index.tsx
├── common
│   ├── Error.tsx
│   └── Loading.tsx
└── viewer
    ├── ViewerNotSupport.tsx
    ├── bottom
    │   ├── ViewerSlider.tsx
    │   └── index.tsx
    ├── header
    │   ├── ViewerNcx.tsx
    │   ├── ViewerSetting.tsx
    │   ├── ViewerSettingColorItem.tsx
    │   ├── ViewerSettingCountItem.tsx
    │   └── index.tsx
    └── page
        ├── ViewerPage.tsx
        ├── ViewerPages.tsx
        ├── ViewerPagesReducer.ts
        └── index.tsx
```
- Layout: pages내에 컴포넌트들 틀
- books
  - index:
    - GraphQL를 통하여 책 목록 관리
    - 컴포넌트 관리
  - NoBookList: 책 목록이 없을 때 render
  - BookList: 책 목록을 보여주고 순서 변경
  - UploadBook: epub 파일 업로드
- common
  - Error: 에러 팝업 컴포넌트
  - Loading: 로딩 팝업 컴포넌트
- viewer
  - ViewrNotSupport: 서포트 하지 않은 책일 경우 render
  - bottom
    - index: Bottom bar 로서 ViewerSlider 컴포넌트 관리
    - ViewerSlider: slider 컴포넌트로 이동시 pageCount 변경
  - header
    - index: Header bar 로서 제목, 저자가 표시 되고, ViewerNcx, ViewerSetting 관리
    - ViewrNcx: 책에 목차 정보를 담고 있으며 목차 정보 클릭시 그에 맞는 pageCount로 store 업데이트
    - ViewerSetting: Viewer에 스타일에 대한 Setting controller
    - ViewerSettingCountItem: 글자크기, 간격, 줄간 등 +/- 로 이루어진 setting item component
    - ViewerSettingColorItem: 배경색 관련 setting item component
  - page
    - index:
      - ViewerPages 관리
      - 좌, 우 이동 하여 pageCount 업데이트
    - ViewerPage:
      - 한 spine을 render
      - spine 내에 링크 클릭시 그에 맞는 pageCount로 store 업데이트
      - spine에 max count 를 계산함
      - spinePosition에 맞게 스크롤 이동
    - ViewerPages:
      - 전체 spines을 render
      - private한 store를 가짐: ViewerPage로 부터 각 spine에 대한 콜백이 오면 저장하다가 전체 store 에 전체 spine에 대한 정보를 업데이트
      - pageCount가 업데이트 됨에 따라서 현재 spineIndex, spinePosition 을 store에 업데이트
      - spineIndex에 맞게 스크롤 이동
      - window resize 이거아 스타일 변경시 private한 스토어 초기화 후, 재계산시 원래 있던 spineIndex, spinePosition을 유지하기 위해 pageCount를 재계산함
    - ViewerPagesReducer:
      - ViewerPages에 private reducer, ViewerPage callback 으로 부터 오는 각 spine에 count 및 정보를 저장
      - 전체 spine 대한 정보가 저장 되었을 때에 ViewerPages 가 전체 store로 정보를 한번에 보냄

### Reducers
```
├── book.ts
├── index.ts
├── viewer.ts
└── viewerSetting.ts
```
- index: Combine reducers
- book: 현재 화면에서 보여지고 있는 epub file data 저장
- viewer: 현재 화면에서 보여지고 있는 viewer에 기본 정보
  - viewerCountList: 각 spine에 대한 max position, index, spine id, href
  - viewerSpineIndex: 현재 보여지고 있는 spine index number
  - viewerSpinePosition: 현재 보여지고 있는 spine position number
  - viewerPageCount: 현재 보여지고 있는 page number
  - viewerWholePageCount:  전체 page number
- viewerSetting: 현재 화면에서 보여지고 있는 viewer setting 에 대한 정보

***pageCount 변경으로 인하여 spineIndex, spinePosition 이 변경 되고 그로 인하여 ViewerPages, ViewerPage 에 scrollLeft가 변경되어 원하는 spine 을 보여질 수 있도록 함***

### Styles
```
├── books
│   └── index.ts
├── common
│   └── index.ts
├── index.ts
└── viewer
    ├── bottom.ts
    ├── header.ts
    ├── index.ts
    └── page.ts
```
- books: 책 목록 화면 내 컴포넌트에 사용하는 스타일
- common: Loading, Error 같은 공통 컴포넌트에 사용하는 스타일
- viewer: Viewer 화면 내 컴포넌트에 사용하는 스타일
  - index: Viewer 내 공통으로 사용하는 스타일
  - bottom: Viewer Bottom 내 사용하는 스타일 (Slider)
  - header: Viewer Header 내 사용하는 스타일 (Ncx, Setting, Title, Authors)
  - pages: Viewer Page 내 사용하는 스타일 (ViewerPages, ViewerPage)

### Interface
```
├── books
│   ├── index.ts
│   └── props.ts
├── common
│   ├── index.ts
│   └── style.ts
├── index.ts
└── viewer
    ├── index.ts
    ├── props.ts
    └── style.ts
```
- index: reducer 또는 공통으로 사용하는 interface들
- style: styled-components 내에서 사용하는 interface
- props: 각 컴포넌트 props interface

## [회고](https://velog.io/@eomttt/RIDI-%EC%9E%85%EC%82%AC%EC%9E%90-%EA%B3%BC%EC%A0%9C-%ED%9A%8C%EA%B3%A0)

## Issue
- When parse viewer basePath:  https://${url} or http://${url} 을 basePath로 지정할 경우, https:/${url} or http:/${url} 로 나오는데,
이유는 path.join 시 url 일 경우 다음과 같이 반환 한다고 함.
- [link](https://stackoverflow.com/questions/34668012/combine-url-paths-with-path-join)
- [github issue](https://github.com/nodejs/node/issues/18288)
- >  console.log(path.join.apply(__dirname, ['https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/RIDI+mini-vewer/pg61629', 'OEBPS']));
- 임시 해결 방안: node_modules/@ridi/parser-core/lib/pathUtil.js
  - ```target.replace(/\\/g, '/') -> target.replace(/\\/g, '/').replace(':/','://');```



