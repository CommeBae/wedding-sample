/*
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/hero/54.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "허준배",
    nameEn: "Junbae Heo",
    father: "허정석",
    mother: "최성희",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "한선애",
    nameEn: "Sunae Han",
    father: "한용수",
    mother: "방현순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-05-30",
    time: "17:40",
    venue: "KDW 강동웨딩홀",
    hall: "마이더스 홀",
    address: "서울특별시 강동구 천호대로 1102",
    tel: "02-477-7700",
    mapLinks: {
      kakao: "https://place.map.kakao.com/10124741",
      naver: "https://naver.me/FPn5kMTA"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "사랑하는 사람과 평생을 약속하는 날,\n 증인이 되어주실 소중한 여러분들을 초대합니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "다른 곳을 바라보며 다른 환경에서 살던 두 사람이,\n이제 같은 길을 걸어가는 단짝이 되려고 합니다.\n모든 순간을 아름답게 만들고 그 어떤 역경도 이겨내는,\n매 순간 서로를 위하고 존중하는 부부가 되겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "허준배", bank: "토스뱅크", number: "1000-3675-2456" },
      { role: "아버지", name: "허정석", bank: "하나은행", number: "145-19-00395-4" },
      { role: "어머니", name: "최성희", bank: "농협은행", number: "3022089381881" }
    ],
    bride: [
      { role: "신부", name: "한선애", bank: "국민은행", number: "91086359612" },
      { role: "아버지", name: "한용수", bank: "농협은행", number: "352-0220-4649-83" },
      { role: "어머니", name: "방현순", bank: "농협은행", number: "235084-52-357501" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "준배 ♥ 선애 결혼합니다",
    description: "2026년 5월 30일, 소중한 분들을 초대합니다."
  }
};
