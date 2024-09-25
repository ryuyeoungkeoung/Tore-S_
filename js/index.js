"use strict";

//커서 태그들
const cursorWrap = document.querySelector("#cursor");
const cursor = document.querySelector(".cursor__default__inner");
const main_2 = document.querySelectorAll(".main_2");
const cursorBtag = document.getElementById("viewsite");
// 2
const word_wrap = document.querySelectorAll(".word_wrap");
// 3
const footer_sol = document.querySelectorAll(".footer_sol");
// //on_1부터 on_31까지
// 커서 요소
const cursor_box = document.querySelector(".cursor");
// 박스 요소와 이벤트 리스너 설정 함수
for (let i = 1; i <= 31; i++) {
  const box = document.querySelector(`.box_${i}`);

  if (box) {
    // 커서 모양을 변경하는 함수
    const setCursorClass = (add) => {
      cursor.classList.toggle(`on_${i}`, add);
    };

    // 이벤트 리스너 추가
    box.addEventListener("mouseover", () => setCursorClass(true));
    box.addEventListener("mouseout", () => setCursorClass(false));
  }
}

//마우스 커서 따라다니기
window.addEventListener("mousemove", function (event) {
  cursorWrap.style.left = event.clientX + "px";
  cursorWrap.style.top = event.clientY + "px";
});

// .main_2 요소에 마우스가 들어올 때 커서 모양을 변경하는 함수
function onViewSiteCusor() {
  cursor.classList.add("on");
  cursorBtag.style.fontSize = "14px";
}
// .main_2 요소에서 마우스가 나갈 때 커서 모양을 원래대로 변경하는 함수
function outViewSiteCusor() {
  cursor.classList.remove("on");
  cursorBtag.style.fontSize = "0px";
}
// 이벤트 리스너 추가1
main_2.forEach((section, i) => {
  section.addEventListener("mouseenter", onViewSiteCusor);
  section.addEventListener("mouseleave", outViewSiteCusor);
});

// 2-1.word_wrap 요소에 마우스가 들어올 때 커서 모양을 변경하는 함수
function onViewSiteCusor2() {
  cursor.classList.add("on2");
}
// 2-2.word_wrap 요소에 마우스가 나갈 때 커서 모양을 변경하는 함수
function outViewSiteCusor2() {
  cursor.classList.remove("on2");
}
// 3-3이벤트 리스너 추가2
word_wrap.forEach((section, i) => {
  section.addEventListener("mouseenter", onViewSiteCusor2);
  section.addEventListener("mouseleave", outViewSiteCusor2);
});

// 3-1.footer_sol 요소에 마우스가 들어올 때 커서 모양을 변경하는 함수
function onViewSiteCusor2() {
  cursor.classList.add("on2");
}
// 3-2.word_wrap 요소에 마우스가 나갈 때 커서 모양을 변경하는 함수
function outViewSiteCusor2() {
  cursor.classList.remove("on2");
}
// 3-3이벤트 리스너 추가2
footer_sol.forEach((section, i) => {
  section.addEventListener("mouseenter", onViewSiteCusor2);
  section.addEventListener("mouseleave", outViewSiteCusor2);
});

// // 커서 클릭시 해당 섹션 이동
gsap.registerPlugin(ScrollToPlugin);
const menu_work = document.querySelector("#menu_work");
const menu_recog = document.querySelector("#menu_recog");
const menu_contact = document.querySelector("#menu_contact");
// work
menu_work.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#scroll_1" },
  });
});

// recog
menu_recog.addEventListener("click", () => {
  gsap.to(window, {
    duration: 4,
    scrollTo: { y: "#scroll_2" },
  });
});

// cont
menu_contact.addEventListener("click", () => {
  gsap.to(window, {
    duration: 5,
    scrollTo: { y: "#scroll_3" },
  });
});

// 스크롤 비활성화
document.addEventListener("DOMContentLoaded", function () {
  // 4초 동안 스크롤 비활성화
  document.body.classList.add("no-scroll");
  setTimeout(() => {
    document.body.classList.remove("no-scroll");
  }, 5000);
});

