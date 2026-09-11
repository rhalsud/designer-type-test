# 디자이너 유형 테스트

디자이너들이 5가지 질문에 답해 자신의 작업 스타일 유형(무드메이커 / 문제해결러 / 팀플레이어)을 확인하고, 동료와 결과를 공유하며 이야기 나눌 수 있는 테스트입니다.

React + TypeScript + Vite로 구현했고, UI는 [Montage(Wanted Lab 디자인 시스템)](https://github.com/wanteddev/montage-web)의 `@wanteddev/wds` 컴포넌트를 사용합니다.

## 실행하기

Montage 패키지는 GitHub Packages 레지스트리(`npm.pkg.github.com`)에 있어 `read:packages` 권한이 있는 GitHub 토큰이 필요합니다.

```bash
export NPM_TOKEN=$(gh auth token)
npm install
npm run dev
```

## 화면 구성

1. **시작 화면** — 테스트 소개, 예상 소요 시간, 시작 버튼
2. **질문 화면** — 5문항을 한 번에 하나씩, 선택지 2개, 진행 상태 표시, 뒤로가기
3. **결과 화면** — 3가지 유형 중 하나(이름, 설명, 이미지 자리), 다시하기 / 공유하기 버튼

결과 저장, 회원가입, 통계 기능은 없으며 새로고침하면 결과가 초기화됩니다. 공유하기 버튼은 UI만 제공하고 실제 공유 동작은 하지 않습니다.
