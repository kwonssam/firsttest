document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const resultBox = document.getElementById("result");
  const googleIdSpan = document.getElementById("googleId");
  const googlePwSpan = document.getElementById("googlePw");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // 기본 폼 제출 방지

    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();

    if (!studentId || !studentName) {
      alert("학번과 이름을 모두 입력해주세요.");
      return;
    }

    // 실제 서버와 통신할 경우 이렇게 사용
    /*
    try {
      const response = await fetch("/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId, studentName }),
      });

      if (!response.ok) throw new Error("서버 오류 발생");

      const data = await response.json();

      if (data.success) {
        googleIdSpan.textContent = data.googleId;
        googlePwSpan.textContent = data.googlePw;
        resultBox.classList.remove("hidden");
      } else {
        alert("해당 정보를 찾을 수 없습니다.");
        resultBox.classList.add("hidden");
      }
    } catch (error) {
      console.error("에러:", error);
      alert("조회 중 오류가 발생했습니다.");
    }
    */

    // 임시 테스트용 (서버 없이 작동 확인용)
    if (studentId === "202301" && studentName === "홍길동") {
      googleIdSpan.textContent = "hong2023@g.example.com";
      googlePwSpan.textContent = "abcd1234!";
      resultBox.classList.remove("hidden");
    } else {
      alert("해당 정보를 찾을 수 없습니다.");
      resultBox.classList.add("hidden");
    }
  });
});
