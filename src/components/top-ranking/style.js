import styled from 'styled-components'

export const RankingWrapper = styled.div`
  a {
    color: #000;
  }
  .top {
    display: flex;
    width: 230px;
    height: 120px;
    padding: 20px 0 0 20px;
    .cover {
      width: 80px;
      height: 80px;
    }
    .info {
      margin: 6px 0 0 10px;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .list {
    .item {
      display: flex;
      align-items: center;
      height: 32px;
      padding-left: 15px;
      font-size: 12px;
      position: relative;
      .index {
        width: 35px;
        text-align: center;
        font-size: 16px;
        height: 32px;
        line-height: 32px;
      }
      &:nth-child(-n + 3) {
        .index {
          color: #c10d0c;
        }
      }
      .name {
        flex: 1;
        height: 32px;
        width: 80px;
        line-height: 32px;
      }
      .operate {
        display: flex;
        align-items: center;
        display: none;
        width: 82px;
        position: absolue;
        top: 0;
        right: 0;
        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .addto {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .favor {
          background-position: -297px -268px;
        }
      }
      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }
  .more {
    height: 32px;
    margin-right: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
  }
`
