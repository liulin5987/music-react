import styled from "styled-components";

export const MRAnchorWrapper = styled.div`
background: #fff;
padding: 20px;
.title {
  font-size: 12px;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
.anchor {
  display: flex;
  margin-bottom: 10px;
  .avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .info {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 12px;
    }
    .desc {
      font-size: 12px;
      color: #666;
    }
  }
}
`