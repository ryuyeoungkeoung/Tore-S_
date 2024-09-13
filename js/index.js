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

//
//
//
//
//

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
//
//
//
//

// 로딩창
//
//
//
//
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

// 섹션2 영상 1 묶음

gsap.fromTo(
  ".poto1",
  {
    //시작할때 모습
    rotate: -30,
    x: "100%",
    y: "30%",
    scale: "1",
  },
  {
    //끝났을때 모습
    duration: 15,
    x: "-365%",
    y: "-30%",
    rotation: 30,
    scrollTrigger: {
      trigger: ".two", //객체기준범위
      start: "-30% 0%", //시작 지점 앞은 기준점 뒤는 바
      end: "200% 80%", //끝 지점
      scrub: 1, //부드러운 스크러빙
      scale: "0.5",
      // markers: true, //개발가이드선
    },
  }
);
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

//섹션 메인 텍스트 글자 크기 1 묶음
gsap.from(".txt_scal11", {
  scrollTrigger: {
    duration: 100,
    trigger: ".two_sec", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-50% 0%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },

  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal11", {
  scrollTrigger: {
    trigger: ".two_sec",
    // markers: false,
  },
  y: "0%",
  scale: 1,
});

// 2
//

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".poto2",
  {
    //시작할때 모습
    rotate: -30,
    x: "150%",
    y: "30%",
  },
  {
    //끝났을때 모습
    duration: 15,
    x: "-190%",
    y: "-30%",
    rotation: 15,
    scrollTrigger: {
      trigger: ".three", //객체기준범위
      start: "-100% 0%", //시작 지점
      end: "200% 80%", //끝 지점 앞 150만큼 뒤 50 증가
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 1, //부드러운 스크러빙
      scale: "0.5",
      // markers: true, //개발가이드선
    },
  }
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

//섹션 메인 텍스트 글자 크기 2 묶음
gsap.from(".txt_scal2", {
  scrollTrigger: {
    duration: 50,
    trigger: ".three", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-50% 0%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },
  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal2", {
  scrollTrigger: {
    trigger: ".three",
    markers: false,
  },
  y: "0%",
  scale: 1,
});

//3

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".poto3",
  {
    //시작할때 모습
    rotate: -30,
    x: "150%",
    y: "30%",
  },
  {
    //끝났을때 모습
    duration: 15,
    x: "-190%",
    y: "-30%",
    rotation: 10,
    scrollTrigger: {
      trigger: ".for", //객체기준범위
      start: "-100% 0%", //시작 지점
      end: "200% 80%", //끝 지점 앞 150만큼 뒤 50 증가
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 1, //부드러운 스크러빙
      scale: 0.5,
      markers: false, //개발가이드선
    },
  }
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
//섹션 메인 텍스트 글자 크기 3 묶음
gsap.from(".txt_scal3", {
  scrollTrigger: {
    duration: 50,
    trigger: ".for", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-60% 10%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },
  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal3", {
  scrollTrigger: {
    trigger: ".for",
    markers: false,
  },
  y: "0%",
  scale: 1,
});
// 4

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".poto4",
  {
    //시작할때 모습
    rotate: -30,
    x: "190%",
    y: "30%",
  },
  {
    //끝났을때 모습
    duration: 10,
    x: "-190%",
    y: "-30%",
    rotation: 15,
    scrollTrigger: {
      trigger: ".fiv", //객체기준범위
      start: "-100% 0%", //시작 지점
      end: "200% 80%", //끝 지점 앞 150만큼 뒤 50 증가
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 1, //부드러운 스크러빙
      scale: 0.5,
      markers: false, //개발가이드선
    },
  }
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
//섹션 메인 텍스트 글자 크기 4 묶음
gsap.from(".txt_scal4", {
  scrollTrigger: {
    duration: 50,
    trigger: ".fiv", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-60% 10%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },
  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal4", {
  scrollTrigger: {
    trigger: ".fiv",
    markers: false,
  },
  y: "0%",
  scale: 1,
});
// 5
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".poto5",
  {
    //시작할때 모습
    rotate: -30,
    x: "190%",
    y: "30%",
  },
  {
    //끝났을때 모습
    duration: 10,
    x: "-190%",
    y: "-30%",
    rotation: 15,
    scrollTrigger: {
      trigger: ".six", //객체기준범위
      start: "-100% 0%", //시작 지점
      end: "200% 80%", //끝 지점 앞 150만큼 뒤 50 증가
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 1, //부드러운 스크러빙
      scale: 0.5,
      markers: false, //개발가이드선
    },
  }
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
//섹션 메인 텍스트 글자 크기 5 묶음
gsap.from(".txt_scal5", {
  scrollTrigger: {
    duration: 50,
    trigger: ".six", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-60% 0%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },
  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal5", {
  scrollTrigger: {
    trigger: ".six",
    markers: false,
  },
  y: "0%",
  scale: 1,
});
// 6

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".poto6",
  {
    //시작할때 모습
    rotate: -30,
    x: "120%",
    y: "20%",
  },
  {
    //끝났을때 모습
    duration: 10,
    x: "-190%",
    y: "-30%",
    rotation: 15,
    scrollTrigger: {
      trigger: ".sev", //객체기준범위
      start: "-100% 0%", //시작 지점
      end: "200% 80%", //끝 지점 앞 150만큼 뒤 50 증가
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 1, //부드러운 스크러빙
      scale: 0.5,
      markers: false, //개발가이드선
    },
  }
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

