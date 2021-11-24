# base-vue

## Project setup
```
// 패키지 기존 버전 설치
npm install
// 패키지 업그레이드 버전 설치
npm update
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Plugin
- [vue-awesome-swiper](https://github.surmon.me/vue-awesome-swiper)
- [vuejs-paginate](https://github.com/lokyoung/vuejs-paginate)
- [vue2-editor](https://github.com/davidroyer/vue2-editor)
- [material-icons](https://marella.me/material-icons/demo)
- [bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [vue-masonry](https://github.com/shershen08/vue-masonry)
- [vue-masonry-css](https://github.com/paulcollett/vue-masonry-css)
- [AOS](https://github.com/michalsnik/aos)
- [ftp-deploy](https://github.com/simonh1000/ftp-deploy)

## base-vue page Description
- <a href="http://www.com/basevue/">Home</a>
  - 카드형식의 모듈별 최신글 및 공지사항과 리스트 형식의 좋아요순, 조회수순(인기글) 확인
- 헬로우
  - <a href="http://www.com/basevue/hello/static">스태틱</a>
    - 정적인 컨텐츠를 여러 방식(swiper, video, history)으로 활용
  - <a href="http://www.com/basevue/hello/handling">핸들링</a>
    - 자주 사용하는 간단한 핸들링 기능 구현
  - <a href="http://www.com/basevue/hello/slider">슬라이더</a>
    - 다양한 Swiper 기능 구현
  - <a href="http://www.com/basevue/hello/animation">애니메이션</a>
    - AOS(Animation On Scroll) Lib를 활용한 스크롤 애니메이션 기능 구현
  - <a href="http://www.com/basevue/hello/location">로케이션</a>
    - kakaomap API를 활용한 지도 기능 구현
- 모듈1
  - <a href="http://www.com/basevue/module1/m1table">테이블</a>
    - API data(동적인 데이터)를 테이블 형태로 출력 및 C.R.U.D 기능 구현
  - <a href="http://www.com/basevue/module1/m1sort">정렬</a>
    - 테이블 형태의 리스트를 여러 방식으로 정렬
  - <a href="http://www.com/basevue/module1/m1perpage">퍼페이지</a>
    - 테이블 형태의 리스트의 갯수를 조절하는 기능
  - <a href="http://www.com/basevue/module1/m1search">검색</a>
    - 테이블 형태의 컨텐츠의 검색 기능 구현
  - <a href="http://www.com/basevue/module1/m1category">카테고리</a>
    - 테이블 형태의 리스트를 카테고리별 분류
- 모듈2
  - <a href="http://www.com/basevue/module2/m2card">카드</a>
    - API data(동적인 데이터)를 카드 형태로 출력 및 C.R.U.D 기능 구현
  - <a href="http://www.com/basevue/module2/m2card">정렬</a>
    - 카드 형태의 리스트를 여러 방식으로 정렬
  - <a href="http://www.com/basevue/module2/m2perpage">퍼페이지</a>
    - 카드 형태의 리스트의 갯수를 조절하는 기능
  - <a href="http://www.com/basevue/module2/m2search">검색</a>
    - 카드 형태의 컨텐츠의 검색 기능 구현
  - <a href="http://www.com/basevue/module2/m2category">카테고리</a>
    - 카드 형태의 리스트를 카테고리별 분류
- 모듈3
  - <a href="http://www.com/basevue/module3/m3more">더보기</a>
    - 동적인 컨텐츠를 더보기 버튼을 통해 5개씩 추가
  - <a href="http://www.com/basevue/module3/m3infinite">무한스크롤</a>
    - 카드형식의 동적인 데이터를 스크롤을 내리면 자동으로 컨텐츠 추가
  - <a href="http://www.com/basevue/module3/m3masonry">Masonry</a>
    - 동적인 데이터를 핀터레스트 방식에서 Masonry 패키지를 사용하여 자동으로 높이 조절하는 기능 구현
  - <a href="http://www.com/basevue/module3/m3type">타입</a>
    - 동적인 데이터를 여러 타입으로 볼 수 있는 기능 구현
  - <a href="http://www.com/basevue/module3/m3accord">아코디언</a>
    - 동적인 데이터를 아코디언 방식으로 출력
- 모듈4
  - <a href="http://www.com/basevue/module4/m4event">이벤트</a>
    - 이벤트 형태의 동적인 데이터 출력 및 이벤트 C.R.U.D 기능 구현
  - <a href="http://www.com/basevue/module4/m4calendar">캘린더</a>
    - 등록된 이벤트 날짜를 calendar에 출력
  - <a href="http://www.com/basevue/module4/m4map">지도</a>
    - 등록된 이벤트 장소를 kakaomap API를 이용해 지도에 출력
- 모듈5
  - <a href="http://www.com/basevue/module5/m5share">공유</a>
    - 게시판 contents SNS 공유기능 구현(facebook, twitter, naver, kakao, email, URL copy)
  - <a href="http://www.com/basevue/module5/m5comment">댓글</a>
    - 게시판 댓글 기능 구현(댓글 수, 댓글등록, 수정, 삭제)
- 회원
  - <a href="http://www.com/basevue/member/mypage">마이페이지</a>
    - 로그인 후 계정 정보(프로필사진, 닉네임, 아이디) 출력.
  - <a href="http://www.com/basevue/member/login">로그인</a>
    - 카카오계정으로 로그인할 수 있도록 로그인 창이 나옴. 로그인을 하고나면 로그아웃으로 변경.
  - 로그아웃
    - 로그아웃 후 Home으로 이동.