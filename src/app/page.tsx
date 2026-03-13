const KAKAO_LINK = "https://open.kakao.com/o/g3Mpjbli";
const NAVER_MAP_LINK =
  "https://map.naver.com/v5/search/%ED%8C%A8%EC%8A%A4%ED%8A%B8%ED%8C%8C%EC%9D%B4%EB%B8%8C%20%EC%84%B1%EC%88%982%ED%98%B8%EC%A0%90";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden scroll-smooth">
      {/* Navigation - 1. 섹션 링크 추가 */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <img
            src="/logo-white.png"
            alt="DAYFOCUS LAB"
            className="h-6 w-auto sm:h-7"
          />
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden items-center gap-5 text-sm text-white/50 sm:flex">
              <a href="#curriculum" className="transition hover:text-white">
                커리큘럼
              </a>
              <a href="#reviews" className="transition hover:text-white">
                후기
              </a>
              <a href="#pricing" className="transition hover:text-white">
                수강료
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
            </div>
            <a
              href={KAKAO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer rounded-full bg-purple px-4 py-2 text-xs font-semibold text-white transition hover:bg-purple/80 sm:px-5 sm:text-sm"
            >
              수강 신청하기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute left-1/2 top-1/3 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-purple/20 blur-[80px] animate-pulse-glow sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 hidden rounded-full bg-bright-blue/15 blur-[100px] sm:block sm:h-[300px] sm:w-[300px]" />
        {/* Decorative brand icon */}
        <img
          src="/icon-purple.png"
          alt=""
          className="absolute -left-10 top-1/4 h-32 w-32 opacity-[0.06] rotate-12 sm:h-56 sm:w-56 sm:-left-16"
        />
        <img
          src="/icon-lightblue.png"
          alt=""
          className="absolute -right-8 bottom-1/4 h-28 w-28 opacity-[0.05] -rotate-12 sm:h-48 sm:w-48 sm:-right-12"
        />

        <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
          <div className="animate-fade-in-up">
            <span className="mb-4 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-purple/30 bg-purple/10 px-3 py-1.5 text-xs text-light-blue sm:mb-6 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm">
              비개발자를 위한 AI 자동화 강의
              <span className="hidden h-3.5 w-px bg-light-blue/25 sm:inline-block" />
              <span className="text-[10px] text-light-blue/60 sm:text-xs">3/28(토) 성수 · 선착순 10명</span>
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 mx-auto max-w-4xl text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
            스터디카페 사장님,
            <br />
            <span className="gradient-text">클로드코드</span>로
            <br />
            업무를 자동화하세요
          </h1>

          <p className="animate-fade-in-up-delay-2 mx-auto mt-5 max-w-2xl px-2 text-[0.9rem] leading-relaxed text-white/60 sm:mt-8 sm:px-0 sm:text-lg md:text-xl">
            개발자들이 쓰는 VSCode, 이제 사장님도 씁니다.
            <br className="hidden sm:block" />
            파일 정리부터 디자인, PDF 저장까지 4시간이면 충분합니다.
          </p>

          <div className="animate-fade-in-up-delay-3 mt-7 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={KAKAO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full max-w-xs rounded-full bg-purple px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple/25 transition active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-lg sm:hover:scale-105 sm:hover:bg-purple/80 sm:hover:shadow-xl sm:hover:shadow-purple/30"
            >
              카카오톡으로 신청하기
            </a>
            <span className="text-xs text-white/40 sm:text-sm">
              4시간 오프라인 강의 ·{" "}
              <span className="line-through text-white/30">40만원</span>{" "}
              <span className="font-semibold text-light-blue">30만원</span>
            </span>
          </div>

          {/* Terminal Preview */}
          <div className="mx-auto mt-10 max-w-2xl animate-fade-in-up-delay-3 sm:mt-16">
            <div className="terminal-window shadow-2xl shadow-purple/10 sm:animate-float">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-2 text-[10px] text-white/40 font-mono sm:text-xs">
                  Terminal — claude
                </span>
              </div>
              <div className="p-4 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm">
                <p className="text-white/40">
                  <span className="text-light-blue">$</span> claude
                </p>
                <p className="mt-2 text-white/60">
                  <span className="text-purple">Claude</span> &gt; 3월 신규
                  할인 이벤트 포스터 만들어줘. A4 사이즈로.
                </p>
                <p className="mt-1 text-[#28c840]/80">
                  ✓ 이벤트 포스터 디자인 완료
                </p>
                <p className="mt-2 text-white/60">
                  <span className="text-purple">Claude</span> &gt; 이거 PDF로
                  저장해줘.
                </p>
                <p className="mt-1 text-[#28c840]/80">
                  ✓ event-poster.pdf 저장 완료
                </p>
                <p className="mt-2 text-white/60">
                  <span className="text-purple">Claude</span> &gt; 바탕화면
                  파일 종류별로 정리해줘.
                </p>
                <p className="mt-1 text-[#28c840]/80">
                  ✓ 42개 파일 → 6개 폴더로 분류 완료
                </p>
                <p className="mt-3 text-white/30 animate-pulse">▊</p>
              </div>
            </div>
          </div>

          {/* 2. 스크롤 다운 인디케이터 */}
          <div className="mt-10 flex justify-center sm:mt-14">
            <a
              href="#social-proof"
              className="animate-bounce-down text-white/30 transition hover:text-white/60"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Numbers */}
      <section id="social-proof" className="border-y border-white/10 bg-deep-navy/50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 px-4 text-center sm:px-6">
          {[
            { icon: "⚡", number: "90%", label: "업무 자동화율" },
            { icon: "⏱", number: "4시간", label: "완성까지 걸리는 시간" },
            { icon: "💡", number: "0줄", label: "필요한 코딩 경험" },
          ].map((stat, i) => (
            <div key={i} className="stat-divider relative px-2">
              <span className="text-xl sm:text-2xl">{stat.icon}</span>
              <p className="mt-2 text-2xl font-bold text-purple sm:text-4xl">
                {stat.number}
              </p>
              <p className="mt-1 text-xs text-white/50 sm:mt-2 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="curve-bottom bg-white py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            AI 시대인 건 아는데,
            <br />
            <span className="text-purple">나는 뭐부터 해야 되지?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-gray-400 sm:mt-5 sm:text-base">
            혼자가 아닙니다. 대부분의 사장님들이 이런 상태입니다.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:mt-16 sm:gap-5">
            {[
              {
                emoji: "😰",
                text: "ChatGPT 써봤는데, 복붙 말고는 뭘 해야 할지 모르겠다",
              },
              {
                emoji: "🤷",
                text: "AI가 대세라는데, 내 매장 운영에 어떻게 쓰는 건지 감이 안 온다",
              },
              {
                emoji: "😤",
                text: "유튜브 보고 따라 해봤는데, 나한테 맞는 내용이 하나도 없다",
              },
              {
                emoji: "😓",
                text: "클로드? 코딩? 터미널? 용어부터 막힌다",
              },
              {
                emoji: "⏰",
                text: "배우고 싶긴 한데, 매장 운영하면서 시간 내기가 너무 어렵다",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="pain-card flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:rounded-2xl sm:p-6"
              >
                <span className="shrink-0 text-2xl sm:text-3xl">
                  {item.emoji}
                </span>
                <p className="text-base font-medium text-gray-700 sm:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-base font-semibold text-gray-900 sm:mt-12 sm:text-xl">
            이 강의는{" "}
            <span className="text-purple">딱 이런 분들을 위해</span>{" "}
            만들었습니다.
            <br className="hidden sm:block" />
            4시간이면 &ldquo;나도 할 수 있구나&rdquo;를 직접 느끼게 됩니다.
          </p>
        </div>
      </section>

      {/* Beyond the course */}
      <section className="bg-gray-50 py-16 pt-24 sm:py-24 sm:pt-32 md:py-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-purple/10 px-4 py-1.5 text-xs font-medium text-purple sm:text-sm">
            강의 그 이후
          </span>
          <h2 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            왜 <span className="text-purple">클로드코드</span>인가?
            <br />
            확장성 때문입니다.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 sm:mt-6 sm:text-base">
            ChatGPT, 캔바로는 복붙이 끝입니다.
            <br className="hidden sm:block" />
            하지만 VSCode + 클로드코드를 한번 익히면
            <br className="hidden sm:block" />
            <strong className="text-gray-700">
              바이브코딩으로 웹사이트, 앱, 업무 도구까지 직접 만들 수 있습니다.
            </strong>
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            {[
              {
                icon: "🛠️",
                title: "업무 자동화",
                desc: "이 강의에서 배우는 것",
              },
              {
                icon: "🌐",
                title: "바이브코딩",
                desc: "웹사이트·앱을 직접 제작",
              },
              {
                icon: "🚀",
                title: "무한 확장",
                desc: "아이디어만 있으면 뭐든 가능",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="expand-card cursor-default rounded-xl border border-gray-200 bg-white p-5 sm:p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple/5 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                  {item.icon}
                </span>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-400 sm:mt-10 sm:text-base">
            코딩을 몰라도, 클로드코드에게 말하면 됩니다.
            <br />
            <strong className="text-purple">
              이 강의가 그 첫 번째 시작점입니다.
            </strong>
          </p>
        </div>
      </section>

      {/* Before / After - 6. 시간 절약 수치 강조 */}
      <section className="bg-gray-50 pb-16 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            클로드코드 <span className="text-purple">도입 전 vs 후</span>
          </h2>
          <div className="mt-10 space-y-4 sm:mt-16 sm:space-y-5">
            {[
              {
                task: "이벤트 포스터 제작",
                before: "2~3시간 (캔바 or 외주)",
                after: "5분 (AI가 디자인 → PDF)",
                saved: "시간 97% 절약",
              },
              {
                task: "네이버 리뷰 답변",
                before: "30분 (하나하나 타이핑)",
                after: "3분 (AI가 톤 맞춰 자동 생성)",
                saved: "시간 90% 절약",
              },
              {
                task: "파일 정리",
                before: "계속 미루는 중...",
                after: "10분 (폴더 자동 분류)",
                saved: "더 이상 안 미룸",
              },
              {
                task: "PDF 포스터 저장",
                before: "캔바 → 다운로드 → 포맷 깨짐",
                after: "VSCode에서 바로 PDF 저장",
                saved: "외부 도구 불필요",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg hover:shadow-purple/5 sm:flex-row sm:rounded-2xl"
              >
                <div className="ba-arrow flex-1 border-b border-gray-100 p-4 sm:border-b-0 sm:border-r sm:p-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {item.task}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs text-red-400">
                      ✕
                    </span>
                    <p className="text-sm text-gray-500 sm:text-base">
                      {item.before}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-between bg-purple/[0.03] p-4 sm:p-5">
                  <div>
                    <p className="text-xs font-semibold text-purple uppercase tracking-wider">
                      클로드코드 사용 후
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-xs text-green-500">
                        ✓
                      </span>
                      <p className="text-sm font-medium text-gray-900 sm:text-base">
                        {item.after}
                      </p>
                    </div>
                  </div>
                  <span className="ml-2 shrink-0 rounded-full bg-purple/10 px-2.5 py-1 text-[10px] font-bold text-purple sm:px-3 sm:text-xs">
                    {item.saved}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="curriculum" className="relative py-16 sm:py-24 md:py-32">
        <div className="absolute left-0 top-0 hidden h-[400px] w-[400px] rounded-full bg-bright-blue/10 blur-[120px] sm:block" />
        <img
          src="/icon-purple.png"
          alt=""
          className="absolute right-4 top-8 h-20 w-20 opacity-[0.07] rotate-6 sm:right-12 sm:top-16 sm:h-36 sm:w-36"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            4시간 후,{" "}
            <span className="gradient-text">이 모든 게 가능합니다</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/50 sm:mt-4 sm:text-base">
            코딩 경험 제로에서 시작해도 괜찮습니다
          </p>

          <div className="timeline-line relative mt-10 grid gap-4 sm:mt-16 sm:gap-8 lg:grid-cols-2">
            {[
              {
                step: "01",
                title: "VSCode + 클로드코드 설치 & 세팅",
                desc: "개발자들의 도구 VSCode를 설치하고, 클로드코드를 연결합니다. 터미널이 뭔지, 어떻게 명령하는지 기초부터.",
                tag: "환경 세팅",
                time: "30분",
              },
              {
                step: "02",
                title: "컴퓨터 파일 자동 정리",
                desc: "단순한 파일 정리가 아닙니다. 클로드코드가 어떻게 명령을 이해하고 실행하는지, 그 원리를 파악하는 실습입니다.",
                tag: "파일 관리",
                time: "1시간",
              },
              {
                step: "03",
                title: "AI 디자이너로 포스터 제작",
                desc: "클로드코드에게 '이벤트 포스터 만들어줘'라고 말하면 디자인이 완성됩니다. PDF 저장까지 원클릭.",
                tag: "디자인 자동화",
                time: "1시간 30분",
              },
              {
                step: "04",
                title: "PDF 저장까지 VSCode에서 한번에",
                desc: "만든 디자인을 VSCode에서 바로 PDF로 저장. 외부 프로그램 없이 클로드코드가 다 해결합니다.",
                tag: "PDF 자동화",
                time: "1시간",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="timeline-card group rounded-xl border border-purple/20 bg-white/5 p-5 backdrop-blur-sm transition sm:rounded-2xl sm:p-8 sm:hover:border-purple/40 sm:hover:bg-white/10"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple/20 font-mono text-sm font-bold text-purple transition group-hover:bg-purple group-hover:text-white sm:h-12 sm:w-12 sm:text-base">
                    {item.step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block rounded-full bg-purple/20 px-2.5 py-0.5 text-[10px] font-medium text-light-blue sm:px-3 sm:text-xs">
                        {item.tag}
                      </span>
                      <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] text-white/40 sm:px-3 sm:text-xs">
                        ⏱ {item.time}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-base font-semibold sm:mt-2 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/50 sm:mt-2 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="curve-top curve-bottom bg-white py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            <span className="text-purple">강사</span> 소개
          </h2>
          <div className="mx-auto mt-10 max-w-3xl sm:mt-16">
            <div className="instructor-card flex flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:rounded-3xl sm:p-10 sm:text-left">
              <div className="relative shrink-0">
                <img
                  src="/instructor.png"
                  alt="이지인(Jinny) - DAYFOCUS LAB 대표"
                  className="h-20 w-20 rounded-full object-cover shadow-lg shadow-purple/20 ring-4 ring-purple/10 sm:h-28 sm:w-28"
                />
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-purple text-xs text-white shadow-md sm:h-8 sm:w-8">
                  ✓
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  이지인{" "}
                  <span className="text-sm font-medium text-gray-400 sm:text-base">
                    Jinny
                  </span>
                </h3>
                <p className="mt-1 text-sm font-medium text-purple sm:text-base">
                  DAYFOCUS LAB 대표
                </p>
                <ul className="mt-4 space-y-2.5 text-left text-sm text-gray-600 sm:space-y-3 sm:text-base">
                  {[
                    "전 코르카 AX(AI Transformation) 엔지니어",
                    "전 코드잇 LX Planning Manager (운영 기획·자동화·개발)",
                    "스터디카페 2개 지점 직접 운영 중",
                    "클로드코드로 매장 운영 업무 90% 자동화 달성",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple/10 text-[10px] text-purple">
                        ✓
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews - 7. 따옴표 아이콘 추가 */}
      <section id="reviews" className="py-16 pt-24 sm:py-24 sm:pt-32 md:py-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            수강생 <span className="gradient-text">후기</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-white/40 sm:mt-4 sm:text-base">
            실제 수강생분들의 생생한 후기입니다
          </p>

          <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
            {[
              {
                name: "수강생 A",
                quote:
                  "GPT도 제대로 못 썼는데,\nDAYFOCUS LAB 대표님 강의 듣고\n이제 클로드코드로 바이브코딩도 합니다.",
                tag: "비개발자 → 바이브코딩",
              },
              {
                name: "수강생 B",
                quote:
                  "클로드코드로 경쟁사 분석 자료를 만들었더니\n직장에서 인정받고 있습니다.\n상사가 어떻게 한 거냐고 물어봤어요.",
                tag: "직장에서 인정받는 AI 활용",
              },
              {
                name: "수강생 C",
                quote:
                  "포스터를 외주 맡기면 5만원,\n이제 클로드코드한테 시키면 5분.\n매달 수십만원 아끼고 있습니다.",
                tag: "외주비 절감",
              },
              {
                name: "수강생 D",
                quote:
                  "컴퓨터 켜면 뭐부터 해야 할지 막막했는데,\n이제 터미널 열고 클로드한테 말 걸면\n다 해결됩니다.",
                tag: "AI가 내 비서",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-white px-6 py-8 text-gray-900 shadow-lg shadow-purple/5 transition hover:shadow-xl hover:shadow-purple/10 sm:rounded-3xl sm:px-10 sm:py-10"
              >
                {/* 따옴표 아이콘 */}
                <span className="absolute -top-4 left-5 text-5xl leading-none text-purple/20 sm:-top-5 sm:left-8 sm:text-7xl">
                  &ldquo;
                </span>
                <p className="relative whitespace-pre-line text-base font-semibold leading-relaxed text-gray-800 sm:text-lg sm:leading-relaxed">
                  {review.quote}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
                  <span className="text-sm font-medium text-gray-400 sm:text-base">
                    — {review.name}
                  </span>
                  <span className="rounded-full bg-purple/5 px-3 py-1 text-xs font-medium text-purple sm:text-sm">
                    {review.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - 4. 보증 뱃지 + 9. 인기 뱃지 */}
      <section id="pricing" className="curve-top bg-white py-16 pt-24 sm:py-24 sm:pt-32 md:py-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            <span className="text-purple">수강료</span> 안내
          </h2>
          <div className="mx-auto mt-10 max-w-md sm:mt-16">
            <div className="pricing-glow relative z-0 rounded-2xl bg-navy p-7 text-white shadow-xl shadow-purple/20 sm:rounded-3xl sm:p-10">
              {/* 인기 뱃지 */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2">
                <span className="rounded-full bg-gradient-to-r from-purple to-bright-blue px-4 py-1 text-xs font-bold text-white shadow-md sm:text-sm">
                  BEST
                </span>
                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md sm:text-sm">
                  선착순 10명
                </span>
              </div>

              <div className="mt-2 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-purple px-3 py-1 text-xs font-medium text-white sm:px-4 sm:text-sm">
                    오프라인 강의
                  </span>
                  <span className="inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white sm:px-4 sm:text-sm">
                    10만원 할인
                  </span>
                </div>
                <p className="text-[11px] text-white/40 sm:text-xs">
                  온라인 수강도 가능하지만, 실습 위주 강의라 오프라인을 적극 추천합니다
                </p>
              </div>
              <div className="mt-5 sm:mt-6">
                <span className="text-lg text-white/40 line-through sm:text-xl">
                  40만원
                </span>
                <span className="ml-2 text-4xl font-bold sm:text-5xl">
                  30만원
                </span>
              </div>
              <p className="mt-1.5 text-sm text-white/50 sm:mt-2">
                4시간 오프라인 실습 강의 · 선착순 10명 · 될 때까지 서포트
              </p>
              <ul className="mt-6 space-y-2.5 text-left text-sm text-white/80 sm:mt-8 sm:space-y-3 sm:text-base">
                {[
                  "VSCode + 클로드코드 세팅 가이드",
                  "실습 위주 오프라인 라이브 강의 (선착순 10명)",
                  "강의 후 2달간 수강생 전용 톡방에서 질문 무제한",
                  "강의 녹화본 + 자료 PDF 제공",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple/30 text-[10px] text-light-blue">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={KAKAO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer mt-6 block w-full rounded-full bg-purple py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-purple/25 transition active:scale-95 sm:mt-8 sm:py-4 sm:text-lg sm:hover:scale-105 sm:hover:bg-purple/80 sm:hover:shadow-xl sm:hover:shadow-purple/30"
              >
                카카오톡으로 신청하기
              </a>

              {/* 보증 뱃지 */}
              <p className="mt-4 text-center text-xs text-white/40 sm:mt-5 sm:text-sm">
                🛡️ 강의 시작 7일 전까지 어떤 이유든 전액 환불
              </p>
            </div>

            {/* 일정 & 장소 */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 text-left sm:mt-8 sm:rounded-3xl sm:p-7">
              <h3 className="text-center text-base font-bold text-gray-900 sm:text-lg">
                강의 일정 & 장소
              </h3>
              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple/10 text-base">
                    📅
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 sm:text-base">
                      2025년 3월 28일 (토)
                    </p>
                    <p className="text-xs text-gray-400 sm:text-sm">
                      오후 1:00 ~ 5:00 (4시간)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple/10 text-base">
                    📍
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 sm:text-base">
                      패스트파이브 성수 2호점
                    </p>
                    <p className="text-xs text-gray-400 sm:text-sm">
                      서울 성동구 성수일로8길 55 · 성수역 2번 출구 도보 1분
                    </p>
                    <a
                      href={NAVER_MAP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#03C75A]/10 px-3 py-1 text-xs font-medium text-[#03C75A] transition hover:bg-[#03C75A]/20"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      네이버 지도로 보기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - 5. 첫 번째 항목 기본 열림 */}
      <section id="faq" className="py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            자주 묻는 <span className="text-purple">질문</span>
          </h2>
          <div className="mt-10 space-y-3 sm:mt-16 sm:space-y-4">
            {[
              {
                q: "코딩을 전혀 몰라도 수강할 수 있나요?",
                a: "네, 당연합니다! 이 강의는 비개발자를 위해 설계되었습니다. 컴퓨터 기본 사용만 할 줄 아시면 충분합니다.",
              },
              {
                q: "강의 후에도 혼자서 활용할 수 있나요?",
                a: "물론입니다! 강의 종료 후 수강생 전용 톡방을 2달간 운영하며, 자유롭게 질문하실 수 있습니다.",
              },
              {
                q: "클로드코드 사용 비용이 따로 있나요?",
                a: "네, Anthropic 구독이 별도로 필요합니다. Pro($20/월)와 Max($100/월) 중 선택하시면 됩니다. 둘 다 클로드코드 사용이 가능하지만 사용량(토큰)에 차이가 있어서, Pro는 실습 중 사용 제한이 걸릴 수 있습니다. 넉넉하게 실습하시려면 Max를 추천드리고, 강의 당월만 결제 후 다운그레이드도 가능합니다. 자세한 안내는 강의 전 카카오톡으로 드립니다.",
              },
              {
                q: "Mac만 되나요? Windows도 가능한가요?",
                a: "Mac과 Windows 모두 가능합니다. 강의에서 각 환경별 세팅 방법을 안내드립니다.",
              },
              {
                q: "환불 규정은 어떻게 되나요?",
                a: "강의 시작 7일 전까지 어떤 이유든 전액 환불 가능합니다.",
              },
              {
                q: "4시간 안에 못 따라가면 어떻게 되나요?",
                a: "걱정 마세요. 강의 후에도 될 때까지 함께 해드립니다. 그날 끝날 때까지 1:1로 도와드립니다.",
              },
              {
                q: "강의 녹화본을 제공하나요?",
                a: "네, 녹화본 제공됩니다.",
              },
            ].map((item, i) => (
              <details
                key={i}
                open={i === 0}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all sm:rounded-2xl sm:hover:border-purple/30 sm:hover:bg-white/[0.08]"
              >
                <summary className="cursor-pointer list-none p-4 text-sm font-semibold sm:p-6 sm:text-base">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple/20 text-xs text-purple">
                        Q
                      </span>
                      <span>{item.q}</span>
                    </div>
                    <span className="shrink-0 text-lg text-purple transition group-open:rotate-45 sm:text-xl">
                      +
                    </span>
                  </div>
                </summary>
                <div className="px-4 pb-4 pl-[3.25rem] text-sm leading-relaxed text-white/60 sm:px-6 sm:pb-6 sm:pl-[4.25rem] sm:text-base">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-purple/15 via-purple/5 to-transparent" />
        <img
          src="/icon-lightblue.png"
          alt=""
          className="absolute left-4 bottom-12 h-24 w-24 opacity-[0.05] -rotate-6 sm:left-16 sm:h-40 sm:w-40"
        />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/10 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-14">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              아직도 반복 업무에
              <br />
              <span className="gradient-text">시간을 쓰고 계신가요?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/50 sm:mt-6 sm:text-lg">
              4시간 투자로 매일 반복되는 업무를 자동화하세요.
              <br className="hidden sm:block" />
              남는 시간에 진짜 중요한 일에 집중할 수 있습니다.
            </p>
            <a
              href={KAKAO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-7 inline-block w-full max-w-xs rounded-full bg-purple px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple/25 transition active:scale-95 sm:mt-10 sm:w-auto sm:px-10 sm:py-4 sm:text-lg sm:hover:scale-105 sm:hover:bg-purple/80 sm:hover:shadow-xl sm:hover:shadow-purple/30"
            >
              카카오톡으로 신청하기
            </a>
            <p className="mt-4 text-xs text-white/30 sm:text-sm">
              선착순 마감 · 소수 정원제로 운영됩니다
            </p>
          </div>
        </div>
      </section>

      {/* Footer - 10. 운영 정보 + 카카오톡 링크 */}
      <footer className="border-t border-white/10 py-8 pb-24 sm:py-10 sm:pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <img
                src="/logo-white.png"
                alt="DAYFOCUS LAB"
                className="h-5 w-auto sm:h-6"
              />
              <p className="mt-1.5 text-xs text-white/30">
                &copy; {new Date().getFullYear()} DAYFOCUS LAB. All rights
                reserved.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:items-end">
              <a
                href={KAKAO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 transition hover:text-purple"
              >
                💬 카카오톡 문의하기
              </a>
              <p className="text-xs text-white/20">
                대표 이지인 · dayfocuslab@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* 3. Mobile Sticky CTA - 가격 표시 */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-purple/20 bg-navy/95 p-3 backdrop-blur-md sm:hidden">
        <a
          href={KAKAO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer flex w-full items-center justify-center gap-2 rounded-full bg-purple py-3 text-sm font-semibold text-white shadow-lg shadow-purple/25 active:scale-95"
        >
          <span>수강 신청하기 (선착순 10명)</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
            30만원
          </span>
        </a>
      </div>
    </div>
  );
}
