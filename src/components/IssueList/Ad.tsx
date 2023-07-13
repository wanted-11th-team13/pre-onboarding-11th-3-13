/** @jsxImportSource @emotion/react */
import { adImg, adTag } from '../../pages/IssueList/IssueListCSS';

export default function Ad() {
  return (
    <div css={adImg}>
      <img
        style={{ width: '100%' }}
        src="https://images.unsplash.com/photo-1495783436593-3015f0bc6f56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFkdmVydGlzaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
        alt="광고 이미지"
      />
      <div css={adTag}>ad</div>
    </div>
  );
}
