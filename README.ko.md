<div align="center">

# Browser Extension Starter

**Manifest V3 + GitHub Actions CI/CD + Chrome Web Store 배포.**

확장 프로그램을 만들고, push로 배포하세요.

[![CI](https://github.com/heznpc/browser-extension-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/heznpc/browser-extension-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Chrome MV3](https://img.shields.io/badge/Chrome-Manifest_V3-blue.svg)](https://developer.chrome.com/docs/extensions/)

[English](README.md) | **한국어**

</div>

---

## 빠른 시작

```bash
# 1. GitHub에서 "Use this template" 클릭 (또는 clone)
git clone https://github.com/heznpc/browser-extension-starter.git my-extension
cd my-extension

# 2. 의존성 설치
npm install

# 3. Chrome에 로드
#    → chrome://extensions → 개발자 모드 켜기 → 압축 해제된 확장 프로그램 로드 → 프로젝트 루트 선택

# 4. 스토어용 zip 빌드
npm run build:chrome
```

## 포함된 구성

```
├── manifest.json                  # MV3 매니페스트
├── src/
│   ├── popup/                     # 확장 팝업 (HTML + JS)
│   ├── background/                # 서비스 워커
│   └── content/                   # 콘텐츠 스크립트 (JS + CSS)
├── assets/icons/                  # 확장 아이콘 (16/32/48/128)
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                 # 매니페스트 검증, 린트, 테스트
│   │   └── cd.yml                 # Chrome Web Store 배포
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   └── OAUTH_SETUP.md            # CWS OAuth 설정 가이드
└── package.json
```

## 주요 기능

- **Manifest V3** — Chrome 현행 표준, 스토어 제출 가능
- **CI 파이프라인** — 매니페스트 JSON 검증, JS 린트, 테스트를 매 PR마다 실행
- **CD 파이프라인** — GitHub Actions에서 원클릭으로 Chrome Web Store에 배포
- **최소한의 스타터 코드** — 토글이 있는 팝업 + 백그라운드 + 콘텐츠 스크립트
- **OAuth 설정 가이드** — CWS API 자격 증명 발급 단계별 안내

## CI/CD

### CI (모든 PR + main push 시)

| 단계 | 역할 |
|------|------|
| 매니페스트 검증 | `manifest.json`이 유효한 JSON인지, 필수 필드가 있는지 확인 |
| 린트 | ESLint (browser/webextensions 환경) |
| 테스트 | Jest (기본적으로 테스트 없이도 통과) |

### CD (Actions 탭에서 수동 실행)

| 단계 | 역할 |
|------|------|
| 빌드 | manifest + src + assets를 zip으로 패키징 |
| 업로드 | Chrome Web Store API로 배포 |
| 아티팩트 | zip을 GitHub Actions 아티팩트로 저장 |

**배포 방법:**

1. GitHub Secrets 설정 (아래 참조)
2. **Actions** 탭 → **Deploy to Chrome Web Store** → **Run workflow**
3. 배포 대상 선택 (`default` 또는 `trustedTesters`) → **Run**

### 필요한 GitHub Secrets

| Secret | 설명 |
|--------|------|
| `CWS_EXTENSION_ID` | Chrome Web Store 확장 프로그램 ID |
| `CWS_CLIENT_ID` | Google OAuth2 클라이언트 ID |
| `CWS_CLIENT_SECRET` | Google OAuth2 클라이언트 시크릿 |
| `CWS_REFRESH_TOKEN` | Google OAuth2 리프레시 토큰 |

자세한 설정 방법은 **[docs/OAUTH_SETUP.md](docs/OAUTH_SETUP.md)**를 참고하세요.

## 커스터마이징

1. `manifest.json` 수정 — 이름, 설명, 권한, match 패턴
2. `assets/icons/`의 아이콘 교체
3. `src/popup/`에서 팝업 개발
4. `src/background/`에서 백그라운드 로직 추가
5. `src/content/`에서 페이지 주입 스크립트 작성

> **참고:** 기본 콘텐츠 스크립트는 `https://*/*`와 `http://*/*`에 매칭됩니다. 특정 사이트만 필요하다면 `manifest.json`의 `matches`를 좁혀서 권한을 최소화하세요. Chrome Web Store 심사에서 넓은 호스트 권한은 더 엄격하게 검토됩니다.

## 기여

PR 환영합니다. [PR 템플릿](.github/PULL_REQUEST_TEMPLATE.md)을 사용해 주세요.

## 라이선스

[MIT](LICENSE)
