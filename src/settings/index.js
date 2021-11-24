const domain =
  process.env.NODE_ENV === "production"
    ? "http://도메인"
    : "http://localhost:8080";
export default Object({
  title: "타이틀",
  description: "디스크립션",
  image: `${domain}/ogimage.jpg`,
  url: domain,
  email: "admin@exam.co.kr",
  company: "회사",
  address: "서울시 강남구",
  apiRedirectUri: `${domain}/member/auth`,
  kakaoRestApiKey: "인증키",
  kakaoJavascriptKey: "인증키",
  naverClientId: "아이디",
});