// 로딩창 페이드 인 텍스트
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector("#next-text_1");

  if (textElement) {
    // <br> tag
    const text = "Interactive Designer & Co-Founder at Baseborn";

    //<span> tags  <br> tags
    const html = text
      .split("")
      .map((char, index) => {
        if (char === "&") {
          console.log(`Creating span for &: ${char}`); // Debugging
          return `<span class="and" style="--delay:${
            index * 0.02
          }s">${char}</span><br>`; // Insert <br> after '&'
        }
        return `<span style="--delay:${index * 0.02}s">${char}</span>`;
      })
      .join("");

    // textElement적용
    textElement.innerHTML = html;

    setTimeout(() => {
      const spans = textElement.querySelectorAll("span");
      spans.forEach((span) => {
        console.log(`Adding animation class to: ${span.textContent}`); // Debugging
        span.classList.add("animate");
      });
    }, 1500); // 1초 후에 페이지 로딩

    setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 1500);
  }
});

// 로딩창 스크롤
/**
 * 페이지를 부드럽게 맨 위로 스크롤하는 함수
 *  - 스크롤을 시작하기 전 대기 시간 (밀리초)
 */
scrollToTopAfterDelay();
function scrollToTopAfterDelay(delay = 3200) {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
    });
  }, delay); // delay: 대기 시간 (밀리초), 기본값은 3초
}
// 스크롤 트리거
gsap.registerPlugin(ScrollTrigger);
// display block 속성 변환

gsap.fromTo(
  ".next-text",
  {
    opacity: 0,
    duration: 1,
  },
  {
    opacity: 1,
    duration: 1,
  },
  2
);
//
// 인포1
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".two", //객체기준범위
      start: "0% 10%", //시작 지점
      //markers: true, //개발가이드선
    },
  })
  .to(
    ".two .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".two", //객체기준범위
      start: "0% 10%", //시작 지점
      //markers: true, //개발가이드선
    },
  })
  .to(
    ".two .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );

// 인포2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".three", //객체기준범위
      start: "0% 0%", //시작 지점
      end: "10% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".three .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".three", //객체기준범위
      start: "0% 0%", //시작 지점
      end: "10% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".three .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );

// 인포3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".for", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".for .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".for", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".for .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );

// 인포4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".fiv", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".fiv .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".fiv", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".fiv .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );

// 인포5
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".six", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".six .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".six", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".six .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );

// 인포6
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sev", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".sev .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sev", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".sev .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );

// 인포7
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".eig", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".eig .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".eig", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".eig .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );

// 인포8
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".nine", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".nine .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".nine", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".nine .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );

// 인포9
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".ten", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".ten .info_a",
    {
      // 시작
      y: "-20px",
    },
    0.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".ten", //객체기준범위
      start: "0% 10%", //시작 지점
      end: "0% 10%",
      // markers: true, //개발가이드선
    },
  })
  .to(
    ".ten .info_b",
    {
      // 시작
      y: "-20px",
    },
    0.8
  );
// --------------------------------------
// GSAP와 ScrollTrigger 플러그인 등록1
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto1",
      {
        rotate: 20,
        x: "140%",
        y: "30%",
      },
      {
        duration: 15,
        x: "-300%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".two",
          start: "-50% 0%",
          end: "200% 80%",
          scrub: 1,
          scale: "0.5",
          // markers: true,
        },
      }
    );
  },

  //1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto1",
      {
        rotate: 20,
        x: "140%",
        y: "30%",
      },
      {
        duration: 15,
        x: "-300%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".two",
          start: "-300% 50%",
          end: "200% 0%",
          scrub: 1,
          scale: "0.5",
          // markers: true,
        },
      }
    );
  },
});
// 2
// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 미디어 쿼리 정의 1 섹션2 영상 2 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto2",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "150%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 15,
        x: "-350%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".three",
          start: "-100% 0%",
          end: "200% -20%",
          scrub: 1,
          scale: "0.5",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto2",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-400%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".three",
          start: "-300% 50%",
          end: "150% -60%",
          scrub: 1,
          scale: "0.6",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },
});

