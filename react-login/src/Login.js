import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";

const User = {
  email: "test@example.com",
  pw: "test12345@@",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [emailValid, setEmailVaild] = useState(false);
  const [pwdVaild, setPwdVaild] = useState(false);

  const [notAllow, setNowAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regex.test(email)) {
      setEmailVaild(true);
    } else {
      setEmailVaild(false);
    }
  };

  const handlePwd = (e) => {
    setPwd(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    if (regex.test(pwd)) {
      setPwdVaild(true);
    } else {
      setPwdVaild(false);
    }
  };

  const onClickUser = () => {
    if (email === User.email && pwd === User.pw) {
      alert("로그인 성공!");
    } else {
      alert("로그인 실패");
    }
  };

  useEffect(() => {
    if (emailValid && pwdVaild) {
      setNowAllow(false);
      return;
    }
    setNowAllow(true);
  }, [emailValid, pwdVaild]);

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>

      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="example@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {/* 이메일 유효성검사 */}
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>
        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="영문,숫자,특수문자 포함 8글자 이상"
            value={pwd}
            onChange={handlePwd}
          />
        </div>
        <div className="errorMessageWrap">
          {/* 비밀번호 유효성검사 */}
          {!pwdVaild && pwd.length > 0 && (
            <div>영문,숫자,특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
        <button
          onClick={onClickUser}
          disabled={notAllow}
          className="bottomButton"
        >
          확인
        </button>
      </div>
    </div>
  );
}
