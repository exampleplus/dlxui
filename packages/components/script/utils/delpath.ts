import fs from 'fs'
import { resolve } from 'path'
import { pkgPath } from './paths'
// 保留的文件
const stayFile = ['package.json', 'README.md']

// 删除指定路径下的文件
const delPath = (path: string) => {
  let files: string[] = []
  // 判断路径是否存在
  if (fs.existsSync(path)) {
    // 读取路径下的所有文件
    files = fs.readdirSync(path)
    // 遍历文件
    files.forEach(async (file) => {
      // 获取当前文件的路径
      const curPath = resolve(path, file)
      // 判断当前文件是否为文件夹
      if (fs.statSync(curPath).isDirectory()) {
        // 如果文件夹不是node_modules，则递归删除文件夹
        if (file != 'node_modules') await delPath(curPath)
        // 删除文件夹
        delPath(curPath)
      } else {
        // 如果文件不在保留文件列表中，则删除文件
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath)
        }
      }
    })
    // 删除路径
    fs.rmdirSync(path)
  }
}
export default delPath