//3
// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 미디어 쿼리 정의 1 섹션2 영상 3 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto3",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-400%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".for",
          end: "200% -20%",
          scrub: 1,
          scale: "0.5",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto3",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-400%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".for",
          start: "-300% 100%",
          end: "150% -150%",
          scrub: 1,
          scale: "0.6",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },
});

// 4
// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 미디어 쿼리 정의 1 섹션2 영상 4 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto4",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "150%",
        y: "-20%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-350%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".fiv",
          start: "-100% 0%",
          end: "200% -20%",
          scrub: 1,
          scale: "0.5",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto4",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-400%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".fiv",
          start: "-300% 100%",
          end: "150% -150%",
          scrub: 1,
          scale: "0.6",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },
});

// 5
// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 미디어 쿼리 정의 1 섹션2 영상 5 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto5",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "150%",
        y: "-20%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-350%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".six",
          start: "-100% 0%",
          end: "200% -20%",
          scrub: 1,
          scale: "0.5",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto5",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-400%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".six",
          start: "-300% 100%",
          end: "150% -150%",
          scrub: 1,
          scale: "0.6",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },
});

// 6
// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 미디어 쿼리 정의 1 섹션2 영상 6 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto6",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "150%",
        y: "-20%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-350%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".sev",
          start: "-100% 0%",
          end: "200% -20%",
          scrub: 1,
          scale: "0.5",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto6",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-400%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".sev",
          start: "-300% 100%",
          end: "150% -150%",
          scrub: 1,
          scale: "0.6",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },
});

// 7
// 미디어 쿼리 정의 1 섹션2 영상 7 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto7",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "150%",
        y: "-20%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-350%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".eig",
          start: "-100% 0%",
          end: "200% -20%",
          scrub: 1,
          scale: "0.5",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto7",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 5,
        x: "-400%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".eig",
          start: "-300% 50%",
          end: "400% -50%",
          scrub: 1,
          scale: "0.6",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },
});

// 8
// 미디어 쿼리 정의 1 섹션2 영상 8 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto8",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "150%",
        y: "-20%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-350%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".nine",
          start: "-100% 0%",
          end: "200% -20%",
          scrub: 1,
          scale: "0.5",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto8",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-400%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".nine",
          start: "-300% 70%",
          end: "150% -150%",
          scrub: 1,
          scale: "0.6",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },
});

// 9
// 미디어 쿼리 정의 1 섹션2 영상 9 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.fromTo(
      ".poto9",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "150%",
        y: "-20%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-350%",
        y: "-30%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".ten",
          start: "-100% 0%",
          end: "200% -20%",
          scrub: 1,
          scale: "0.5",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".poto9",
      {
        // 시작할 때 모습
        rotate: 20,
        x: "400%",
        y: "30%",
        scale: "1",
      },
      {
        // 끝났을 때 모습
        duration: 10,
        x: "-400%",
        y: "-105%",
        rotation: -20,
        scrollTrigger: {
          trigger: ".ten",
          start: "-300% 50%",
          end: "150% -150%",
          scrub: 1,
          scale: "0.6",
          // markers: true, // 개발 가이드 선 활성화
        },
      }
    );
  },
});

