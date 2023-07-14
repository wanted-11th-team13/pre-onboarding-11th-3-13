/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const TextAlign = css`
  text-align: center;
  margin-top: 200px;
  font-size: 24px;
`;

const goHomeBtn = css`
  outline: none;
  border: none;
  background-color: #000000;
  color: #ffffff;
  padding: 10px 30px;
  margin-top: 30px;
  border-radius: 10px;
  cursor: pointer;
`;

export default function NotFound() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };
  return (
    <div css={TextAlign}>
      <h1>NotFound</h1>
      <div>페이지를 찾을 수 없습니다.</div>
      <button css={goHomeBtn} onClick={goToHome}>
        home
      </button>
    </div>
  );
}
