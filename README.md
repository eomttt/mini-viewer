# EPUB webviewer @ridi 

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


### API
- ***POST /upload-epub***

- ***DELETE /book-list-item***

- ***GET /book?fileName=${fileName}***

### GraphQL
- /graphql
- [react-apollo public docs](https://www.apollographql.com/docs/)
- [express-graphql](https://yuddomack.tistory.com/entry/expressgraphql-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0Hello-World-Guide)
- [react-apollo](https://www.daleseo.com/graphql-react-apollo-client/)

#### Schema
- Query: bookList
- Mutation: removeBookListItem

### Deploy
- Using Heroku
  - Git push master
  - Deploy in heroku
  - Logs: $heroku logs --tail
- [Demo](https://mini-viewer.herokuapp.com/)

### Issue
- When parse viewer basePath:  https://${url} or http://${url} 을 basePath로 지정할 경우, https:/${url} or http:/${url} 로 나오는데,
이유는 path.join 시 url 일 경우 다음과 같이 반환 한다고 함.
- [link](https://stackoverflow.com/questions/34668012/combine-url-paths-with-path-join)
- [github issue](https://github.com/nodejs/node/issues/18288)
- >  console.log(path.join.apply(__dirname, ['https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/RIDI+mini-vewer/pg61629', 'OEBPS']));
- 임시 해결 방안: node_modules/@ridi/parser-core/lib/pathUtil.js
  - ```target.replace(/\\/g, '/') -> target.replace(/\\/g, '/').replace(':/','://');```



