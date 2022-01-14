/**
 *
 * @param lyric [00:00.000] 作词 : 小鱼萝莉\n[00:00.620] 作曲 : 黄诗扶/姜雨涵\n[00:01.240] 编曲 : 李大白\n[00:01.861]文案故事：左木修\n[00:02.807]\n[00:04.759]/题记/\n[00:05.747]我常想起人们说的 ————\n[00:06.965]“一日不见，如隔三秋。”\n}
 */

const reg = /\[(\d{2}):(\d{2}).(\d{2,3})\]/

export function parseLyric(lyric) {
  const lrcLines = lyric.split('\n')
  let lrcs = []
  lrcLines.forEach((item) => {
    const times = reg.exec(item)
    if (!times) {
      return
    }
    const time1 = times[1] * 60 * 1000
    const time2 = times[2] * 1000
    const time3 = times[3].length === 3 ? times[3] * 1 : times[3] * 10
    const content = item.replace(reg, '').trim()
    let lrc = {
      time: time1 + time2 + time3,
      content
    }
    lrcs.push(lrc)
  })
  return lrcs
}