//섹션 메인 텍스트 글자 크기 6 묶음
gsap.from(".txt_scal6", {
  scrollTrigger: {
    duration: 50,
    trigger: ".sev", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-60% 0%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },
  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal6", {
  scrollTrigger: {
    trigger: ".sev",
    markers: false,
  },
  y: "0%",
  scale: 1,
});

// 7

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".poto7",
  {
    //시작할때 모습
    rotate: -30,
    x: "120%",
    y: "20%",
  },
  {
    //끝났을때 모습
    duration: 10,
    x: "-190%",
    y: "-30%",
    rotation: 15,
    scrollTrigger: {
      trigger: ".eig", //객체기준범위
      start: "-100% 0%", //시작 지점
      end: "200% 80%", //끝 지점 앞 150만큼 뒤 50 증가
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 1, //부드러운 스크러빙
      scale: 0.5,
      // markers: true, //개발가이드선
    },
  }
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
//섹션 메인 텍스트 글자 크기 7 묶음
gsap.from(".txt_scal7", {
  scrollTrigger: {
    duration: 50,
    trigger: ".eig", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-60% 0%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },
  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal7", {
  scrollTrigger: {
    trigger: ".eig",
    markers: false,
  },
  y: "0%",
  scale: 1,
});

// 8
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".poto8",
  {
    //시작할때 모습
    rotate: -30,
    x: "120%",
    y: "20%",
  },
  {
    //끝났을때 모습
    duration: 10,
    x: "-190%",
    y: "-30%",
    rotation: 15,
    scrollTrigger: {
      trigger: ".nine", //객체기준범위
      start: "-100% 0%", //시작 지점
      end: "200% 80%", //끝 지점 앞 150만큼 뒤 50 증가
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 1, //부드러운 스크러빙
      scale: 0.5,
      // markers: true, //개발가이드선
    },
  }
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
//섹션 메인 텍스트 글자 크기 8 묶음
gsap.from(".txt_scal8", {
  scrollTrigger: {
    duration: 50,
    trigger: ".nine", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-60% 0%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },
  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal8", {
  scrollTrigger: {
    trigger: ".nine",
    markers: false,
  },
  y: "0%",
  scale: 1,
});
// 9
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".poto9",
  {
    //시작할때 모습
    rotate: -30,
    x: "120%",
    y: "20%",
  },
  {
    //끝났을때 모습
    duration: 10,
    x: "-190%",
    y: "-30%",
    rotation: 15,
    scrollTrigger: {
      trigger: ".ten", //객체기준범위
      start: "-100% 0%", //시작 지점
      end: "200% 80%", //끝 지점 앞 150만큼 뒤 50 증가
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 1, //부드러운 스크러빙
      scale: 0.5,
      // markers: true, //개발가이드선
    },
  }
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
//섹션 메인 텍스트 글자 크기 9 묶음
gsap.from(".txt_scal9", {
  scrollTrigger: {
    duration: 50,
    trigger: ".ten", //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-60% 0%", //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "100% 100%", //스크롤 트리거의 끝점 설정.
    scrub: 1, //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true, //기준점을 화면에 표시할지 설정.
  },
  y: "100%",
  scale: 2,
});
gsap.to(".txt_scal9", {
  scrollTrigger: {
    trigger: ".ten",
    markers: true,
  },
  y: "0%",
  scale: 1,
});

//
// 하단 리그
// 박스1에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_1", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_1 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_1", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_1 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_1", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_1 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_1", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_1 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
//
// 지피티
// 박스2에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_2", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_2 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_2", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_2 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_2", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_2 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_2", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_2 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_2", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_2 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_2", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_2 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스3에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_3", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_3 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_3", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_3 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_3", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_3 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_3", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_3 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );
// 박스4에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_4", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_4 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_4", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_4 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_4", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_4 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_4", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_4 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );
// 박스5에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_5", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_5 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_5", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_5 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_5", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_5 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_5", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_5 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스6에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_6", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_6 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_6", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_6 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_6", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_6 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_6", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_6 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스7에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_7", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_7 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_7", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_7 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_7", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_7 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_7", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_7 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스8에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_8", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_8 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_8", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_8 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_8", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_8 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_8", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_8 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스9에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_9", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_9 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_9", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_9 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_9", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_9 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_9", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_9 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스10에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_10", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_10 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_10", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_10 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_10", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_10 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_10", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_10 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스11에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_11", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_11 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_11", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_11 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_11", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_11 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_11", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_11 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스12에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_12", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_12 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_12", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_12 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_12", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_12 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_12", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_12 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스13에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_13", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_13 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_13", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_13 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_13", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_13 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_13", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_13 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스14에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_14", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_14 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_14", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_14 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_14", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_14 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_14", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_14 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스15에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_15", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_15 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_15", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_15 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_15", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_15 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_15", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_15 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스16에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_16", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_16 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_16", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_16 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_16", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_16 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_16", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_16 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스17에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_17", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_17 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_17", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_17 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_17", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_17 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_17", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_17 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스17에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_17", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_17 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_17", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_17 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_17", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_17 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_17", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_17 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스18에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_18", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_18 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_18", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_18 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_18", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_18 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_18", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_18 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );

