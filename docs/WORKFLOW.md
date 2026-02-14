# SPEC 웹사이트 개발 워크플로우 (Soft Rules)

이 문서는 "강제 규정"이 아니라, 팀이 같은 방향으로 빠르게 개발/배포하기 위한 **공유 가이드**입니다.

## TL;DR

- 브랜치: `main`(프로덕션), `dev`(통합/검증), `feat/*`(작업 브랜치)
- PR: 보통 `feat/* -> dev`, 릴리즈는 `dev -> main`
- CI: PR/push 시 `lint`, `typecheck`, `build` 확인
- 배포: Vercel 프로덕션 도메인 `https://skku-spec.com`

---

## 1) 브랜치 전략

### 기본 브랜치

- `main`: 프로덕션(실사용) 기준 브랜치
- `dev`: 통합/검증 브랜치(여러 작업을 모아 확인)

### 작업 브랜치 네이밍(권장)

- `feat/<topic>`: 기능 추가
- `fix/<topic>`: 버그 수정
- `chore/<topic>`: 설정/정리
- `docs/<topic>`: 문서

예시:

```bash
git checkout -b feat/about-curriculum
```

---

## 2) 작업 흐름(권장)

### 일반 작업

1. `feat/*` 브랜치 생성
2. 커밋/푸시
3. PR 생성: `feat/* -> dev`
4. CI 결과 확인(아래 3번)
5. `dev`에서 실제 사이트(프리뷰/통합 상태) 확인

### 릴리즈(배포)

1. PR 생성: `dev -> main`
2. 머지
3. Vercel 프로덕션(`skku-spec.com`)에서 확인

> 참고: 팀 운영상 AI(Claude Code 같은 CLI)가 PR 생성/머지까지 할 수 있습니다.
> 이 문서는 그 흐름을 "사람이 하는 것처럼" 정리한 것입니다.

---

## 3) CI(Continuous Integration)

GitHub Actions 워크플로우: `CI/CD` (`.github/workflows/cicd.yml`)

### 언제 도나?

- `dev`, `main`에 대한 `pull_request`
- `dev`, `main`에 대한 `push`

### 무엇을 확인하나?

- Lint: `npm run lint`
- Typecheck: `npx tsc --noEmit`
- Build: `npm run build`

CI가 빨간불이면, "머지를 막는 강제 장치"는 아니어도 **원인 확인 후 진행**을 권장합니다.

---

## 4) CD(Continuous Deployment) / 배포

### 프로덕션

- 프로덕션 도메인: `https://skku-spec.com`
- Vercel 프로젝트: `yc-clone`

### GitHub Actions 기반 CD (선택)

현재 워크플로우에는 CD job이 포함되어 있고, 아래 시크릿이 설정되면 자동 배포가 가능합니다.

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

> 현재 레포에는 GitHub Actions 시크릿이 아직 없으면, CD 단계는 자동으로 스킵됩니다.

### 수동 배포(필요 시)

Vercel Dashboard에서 배포하거나, CLI로도 배포할 수 있습니다.

```bash
vercel --prod
```

---

## 5) 환경 변수(중요)

이 프로젝트는 Supabase + middleware 기반으로 동작합니다. **Vercel 환경변수 미설정 시 전체 요청이 500으로 터질 수 있습니다.**

필수(최소):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

원칙:

- `.env.local`은 커밋하지 않습니다.
- `NEXT_PUBLIC_*` 값은 클라이언트에 노출될 수 있습니다(의도된 동작).

---

## 6) 롤백(장애 대응)

가장 빠른 복구는 Vercel에서 **이전 배포로 되돌리기**입니다.

권장 플로우:

1. Vercel Dashboard → Deployments → 직전 정상 배포 확인
2. 도메인(`skku-spec.com`)을 이전 배포로 재지정(rollback)
3. 원인 수정 후 다시 배포

---

## 7) (옵션) PR/머지 CLI 예시

```bash
# PR 생성 (base=dev)
gh pr create --base dev --fill

# 머지
gh pr merge --squash --delete-branch
```
