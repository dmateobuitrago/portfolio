import styled from "styled-components";

const Divider = styled.div`
    width:100%;
    height: ${(props) =>
        props.size === "small"
          ? props.theme.baseUnit4
          : props.theme.baseUnit8};
    }
;`


export default (props) => <Divider size={props.size} className={props.className}></Divider>