// 박스19에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_19", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_19 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_19", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_19 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_19", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_19 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_19", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_19 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );

// 박스20에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_20", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_20 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_20", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_20 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_20", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_20 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_20", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_20 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );

// 박스21에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_21", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_21 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_21", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_21 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_21", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_21 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_21", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_21 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );

// 박스22에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_22", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_22 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_22", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_22 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_22", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_22 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_22", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_22 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스23에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_23", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_23 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_23", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_23 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_23", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_23 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_23", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_23 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스24에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_24", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_24 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_24", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_24 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_24", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_24 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_24", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_24 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );

// 박스25에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_25", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_25 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_25", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_25 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_25", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_25 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_25", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_25 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스26에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_26", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_26 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_26", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_26 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_26", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_26 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_26", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_26 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스27에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_27", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_27 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_27", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_27 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_27", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_27 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_27", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_27 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );

// 박스28에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_28", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_28 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_28", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_28 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_28", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_28 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_28", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_28 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스29에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_29", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_29 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_29", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_29 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_29", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_29 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_29", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_29 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );
// 박스30에 첫번째 h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_30", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_30 h3:first-child",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.5
  );
// 2h2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_30", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_30 h3:nth-child(2)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.7
  );
// 2h3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_30", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_30 h3:nth-child(3)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    0.9
  );

// 2h4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".awards_list_inner .box_30", //객체기준범위
      start: "0% 80%", //시작 지점
      end: "100% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".awards_list_inner .box_30 h3:nth-child(4)",
    {
      // 시작
      y: "100px",
      duration: 1,
    },
    {
      // 끝
      y: "0px",
      duration: 1,
    },
    1
  );

//
//
//
//
//
// num
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".num", //객체기준범위
      start: "-200% 50%", //시작 지점
      end: "0% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".num_1",
    {
      // 시작
      y: "0%",
      duration: 1,
    },
    {
      // 끝
      y: "-100%",
      duration: 1,
    },
    0.5
  );
// -
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".num", //객체기준범위
      start: "-200% 50%", //시작 지점
      end: "0% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".num_2",
    {
      // 시작
      y: "0%",
      duration: 1,
    },
    {
      // 끝
      y: "-140%",
      duration: 1,
    },
    0.7
  );
// 2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".num", //객체기준범위
      start: "-200% 50%", //시작 지점
      end: "0% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".num_3",
    {
      // 시작
      y: "0%",
      duration: 1,
    },
    {
      // 끝
      y: "-140%",
      duration: 1,
    },
    0.9
  );
// 0
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".num", //객체기준범위
      start: "-200% 50%", //시작 지점
      end: "0% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".num_4",
    {
      // 시작
      y: "0%",
      duration: 1,
    },
    {
      // 끝
      y: "-140%",
      duration: 1,
    },
    1.1
  );
// 2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".num", //객체기준범위
      start: "-200% 50%", //시작 지점
      end: "0% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".num_5",
    {
      // 시작
      y: "0%",
      duration: 1,
    },
    {
      // 끝
      y: "-140%",
      duration: 1,
    },
    1.3
  );
// 3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".num", //객체기준범위
      start: "-200% 50%", //시작 지점
      end: "0% 80%",
      // markers: true, //개발가이드선
      // scrub: 1,
    },
  })
  .fromTo(
    ".num_6",
    {
      // 시작
      y: "0%",
      duration: 1,
    },
    {
      // 끝
      y: "-140%",
      duration: 1,
    },
    1.4
  );
// 메인 글씨 위에서 아래로 선 움직였을때 무빙
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".loop-text-holder", //객체기준범위
      start: "-30% 0%", //시작 지점
      end: "10% 15%",
      // markers: true, //개발가이드선
      scrub: 1,
    },
  })
  .fromTo(
    ".loop-auto-size",
    {
      // 시작
      y: "0%",
      duration: 1,
      ease: "sine.out",
    },
    {
      // 끝
      y: "-40%",
      duration: 1,
      ease: "sine.out",
    },
    0.5
  );
// 메인 글씨 위에서 아래로 칠  움직였을때 무빙
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".loop-text-holder", //객체기준범위
      start: "-30% 0%", //시작 지점
      end: "10% 15%",
      // markers: true, //개발가이드선
      scrub: 1,
    },
  })
  .fromTo(
    ".loop-auto-size2",
    {
      // 시작
      y: "0%",
      duration: 1,
      ease: "sine.out",
    },
    {
      // 끝
      y: "-40%",
      duration: 1,
      ease: "sine.out",
    },
    0.5
  );
