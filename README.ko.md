<div align="center">

# Browser Extension Starter

**Manifest V3 + GitHub Actions CI/CD + Chrome & Firefox 배포.**

확장 프로그램을 만들고, push로 배포하세요.

[![CI](https://github.com/heznpc/browser-extension-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/heznpc/browser-extension-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Chrome MV3](https://img.shields.io/badge/Chrome-Manifest_V3-blue.svg)](https://developer.chrome.com/docs/extensions/)
[![Firefox MV3](https://img.shields.io/badge/Firefox-Manifest_V3-orange.svg)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)

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
├── manifest.json                  # MV3 매니페스트 (Chrome + Firefox)
├── src/
│   ├── popup/                     # 확장 팝업 (HTML + JS)
│   ├── options/                   # 옵션 페이지 (HTML + JS)
│   ├── background/                # 서비스 워커
│   └── content/                   # 콘텐츠 스크립트 (JS + CSS)
├── assets/icons/                  # 확장 아이콘 (16/32/48/128)
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                 # 검증, 감사, 린트, 테스트, 빌드
│   │   ├── cd.yml                 # Chrome Web Store 배포
│   │   ├── cd-firefox.yml         # Firefox Add-ons 배포
│   │   └── setup.yml              # 첫 사용 시 자동 설정 체크리스트
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── OAUTH_SETUP.md            # CWS OAuth 설정 가이드
│   └── PRIVACY_POLICY_TEMPLATE.md # 스토어 제출용 개인정보처리방침
└── package.json
```

## 주요 기능

- **Manifest V3** — Chrome + Firefox 크로스 브라우저 지원
- **CI 파이프라인** — 매니페스트 검증, 권한 감사, 보안 감사, 린트, 테스트, 빌드 검증
- **CD 파이프라인** — 원클릭 Chrome Web Store 또는 Firefox Add-ons 배포 + GitHub Release
- **버전 관리** — `npm run version:patch/minor/major`로 `manifest.json` 버전 업
- **보안** — 위험 권한, 넓은 호스트 접근, 의존성 취약점 경고
- **개발 모드** — `npm run dev`로 `web-ext` 라이브 리로드
- **스타터 코드** — 토글 팝업 + 옵션 페이지 + 백그라운드 + 콘텐츠 스크립트
- **스토어 제출 지원** — OAuth 설정 가이드 + 개인정보처리방침 템플릿
- **템플릿 셋업** — 첫 사용 시 설정 체크리스트 이슈 자동 생성

## CI/CD

### CI (모든 PR + main push 시)

| 단계 | 역할 |
|------|------|
| 매니페스트 검증 | `manifest.json` 유효성 + 필수 필드 + 버전 형식 확인 |
| 권한 감사 | 위험한 권한, 넓은 호스트 접근 경고 |
| 보안 감사 | `npm audit`로 의존성 취약점 확인 |
| 린트 | ESLint (JS) + Stylelint (CSS) |
| 테스트 | Jest (기본적으로 테스트 없이도 통과) |
| 빌드 검증 | zip 빌드 후 크기 10 MB 이하 확인 |

### CD (Actions 탭에서 수동 실행)

| 단계 | 역할 |
|------|------|
| 버전 가드 | 해당 버전의 git 태그가 이미 있으면 실패 |
| 빌드 | manifest + src + assets를 zip으로 패키징 |
| 업로드 | Chrome Web Store API로 배포 |
| GitHub Release | 태그 생성 + zip 첨부된 릴리즈 자동 생성 |
| 아티팩트 | zip을 GitHub Actions 아티팩트로 저장 |

**배포 방법:**

1. GitHub Secrets 설정 (아래 참조)
2. 버전 업: `npm run version:patch` (또는 `version:minor` / `version:major`)
3. **Actions** 탭 → **Deploy to Chrome Web Store** → **Run workflow**
4. 배포 대상 선택 (`default` 또는 `trustedTesters`) → **Run**

### GitHub Secrets

#### Chrome Web Store (`cd.yml`)

| Secret | 설명 |
|--------|------|
| `CWS_EXTENSION_ID` | Chrome Web Store 확장 프로그램 ID |
| `CWS_CLIENT_ID` | Google OAuth2 클라이언트 ID |
| `CWS_CLIENT_SECRET` | Google OAuth2 클라이언트 시크릿 |
| `CWS_REFRESH_TOKEN` | Google OAuth2 리프레시 토큰 |

자세한 설정 방법은 **[docs/OAUTH_SETUP.md](docs/OAUTH_SETUP.md)**를 참고하세요.

#### Firefox Add-ons (`cd-firefox.yml`)

| Secret | 설명 |
|--------|------|
| `AMO_JWT_ISSUER` | AMO API 키 (JWT issuer) |
| `AMO_JWT_SECRET` | AMO API 시크릿 |

API 키 발급: [addons.mozilla.org/developers/addon/api/key](https://addons.mozilla.org/en-US/developers/addon/api/key/)

## 개발

```bash
# Chromium에서 라이브 리로드
npm run dev

# 버전 업 (manifest.json 자동 업데이트)
npm run version:patch   # 1.0.0 → 1.0.1
npm run version:minor   # 1.0.0 → 1.1.0
npm run version:major   # 1.0.0 → 2.0.0

# 스토어용 zip 빌드
npm run build:chrome

# 린트 & 테스트
npm run lint        # JS
npm run lint:css    # CSS
npm test
```

## 커스터마이징

1. `manifest.json` 수정 — 이름, 설명, 권한, match 패턴
2. `assets/icons/`의 아이콘 교체
3. `src/popup/`에서 팝업 개발
4. `src/options/`에서 설정 페이지 구성
5. `src/background/`에서 백그라운드 로직 추가
6. `src/content/`에서 페이지 주입 스크립트 작성
7. `docs/PRIVACY_POLICY_TEMPLATE.md`를 복사해서 내용 작성

> **참고:** 기본 콘텐츠 스크립트는 `https://*/*`와 `http://*/*`에 매칭됩니다. 특정 사이트만 필요하다면 `manifest.json`의 `matches`를 좁혀서 권한을 최소화하세요. Chrome Web Store 심사에서 넓은 호스트 권한은 더 엄격하게 검토됩니다.

## 기여

PR 환영합니다. [PR 템플릿](.github/PULL_REQUEST_TEMPLATE.md)을 사용해 주세요.

## 라이선스

[MIT](LICENSE)
