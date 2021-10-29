import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width + 'px'};
  cursor: pointer;
  /* height: 150px; */
  .album-top {
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.size + 'px'};
    position: relative;
    margin-top: 15px;
    .album-cover {
      width: ${(props) => props.size + 'px'};
      height: ${(props) => props.size + 'px'};
    }
    .album-cloak {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
    }
  }
  .album-bottom {
    font-size: 12px;
    width: ${(props) => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`
