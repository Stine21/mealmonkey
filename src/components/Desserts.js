/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Desserts = () => {

    const style = css`
        background-image: url('https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg');
        background-size: cover;
        width: 375px;
        height: 193px;
        display: flex;
    `
    const styleHeadline = css `
        color: white;
    `
    const styleRating = css `
    content: icon;
    color: #FC6011;
    `
    const styleParagraf = css ` 
    
    color: blue;
    `
  

    return ( 
        <div css={style}>
        <h1 css={styleHeadline}>Key Lime Pie</h1>
        <p css={[styleRating, styleParagraf]}>⭐4,9</p>
        <p css={styleParagraf}>Pie by Tella</p>
        <p css={styleParagraf}>Desserts</p>
        </div>
     );
}
 
export default Desserts;