// -------------------------------------------
//섹션 메인 텍스트 글자 크기 1 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal11", {
      scrollTrigger: {
        duration: 100,
        trigger: ".two_sec",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal11", {
      scrollTrigger: {
        trigger: ".two_sec",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal11", {
      scrollTrigger: {
        duration: 100,
        trigger: ".two_sec",
        start: "-150% 100%",
        end: "100% 0%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal11", {
      scrollTrigger: {
        trigger: ".two_sec",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});
//섹션 메인 텍스트 글자 크기 2 묶음

ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal2", {
      scrollTrigger: {
        duration: 100,
        trigger: ".three",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal2", {
      scrollTrigger: {
        trigger: ".three",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal2", {
      scrollTrigger: {
        duration: 100,
        trigger: ".three",
        start: "-150% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal2", {
      scrollTrigger: {
        trigger: ".three",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});

//섹션 메인 텍스트 글자 크기 3 묶음

ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal3", {
      scrollTrigger: {
        duration: 100,
        trigger: ".for",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal3", {
      scrollTrigger: {
        trigger: ".for",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal3", {
      scrollTrigger: {
        duration: 100,
        trigger: ".for",
        start: "-150% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal3", {
      scrollTrigger: {
        trigger: ".for",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});

//섹션 메인 텍스트 글자 크기 4 묶음

ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal4", {
      scrollTrigger: {
        duration: 100,
        trigger: ".fiv",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal4", {
      scrollTrigger: {
        trigger: ".fiv",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal4", {
      scrollTrigger: {
        duration: 100,
        trigger: ".fiv",
        start: "-150% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal4", {
      scrollTrigger: {
        trigger: ".fiv",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});

//섹션 메인 텍스트 글자 크기 5 묶음

ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal5", {
      scrollTrigger: {
        duration: 100,
        trigger: ".six",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal5", {
      scrollTrigger: {
        trigger: ".six",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal5", {
      scrollTrigger: {
        duration: 100,
        trigger: ".six",
        start: "-150% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal5", {
      scrollTrigger: {
        trigger: ".six",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});

//섹션 메인 텍스트 글자 크기 6 묶음

ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal6", {
      scrollTrigger: {
        duration: 100,
        trigger: ".sev",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal6", {
      scrollTrigger: {
        trigger: ".sev",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal6", {
      scrollTrigger: {
        duration: 100,
        trigger: ".sev",
        start: "-150% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal6", {
      scrollTrigger: {
        trigger: ".sev",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});

//섹션 메인 텍스트 글자 크기 7 묶음
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal7", {
      scrollTrigger: {
        duration: 100,
        trigger: ".eig",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal7", {
      scrollTrigger: {
        trigger: ".eig",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal7", {
      scrollTrigger: {
        duration: 100,
        trigger: ".eig",
        start: "-150% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal7", {
      scrollTrigger: {
        trigger: ".eig",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});

//섹션 메인 텍스트 글자 크기 8 묶음

ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal8", {
      scrollTrigger: {
        duration: 100,
        trigger: ".nine",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal8", {
      scrollTrigger: {
        trigger: ".nine",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal8", {
      scrollTrigger: {
        duration: 100,
        trigger: ".nine",
        start: "-150% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal8", {
      scrollTrigger: {
        trigger: ".nine",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});

//섹션 메인 텍스트 글자 크기 9 묶음

ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".txt_scal9", {
      scrollTrigger: {
        duration: 100,
        trigger: ".ten",
        start: "-100% 0%",
        end: "120% 100%",
        scrub: 1,
        // markers: true,
      },
      y: "100%",
      scale: 2,
    });

    gsap.to(".txt_scal9", {
      scrollTrigger: {
        trigger: ".ten",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },

  // 1000px 미만일 때
  "(max-width: 999px)": function () {
    gsap.from(".txt_scal9", {
      scrollTrigger: {
        duration: 100,
        trigger: ".ten",
        start: "-150% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      y: "50%", // 애니메이션의 시작 위치 조정
      scale: 1.5, // 스케일 조정
    });

    gsap.to(".txt_scal9", {
      scrollTrigger: {
        trigger: ".ten",
        // markers: true,
      },
      y: "0%",
      scale: 1,
    });
  },
});

// ------------------------------------------
// 하단 리그
// 반복할 박스의 총 개수
const totalBoxes = 31; // .box_1부터 .box_30까지

// GSAP 타임라인 생성 및 반복문으로 애니메이션 적용
for (let boxIndex = 1; boxIndex <= totalBoxes; boxIndex++) {
  const boxSelector = `.awards_list_inner .box_${boxIndex} h3`;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: `.awards_list_inner .box_${boxIndex}`, // 각 박스를 기준으로 범위 설정
        start: "0% 80%", // 시작 지점
        end: "100% 80%", // 끝 지점
        // markers: true, // 개발가이드선
        // scrub: 1,
      },
    })
    .fromTo(
      `${boxSelector}:nth-child(1)`,
      {
        y: "100px",
        duration: 1,
      },
      {
        y: "0px",
        duration: 1,
      },
      0.5
    )
    .fromTo(
      `${boxSelector}:nth-child(2)`,
      {
        y: "100px",
        duration: 1,
      },
      {
        y: "0px",
        duration: 1,
      },
      0.7
    )
    .fromTo(
      `${boxSelector}:nth-child(3)`,
      {
        y: "100px",
        duration: 1,
      },
      {
        y: "0px",
        duration: 1,
      },
      0.9
    )
    .fromTo(
      `${boxSelector}:nth-child(4)`,
      {
        y: "100px",
        duration: 1,
      },
      {
        y: "0px",
        duration: 1,
      },
      1
    );
}

// num@
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-200% 50%",
          end: "0% 80%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_1",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%",
          duration: 1,
        },
        0.5
      );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-400% 100%",
          end: "100% 100%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_1",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%", // 또는 다른 적절한 값으로 조정
          duration: 1,
        },
        0.5
      );
  },
});
// -
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-200% 50%",
          end: "0% 80%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_2",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%",
          duration: 1,
        },
        0.5
      );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-400% 100%",
          end: "100% 100%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_2",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%", // 또는 다른 적절한 값으로 조정
          duration: 1,
        },
        0.5
      );
  },
});

// 2
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-200% 50%",
          end: "0% 80%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_3",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%",
          duration: 1,
        },
        0.6
      );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-400% 100%",
          end: "100% 100%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_3",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%", // 또는 다른 적절한 값으로 조정
          duration: 1,
        },
        0.6
      );
  },
});
// 0
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-200% 50%",
          end: "0% 80%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_4",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%",
          duration: 1,
        },
        0.7
      );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-400% 100%",
          end: "100% 100%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_4",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%", // 또는 다른 적절한 값으로 조정
          duration: 1,
        },
        0.7
      );
  },
});
// 2
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-200% 50%",
          end: "0% 80%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_5",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%",
          duration: 1,
        },
        0.8
      );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-400% 100%",
          end: "100% 100%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_5",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%", // 또는 다른 적절한 값으로 조정
          duration: 1,
        },
        0.8
      );
  },
});
// 3
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-200% 50%",
          end: "0% 80%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_6",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%",
          duration: 1,
        },
        0.9
      );
  },

  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".num",
          start: "-400% 100%",
          end: "100% 100%",
          // markers: true, // 개발 가이드 선
          // scrub: 1, // 부드러운 스크러빙
        },
      })
      .fromTo(
        ".num_6",
        {
          y: "0%",
          duration: 1,
        },
        {
          y: "-100%", // 또는 다른 적절한 값으로 조정
          duration: 1,
        },
        0.9
      );
  },
});
// 메인 글씨 위에서 아래로 선 움직였을때 무빙
// 애니메이션을 생성하는 함수
function createScrollAnimation(selector) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".loop-text-holder",
        start: "-30% 0%",
        end: "10% 15%",
        // markers: true, // 개발가이드선
        scrub: 1,
      },
    })
    .fromTo(
      selector,
      {
        y: "0%",
        duration: 1,
        ease: "sine.out",
      },
      {
        y: "-40%",
        duration: 1,
        ease: "sine.out",
      },
      0.5
    );
}

// 애니메이션을 적용할 각 요소에 대해 함수 호출
createScrollAnimation(".loop-auto-size");
createScrollAnimation(".loop-auto-size2");
