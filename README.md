# 🎨 Portfolio App

개인 포트폴리오를 소개하는 React + TypeScript 기반의 웹 애플리케이션입니다.  
Vite를 사용해 빠른 개발 환경을 구성하였고, GitHub Pages를 통해 배포되었습니다.

## 🚀 데모

[https://dodgeweb.github.io/portfolio-app/](https://dodgeweb.github.io/portfolio-app/)

## 🛠 기술 스택

- **React** + **TypeScript** + **Vite**
- **React Router DOM**
- **GitHub Pages**

## 📁 프로젝트 구조

```bash
src/
├── components       # 공통 컴포넌트
├── pages            # 라우팅되는 페이지들
├── data             # 필요한 json 파일들
├── App.tsx
└── main.tsx
```

## ⚙️ 개발 및 배포

### 🧩 로컬 개발

```
npm install       # 의존성 설치
npm run dev       # 개발 서버 실행 (http://localhost:5173)
```

### 🔍 빌드 및 미리보기

```
npm run build     # 프로덕션 빌드 (dist/ 생성)
npm run preview   # 빌드 결과 로컬에서 확인
```

### 🚀 GitHub Pages 배포

```
npm run deploy
```
