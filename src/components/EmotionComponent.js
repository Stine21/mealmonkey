/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const EmotionComponent = ({large}) => {

    const style = css`
        background-color: turquoise;
        color: navy;
        padding: ${large ? "2em 0 " : "0"};
        &:hover{
            background-color: seagreen;
    }
    `
    const styleHeadline = css`
        background-color: darkviolet;
        color: ivory;
    `
    
    return ( 
        <div css={style}>
            <h1 css={styleHeadline}>Hej fra emotion</h1>
            <p>Det her er også styling</p>
        </div>
     );
}
 
export default EmotionComponent;